import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import styled from 'styled-components';
// import { color as c } from '../color';

import TodoItem from './TodoItem';

const TodoList = () => {
   const { state } = useContext(AppContext);
   const activeIndex = state.config.activeIndex;

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

   const displayedTodos = comps => {
      const hasDoneTodo = comps.some(comp => {
         return comp.props.todo.isDone;
      });
      if (state.config.separate && hasDoneTodo) {
         const notDoneTodos = comps.filter(comp => {
            return !comp.props.todo.isDone;
         });
         const doneTodos = comps.filter(comp => {
            return comp.props.todo.isDone;
         });
         const border = (
            <Border>
               <p>------------</p>
            </Border>
         );
         return (
            <>
               {notDoneTodos}
               {border}
               {doneTodos.reverse()}
            </>
         );
      } else {
         return comps;
      }
   };
   const message = (
      <Message>
         <p>タスクがありません</p>
      </Message>
   );
   return (
      <Wrapper>
         {displayedTodos(todos).length === 0 ? message : displayedTodos(todos)}
      </Wrapper>
   );
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
      margin-top: 20px;
      font-size: 12px;
   }
`;
const Border = styled.div`
   display: flex;
   justify-content: center;
`;
export default TodoList;
