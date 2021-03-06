export interface AppState{
  users: IUser[],
  questions: IQuestion[],
  responses: IResponse[]
}

export interface IUser {
  id: string,
  email: string
}

export interface IQuestion {
  id: string,
  question: string,
  answers: string[]
}

export interface IResponse {
  userId: string,
  questionId: string,
  answeredIndex: number
}

