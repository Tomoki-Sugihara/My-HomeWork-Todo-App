import _ from 'lodash';
import axios from 'axios';
import {
   CREATE_TODO_ITEM,
   DELETE_TODO_ITEM,
   TOGGLE_IS_IMPORTANT,
   TOGGLE_IS_DONE,
   MOUNT_TODO_LIST,
   PERGE_TODO_ITEM,
} from '../actions/index';

const todoList = (todoList = [], action) => {
   const apiUrl = `${process.env.REACT_APP_SERVER_URL}api/todo_lists/`;
   switch (action.type) {
      case CREATE_TODO_ITEM: {
         const getUniqueKey = () => {
            return new Date().toISOString() + '~' + Math.random().toString(36);
         };
         const newTodoItem = {
            key: getUniqueKey(),
            title: action.title,
            isImportant: action.isImportant,
            isDone: false,
            subjectIndex: action.subjectIndex,
         };
         axios.post(apiUrl, newTodoItem).then(res => {
            console.log(res);
         });

         return [...todoList, newTodoItem];
      }
      case DELETE_TODO_ITEM: {
         const newTodoList = _.cloneDeep(todoList);
         newTodoList.splice(action.index, 1);

         const key = todoList[action.index].key;
         axios.delete(apiUrl, { data: { key } }).then(res => {
            console.log(res);
         });

         return newTodoList;
      }

      case TOGGLE_IS_IMPORTANT: {
         const newTodoList = _.cloneDeep(todoList);
         const focusedTodoItem = newTodoList[action.index];
         focusedTodoItem.isImportant = !focusedTodoItem.isImportant;

         const key = focusedTodoItem.key;
         axios.patch(apiUrl + 'is_important/', { key }).then(res => {
            console.log(res);
         });

         return newTodoList;
      }

      case TOGGLE_IS_DONE: {
         const newTodoList = _.cloneDeep(todoList);
         const focusedTodoItem = newTodoList[action.index];
         focusedTodoItem.isDone = !focusedTodoItem.isDone;

         const key = focusedTodoItem.key;
         axios.patch(apiUrl + 'is_done/', { key }).then(res => {
            console.log(res);
         });

         return newTodoList;
      }
      case MOUNT_TODO_LIST: {
         return action.data;
      }

      case PERGE_TODO_ITEM: {
         const newTodoList = todoList.filter(element => {
            return element.subjectIndex !== action.subjectIndex;
         });

         axios
            .post(apiUrl + 'delete_subject/', {
               subjectIndex: action.subjectIndex,
            })
            .then(res => {
               console.log(res);
            });

         return newTodoList;
      }

      default: {
         return todoList;
      }
   }
};

export default todoList;
