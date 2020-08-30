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
   const numberOfTodo = state.todoList.length;
   const numberOfTask = state.todoList.filter(todoItem => {
      return todoItem.subjectIndex === -1;
   }).length;
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
               <p>{numberOfTodo}</p>
            </NumberOfTodo>
         </SubjectMenuItem>
         <SubjectMenuItem
            onClick={handleClickDisplayTasks}
            className={isSelected(-2) ? 'selected' : ''}
         >
            <p style={{ color: '#20b2aa' }}>Tasks</p>
            <NumberOfTodo>
               <p>{numberOfTask}</p>
            </NumberOfTodo>
         </SubjectMenuItem>
         {subjects}
      </Wrapper>
   );
};

const Wrapper = styled.div`
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
export default SubjectMenuList;
