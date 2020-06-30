import React from 'react';

import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';
import media from 'styled-media-query';

const Header = () => {
   return (
      <>
         <Wrapper>
            <TitleBar>
               <Toolbar>
                  <h2>My HomeWork</h2>
               </Toolbar>
            </TitleBar>
         </Wrapper>
      </>
   );
};

const Wrapper = styled.div`
   position: fixed;
   width: calc(95% - 300px);
   ${media.lessThan('medium')`
   width: 90%;
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
