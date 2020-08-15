// import { initialState } from '../constant';
import { CREATE_SUBJECT } from '../actions/index';

const subjectList = (state = [], action) => {
   switch (action.type) {
      case CREATE_SUBJECT: {
         const newSubjectItem = {
            title: action.title,
         };
         return [...state, newSubjectItem];
      }
      default: {
         return state;
      }
   }
};
export default subjectList;
