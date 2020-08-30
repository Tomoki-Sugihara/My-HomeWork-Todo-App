import React from 'react';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import styled from 'styled-components';
import { color as c } from '../../constant/color';

import SubjectItem from './SubjectItem';

const SubjectMenuList = () => {
   const { state, activeIndex, setActiveIndex } = useContext(AppContext);

   const handleClickDisplayAllTodo = () => {
      setActiveIndex(-1);
   };
   const handleClickDisplayTasks = () => {
      setActiveIndex(-2);
   };
   const isSelected = num => {
      return activeIndex === num;
   };
   const allTodos = state.todoList;
   const tasks = state.todoList.filter(todoItem => {
      return todoItem.subjectIndex === -1;
   });
   const hasImportant = todos => {
      return todos.some(todo => todo.isImportant);
   };
   const grayOrRed = todos => {
      return {
         color: hasImportant(todos) ? c.redOfCountNumber : c.grayOfCountNumber,
      };
   };
   const subjects = state.subjectList.map((subjectItem, index) => {
      return <SubjectItem subject={subjectItem} key={index} index={index} />;
   });

   return (
      <Wrapper>
         <SubjectMenuItem
            onClick={handleClickDisplayAllTodo}
            className={isSelected(-1) ? 'selected' : ''}
         >
            <p style={{ color: 'tomato' }}>すべて</p>
            <NumberOfTodo>
               <p>{allTodos.length}</p>
            </NumberOfTodo>
         </SubjectMenuItem>
         <SubjectMenuItem
            onClick={handleClickDisplayTasks}
            className={isSelected(-2) ? 'selected' : ''}
         >
            <p style={{ color: '#20b2aa' }}>Tasks</p>
            <NumberOfTodo>
               <p style={grayOrRed(tasks)}>{tasks.length}</p>
            </NumberOfTodo>
         </SubjectMenuItem>
         <Border></Border>
         {subjects}
      </Wrapper>
   );
};

const Wrapper = styled.div`
   max-height: 80%;
   overflow: auto;
   .selected {
      background-color: ${c.grayOfSelectedItem};
   }
`;
export const SubjectMenuItem = styled.div`
   display: flex;
   height: 44px;
   width: 100%;
   font-size: 15px;
   margin: auto 0;
   :hover {
      background-color: ${c.grayOfHoverItem};
      cursor: pointer;
   }
   > p {
      margin: auto 0 auto 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`;
export const NumberOfTodo = styled.div`
   height: 44px;
   width: 44px;
   display: flex;
   align-items: center;
   margin-left: auto;
   > p {
      color: rgb(115, 115, 115);
      margin: 0 auto;
   }
`;
const Border = styled.div`
   margin: 0 10px;
   border-top: 0.3px solid rgb(115, 115, 115);
`;
export default SubjectMenuList;
