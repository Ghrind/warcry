import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCompendiumData } from './compendiumAPI';

const initialState = {
  alliance: "",
  faction: "",
  warriors: [],
};

export const loadData = createAsyncThunk(
  'compendium/getCompendiumData',
  async () => {
    const response = await getCompendiumData();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const compendiumSlice = createSlice({
  name: 'compendium',
  initialState,
  reducers: {
    setAlliance: (state, action) => {
      state.alliance = action.payload;
    },
    setFaction: (state, action) => {
      state.faction = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.warriors = action.payload;
      });
  },
});

export const { setAlliance, setFaction } = compendiumSlice.actions;

export default compendiumSlice.reducer;
