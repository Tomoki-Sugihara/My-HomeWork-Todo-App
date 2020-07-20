import React, { useContext } from 'react';
import AppContext from '../contexts/AppContext';

import styled from 'styled-components';
// import media from 'styled-media-query';

import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
const MenuWindow = () => {
   const { state, setState } = useContext(AppContext);
   const deleteSubject = () => {
      // console.log('ok');
      // const newTodoList = { ...state.todoList };
      // newTodoList.filter(todoItem => {
      //    return todoItem.subjectIndex === state.activeSubjectIndex;
      // });
      // const newState = { ...state, todoList: newTodoList };
      // const newState = { ...state };
      // console.log(newState.subjectList);
      // newState.subjectList.splice(state.activeSubjectIndex, 1);
      // console.log(newState);

      // setState(prevState => {
      //    const newSubjectList = prevState.subjectList.splice(
      //       // 2,
      //       prevState.activeSubjectIndex,
      //       1
      //    );
      //    const isActiveSubject = todoItem => {
      //       return todoItem.subjectIndex !== prevState.activeSubjectIndex;
      //    };
      //    const newTodoList = prevState.todoList.filter(isActiveSubject);
      //    return {
      //       ...prevState,
      //       activeSubjectIndex: undefined,
      //       subjectList: newSubjectList,
      //       // subjectList: [{ title: 'English' }, { title: '理科' }],
      //       todoList: newTodoList,
      //    };
      // });

      const newState = { ...state };
      newState.todoList.filter(todoItem => {
         return todoItem.subjectIndex !== state.activeSubjectIndex;
      });
      newState.subjectList.splice(state.activeSubjectIndex, 1);
      newState.subjectList.splice(2, 1);
      newState.activeSubjectIndex = undefined;
      setState(newState);
   };
   return (
      <>
         <Wrapper>
            <MenuItem onClick={deleteSubject}>
               <div className="container">
                  <DeleteIcon>
                     <DeleteOutlineOutlinedIcon
                        color="secondary"
                        fontSize="small"
                     ></DeleteOutlineOutlinedIcon>
                  </DeleteIcon>
                  <p>このsubjectを削除</p>
               </div>
            </MenuItem>
         </Wrapper>
      </>
   );
};

const Wrapper = styled.div``;
const MenuItem = styled.div`
   :hover {
      cursor: pointer;
      background-color: rgb(50, 50, 50);
   }
   .container {
      display: flex;
      width: 92%;
      height: 42px;
      margin: 0 auto;
      p {
         margin: auto;
         font-size: 12px;
         color: red;
      }
   }
`;
const DeleteIcon = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export default MenuWindow;
