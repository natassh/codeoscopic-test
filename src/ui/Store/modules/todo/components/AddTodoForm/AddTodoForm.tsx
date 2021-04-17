import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../actions';
import {Color} from '../../types/todo';
import { getColors } from '../../../../../../core/todo/services/getColors';
import { getColorObject } from '../../../../../../core/todo/utils/getColorObject';
import Input from '../../../../../App/components/Input';
import './AddTodoForm.css';

const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState<string>('');
  const [colors, setColors] = useState<Color[]>([]);
  console.log('colors: ', colors)
  const [colorSelected, setColorSelected] = useState<string>('')

  useEffect(() => {
    const initColors = async () => {
      const colors: Color[] = await getColors();
      setColors(colors);
    }
    initColors()
  }, []);

  useEffect(() => {
    if(colors.length > 0) {
      setColorSelected(colors[0].name)
    }
  }, [colors])

  const handleOnChangeTextTodo = (todoText:string) => {
    setTodoText(todoText);
  };

  const handleOnChangeColor = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setColorSelected(event.target.value);
  }
  const clearForm = () => {
    setTodoText('');
  };

  const handleOnSubmitTodo = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const colorObject = getColorObject(colors, colorSelected);
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
        <select defaultValue={colorSelected} onChange={handleOnChangeColor}>
            {colors.map((color: Color)=> {
              return <option value={color.name} key={color.hex}>{color.name}</option>
            })}
        </select>
        <button className="AddTodoForm__Button-submit">Add</button>
    </form>
  );
};

export {AddTodoForm};
