import React from 'react';

import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';

const Header = () => {
   return (
      <>
         {/* <Wrapper> */}
         <TitleBar>
            <Toolbar>
               <h2>My HomeWork</h2>
            </Toolbar>
         </TitleBar>
         {/* </Wrapper> */}
      </>
   );
};

// const Wrapper = styled.div`
//    width: 100%;
// `;

const TitleBar = styled.div`
   position: fixed;
   background-color: rgba(33, 33, 33, 0.96);
   width: 70%;
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
