import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

import { Toolbar } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

import styled from 'styled-components';
import media from 'styled-media-query';

const Header = () => {
   const { state } = useContext(AppContext);
   const displayTitleName = () => {
      if (state.activeSubjectIndex === undefined) {
         return 'My HomeWork Todo';
      } else {
         return state.subjectList[state.activeSubjectIndex].title;
      }
   };
   return (
      <>
         <Wrapper>
            <TitleBar>
               <Toolbar>
                  <h2>{displayTitleName()}</h2>
               </Toolbar>
            </TitleBar>
         </Wrapper>
      </>
   );
};

const Wrapper = styled.div`
   position: fixed;
   display: flex;
   width: calc(92% - 350px);
   height: 64px;
   ${media.lessThan('large')`
   width: 94%;
   height: 56px;
  `}
`;

const TitleBar = styled.div`
   background-color: rgba(33, 33, 33, 0.96);
   margin-left: 22px;
   ${media.lessThan('medium')`
      margin: 0 auto;
  `}
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
