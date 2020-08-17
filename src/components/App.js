import React, { useState, useReducer } from 'react';
import reducer from '../reducers';
import AppContext from '../contexts/AppContext';
import { initialItem, demoState } from '../constant';
// import axios from 'axios';

import SideMenus from './SideMenus';
import Header from './Header';
import TodoList from './TodoList';
import CreateNewTodoItem from './CreateNewTodoItem';

import styled from 'styled-components';
import media from 'styled-media-query';

const App = () => {
   const [state, dispatch] = useReducer(reducer, demoState);
   const [activeSubjectIndex, setActiveSubjectIndex] = useState(-1);
   const [item, setItem] = useState(initialItem);
   // useEffect(() => {
   //    axios.patch(apiUrl + 'update', state.todoList).then(res => {
   //       console.log(res);
   //    });
   // }, []);

   return (
      <>
         <AppContext.Provider
            value={{
               state,
               dispatch,
               activeSubjectIndex,
               setActiveSubjectIndex,
               item,
               setItem,
            }}
         >
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
      / 230px 4% 1fr 4%;
   height: 100%;
   width: 100%;
   ${media.lessThan('medium')`
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
