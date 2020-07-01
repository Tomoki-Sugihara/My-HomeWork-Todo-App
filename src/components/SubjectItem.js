import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

import styled from 'styled-components';
import media from 'styled-media-query';

const SubjectItem = props => {
   const { state, setState } = useContext(AppContext);
   const handleClickSetDisplaySubjectIndex = () => {
      setState(prevState => {
         return {
            ...prevState,
            activeSubjectIndex: props.index,
         };
      });
   };
   return (
      <>
         <SubjectMenuItem onClick={handleClickSetDisplaySubjectIndex}>
            <li>{props.subject.title}</li>
         </SubjectMenuItem>
      </>
   );
};

export const SubjectMenuItem = styled.div`
   display: flex;
   height: 50px;
   width: 100%;
   font-size: 20px;
   list-style: none;
   :hover {
      background-color: rgb(50, 50, 50);
      cursor: pointer;
   }
   li {
      margin: auto 0 auto 20px;
   }
`;

export default SubjectItem;
