import React, { useState } from 'react';
import AppContext from '../contexts/AppContext'

import SideMenus from './SideMenus';
import Header from './Header';
import TodoLists from './TodoLists';
import CreateNewTodo from './CreateNewTodo';

function App() {
   const [state, setState] = useState({todoList: []});
   return (
      <>
         <AppContext.Provider value={{state}}>
            <SideMenus />
            <Header />
            <TodoLists />
            <CreateNewTodo />
         </AppContext.Provider>
      </>
   );
}

export default App;
