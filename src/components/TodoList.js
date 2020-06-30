import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import AppContext from '../contexts/AppContext';

import styled from 'styled-components';

const TodoList = () => {
   const { state } = useContext(AppContext);

   const todos = state.todoList.map((todo, index) => {
      return <TodoItem todo={todo} key={index} index={index} />;
   });

   return <Wrapper>{todos}</Wrapper>;
};

const Wrapper = styled.div`
   margin: 68px 0 30px 0;
   width: 100%;
`;
export default TodoList;
