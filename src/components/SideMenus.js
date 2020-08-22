import React, { useContext, useState } from 'react';
import AppContext from '../contexts/AppContext';
// import { subjectListTemplate } from '../constant';
import { c } from '../color';
import SubjectItem, { SubjectMenuItem } from './SubjectItem';

import styled from 'styled-components';
import media from 'styled-media-query';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import { CREATE_SUBJECT } from '../actions';

const SideMenus = () => {
   const [title, setTitle] = useState('');
   const { state, dispatch, setActiveIndex } = useContext(AppContext);

   const subjects = state.subjectList.map((subject, index) => {
      return <SubjectItem subject={subject} key={index} index={index} />;
   });

   const handleClickDisplayAllTodo = () => {
      setActiveIndex(-1);
   };

   const createSubject = () => {
      if (title.trim() === '') {
         return;
      }

      dispatch({
         type: CREATE_SUBJECT,
         title,
      });

      setTitle(``);
   };
   return (
      <>
         <Wrapper>
            <input id="clickSidebar" type="checkbox" />
            <label htmlFor="clickSidebar" className="open">
               <div>
                  <MenuIcon className="menuIcon"></MenuIcon>
               </div>
            </label>
            <label htmlFor="clickSidebar" className="back"></label>
            <Container id="sideMenuContainer">
               <label id="firstLabel">
                  <SubjectMenuItem onClick={handleClickDisplayAllTodo}>
                     <p style={{ color: 'tomato' }}>すべて</p>
                  </SubjectMenuItem>
                  <SubjectList>{subjects}</SubjectList>
               </label>
               <label htmlFor="clickSidebar" id="secondLabel">
                  <SubjectMenuItem onClick={handleClickDisplayAllTodo}>
                     <p style={{ color: 'tomato' }}>すべて</p>
                  </SubjectMenuItem>
                  <SubjectList>{subjects}</SubjectList>
               </label>{' '}
               {/*↑ダサすぎる */}
               <Form
                  onSubmit={e => {
                     e.preventDefault();
                     createSubject();
                  }}
               >
                  <IconButton
                     color="primary"
                     onClick={e => {
                        e.preventDefault();
                        createSubject();
                     }}
                  >
                     <AddIcon color="primary" />
                  </IconButton>
                  <InputOfTitle
                     type="text"
                     placeholder="Subjectを追加"
                     value={title}
                     onChange={e => {
                        const inputTitle = e.target.value;
                        setTitle(inputTitle);
                     }}
                  />
               </Form>
            </Container>
         </Wrapper>
      </>
   );
};
const Wrapper = styled.div`
   width: 300px;
   height: 100%;
   background-color: ${c.grayOfForm};

   input[type='checkbox'] {
      position: fixed;
      left: -200%;
      :checked ~ #sideMenuContainer {
         left: 0;
      }

      :checked ~ .back {
         position: fixed;
         width: 100%;
         height: 100%;
         background: rgba(0, 0, 0, 0.8);
         z-index: 4;
      }
   }
   .open {
      display: none;
      position: fixed;
      left: 3%;
      top: 0;
      z-index: 5;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      > div {
         width: 24px;
         height: 24px;
         margin: auto;
      }
      ${media.lessThan('medium')`
      display: flex;
  `}
   }
`;
const Container = styled.aside`
   position: fixed;
   z-index: 6;
   height: 100%;
   width: 230px;
   padding-top: 10px;
   background-color: ${c.grayOfForm};
   .close {
      display: none;
      width: 24px;
      margin-left: auto;
      ${media.lessThan('medium')`
      display: block;
  `}
   }
   #firstLabel {
      display: block;
      ${media.lessThan('medium')`
      display: none;
  `}
   }
   #secondLabel {
      display: none;
      ${media.lessThan('medium')`
      display: block;
  `}
   }

   ${media.lessThan('medium')`
    left: -300px;
    transition: all 0.2s;
  `}
`;
const SubjectList = styled.div``;
const Form = styled.form`
   display: flex;
   height: 36px;
   width: 100%;
   margin-top: 15px;
   background-color: ${c.grayOfForm};
   border-radius: 5px;
   :hover {
      background-color: ${c.grayOfHoverForm};
   }
   ${media.lessThan('medium')`
  `}
`;
const InputOfTitle = styled.input`
   width: 90%;
   height: 100%;
   margin-left: 3px;
   font-size: 13.5px;
   background-color: ${c.grayOfForm};
   border-radius: 5px;
   color: white;
   border-style: none;
   :hover {
      background-color: ${c.grayOfHoverForm};
   }
   :focus {
      outline: 0;
      ::placeholder {
         color: transparent;
      }
   }
   ${media.lessThan('medium')`
   margin: 0;
  `}
`;

export default SideMenus;
