import { initialConfig } from './../constant/constant';
// // import axios from 'axios';
// import { initialConfig } from '../constant/constant';
// import { SET_ACTIVE_INDEX, TOGGLE_SEPARATE } from '../actions/index';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// type configActionType = {
//    type: string;
//    payload: {
//       index?: number;
//       separate?: boolean;
//    };
// };

// const config = (state = initialConfig, action: configActionType) => {
//    switch (action.type) {
//       case SET_ACTIVE_INDEX: {
//          return { ...state, activeIndex: action.payload.index };
//       }
//       case TOGGLE_SEPARATE: {
//          return { ...state, separate: !state.separate };
//       }
//       default: {
//          return state;
//       }
//    }
// };

// export default config;

const configSlice = createSlice({
   name: 'config',
   initialState: initialConfig,
   reducers: {
      setActiveIndex(state, action: PayloadAction<{ activeIndex: number }>) {
         state.activeIndex = action.payload.activeIndex;
      },
      toggleSeparate(state) {
         state.separate = !state.separate;
      },
   },
});

export const { setActiveIndex, toggleSeparate } = configSlice.actions;

export default configSlice.reducer;
