import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'Warriors of the world',
  warriors: [
    { name: 'Morgoth' }
  ],
};

export const rosterSlice = createSlice({
  name: 'roster',
  initialState,
  reducers: {
    addWarrior: (state, action) => {
      state.warriors.push(action.payload);
    },
    removeWarrior: (state, action) => {
      state.warriors = state.warrior.filter(warrior => warrior.id == action.payload);
    },
  }
});

export const { addWarrior } = rosterSlice.actions;

export default rosterSlice.reducer;
