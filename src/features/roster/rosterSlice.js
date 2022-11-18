import { createSlice } from '@reduxjs/toolkit'
import { v1 as uuidv1 } from 'uuid'

const initialState = {
  name: 'Unnamed Roster',
  warriors: [
  ],
};

export const rosterSlice = createSlice({
  name: 'roster',
  initialState,
  reducers: {
    addWarrior: (state, action) => {
      var warrior = action.payload;
      const rosterWarrior = {...warrior, ...{ id: uuidv1() }};
      state.warriors.push(rosterWarrior);
    },
    removeWarrior: (state, action) => {
      state.warriors = state.warriors.filter(warrior => warrior.id != action.payload);
    },
  }
});

export const { addWarrior, removeWarrior } = rosterSlice.actions;

export default rosterSlice.reducer;
