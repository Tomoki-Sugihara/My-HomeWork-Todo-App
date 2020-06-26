import React from 'react';
import styled from 'styled-components';

const CreateNewTodo = () => {
   return (
      <Wrapper>
         <Input />
      </Wrapper>
   );
};

const Wrapper = styled.div`
   color: red;
   position: fixed;
   bottom: 0;
   width: 100%;
`;

const Input = styled.input`
   width: 70%;
   background-color: dimgray;
`;
export default CreateNewTodo;
