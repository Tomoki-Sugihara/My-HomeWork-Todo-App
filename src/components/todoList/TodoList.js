import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import styled from 'styled-components';
// import { color as c } from '../color';

import TodoItem from './TodoItem';

const TodoList = () => {
   const { state, activeIndex } = useContext(AppContext);

   const todos = state.todoList
      .map((todo, index) => {
         return <TodoItem todo={todo} key={index} index={index} />;
      })
      .filter(comp => {
         const todo = comp.props.todo;
         if (activeIndex === -1) {
            return true;
         } else if (activeIndex === -2) {
            return todo.subjectIndex === -1;
         } else {
            return todo.subjectIndex === activeIndex;
         }
      });
   const message = (
      <Message>
         <p>タスクがありません</p>
      </Message>
   );
   return <Wrapper>{todos.length === 0 ? message : todos}</Wrapper>;
};

const Wrapper = styled.div`
   margin: 48px 0 58.5px 0;
   width: 100%;
   position: relative;
`;
const Message = styled.div`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   > p {
      margin-top: 30px;
   }
`;
export default TodoList;
