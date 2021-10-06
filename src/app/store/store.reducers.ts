import { AppState } from './store.interfaces';
import { createReducer } from '@ngrx/store';

const initialState: AppState = {
  users: [
    {id: '1', email: 'test@gmail.com'},
    {id: '2', email: 'test2@gmail.com'},
    {id: '3', email: 'test3@gmail.com'},
    {id: '4', email: 'test4@gmail.com'}
  ],
  questions: [
    {id: '1', question: 'Which smartphone do you own?', answers: ['Android', 'iPhone', 'Windows', 'Other']},
    {id: '2', question: 'How do you travel most regularly?', answers: ['By car', 'By public transport', 'By bicycle', 'Other']}
  ],
  responses: [
    {userId: '1', questionId: '1', answeredIndex: 1},
    {userId: '2', questionId: '1', answeredIndex: 1},
    {userId: '2', questionId: '2', answeredIndex: 1},
    {userId: '1', questionId: '2', answeredIndex: 0},
    {userId: '3', questionId: '1', answeredIndex: 1},
    {userId: '3', questionId: '2', answeredIndex: 1},
    {userId: '4', questionId: '1', answeredIndex: 1},
    {userId: '4', questionId: '2', answeredIndex: 0},
  ]
}

export const storeReducer = createReducer(
  initialState
)
