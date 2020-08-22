import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import AppContext from '../contexts/AppContext';
// import { c } from '../color';

import styled from 'styled-components';
const TodoList = () => {
   const { state } = useContext(AppContext);

   // console.log(state);
   const todos = state.todoList.map((todo, index) => {
      return <TodoItem todo={todo} key={index} index={index} />;
   });

   return <Wrapper>{todos}</Wrapper>;
   // return <Wrapper>{todos === {} ? <p>タスクがありません</p> : todos}</Wrapper>;
};

const Wrapper = styled.div`
   margin: 48px 0 58.5px 0;
   width: 100%;
`;

export default TodoList;
