// import { initialState } from '../constant';
import {
   CREATE_TODO_ITEM,
   DELETE_TODO_ITEM,
   TOGGLE_IS_IMPORTANT,
   TOGGLE_IS_DONE,
} from '../actions/index';
import axios from 'axios';

const todoList = (state = [], action) => {
   const apiUrl = 'http://localhost:3001/api/todo_lists/';
   switch (action.type) {
      case CREATE_TODO_ITEM: {
         const newTodoItem = {
            title: action.title,
            isImportant: action.isImportant,
            isDone: false,
            subjectIndex: action.subjectIndex,
         };
         // axios.post(apiUrl, { ...newTodoItem })
         // .then(res => res.json() )
         // .then(todo => {
         //    return [...state, todo.data]
         // })

         axios.post(apiUrl, { ...newTodoItem }).then(res => {
            console.log(res);
         });

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
         newState[action.index].isDone = !newState[action.index].isDone;
         return newState;
      }

      default: {
         return state;
      }
   }
};

export default todoList;
