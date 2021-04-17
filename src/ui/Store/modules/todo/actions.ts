import { ADD_TODO, DELETE_TODO } from './actionTypes';
import { Color } from './types/todo';
import { AddTodoAction, DeleteTodoAction } from './types/actions';

export const addTodo = (text:string, color: Color): AddTodoAction => ({
    type: ADD_TODO,
    payload: {id:new Date().getTime(), text, color}
})

export const deleteTodo = (id:number): DeleteTodoAction => ({
    type: DELETE_TODO,
    payload: id
})


