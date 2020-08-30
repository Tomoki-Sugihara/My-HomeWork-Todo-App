import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import styled from 'styled-components';
import {
   PERGE_TODO_ITEM,
   DELETE_SUBJECT_ITEM,
   SET_ACTIVE_INDEX,
} from '../../actions/index';
// import { color as c } from '../color';

import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const MenuWindow = () => {
   const { state, dispatch } = useContext(AppContext);
   const activeIndex = state.config.activeIndex;

   const handleClickDeleteSubject = () => {
      if (activeIndex === -2) {
         deleteTasks();
      } else {
         deleteSubject();
      }
   };
   const deleteTasks = () => {
      dispatch({
         type: PERGE_TODO_ITEM,
         subjectIndex: -1,
      });
   };
   const deleteSubject = () => {
      dispatch({
         type: PERGE_TODO_ITEM,
         subjectIndex: activeIndex,
      });
      dispatch({
         type: DELETE_SUBJECT_ITEM,
         subjectIndex: activeIndex,
      });
      dispatch({ type: SET_ACTIVE_INDEX, index: -1 });
   };

   const isThisDisplayed = () => activeIndex !== -1;
   return (
      <Wrapper style={{ display: isThisDisplayed() ? 'block' : 'none' }}>
         <DeleteSubject onClick={handleClickDeleteSubject}>
            <div className="container">
               <DeleteIcon>
                  <DeleteOutlineOutlinedIcon
                     color="secondary"
                     fontSize="small"
                  ></DeleteOutlineOutlinedIcon>
               </DeleteIcon>
               <p>このリストを削除</p>
            </div>
         </DeleteSubject>
      </Wrapper>
   );
};

const Wrapper = styled.div``;
const DeleteSubject = styled.div`
   background-color: rgb(25, 25, 25);
   :hover {
      cursor: pointer;
      background-color: rgb(50, 50, 50);
   }
   .container {
      display: flex;
      width: 92%;
      height: 42px;
      margin: 0 auto;
      p {
         margin: auto;
         font-size: 12px;
         color: red;
      }
   }
`;
const DeleteIcon = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export default MenuWindow;
