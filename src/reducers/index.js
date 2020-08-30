import { combineReducers } from 'redux';
import todoList from './todoList';
import subjectList from './subjectList';
import config from './config';

export default combineReducers({ todoList, subjectList, config });
