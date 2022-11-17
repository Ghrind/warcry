import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  warriors: [
    { name: 'Morgoth', cost: 45 },
    { name: 'Volkmar', cost: 75 },
  ],
};

export const compendiumSlice = createSlice({
  name: 'compendium',
  initialState
});

export default compendiumSlice.reducer;
