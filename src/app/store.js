import { configureStore } from '@reduxjs/toolkit';
import rosterReducer from '../features/roster/rosterSlice';
import compendiumReducer from '../features/compendium/compendiumSlice';

export const store = configureStore({
  reducer: {
    roster: rosterReducer,
    compendium: compendiumReducer,
  },
});
