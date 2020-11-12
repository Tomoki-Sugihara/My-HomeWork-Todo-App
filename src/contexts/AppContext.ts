import { createContext } from 'react';
import { RootState } from '../types/types';
import { initialState } from '../constant/constant';

type initialContextProps = {
   state: RootState;
   dispatch: any;
};

const AppContext = createContext({} as initialContextProps);

export default AppContext;
