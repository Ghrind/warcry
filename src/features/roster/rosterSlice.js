import { createSlice } from '@reduxjs/toolkit'
import { v1 as uuidv1 } from 'uuid'

const initialState = {
  name: 'Warriors of the world',
  warriors: [
    { id: 'foobard', name: 'Morgoth' }
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
