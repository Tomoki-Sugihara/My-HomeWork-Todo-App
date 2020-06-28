import React, { useState, useContext } from 'react';
import AppContext from '../contexts/AppContext';
import styled from 'styled-components';

const CreateNewTodoItem = () => {
   const { state, setState } = useContext(AppContext);
   const [title, setTitle] = useState('');

   const createTodo = () => {
      if (title.trim() === '') {
         return;
      }
      const newState = {
         ...state,
         todoList: [
            ...state.todoList,
            { title, isDone: false, isImportant: false },
         ],
      };
      setState(newState);
      setTitle('');
   };
   return (
      <Wrapper>
         <Form
            onSubmit={e => {
               e.preventDefault();
               createTodo();
            }}
         >
            <InputOfTitle
               type="text"
               value={title}
               onChange={e => {
                  setTitle(e.target.value);
               }}
            />
         </Form>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   position: fixed;
   bottom: 0;
   color: red;
   background-color: rgba(33, 33, 33, 0.95);
   width: 100%;
   height: 7%;
   padding: 0.5% 0 1% 0;
`;

const Form = styled.form`
   height: 100%;
`;
const InputOfTitle = styled.input`
   width: 70%;
   height: 100%;
   background-color: rgb(43, 43, 43);
   color: white;
   border-style: none;
`;
export default CreateNewTodoItem;
