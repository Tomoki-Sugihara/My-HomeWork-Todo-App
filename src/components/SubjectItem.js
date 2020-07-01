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
            displaySubjectIndex: props.index,
         };
      });
   };
   return (
      <>
         <Wrapper onClick={handleClickSetDisplaySubjectIndex}>
            <Li>{props.subject.title}</Li>
         </Wrapper>
      </>
   );
};

const Wrapper = styled.div`
   display: flex;
   height: 50px;
   width: 100%;
   font-size: 20px;
   list-style: none;
   :hover {
      background-color: rgb(50, 50, 50);
      cursor: pointer;
   }
`;
const Li = styled.li`
   margin: auto 0 auto 20px;
`;

export default SubjectItem;
