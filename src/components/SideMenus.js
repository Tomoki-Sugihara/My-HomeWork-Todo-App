import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const SideMenus = () => {
   return (
      <>
         <Wrapper>
            <SideMenu>sideMenu</SideMenu>
            <SideMenu>sideMenu</SideMenu>
            <SideMenu>sideMenu</SideMenu>
            <SideMenu>sideMenu</SideMenu>
            <SideMenu>sideMenu</SideMenu>
         </Wrapper>
      </>
   );
};

const Wrapper = styled.div`
   position: fixed;
   width: 350px;
   height: 100%;
   padding-right: 5%;
   background-color: rgb(43, 43, 43);
   ${media.lessThan('large')`
    display: none;
  `}
`;
const SideMenu = styled.div`
   font-size: 24px;
   margin: 0;
`;

export default SideMenus;
