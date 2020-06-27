import React, { useState, useContext } from 'react';
import AppContext from '../contexts/AppContext';
import styled from 'styled-components';

const CreateNewTodo = () => {
   const { state, setState } = useContext(AppContext);
   const [title, setTitle] = useState('');

   const addNewTitle = () => {
      if (title.trim() === '') {
         return;
      }
      const newState = {
         ...state,
         todoList: [...state.todoList, { title, isDone: false }],
      };
      setState(newState);
      setTitle('');
   };
   return (
      <Wrapper>
         <Form
            onSubmit={e => {
               e.preventDefault();
               addNewTitle();
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
   padding: 0.5% 0 1% 0;
`;

const Form = styled.form``;
const InputOfTitle = styled.input`
   width: 70%;
   background-color: dimgray;
   height: 10%;
`;
export default CreateNewTodo;
