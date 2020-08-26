import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
// import styled from 'styled-components';
// import { c } from '../color';

import { SubjectMenuItem } from './SubjectMenuList';

const SubjectItem = props => {
   const { activeIndex, setActiveIndex } = useContext(AppContext);
   const handleClickSetActiveIndex = () => {
      setActiveIndex(props.index);
   };
   const isSelected = () => {
      return props.index === activeIndex;
   };
   // const displayEachNumberOfTodo = () => {
   //    let number = 0;
   //    state.todoList.forEach(todoItem => {
   //       if (todoItem.subjectIndex === props.index) {
   //          number++;
   //       }
   //    });
   //    // return number;
   //    return <p>{number}</p>;
   // };
   return (
      <>
         <SubjectMenuItem
            onClick={handleClickSetActiveIndex}
            className={isSelected() ? 'selected' : ''}
         >
            <p>{props.subject.title}</p>
            {/* {displayEachNumberOfTodo()} */}
         </SubjectMenuItem>
      </>
   );
};

export default SubjectItem;
