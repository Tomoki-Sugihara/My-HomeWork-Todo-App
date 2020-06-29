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
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

const TodoItem = props => {
   const { state, setState, setItem } = useContext(AppContext);
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
      if (state.noneItemIndex) {
         const newState = {
            ...state,
         };
         newState.todoList.splice(state.noneItemIndex, 1);
         setState(newState);
      }

      setState(prevState => {
         return { ...prevState, noneItemIndex: props.index };
      });

      setItem(prevItem => {
         return {
            ...prevItem,
            cancelIsBlock: true,
         };
      });
      setTimeout(() => {
         setItem(prevItem => {
            return { ...prevItem, cancelIsBlock: false };
         });
      }, 4000);
   };

   return (
      <Wrapper
         style={{
            display: props.index === state.noneItemIndex ? 'none' : 'flex',
         }}
      >
         <Checkbox
            icon={<RadioButtonUncheckedIcon color="primary" />}
            checkedIcon={<CheckCircleOutlineIcon color="primary" />}
            color="primary"
            checked={props.todo.isDone}
            onClick={handleClickIsDone}
         />
         <Li>{props.todo.title}</Li>
         <Checkbox
            style={{ marginLeft: 'auto' }}
            icon={<StarBorderIcon color="primary" />}
            checkedIcon={<StarIcon color="primary" />}
            color="primary"
            checked={props.todo.isImportant}
            onClick={handleClickIsImportant}
         />
         <Tooltip
            title="delete"
            enterDelay={600}
            leaveDelay={100}
            TransitionComponent={Zoom}
         >
            <DeleteIcon onClick={deleteTodo}>
               <IconButton color="secondary" style={{ height: '100%' }}>
                  <DeleteOutlineOutlinedIcon color="secondary"></DeleteOutlineOutlinedIcon>
               </IconButton>
            </DeleteIcon>
         </Tooltip>
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
