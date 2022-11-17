import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  warriors: [
    { name: 'Morgoth' }
  ],
};

export const compendiumSlice = createSlice({
  name: 'compendium',
  initialState
});

export default compendiumSlice.reducer;
