import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';
import media from 'styled-media-query';

const Header = () => {
   const { state } = useContext(AppContext);
   return (
      <>
         <Wrapper>
            <TitleBar>
               <Toolbar>
                  <h2>{state.subjectList[state.displaySubjectIndex].title}</h2>
               </Toolbar>
            </TitleBar>
         </Wrapper>
      </>
   );
};

const Wrapper = styled.div`
   position: fixed;
   width: calc(92% - 350px);
   height: 64px;
   ${media.lessThan('large')`
   width: 94%;
   height: 56px;
  `}
`;

const TitleBar = styled.div`
   background-color: rgba(33, 33, 33, 0.96);
`;

// const theme = createMuiTheme({
//    typography: {
//       fontFamily: ['Noto Sans', 'sans-serif'].join(','),
//    },
//    overrides: {
//       MuiTypography: {},
//    },
// });

export default Header;
