import React from 'react';
import styled from 'styled-components';

const SideMenus = () => {
   return (
      // <>
      <Wrapper>
         <SideMenu>sideMenu</SideMenu>
         <SideMenu>sideMenu</SideMenu>
         <SideMenu>sideMenu</SideMenu>
         <SideMenu>sideMenu</SideMenu>
         <SideMenu>sideMenu</SideMenu>
      </Wrapper>
      // </>
   );
};

const Wrapper = styled.div`
   position: fixed;
   width: 22%;
   margin: 64px 0 0 3%;
`;
const SideMenu = styled.div`
   font-size: 24px;
   margin: 0;
`;

export default SideMenus;
