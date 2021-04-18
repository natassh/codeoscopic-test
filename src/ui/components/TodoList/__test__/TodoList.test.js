import {TodoList} from '../TodoList';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import  * as useSelector from 'react-redux';
import  * as useDispatch from 'react-redux';

describe('TodoList', () => {
    const todo1 = {
        "id":  1,
        "text": "Todo1",
        "color": {
            "hex": "453f3c",
            "name": "tavern"
        }
    }
    const todo2 = {
        "id":  2,
        "text": "Todo2",
        "color": {
            "hex": "000000",
            "name": "black"
        }
    }
    
    const todos = [todo1, todo2];

    let mockUseSelector = jest.spyOn(useSelector, 'useSelector');
    const mockuseDispatch = jest.spyOn(useDispatch, 'useDispatch');

    const mockDispatch = jest.fn();
    beforeEach(() => {
        mockUseSelector.mockReturnValue(todos);
        mockuseDispatch.mockReturnValue(mockDispatch);
    })
    
    it('should return an array of todos', () => {
        // Act
        render(<TodoList/>)

        // Assert
        expect(screen.getAllByText("Todo2").length).toBe(1)

    })
    it('should dispatch be executed when we press the delete button', () => {
        
        // Act
        render(<TodoList/>);

        const buttonDelete = screen.getAllByText('Eliminar');
        userEvent.click(buttonDelete[0]);

        // Assert
        expect(mockDispatch).toHaveBeenCalled()

    })
})