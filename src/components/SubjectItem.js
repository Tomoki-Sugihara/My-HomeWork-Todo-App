import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import styled from 'styled-components';
// import media from 'styled-media-query';
import { c } from '../color';

const SubjectItem = props => {
   const { state, activeIndex, setActiveIndex } = useContext(AppContext);
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
         <Wrapper>
            <SubjectMenuItem
               onClick={handleClickSetActiveIndex}
               className={isSelected() ? 'selected' : ''}
            >
               <p>{props.subject.title}</p>
               {/* {displayEachNumberOfTodo()} */}
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
   p {
      margin: auto 0 auto 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
