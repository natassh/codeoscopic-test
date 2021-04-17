import {combineReducers} from 'redux';
import { todoReducer } from './modules/todo/todoReducer';

const rootReducers = combineReducers({
  todo: todoReducer,
});
export { rootReducers };

export type RootState = ReturnType<typeof rootReducers>