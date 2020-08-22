import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { c } from '../color';

import styled from 'styled-components';
// import media from 'styled-media-query';

// import Badge from '@material-ui/core/Badge';

const SubjectItem = props => {
   const { setActiveIndex } = useContext(AppContext);
   const handleClickSetActiveSubjectIndex = () => {
      setActiveIndex(props.index);
   };
   // const displayEachNumberOfTodo = () => {
   //    let number = 0;
   //    state.todoList.forEach(todoItem => {
   //       if (todoItem.subjectIndex === props.index) {
   //          number++;
   //       }
   //    });
   //    return number;
   // };
   return (
      <>
         <Wrapper>
            <SubjectMenuItem
               // onMouseDown={e => {
               //    handleMouseDown(e);
               // }}
               onClick={handleClickSetActiveSubjectIndex}
            >
               {/* <Badge badgeContent={displayEachNumberOfTodo()} fontSize="small"> */}
               <p>{props.subject.title}</p>
               {/* </Badge> */}
            </SubjectMenuItem>
         </Wrapper>
      </>
   );
};
const Wrapper = styled.div`
   position: relative;
   height: auto;
   :hover {
      background-color: ${c.grayOfHoverItem};
      cursor: pointer;
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
   p {
      margin: auto 0 auto 15px;
   }
`;
// const NumberOfTodo = styled.div`
//    height: 44px;
//    width: 44px;
//    display: flex;
//    align-items: center;
//    > p {
//       color: royalblue;
//       margin: 0 auto;
//    }
// `;

export default SubjectItem;
