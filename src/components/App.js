import React from 'react';

import SideMenus from './SideMenus';
import Header from './Header';
import TodoLists from './TodoLists';
import CreateNewTodo from './CreateNewTodo';

function App() {
   return (
      <>
         <SideMenus />
         <Header />
         <TodoLists />
         <CreateNewTodo />
      </>
   );
}

export default App;
