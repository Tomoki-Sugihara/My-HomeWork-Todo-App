import { todoListState, subjectListState } from './../types/types';
import { configState, RootState } from '../types/types';
export const initialState: RootState = {
   todoList: [],
   subjectList: [],
   config: { activeIndex: -1, separate: true },
};
export const initialConfig: configState = {
   activeIndex: -1,
   separate: false,
};

export const todoListTemplate: todoListState = {
   key: '',
   title: '',
   isDone: false,
   isImportant: false,
   isTask: false,
   subjectKey: '',
};

export const subjectListTemplate: subjectListState = {
   title: '',
   key: '',
};
