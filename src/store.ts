import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
   todoListReducer,
   subjectListReducer,
   configReducer,
} from './reducers/';

const rootReducer = combineReducers({
   todoList: todoListReducer,
   subjectList: subjectListReducer,
   config: configReducer,
});

type RootState = ReturnType<typeof rootReducer>;

declare module 'react-redux' {
   interface DefaultRootState extends RootState {}
}

const store = configureStore({
   reducer: rootReducer,
});

export default store;
