import React from 'react';
import TodoList from './TodoList';
import styled from 'styled-components';

const TodoLists = () => {
   return (
      <Wrapper>
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
         <TodoList />
      </Wrapper>
   );
};

const Wrapper = styled.div`
   margin: 68px 0 30px 2px;
`;
export default TodoLists;
