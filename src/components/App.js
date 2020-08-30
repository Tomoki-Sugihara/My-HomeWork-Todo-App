import React, { useState, useReducer, useEffect } from 'react';
import reducer from '../reducers';
import AppContext from '../contexts/AppContext';
import axios from 'axios';
import styled from 'styled-components';
import media from 'styled-media-query';
import { initialState } from '../constant/constant';
import { color as c } from '../constant/color';
import { MOUNT_SUBJECT_LIST, MOUNT_TODO_LIST } from '../actions/index';

import SideMenus from './sideMenu/SideMenus';
import Header from './header/Header';
import TodoList from './todoList/TodoList';
import TodoForm from './todoForm/TodoForm';

import CircularProgress from '@material-ui/core/CircularProgress';

const App = () => {
   const [state, dispatch] = useReducer(reducer, initialState);
   const [activeIndex, setActiveIndex] = useState(-1);
   const [isLoading, setIsLoading] = useState(true);
   const [message, setMessage] = useState('');

   useEffect(() => {
      (async () => {
         setTimeout(() => {
            setMessage('サーバーを起動中です。しばらくお待ち下さい。');
         }, 2500);

         const apiUrl = `${process.env.REACT_APP_SERVER_URL}api/`;
         const sortFunc = (a, b) => (a.id > b.id ? 1 : -1);
         const getSubjectList = axios
            .get(apiUrl + 'subject_lists/')
            .then(res => res.data.sort(sortFunc))
            .catch(() => {
               setMessage('サーバーとの通信に失敗しました。');
            });
         const getTodoList = axios
            .get(apiUrl + 'todo_lists/')
            .then(res => res.data.sort(sortFunc));

         const [subjectList, todoList] = await Promise.all([
            getSubjectList,
            getTodoList,
         ]);

         await dispatch({
            type: MOUNT_SUBJECT_LIST,
            data: subjectList,
         });
         await dispatch({
            type: MOUNT_TODO_LIST,
            data: todoList,
         });
         await setIsLoading(false);
      })();
   }, []);

   if (isLoading) {
      return (
         <LoadingWindow>
            <CircularProgress size="50px" />
            <p>{message}</p>
         </LoadingWindow>
      );
   }

   return (
      <AppContext.Provider
         value={{
            state,
            dispatch,
            activeIndex,
            setActiveIndex,
         }}
      >
         <Wrapper>
            <SideMenus />
            <Container>
               <Header />
               <TodoList />
               <TodoForm />
            </Container>
         </Wrapper>
      </AppContext.Provider>
   );
};
const LoadingWindow = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   > p {
      margin-top: 20px;
      font-size: 15px;
   }
`;

const Wrapper = styled.div`
   display: grid;
   grid-template:
      ' ..... ... ......... ... ' 0px
      ' ..... ... container ... ' 1fr
      ' ..... ... ......... ... ' 0px
      / 230px 4% 1fr 4%;
   height: 100%;
   width: 100%;
   background-color: ${c.BlackOfBackground};
   color: rgb(228, 226, 226);
   ${media.lessThan('medium')`
   grid-template:
      ' ... ......... ... ' 0px
      ' ... container ... ' 1fr
      ' ... ......... ... ' 0px
      / 3%     1fr    3%;
    
  `}
`;

const Container = styled.div`
   position: relative;
   grid-area: container;
   height: 100%;
`;

export default App;
