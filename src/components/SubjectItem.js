import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

import styled from 'styled-components';
// import media from 'styled-media-query';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

const SubjectItem = props => {
   const { setState } = useContext(AppContext);
   const handleClickSetActiveSubjectIndex = () => {
      setState(prevState => {
         return {
            ...prevState,
            activeSubjectIndex: props.index,
         };
      });
   };
   return (
      <>
         <Wrapper>
            <SubjectMenuItem onClick={handleClickSetActiveSubjectIndex}>
               <p>{props.subject.title}</p>
            </SubjectMenuItem>
            <IconButton color="primary" style={{ marginLeft: 'auto' }}>
               <MoreVertIcon fontSize="small" color="primary"></MoreVertIcon>
            </IconButton>
         </Wrapper>
      </>
   );
};
const Wrapper = styled.div`
   display: flex;
   :hover {
      background-color: rgb(50, 50, 50);
      cursor: pointer;
   }
`;
export const SubjectMenuItem = styled.div`
   display: flex;
   height: 37.5px;
   width: 100%;
   font-size: 15px;
   margin: auto 0;
   :hover {
      background-color: rgb(50, 50, 50);
      cursor: pointer;
   }
   p {
      margin: auto 0 auto 15px;
   }
`;

export default SubjectItem;
