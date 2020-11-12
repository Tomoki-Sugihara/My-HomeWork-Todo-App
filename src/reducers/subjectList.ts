import _ from 'lodash';
import axios from 'axios';
import { subjectListState } from '../types/types';
import {
   CREATE_SUBJECT,
   MOUNT_SUBJECT_LIST,
   DELETE_SUBJECT_ITEM,
} from '../actions/index';

const subjectList = (subjectList: subjectListState[] = [], action) => {
   const apiUrl = `${process.env.REACT_APP_SERVER_URL}api/subject_lists/`;
   switch (action.type) {
      case CREATE_SUBJECT: {
         const getUniqueKey = () => {
            return new Date().toISOString() + '~' + Math.random().toString(36);
         };
         const newSubjectItem = {
            key: getUniqueKey(),
            title: action.title,
         };

         axios.post(apiUrl, newSubjectItem);
         return [...subjectList, newSubjectItem];
      }
      case MOUNT_SUBJECT_LIST: {
         return action.data;
      }
      case DELETE_SUBJECT_ITEM: {
         const key = subjectList[action.activeIndex].key;
         axios.delete(apiUrl, { data: { key } });

         const newSubjectList = _.cloneDeep(subjectList);
         newSubjectList.splice(action.activeIndex, 1);

         return newSubjectList;
      }
      default: {
         return subjectList;
      }
   }
};
export default subjectList;
