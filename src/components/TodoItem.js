import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { c } from '../color';

import styled from 'styled-components';
import media from 'styled-media-query';

import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

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
   const displaySubjectName = () => {
      if (props.todo.subjectIndex === undefined) {
         return 'Task';
      } else {
         return state.subjectList[props.todo.subjectIndex].title;
      }
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
      const newState = { ...state };
      newState.todoList.splice(props.index, 1);
      setState(newState);
   };
   const isThisDisplayed = () => {
      if (state.activeSubjectIndex === undefined) {
         return true;
      } else if (state.activeSubjectIndex === props.todo.subjectIndex) {
         return true;
      } else {
         return false;
      }
   };

   return (
      <Wrapper
         style={{
            display: isThisDisplayed() ? 'flex' : 'none',
         }}
      >
         <Checkbox
            icon={<RadioButtonUncheckedIcon color="primary" fontSize="small" />}
            checkedIcon={
               <CheckCircleOutlineIcon color="primary" fontSize="small" />
            }
            color="primary"
            checked={props.todo.isDone}
            onClick={handleClickIsDone}
         />
         <div>
            <P>{props.todo.title}</P>
            <SubjectName
               style={{
                  display:
                     state.activeSubjectIndex === undefined ? 'flex' : 'none',
               }}
            >
               <KeyboardArrowRightIcon
                  fontSize="small"
                  style={{ margin: 'auto 0' }}
               ></KeyboardArrowRightIcon>
               <p>{displaySubjectName()}</p>
            </SubjectName>
         </div>
         <Checkbox
            style={{ marginLeft: 'auto' }}
            icon={<StarBorderIcon color="primary" fontSize="small" />}
            checkedIcon={<StarIcon color="primary" fontSize="small" />}
            color="primary"
            checked={props.todo.isImportant}
            onClick={handleClickIsImportant}
         />
         <Tooltip
            title="Delete"
            enterDelay={600}
            leaveDelay={100}
            TransitionComponent={Zoom}
         >
            <DeleteIcon onClick={deleteTodo}>
               <IconButton
                  color="secondary"
                  fontSize="small"
                  style={{ height: '100%' }}
               >
                  <DeleteOutlineOutlinedIcon
                     color="secondary"
                     fontSize="small"
                  ></DeleteOutlineOutlinedIcon>
               </IconButton>
            </DeleteIcon>
         </Tooltip>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   display: flex;
   height: 45px;
   list-style: none;
   background-color: ${c.grayOfItem};
   border-radius: 5px;
   margin: 3.5px 0;
   :hover {
      background-color: ${c.grayOfHoverItem};
   }
   > div {
      display: flex;
      ${media.lessThan('small')`
      flex-direction: column;
  `}
   }
`;
const P = styled.p`
   margin: auto 0 auto 3.5px;
   font-size: 16.5px;
`;
const SubjectName = styled.div`
   width: auto;
   font-size: 11px;
   margin: auto 0 auto 15px;
   ${media.lessThan('small')`
   flex-direction: row;
   margin: auto 0 auto 6px;
  `}

   >p {
      margin-top: 2px;
   }
`;
const DeleteIcon = styled.div``;

export default TodoItem;
