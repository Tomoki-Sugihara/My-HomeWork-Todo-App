import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { subjectListTemplate } from '../constant';
import SubjectItem, { SubjectMenuItem } from './SubjectItem';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
// import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

import styled from 'styled-components';
import media from 'styled-media-query';
const SideMenus = () => {
   const { state, setState, item, setItem } = useContext(AppContext);

   const subjects = state.subjectList.map((subject, index) => {
      return <SubjectItem subject={subject} key={index} index={index} />;
   });

   const handleClickDisplayAllTodo = () => {
      setState(prevState => {
         return {
            ...prevState,
            activeSubjectIndex: undefined,
         };
      });
   };

   const createSubject = () => {
      if (item.subjectTitle.trim() === '') {
         return;
      }
      const newState = {
         ...state,
         subjectList: [
            ...state.subjectList,
            {
               ...subjectListTemplate,
               title: item.subjectTitle,
            },
         ],
      };
      setState(newState);
      setItem(prevItem => {
         return { ...prevItem, subjectTitle: '' };
      });
   };
   return (
      <>
         <Wrapper>
            <input id="menu" type="checkbox" />
            <label htmlFor="menu" className="open">
               <p>
                  <MenuIcon className="menuIcon"></MenuIcon>
               </p>
            </label>
            <label htmlFor="menu" className="back"></label>
            <Container id="sideMenuContainer">
               <label id="firstLabel">
                  <SubjectMenuItem onClick={handleClickDisplayAllTodo}>
                     <li>すべて</li>
                  </SubjectMenuItem>
                  <SubjectList>{subjects}</SubjectList>
               </label>
               <label htmlFor="menu" id="secondLabel">
                  <SubjectMenuItem onClick={handleClickDisplayAllTodo}>
                     <li>すべて</li>
                  </SubjectMenuItem>
                  <SubjectList>{subjects}</SubjectList>
               </label>{' '}
               {/*ダサすぎる */}
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
                     value={item.subjectTitle}
                     onChange={e => {
                        const subjectTitle = e.target.value;
                        setItem(prevItem => {
                           return { ...prevItem, subjectTitle };
                        });
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
   background-color: rgb(43, 43, 43);

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
      z-index: 3;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      p {
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
   background-color: rgb(43, 43, 43);
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
   background-color: rgb(43, 43, 43);
   border-radius: 5px;
   :hover {
      background-color: rgb(50, 50, 50);
   }
   ${media.lessThan('medium')`
  `}
`;
const InputOfTitle = styled.input`
   width: 90%;
   height: 100%;
   margin-left: 3px;
   font-size: 13.5px;
   background-color: rgb(43, 43, 43);
   border-radius: 5px;
   color: white;
   border-style: none;
   :hover {
      background-color: rgb(50, 50, 50);
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
