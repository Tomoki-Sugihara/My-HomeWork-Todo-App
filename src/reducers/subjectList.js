// import { initialState } from '../constant';
import { CREATE_SUBJECT, MOUNT_SUBJECT_LIST } from '../actions/index';
import axios from 'axios';

const subjectList = (state = [], action) => {
   const apiUrl = 'http://localhost:3001/api/subject_lists/';
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
         return [...state, newSubjectItem];
      }
      case MOUNT_SUBJECT_LIST: {
         return action.data;
      }
      default: {
         return state;
      }
   }
};
export default subjectList;
