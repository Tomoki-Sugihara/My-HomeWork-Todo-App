import { combineReducers } from 'redux';
import todoLists from './todoLists';
import subjectLists from './subjectLists';

export default combineReducers({todoLists, subjectLists});
