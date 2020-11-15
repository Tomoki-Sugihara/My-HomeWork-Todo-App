import { createContext, Dispatch } from 'react';
import { RootState } from '../types/types';
import { initialState } from '../constant/constant';

export type Actions = {
   type: string;
   payload?: any;
};

type initialContextProps = {
   state: RootState;
   dispatch: Dispatch<Actions>;
   // dispatch: () => void;
   // dispatch: ({ type }: any) => void;
};

// const AppContext = createContext({});
const AppContext = createContext({} as initialContextProps);

export default AppContext;
