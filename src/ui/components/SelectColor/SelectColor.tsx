import React, {useEffect, useState} from 'react';
import { getColors } from '../../../core/todo/services/getColors';
import { getColorObject } from '../../../core/todo/utils/getColorObject';
import {Color} from '../../Store/modules/todo/types/todo';
import './SelectColor.css';

const SelectColor: React.FC<SelectColorProps> = ({ onChange}) => {

  const [colors, setColors] = useState<Color[]>([]);
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

  useEffect(() => {
    const colorObject = getColorObject(colors, colorSelected); 
    onChange(colorObject);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorSelected])


  const handleOnChangeColor = (event: React.ChangeEvent<HTMLSelectElement> ) => {
    setColorSelected(event.target.value)
    
  };

  return (
    <select defaultValue={colorSelected} onChange={handleOnChangeColor}>
        {colors.map((color: Color)=> {
          return <option value={color.name} key={color.hex}>{color.name}</option>
        })}
    </select>
  );
};

export {SelectColor};

type SelectColorProps = {
  onChange: (colorObject: Color) => void
}