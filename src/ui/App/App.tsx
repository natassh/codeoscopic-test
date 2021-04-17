import React from 'react';
import {Heading} from './components/Heading'
import {AddTodoForm} from  "../Store/modules/todo/components/AddTodoForm";
import {TodoList} from  "../Store/modules/todo/components/TodoList";
import './App.css';

function App() {
  return (
    <div className="App">
      <Heading tag="h1" className="main-title" >Todo App</Heading>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export {App};