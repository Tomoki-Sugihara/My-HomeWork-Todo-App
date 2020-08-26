import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import styled from 'styled-components';
// import { c } from '../color';
import { PERGE_TODO_ITEM, DELETE_SUBJECT_ITEM } from '../actions/index';

import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const MenuWindow = () => {
   const { dispatch, activeIndex, setActiveIndex } = useContext(AppContext);

   const deleteSubject = () => {
      dispatch({
         type: PERGE_TODO_ITEM,
         subjectIndex: activeIndex,
      });
      dispatch({
         type: DELETE_SUBJECT_ITEM,
         subjectIndex: activeIndex,
      });
      setActiveIndex(-1);
   };

   const isThisDisplayed = () => activeIndex !== -1;
   return (
      <>
         <Wrapper style={{ display: isThisDisplayed() ? 'block' : 'none' }}>
            <DeleteSubject onClick={deleteSubject}>
               <div className="container">
                  <DeleteIcon>
                     <DeleteOutlineOutlinedIcon
                        color="secondary"
                        fontSize="small"
                     ></DeleteOutlineOutlinedIcon>
                  </DeleteIcon>
                  <p>このsubjectを削除</p>
               </div>
            </DeleteSubject>
         </Wrapper>
      </>
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
