import React from 'react';
import AppContext from '../contexts/AppContext';

import styled from 'styled-components';
import media from 'styled-media-query';

const SubjectItem = props => {
   return (
      <>
         <Wrapper>
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
   /* font-weight: bolder; */
   list-style: none;
   :hover {
      background-color: rgb(50, 50, 50);
   }
`;
const Li = styled.li`
   margin: auto 0 auto 20px;
`;

export default SubjectItem;
