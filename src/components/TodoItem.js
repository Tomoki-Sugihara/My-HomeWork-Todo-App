import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import styled from 'styled-components';

import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const TodoItem = props => {
   const { state, setState } = useContext(AppContext);
   const handleClickIsDone = () => {
      const newState = {
         ...state,
      };
      newState.todoList[props.index].isDone = !newState.todoList[props.index]
         .isDone;
      setState(newState);
   };
   const handleClickIsImportant = () => {
      const newState = {
         ...state,
      };
      newState.todoList[props.index].isImportant = !newState.todoList[
         props.index
      ].isImportant;
      setState(newState);
   };
   const deleteTodo = () => {
      const newState = {
         ...state,
      };
      newState.todoList.splice(props.index, 1);
      setState(newState);
   };

   return (
      <Wrapper>
         <Checkbox
            icon={<RadioButtonUncheckedIcon color="primary" />}
            checkedIcon={<CheckCircleOutlineIcon color="primary" />}
            color="primary"
            checked={props.todo.isDone}
            onClick={e => {
               handleClickIsDone();
            }}
         />
         <Li>{props.todo.title}</Li>
         <Checkbox
            style={{ marginLeft: 'auto' }}
            icon={<StarBorderIcon color="primary" />}
            checkedIcon={<StarIcon color="primary" />}
            color="primary"
            checked={props.todo.isImportant}
            onClick={e => {
               handleClickIsImportant(e.target.checked);
            }}
         />
         <DeleteIcon onClick={deleteTodo}>
            <IconButton color="secondary" style={{ height: '100%' }}>
               <DeleteOutlineOutlinedIcon color="secondary"></DeleteOutlineOutlinedIcon>
            </IconButton>
         </DeleteIcon>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   display: flex;
   height: 6.5vh;
   line-height: 100%;
   list-style: none;
   font-size: 22px;
   background-color: rgba(43, 43, 43);
   border-radius: 5px;
   margin: 5px 0;
`;
const Li = styled.li`
   margin: auto 0;
`;
const DeleteIcon = styled.div``;
export default TodoItem;
