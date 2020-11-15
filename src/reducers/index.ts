import { combineReducers } from 'redux';
import todoList from './todoList';
import subjectList from './subjectList';
import config from './config';
import { RootState } from '../types/types';
import { Actions } from '../contexts/AppContext';

const reducer: (
   state: RootState,
   action: Actions
) => RootState = combineReducers({ todoList, subjectList, config });

export default reducer;
// export default combineReducers({ todoList, subjectList, config });
