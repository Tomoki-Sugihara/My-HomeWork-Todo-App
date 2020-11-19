import { initialConfig } from './../constant/constant';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
