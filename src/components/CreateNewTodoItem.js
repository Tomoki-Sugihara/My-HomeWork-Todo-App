import React, { useState, useContext } from 'react';
import AppContext from '../contexts/AppContext';
import styled from 'styled-components';

import Checkbox from '@material-ui/core/Checkbox';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';

const CreateNewTodoItem = () => {
   const { state, setState } = useContext(AppContext);
   const initialItem = { title: '', isImportant: false };
   const [item, setItem] = useState(initialItem);

   const createTodo = () => {
      if (item.title.trim() === '') {
         return;
      }
      const newState = {
         ...state,
         todoList: [
            ...state.todoList,
            {
               title: item.title,
               isDone: false,
               isImportant: item.isImportant,
            },
         ],
      };
      setState(newState);
      setItem(initialItem);
   };
   const handleClickIsImportant = () => {
      setItem(prevItem => {
         return { ...prevItem, isImportant: !prevItem.isImportant };
      });
   };

   return (
      <Wrapper>
         <CancelDelete>
            <p1>削除しました</p1>
            <p2>元に戻す</p2>
            <IconButton color="primary" style={{ marginLeft: 'auto' }}>
               <CloseIcon color="primary"></CloseIcon>
            </IconButton>
         </CancelDelete>
         <Form
            onSubmit={e => {
               e.preventDefault();
               createTodo();
            }}
         >
            <IconButton
               color="primary"
               onClick={e => {
                  e.preventDefault();
                  createTodo();
               }}
            >
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
   width: 70%;
   height: 9%;
   padding: 0.5% 0 1% 0;
`;

const CancelDelete = styled.div`
   position: fixed;
   bottom: 9%;
   left: 50%;
   display: flex;
   align-items: center;
   justify-content: space-between;

   width: 260px;
   height: 6%;
   background-color: rgba(20, 20, 20);
   border-radius: 5px;

   p1 {
      margin-left: auto;
   }
   p2 {
      margin-left: auto;
      color: aqua;
      :hover {
         cursor: pointer;
         opacity: 0.8;
      }
   }
`;

const Form = styled.form`
   display: flex;
   height: 90%;
   width: 100%;
   background-color: rgb(43, 43, 43);
   border-radius: 5px;
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
`;
export default CreateNewTodoItem;
