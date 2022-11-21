import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rosterReducer from '../features/roster/rosterSlice';
import compendiumReducer from '../features/compendium/compendiumSlice';
import runeReducer from '../features/rune/runeSlice'

const rootReducer = combineReducers({
  roster: rosterReducer,
  compendium: compendiumReducer,
  rune: runeReducer,
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({reducer: persistedReducer})
export const persistor = persistStore(store)
