import React from 'react';
import styled from 'styled-components';

import Checkbox from '@material-ui/core/Checkbox';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const TodoItem = props => {
   return (
      <Wrapper>
         <Checkbox
            icon={<RadioButtonUncheckedIcon color="primary" />}
            checkedIcon={<CheckCircleOutlineIcon color="primary" />}
            name="checkedH"
            color="primary"
         />
         <Li>{props.todo.title}</Li>
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
export default TodoItem;
