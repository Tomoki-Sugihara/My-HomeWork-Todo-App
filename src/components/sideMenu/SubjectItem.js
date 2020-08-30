import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
// import styled from 'styled-components';
import { color as c } from '../../constant/color';

import { SubjectMenuItem, NumberOfTodo } from './SubjectMenuList';

const SubjectItem = props => {
   const { state, activeIndex, setActiveIndex } = useContext(AppContext);
   const handleClickSetActiveIndex = () => {
      setActiveIndex(props.index);
   };
   const isSelected = props.index === activeIndex;

   const hasImportant = todos => {
      return todos.some(todo => !todo.isDone && todo.isImportant);
   };
   const grayOrRed = todos => {
      return {
         color: hasImportant(todos) ? c.redOfCountNumber : c.grayOfCountNumber,
      };
   };
   const eachTodos = state.todoList.filter(todoItem => {
      return todoItem.subjectIndex === props.index;
   });
   return (
      <SubjectMenuItem
         onClick={handleClickSetActiveIndex}
         className={isSelected ? 'selected' : ''}
      >
         <p>{props.subject.title}</p>
         <NumberOfTodo>
            <p style={grayOrRed(eachTodos)}>{eachTodos.length}</p>
         </NumberOfTodo>
      </SubjectMenuItem>
   );
};

export default SubjectItem;
