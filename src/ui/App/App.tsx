import React from 'react';
import {WrapperLayout} from "./components/WrapperLayout"
import {Heading} from './components/Heading'
import {AddTodoForm} from  "../components/AddTodoForm";
import {TodoList} from  "../components/TodoList";
import './App.css';

function App() {
  return (
    <div className="App">
      <WrapperLayout>
        <Heading tag="h1" className="main-title" >Todo App</Heading>
        <AddTodoForm />
        <TodoList />
      </WrapperLayout>
    </div>
  );
}

export {App};