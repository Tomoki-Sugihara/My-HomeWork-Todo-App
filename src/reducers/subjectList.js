import {
   CREATE_SUBJECT,
   MOUNT_SUBJECT_LIST,
   DELETE_SUBJECT_ITEM,
} from '../actions/index';
import axios from 'axios';

const subjectList = (subjectList = [], action) => {
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

         axios.post(apiUrl, newSubjectItem).then(res => {
            console.log(res);
         });
         return [...subjectList, newSubjectItem];
      }
      case MOUNT_SUBJECT_LIST: {
         return action.data;
      }
      case DELETE_SUBJECT_ITEM: {
         const key = subjectList[action.subjectIndex].key;
         axios.delete(apiUrl, { data: { key } }).then(res => {
            console.log(res);
         });

         const newSubjectList = [...subjectList];
         newSubjectList.splice(action.subjectIndex, 1);

         return newSubjectList;
      }
      default: {
         return subjectList;
      }
   }
};
export default subjectList;
