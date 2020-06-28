import React, { useState, useContext } from 'react';
import AppContext from '../contexts/AppContext';
import styled from 'styled-components';

import Checkbox from '@material-ui/core/Checkbox';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

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
   const handleChangeIsImportant = () => {
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
               console.log('ok');
            }}
         >
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
               onChange={handleChangeIsImportant}
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

const Form = styled.form`
   display: flex;
   height: 90%;
   width: 100%;
   background-color: rgb(43, 43, 43);
   border-radius: 5px;
`;
const InputOfTitle = styled.input`
   width: 85%;
   height: 100%;
   margin-left: 4px;
   background-color: rgb(43, 43, 43);
   border-radius: 5px;
   color: white;
   border-style: none;
   :focus {
      outline: 0;
   }
`;
export default CreateNewTodoItem;
