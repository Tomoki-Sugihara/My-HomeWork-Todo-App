import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

import styled from 'styled-components';
// import media from 'styled-media-query';

import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
const MenuWindow = () => {
   const { state, setState } = useContext(AppContext);
   const deleteSubject = () => {
      
   };
   return (
      <>
         <Wrapper>
            <MenuItem>
               <div className="container">
                  <DeleteIcon onClick={deleteSubject}>
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
