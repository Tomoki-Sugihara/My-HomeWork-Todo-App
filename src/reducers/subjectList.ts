// import _ from 'lodash';
// import {
//    CREATE_SUBJECT,
//    MOUNT_SUBJECT_LIST,
//    DELETE_SUBJECT_ITEM,
// } from '../actions/index';

import { subjectListState } from '../types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// type subjectListActionType = {
//    type: string;
//    payload: {
//       title?: string;
//       data?: subjectListState[];
//       activeIndex?: number;
//    };
// };
// const subjectList = (
//    subjectList: subjectListState[] = [],
//    action: subjectListActionType
// ): subjectListState[] => {
//    const apiUrl = `${process.env.REACT_APP_SERVER_URL}api/subject_lists/`;
//    switch (action.type) {
//       case CREATE_SUBJECT: {
//          const getUniqueKey = () => {
//             return new Date().toISOString() + '~' + Math.random().toString(36);
//          };
//          const newSubjectItem = {
//             key: getUniqueKey(),
//             title: action.payload.title as string,
//          };

//          axios.post(apiUrl, newSubjectItem);
//          return [...subjectList, newSubjectItem];
//       }
//       case MOUNT_SUBJECT_LIST: {
//          return action.payload.data!;
//       }
//       case DELETE_SUBJECT_ITEM: {
//          const key = subjectList[action.payload.activeIndex as number].key;
//          axios.delete(apiUrl, { data: { key } });

//          const newSubjectList = _.cloneDeep(subjectList);
//          newSubjectList.splice(action.payload.activeIndex as number, 1);

//          return newSubjectList;
//       }
//       default: {
//          return subjectList;
//       }
//    }
// };
// export default subjectList;

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
