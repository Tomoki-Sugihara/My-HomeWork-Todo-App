import { initialState } from '../constant';
import {
   CREATE_TODO_ITEM,
   DELETE_TODO_ITEM,
   TOGGLE_IS_IMPORTANT,
   TOGGLE_IS_DONE,
} from '../actions/index';

const todoList = (state = [], action) => {
   switch (action.type) {
      case CREATE_TODO_ITEM: {
         const newTodoItem = {
            title: action.title,
            isImportant: action.isImportant,
            subjectIndex: action.subjectIndex,
         };
         return [...state, newTodoItem];
      }
      case DELETE_TODO_ITEM: {
         const newState = [...state];
         newState.splice(action.index, 1);
         return newState;
      }

      case TOGGLE_IS_IMPORTANT: {
         const newState = [...state];
         newState[action.index].isImportant = !newState[action.index]
            .isImportant;
         return newState;
      }

      case TOGGLE_IS_DONE: {
         const newState = [...state];
         newState[action.index].isDone = !newState[action.index]
            .isDone;
         return newState;
      }

      default: {
         return state;
      }
   }
};

export default todoList;
