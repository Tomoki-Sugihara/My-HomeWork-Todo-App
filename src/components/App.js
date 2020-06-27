import React, { useState } from 'react';
import AppContext from '../contexts/AppContext';

import SideMenus from './SideMenus';
import Header from './Header';
import TodoList from './TodoList';
import CreateNewTodo from './CreateNewTodo';

import styled from 'styled-components';

import '../css/App.css';
const App = () => {
   const [state, setState] = useState({
      todoList: [],
   });
   return (
      <>
         <AppContext.Provider value={{ state, setState }}>
            <Wrapper>
               <SideMenus />
               <Container>
                  <Header />
                  <TodoList />
                  <CreateNewTodo />
               </Container>
            </Wrapper>
         </AppContext.Provider>
      </>
   );
};

const Wrapper = styled.div`
   display: grid;
   grid-template:
      ' ... ...... ... ' 0px
      ' ... container ... ' 1fr
      ' ... ...... ... ' 10px
      / 25% 70% 5%;
   height: 100%;
   width: 100%;
`;

const Container = styled.div`
   position: relative;
   grid-area: container;
   width: 80%;
   height: 100%;
`;

export default App;
