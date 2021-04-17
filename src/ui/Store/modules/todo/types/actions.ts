import { Todo } from './todo';

export type AddTodoAction = {
    type: string;
    payload: Todo;
}
export type DeleteTodoAction = {
    type: string;
    payload: number;
}
export type TodoActions = AddTodoAction | DeleteTodoAction;
