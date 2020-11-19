import { subjectListState } from '../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const apiUrl = `${process.env.REACT_APP_SERVER_URL}api/subject_lists/`;

const subjectListSlice = createSlice({
   name: 'subjectList',
   initialState: [] as subjectListState[],
   reducers: {
      addSubject(state, action: PayloadAction<{ title: string }>) {
         const newSubject = {
            key: uuidv4(),
            title: action.payload.title,
         };
         state.push(newSubject);
         axios.post(apiUrl, newSubject);
      },
      deleteSubject(state, action: PayloadAction<{ activeIndex: number }>) {
         const key = state[action.payload.activeIndex].key;
         axios.delete(apiUrl, { data: { key } });

         state.splice(action.payload.activeIndex, 1);
      },
      mountSubjectList(
         state,
         action: PayloadAction<{ data: subjectListState[] }>
      ) {
         return action.payload.data;
      },
   },
});

export const {
   addSubject,
   deleteSubject,
   mountSubjectList,
} = subjectListSlice.actions;

export default subjectListSlice.reducer;
