import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import styled from 'styled-components';

import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const TodoItem = props => {
   const { state, setState } = useContext(AppContext);
   const toggleIsDone = () => {
      const newState = {
         ...state,
      };
      newState.todoList[props.index].isDone = !newState.todoList[props.index]
         .isDone;
      setState(newState);
   };
   return (
      <Wrapper>
         <Checkbox
            icon={<RadioButtonUncheckedIcon color="primary" />}
            checkedIcon={<CheckCircleOutlineIcon color="primary" />}
            name="checkedH"
            color="primary"
            checked={props.todo.isDone}
            onChange={e => {
               toggleIsDone(e.target.checked);
            }}
         />
         <Li>{props.todo.title}</Li>
         <Icon>
            <IconButton color="primary">
               <DeleteOutlineOutlinedIcon color="primary"></DeleteOutlineOutlinedIcon>
            </IconButton>
         </Icon>
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
const Icon = styled.div`
   margin-left: auto;
`;
export default TodoItem;
