import React from 'react';
import AppContext from '../contexts/AppContext';

import styled from 'styled-components';
import media from 'styled-media-query';

const SubjectItem = props => {
   return (
      <>
         <Wrapper>{props.subject.title}</Wrapper>
      </>
   );
};

const Wrapper = styled.div``;

export default SubjectItem;
