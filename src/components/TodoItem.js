import React from 'react';
import styled from 'styled-components';

const TodoItem = props => {
   return <List>{props.todo.title}</List>;
};

const List = styled.li`
   list-style: none;
   font-size: 22px;
`;
export default TodoItem;
