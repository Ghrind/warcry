import { configureStore } from '@reduxjs/toolkit';
import rosterReducer from '../features/roster/rosterSlice';
import compendiumReducer from '../features/compendium/compendiumSlice';
import runeReducer from '../features/rune/runeSlice'

export const store = configureStore({
  reducer: {
    roster: rosterReducer,
    compendium: compendiumReducer,
    rune: runeReducer,
  },
});
