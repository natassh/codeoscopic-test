import {todoReducer} from '../todoReducer';
import * as types from '../actionTypes';

describe('todos reducer', () => {

    const initialState = [
        {
            id: 1,
            text: "First todo",
            color: {
                hex: "#000",
                name: "black"
            }
        },
        {
            id: 2,
            text: "Second todo",
            color: {
                hex: "#fff",
                name: "white"
            }
        }
    ] 

    it('should return empty array as initial state', () => {

        // Assert
        expect(todoReducer(undefined, {})).toEqual([]);
    })

    it('should handle ADD_TODO', () => {
        
        // Arrange 
        const todo3 = {
            id: 3,
            text: "New todo",
            color: {
                hex: "#ffa500",
                name: "orange"
            }
        }

        // Act      
        const state = todoReducer(initialState, {
            type: types.ADD_TODO,
            payload: todo3
        });

        // Assert
        expect(state).toHaveLength(3)
        
    })

    it('should return the array with the todo id 2 removed', () => {

        // Act 
        const state = todoReducer(initialState, {
            type: types.DELETE_TODO,
            payload: 2
        });

        // Assert
        expect(state).toHaveLength(1)
    })

     
})