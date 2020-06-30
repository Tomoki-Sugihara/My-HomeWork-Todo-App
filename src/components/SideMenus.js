import React from 'react';
import styled from 'styled-components';

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
   width: 300px;
   margin-top: 64px;
`;
const SideMenu = styled.div`
   font-size: 24px;
   margin: 0;
`;

export default SideMenus;
