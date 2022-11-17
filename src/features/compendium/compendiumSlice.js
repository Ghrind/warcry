import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  alliance: "Order",
  alliances: ["Order", "Destruction", "Death", "Chaos"],
  factions: [
    { name: "Slaves to Darkness", alliance: "Chaos" },
    { name: "Blades of Khorne", alliance: "Chaos" },
    { name: "Khainite Shadowstalkers", alliance: "Order" },
  ],
  warriors: [
    { faction: "Slaves to Darkness", name: 'Chaos Spawn', cost: 45, move: 4, toughness: 3, hp: 12 },
    { faction: "Slaves to Darkness", name: 'Exalted Champion of Chaos', cost: 75, move: 6, toughness: 4, hp: 20 },
    { faction: "Blades of Khorne", name: 'Bloodreaper', cost: 75, move: 6, toughness: 4, hp: 20 },
    { faction: "Khainite Shadowstalkers", name: 'Dark Elf', cost: 75, move: 6, toughness: 4, hp: 20 },
  ],
};

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
  }
});

export const { setAlliance, setFaction } = compendiumSlice.actions;

export default compendiumSlice.reducer;
