import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
// import { c } from '../color';
import { PERGE_TODO_ITEM } from '../actions/index';

import styled from 'styled-components';
// import media from 'styled-media-query';

import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
const MenuWindow = () => {
   const { dispatch, activeSubjectIndex, setActiveSubjectIndex } = useContext(
      AppContext
   );

   const deleteSubject = () => {
      dispatch({
         type: PERGE_TODO_ITEM,
         subjectIndex: activeSubjectIndex,
      });
      dispatch({
         type: 'DELETE_SUBJECT_ITEM',
         subjectIndex: activeSubjectIndex,
      });
      setActiveSubjectIndex(-1);
   };
   return (
      <>
         <Wrapper>
            <MenuItem onClick={deleteSubject}>
               <div className="container">
                  <DeleteIcon>
                     <DeleteOutlineOutlinedIcon
                        color="secondary"
                        fontSize="small"
                     ></DeleteOutlineOutlinedIcon>
                  </DeleteIcon>
                  <p>このsubjectを削除</p>
               </div>
            </MenuItem>
         </Wrapper>
      </>
   );
};

const Wrapper = styled.div``;
const MenuItem = styled.div`
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
