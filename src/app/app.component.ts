import { Component, OnInit } from '@angular/core';
import { IResponse, IUser } from './store/store.interfaces';
import { Store } from '@ngrx/store';
import { responsesSelector, usersSelector } from './store/store.selectors';
import { Observable } from 'rxjs';
import { filter, mergeMap, scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-task';
  users$: Observable<IUser[]>;
  users: IUser[];
  rightResponses$: Observable<IResponse[]>;
  rightResponses: IResponse[];
  amount: number;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.select(usersSelector).subscribe(users => this.users = users);
    this.store.select(responsesSelector)
      .pipe(
        mergeMap(item => item),
        filter(response => {
          return response.questionId == '1' && response.answeredIndex == 1 || response.questionId == '2' && response.answeredIndex == 0
        }),
        scan((arr, item) => [...arr, item], [])
      ).subscribe(responses => this.rightResponses = responses);
    this.calculate();
  }

  private calculate(){
    this.amount = this.users.filter(user => {
      return this.rightResponses.filter(response => (response.userId == user.id && response.questionId == '1')).length > 0 && this.rightResponses.filter(response => (response.userId == user.id && response.questionId == '2')).length > 0
    }).length
  }
}
