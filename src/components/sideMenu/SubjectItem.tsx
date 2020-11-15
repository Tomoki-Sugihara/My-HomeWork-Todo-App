import React, { FC, useContext } from 'react';
import AppContext from '../../contexts/AppContext';
// import styled from 'styled-components';
import { color as c } from '../../constant/color';
import { SET_ACTIVE_INDEX } from '../../actions/index';

import { SubjectMenuItem, NumberOfTodo } from './SubjectMenuList';
import { subjectListState, todoListState } from '../../types/types';
import { useSelector, useDispatch } from 'react-redux';
import { getActiveIndex } from '../../selector';
import { setActiveIndex } from '../../reducers/config';

type SubjectItemProps = {
   subject: subjectListState;
   index: number;
};

const SubjectItem: FC<SubjectItemProps> = props => {
   const todoList = useSelector(state => state.todoList);
   const selector = useSelector(state => state);
   const activeIndex = getActiveIndex(selector);
   const dispatch = useDispatch();

   const handleClickSetActiveIndex = () => {
      dispatch(setActiveIndex({ activeIndex: props.index }));
   };
   const isSelected = props.index === activeIndex;

   const hasImportant = (todos: todoListState[]) => {
      return todos.some(todo => !todo.isDone && todo.isImportant);
   };
   const grayOrRed = (todos: todoListState[]) => {
      return {
         color: hasImportant(todos) ? c.redOfCountNumber : c.grayOfCountNumber,
      };
   };
   const notDoneTodos = todoList.filter(todoItem => {
      return todoItem.subjectKey === props.subject.key && !todoItem.isDone;
   });
   return (
      <SubjectMenuItem
         onClick={handleClickSetActiveIndex}
         className={isSelected ? 'selected' : ''}
      >
         <p>{props.subject.title}</p>
         <NumberOfTodo>
            <p style={grayOrRed(notDoneTodos)}>{notDoneTodos.length}</p>
         </NumberOfTodo>
      </SubjectMenuItem>
   );
};

export default SubjectItem;
