import _ from 'lodash';
import axios from 'axios';
import { subjectListState } from '../types/types';
import {
   CREATE_SUBJECT,
   MOUNT_SUBJECT_LIST,
   DELETE_SUBJECT_ITEM,
} from '../actions/index';
type subjectListActionType = {
   type: string;
   payload: {
      title?: string;
      data?: subjectListState[];
      activeIndex?: number;
   };
};
const subjectList = (
   subjectList: subjectListState[] = [],
   action: subjectListActionType
): subjectListState[] => {
   const apiUrl = `${process.env.REACT_APP_SERVER_URL}api/subject_lists/`;
   switch (action.type) {
      case CREATE_SUBJECT: {
         const getUniqueKey = () => {
            return new Date().toISOString() + '~' + Math.random().toString(36);
         };
         const newSubjectItem = {
            key: getUniqueKey(),
            title: action.payload.title as string,
         };

         axios.post(apiUrl, newSubjectItem);
         return [...subjectList, newSubjectItem];
      }
      case MOUNT_SUBJECT_LIST: {
         return action.payload.data!;
      }
      case DELETE_SUBJECT_ITEM: {
         const key = subjectList[action.payload.activeIndex as number].key;
         axios.delete(apiUrl, { data: { key } });

         const newSubjectList = _.cloneDeep(subjectList);
         newSubjectList.splice(action.payload.activeIndex as number, 1);

         return newSubjectList;
      }
      default: {
         return subjectList;
      }
   }
};
export default subjectList;
