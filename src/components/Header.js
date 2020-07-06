import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

import styled from 'styled-components';
import media from 'styled-media-query';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

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
               <h3>{displayTitleName()}</h3>
            </TitleBar>
            <SettingMenu>
               <IconButton color="primary" style={{ position: 'relative' }}>
                  <MoreVertIcon color="primary" fontSize="small"></MoreVertIcon>
                  <label htmlFor="menu" className="open"></label>
               </IconButton>
               <input type="checkbox" id="menu" />
               <label htmlFor="menu" className="back"></label>
               <div className="menuWindow">delete</div>
            </SettingMenu>
         </Wrapper>
      </>
   );
};

const Wrapper = styled.div`
   position: fixed;
   display: flex;
   width: calc(92% - 230px);
   height: 48px;
   background-color: rgba(33, 33, 33, 0.96);
   ${media.lessThan('medium')`
   width: 94%;
  `}
`;

const TitleBar = styled.div`
   display: flex;

   background-color: rgba(33, 33, 33, 0.96);
   margin-left: 45px;
   ${media.lessThan('small')`
      margin: 0 auto;
  `}
   h3 {
      margin: auto 0;
      user-select: none;
   }
`;

const SettingMenu = styled.div`
   margin-left: auto;

   .open {
      display: block;
      position: fixed;

      width: 44px;
      height: 44px;
   }
   .menuWindow {
      position: fixed;
      top: 45px;
      right: 3%;
      display: none;
      width: 210px;
      height: 50px;
      background-color: rgb(30, 30, 30);
   }
   input[type='checkbox'] {
      position: fixed;
      left: -200%;
      :checked ~ .menuWindow {
         display: block;
      }

      :checked ~ .back {
         position: fixed;
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;
         z-index: 10;
      }
   }
`;
export default Header;
