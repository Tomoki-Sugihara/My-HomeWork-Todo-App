import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
// import styled from 'styled-components';
// import { color as c } from '../color';

import { SubjectMenuItem, NumberOfTodo } from './SubjectMenuList';

const SubjectItem = props => {
   const { state, activeIndex, setActiveIndex } = useContext(AppContext);
   const handleClickSetActiveIndex = () => {
      setActiveIndex(props.index);
   };
   const isSelected = () => {
      return props.index === activeIndex;
   };
   const eachNumberOfTodo = state.todoList.filter(todoItem => {
      return todoItem.subjectIndex === props.index;
   }).length;
   return (
      <SubjectMenuItem
         onClick={handleClickSetActiveIndex}
         className={isSelected() ? 'selected' : ''}
      >
         <p>{props.subject.title}</p>
         <NumberOfTodo>
            <p>{eachNumberOfTodo}</p>
         </NumberOfTodo>
      </SubjectMenuItem>
   );
};

export default SubjectItem;
