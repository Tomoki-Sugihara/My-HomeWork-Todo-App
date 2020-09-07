import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import styled from 'styled-components';
import {
   PERGE_TODO_ITEM,
   DELETE_SUBJECT_ITEM,
   SET_ACTIVE_INDEX,
   TOGGLE_SEPARATE,
} from '../../actions/index';
// import { color as c } from '../../constant/color';

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
         subjectKey: state.subjectList[activeIndex].key,
      });
      dispatch({
         type: DELETE_SUBJECT_ITEM,
         subjectIndex: activeIndex,
      });
      dispatch({ type: SET_ACTIVE_INDEX, index: -1 });
   };
   const handleClickToggleSeparate = () => {
      dispatch({ type: TOGGLE_SEPARATE });
   };

   const isThisDisplayed = () => activeIndex !== -1;
   return (
      <Wrapper>
         <ToggleSeparate onClick={handleClickToggleSeparate}>
            <div className="container">
               <p>完了済みを{state.config.separate ? '分けない' : '分ける'}</p>
            </div>
         </ToggleSeparate>
         <DeleteSubject
            onClick={handleClickDeleteSubject}
            style={{ display: isThisDisplayed() ? 'block' : 'none' }}
         >
            <div className="container">
               <p>このリストを削除</p>
               <DeleteIcon>
                  <DeleteOutlineOutlinedIcon
                     color="secondary"
                     fontSize="small"
                  ></DeleteOutlineOutlinedIcon>
               </DeleteIcon>
            </div>
         </DeleteSubject>
      </Wrapper>
   );
};

const Wrapper = styled.div``;
const MenuItem = styled.div`
   background-color: rgb(25, 25, 25);
   .container {
      display: flex;
      width: 92%;
      height: 42px;
      margin: 0 auto;
      > p {
         margin: auto;
         font-size: 12px;
      }
   }
`;
const DeleteSubject = styled(MenuItem)`
   :hover {
      cursor: pointer;
      background-color: rgb(70, 20, 0);
      transition: 0.3s;
   }
   .container {
      > p {
         color: red;
      }
   }
`;
const ToggleSeparate = styled(MenuItem)`
   :hover {
      cursor: pointer;
      background-color: rgb(50, 50, 50);
      transition: 0.3s;
   }
`;
const DeleteIcon = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export default MenuWindow;
