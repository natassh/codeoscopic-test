import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../Store/modules/todo/actions';
import {Color} from '../../Store/modules/todo/types/todo';
import Input from '../../App/components/Input';
import './AddTodoForm.css';
import { Select } from '../Select';

const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState<string>('');
  const [colorObject, setColorObject] = useState<Color>({hex: "#fff",name: "red"})

  const handleOnChangeTextTodo = (todoText:string) => {
    setTodoText(todoText);
  };

  const handleOnchangeSelectValue = (color: Color): void => {
    setColorObject(color);
  }

  const clearForm = () => {
    setTodoText('');
  };

  const handleOnSubmitTodo = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(addTodo(todoText, colorObject));
    clearForm();
  }

  return (
    <form className="AddTodoForm" onSubmit={handleOnSubmitTodo}>
      <Input
        title="Create todo"
        onChange={handleOnChangeTextTodo} 
        className="AddTodoForm__Input"
        type="text"
        value={todoText}
        placeholder = "Create todo"
       />
       <Select
        onChange={handleOnchangeSelectValue}
       />
        <button className="AddTodoForm__Button-submit">Add</button>
    </form>
  );
};

export {AddTodoForm};
