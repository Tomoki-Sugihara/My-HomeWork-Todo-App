import React from 'react';
import styled from 'styled-components';
// import { color as c } from '../../constant/color';

import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { getActiveIndex, getSeparate } from '../../selector';
import { useSelector, useDispatch } from 'react-redux';
import { pergeTasks, pergeTodoItem } from '../../reducers/todoList';
import { deleteSubject as deleteSubjectItem } from '../../reducers/subjectList';
import { setActiveIndex, toggleSeparate } from '../../reducers/config';

const MenuWindow = () => {
   // const { state, dispatch } = useContext(AppContext);
   const selector = useSelector(state => state);
   const subjectList = selector.subjectList;
   const activeIndex = getActiveIndex(selector);
   const separate = getSeparate(selector);

   const dispatch = useDispatch();
   // const activeIndex = state.config.activeIndex;

   const handleClickDeleteSubject = () => {
      if (activeIndex === -2) {
         deleteTasks();
      } else {
         deleteSubject();
      }
   };

   const deleteTasks = () => {
      dispatch(pergeTasks());
   };

   const deleteSubject = () => {
      dispatch(pergeTodoItem({ subjectKey: subjectList[activeIndex].key }));
      dispatch(deleteSubjectItem({ activeIndex }));
      dispatch(setActiveIndex({ activeIndex: -1 }));
   };
   const handleClickToggleSeparate = () => {
      dispatch(toggleSeparate());
   };

   const isThisDisplayed = () => activeIndex !== -1;
   return (
      <Wrapper>
         <ToggleSeparate onClick={handleClickToggleSeparate}>
            <div className="container">
               <p>完了済みを{separate ? '分けない' : '分ける'}</p>
            </div>
         </ToggleSeparate>
         <DeleteSubject
            onClick={handleClickDeleteSubject}
            style={{ display: isThisDisplayed() ? 'block' : 'none' }}
         >
            <div className="container">
               <p>このリストを削除</p>
               <DeleteIcon>
                  <DeleteOutlineOutlinedIcon
                     color="secondary"
                     fontSize="small"
                  ></DeleteOutlineOutlinedIcon>
               </DeleteIcon>
            </div>
         </DeleteSubject>
      </Wrapper>
   );
};

const Wrapper = styled.div``;
const MenuItem = styled.div`
   background-color: rgb(25, 25, 25);
   .container {
      display: flex;
      width: 92%;
      height: 42px;
      margin: 0 auto;
      > p {
         margin: auto;
         font-size: 12px;
      }
   }
`;
const DeleteSubject = styled(MenuItem)`
   :hover {
      cursor: pointer;
      background-color: rgb(70, 20, 0);
      transition: 0.3s;
   }
   .container {
      > p {
         color: red;
      }
   }
`;
const ToggleSeparate = styled(MenuItem)`
   :hover {
      cursor: pointer;
      background-color: rgb(50, 50, 50);
      transition: 0.3s;
   }
`;
const DeleteIcon = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

export default MenuWindow;
