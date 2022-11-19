import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  mapping: {
    attacks: '2',
    damage: '3',
    move: '4',
    range: '5',
    strength: '6',
    toughness: '7',
    wounds: '8',
    berserker: 'd',
    elite: ';',
    champion: 'h',
    mystic: 'v',
    'ranged weapon': 'u',
    'reach weapon': 'w',
    dagger: 't',
    sword: '[',
    spear: 'o',
    blast: '=',
  }
};

export const runeSlice = createSlice({
  name: 'rune',
  initialState,
  reducers: {
  }
});

export const { } = runeSlice.actions;

export default runeSlice.reducer;
