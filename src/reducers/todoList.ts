// import _ from 'lodash';
import axios from 'axios';
import { todoListState } from '../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
const apiUrl = `${process.env.REACT_APP_SERVER_URL}api/todo_lists/`;

const todoListSlice = createSlice({
   name: 'todoList',
   initialState: [] as todoListState[],
   reducers: {
      addTodo(state, action: PayloadAction<addTodoPayloadType>) {
         const newTodoItem = {
            key: uuidv4(),
            title: action.payload.title,
            isImportant: action.payload.isImportant,
            isDone: false,
            subjectKey: action.payload.subjectKey,
            isTask: action.payload.isTask,
         };
         axios.post(apiUrl, newTodoItem);
         state.push(newTodoItem);
      },
      deleteTodo(state, action: PayloadAction<{ index: number }>) {
         const key = state[action.payload.index].key;
         state.splice(action.payload.index, 1);

         axios.delete(apiUrl, { data: { key } });
      },
      toggleIsDone(state, action: PayloadAction<{ index: number }>) {
         const focusedTodoItem = state[action.payload.index];
         focusedTodoItem.isDone = !focusedTodoItem.isDone;

         const key = focusedTodoItem.key;
         axios.patch(apiUrl + 'is_done/', { key });
      },
      toggleIsImportant(state, action: PayloadAction<{ index: number }>) {
         const focusedTodoItem = state[action.payload.index];
         focusedTodoItem.isImportant = !focusedTodoItem.isImportant;

         const key = focusedTodoItem.key;
         axios.patch(apiUrl + 'is_important/', { key });
      },
      mountTodoList(state, action: PayloadAction<{ data: todoListState[] }>) {
         return action.payload.data;
      },
      pergeTodoItem(state, action: PayloadAction<{ subjectKey: string }>) {
         const newTodoList = state.filter(todoItem => {
            return todoItem.subjectKey !== action.payload.subjectKey;
         });

         axios.post(apiUrl + 'delete_subject/', {
            subjectKey: action.payload.subjectKey,
         });
         return newTodoList;
      },
      pergeTasks(state) {
         const newTodoList = state.filter(todoItem => {
            return !todoItem.isTask;
         });

         axios.post(apiUrl + 'perge_tasks/');

         return newTodoList;
      },
   },
});

type addTodoPayloadType = {
   title: string;
   isImportant: boolean;
   subjectKey: string;
   isTask: boolean;
};

export const {
   addTodo,
   deleteTodo,
   toggleIsImportant,
   toggleIsDone,
   mountTodoList,
   pergeTodoItem,
   pergeTasks,
} = todoListSlice.actions;

export default todoListSlice.reducer;
