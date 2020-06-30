import React, { useState } from 'react';
import AppContext from '../contexts/AppContext';
import { initialItem, initialState } from '../constant';

import SideMenus from './SideMenus';
import Header from './Header';
import TodoList from './TodoList';
import CreateNewTodoItem from './CreateNewTodoItem';

import styled from 'styled-components';
import media from 'styled-media-query';

const App = () => {
   const demoTodoList = [
      { title: 'abc', isDone: false, isImportant: false },
      { title: 'xyz', isDone: true, isImportant: true },
   ];
   const [state, setState] = useState({
      ...initialState,
      todoList: demoTodoList,
   });
   const [item, setItem] = useState(initialItem);

   return (
      <>
         <AppContext.Provider value={{ state, setState, item, setItem }}>
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
      ' ... ... ...... ... ' 0px
      ' ... ... container ... ' 1fr
      ' ... ... ...... ... ' 10px
      / 350px 4% 1fr 4%;
   height: 100%;
   width: 100%;
   ${media.lessThan('large')`
   grid-template:
      ' ... ...... ... ' 0px
      ' ... container ... ' 1fr
      ' ... ...... ... ' 10px
      / 3% 1fr 3%;
    
  `}
`;

const Container = styled.div`
   position: relative;
   grid-area: container;
   height: 100%;
`;

export default App;
