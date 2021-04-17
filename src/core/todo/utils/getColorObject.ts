import {Color} from '../../../ui/Store/modules/todo/types/todo';

const getColorObject = (colors: Color[], colorSelected: string): Color => {
    const colorObject = colors.find((color: Color) =>  color.name === colorSelected)!;
    return colorObject;
}

export {getColorObject}