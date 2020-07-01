import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { subjectListTemplate } from '../constant';
import SubjectItem from './SubjectItem';

import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import styled from 'styled-components';
import media from 'styled-media-query';
const SideMenus = () => {
   const { state, setState, item, setItem } = useContext(AppContext);

   const subjects = state.subjectList.map((subject, index) => {
      return <SubjectItem subject={subject} key={index} index={index} />;
   });

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
            <SubjectList>{subjects}</SubjectList>
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
const SubjectList = styled.div``;
const Form = styled.form`
   display: flex;
   height: 8%;
   width: 100%;
   background-color: rgb(43, 43, 43);
   border-radius: 5px;
   ${media.lessThan('large')`
  `}
`;
const InputOfTitle = styled.input`
   width: 90%;
   height: 100%;
   margin-left: 4px;
   background-color: rgb(43, 43, 43);
   border-radius: 5px;
   color: white;
   border-style: none;
   :focus {
      outline: 0;
      ::placeholder {
         color: transparent;
      }
   }
   ${media.lessThan('large')`
   margin: 0;
  `}
`;

export default SideMenus;
