import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';
import { c } from '../color';

import styled from 'styled-components';
import media from 'styled-media-query';

import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {
   TOGGLE_IS_DONE,
   TOGGLE_IS_IMPORTANT,
   DELETE_TODO_ITEM,
} from '../actions';

const TodoItem = props => {
   const { state, dispatch, activeIndex } = useContext(AppContext);
   const handleClickIsDone = () => {
      dispatch({
         type: TOGGLE_IS_DONE,
         index: props.index,
      });
   };
   const displaySubjectName = () => {
      if (props.todo.subjectIndex === -1) {
         return 'Task';
      } else {
         return state.subjectList[props.todo.subjectIndex].title;
      }
   };
   const handleClickIsImportant = () => {
      dispatch({ type: TOGGLE_IS_IMPORTANT, index: props.index });
   };
   const deleteTodo = () => {
      dispatch({ type: DELETE_TODO_ITEM, index: props.index, activeIndex });
   };

   return (
      <Wrapper>
         <Checkbox
            icon={<RadioButtonUncheckedIcon color="primary" fontSize="small" />}
            checkedIcon={<CheckCircleIcon color="primary" fontSize="small" />}
            color="primary"
            checked={props.todo.isDone}
            onClick={handleClickIsDone}
         />
         <div>
            <TodoTitle
               style={{
                  textDecoration: props.todo.isDone ? 'line-through' : 'none',
               }}
            >
               {props.todo.title}
            </TodoTitle>
            <SubjectName
               style={{
                  display: activeIndex === -1 ? 'flex' : 'none',
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
   max-width: 100%;
   min-height: 45px;
   /* height: 45px; */
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
const TodoTitle = styled.p`
   /* max-width: 1fr; */
   margin: auto 0 auto 3.5px;
   font-size: 16.5px;
   /* word-wrap: break-word; */
   word-break: break-all;

   /* white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis; */

   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 2;
   overflow: hidden;
   ${media.lessThan('small')`
      font-size: 15px;
  `}
`;
const SubjectName = styled.div`
   width: auto;
   font-size: 11px;
   margin: auto 0 auto 8px;
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
