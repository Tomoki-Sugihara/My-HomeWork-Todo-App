import React, { useContext, useEffect } from 'react';
import AppContext from '../contexts/AppContext';
import MenuWindow from './MenuWindow';

import styled from 'styled-components';
import media from 'styled-media-query';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { c, length } from '../color';

const Header = () => {
   const { state, activeIndex } = useContext(AppContext);
   const displayTitleName = () => {
      if (activeIndex === -1) {
         return 'My HomeWork Todo';
      } else {
         return state.subjectList[activeIndex].title;
      }
   };
   const isThisDisplayed = () => activeIndex !== -1;
   useEffect(() => {
      const checkbox = document.getElementById('menu');
      if (checkbox.checked) {
         checkbox.checked = false;
      }
   }, [activeIndex]);
   return (
      <>
         <Wrapper>
            <TitleBar>
               <h3>{displayTitleName()}</h3>
            </TitleBar>
            <SettingMenu>
               <IconButton color="primary" style={{ position: 'relative' }}>
                  <MoreVertIcon color="primary" fontSize="small"></MoreVertIcon>
                  <label
                     htmlFor="menu"
                     className="open"
                     style={{ display: isThisDisplayed() ? 'block' : 'none' }}
                  ></label>
               </IconButton>
               <input type="checkbox" id="menu" />
               <label htmlFor="menu" className="back"></label>
               <label className="menuWindow" htmlFor="menu">
                  <MenuWindow />
               </label>
            </SettingMenu>
         </Wrapper>
      </>
   );
};

const Wrapper = styled.div`
   position: fixed;
   display: flex;
   z-index: 1;
   width: calc(92% - 230px);
   height: ${length.header};
   background-color: ${c.blackOfMenuBackground(0.96)};
   ${media.lessThan('medium')`
   width: 94%;
  `}
`;

const TitleBar = styled.div`
   max-width: 75%;
   display: flex;
   background-color: ${c.blackOfMenuBackground(0.96)};
   margin-left: 45px;
   ${media.lessThan('small')`
      margin: 0 0 0 45px;
  `}
   h3 {
      margin: auto 0;
      user-select: none;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
   }
`;

const SettingMenu = styled.div`
   margin-left: auto;
   display: flex;
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
      z-index: 10;
      width: 180px;
      height: auto;
      border: 0.1px solid rgb(50, 50, 50);
      background-color: ${c.blackOfMenuBackground};
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
