import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../Store/rootReducers';
import {Todo} from '../../../../modules/todo/types/todo';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../../actions';
import {Heading} from '../../../../../App/components/Heading'

import './TodoList.css';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const todoList = useSelector( (state: RootState) => state.todo);

  const handleDeleteTodo = (id:number): void => {
     dispatch(deleteTodo(id));
  }
  
  return todoList && (
    <article className="TodoList">
    <Heading tag="h2" className="main-title" >Todo List</Heading>
    <ul>
      {
        todoList.map((todo: Todo) => {
          const style = {
            background: `#${todo.color.hex}`
          };
          console.log(style)
          return (
            <li key={todo.id} style={style}>
              <p>{todo.text}</p>
              <button onClick={() => handleDeleteTodo(todo.id)}>Eliminar</button>
            </li>
          )
        })
      }
    </ul>
    </article>
  );
};

export {TodoList};
