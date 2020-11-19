import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import styled from 'styled-components';
// import { color as c } from '../color';

import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';
import { getActiveIndex, getSeparate } from '../../selector';

const TodoList = () => {
   const state = useSelector(state => state);
   const activeIndex = getActiveIndex(state);
   const separate = getSeparate(state);

   const todos = state.todoList
      .map((todo, index) => {
         return <TodoItem todo={todo} key={index} index={index} />;
      })
      .filter(comp => {
         const todo = comp.props.todo;
         if (activeIndex === -1) {
            return true;
         } else if (activeIndex === -2) {
            return todo.isTask;
         } else {
            return todo.subjectKey === state.subjectList[activeIndex].key;
         }
      });

   const displayedTodos = (comps: JSX.Element[]) => {
      const hasDoneTodo = comps.some(comp => {
         return comp.props.todo.isDone;
      });
      const notDoneTodos = comps.filter(comp => {
         return !comp.props.todo.isDone;
      });
      const doneTodos = comps.filter(comp => {
         return comp.props.todo.isDone;
      });
      if (separate && hasDoneTodo && !(notDoneTodos.length === 0)) {
         const border = (
            <Border>
               <div></div>
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
   if (todos === []) {
      return <Wrapper>{message}</Wrapper>;
   }
   return (
      <Wrapper>
         {/* {displayedTodos(todos)} */}
         {/* {displayedTodos(todos) ? displayedTodos(todos) : message} */}
         {displayedTodos(todos) === [] ? message : displayedTodos(todos)}
         {/* {displayedTodos(todos).length === 0 ? message : displayedTodos(todos)} */}
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
   width: 100%;
   height: 15px;
   display: flex;
   align-items: center;
   > div {
      margin: auto;
      width: 100px;
      height: 0.3px;
      border-top: 0.3px solid rgb(115, 115, 115);
   }
`;
export default TodoList;
