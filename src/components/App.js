import React, { useState } from 'react';
import AppContext from '../contexts/AppContext';

import SideMenus from './SideMenus';
import Header from './Header';
import TodoList from './TodoList';
import CreateNewTodoItem from './CreateNewTodoItem';

import styled from 'styled-components';

const App = () => {
   const demoTodoList = [
      { title: 'abc', isDone: false, isImportant: false },
      { title: 'xyz', isDone: true, isImportant: true },
   ];
   const [state, setState] = useState({
      todoList: demoTodoList,
   });

   return (
      <>
         <AppContext.Provider value={{ state, setState }}>
            <Wrapper>
               <SideMenus />
               <Container>
                  <Header />
                  <TodoList />
                  <CreateNewTodoItem />
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
      / 25% 69% 5%;
   height: 100%;
   width: 100%;
`;

const Container = styled.div`
   position: relative;
   grid-area: container;
   width: 100%;
   height: 100%;
`;

export default App;
