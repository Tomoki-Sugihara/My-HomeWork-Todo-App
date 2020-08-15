import React, { useContext } from 'react';
import axios from 'axios';
import AppContext from '../contexts/AppContext';
import { initialItem, todoListTemplate } from '../constant';
import { CREATE_TODO_ITEM } from '../actions/index';

import styled from 'styled-components';
import media from 'styled-media-query';

import Checkbox from '@material-ui/core/Checkbox';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const CreateNewTodoItem = () => {
   const { dispatch, activeSubjectIndex, item, setItem } = useContext(
      AppContext
   );

   const createTodo = () => {
      if (item.title.trim() === '') {
         return;
      }
      dispatch({
         type: CREATE_TODO_ITEM,
         title: item.title,
         isImportant: item.isImportant,
         subjectIndex: activeSubjectIndex,
      });

      setItem(initialItem);
   };
   const handleClickIsImportant = () => {
      setItem(prevItem => {
         return { ...prevItem, isImportant: !prevItem.isImportant };
      });
   };

   return (
      <Wrapper>
         <Form
            onSubmit={e => {
               e.preventDefault();
               createTodo();
            }}
         >
            <IconButton color="primary" type="submit">
               <AddIcon color="primary" />
            </IconButton>
            <InputOfTitle
               type="text"
               placeholder="タスクを追加"
               value={item.title}
               onChange={e => {
                  const title = e.target.value;
                  setItem(prevItem => {
                     return { ...prevItem, title };
                  });
               }}
            />
            <Checkbox
               style={{ marginLeft: 'auto' }}
               icon={<StarBorderIcon color="primary" />}
               checkedIcon={<StarIcon color="primary" />}
               color="primary"
               checked={item.isImportant}
               onClick={handleClickIsImportant}
            />
         </Form>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   position: fixed;
   bottom: 0;
   background-color: rgba(33, 33, 33, 0.95);
   width: calc(92% - 230px);
   height: 58.5px;
   padding: 7.5px 0 7.5px 0;
   margin-right: 5%;
   ${media.lessThan('medium')`
   width: 94%;
   margin-right: 3%;
  `}
`;

const Form = styled.form`
   display: flex;
   height: 100%;
   width: 100%;
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

export default CreateNewTodoItem;
