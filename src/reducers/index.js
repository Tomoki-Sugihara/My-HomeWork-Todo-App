import { combineReducers } from 'redux';
import todoList from './todoList';
import subjectList from './subjectList';

export default combineReducers({ todoList, subjectList });
