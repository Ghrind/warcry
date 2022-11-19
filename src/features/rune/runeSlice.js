import { createSlice } from '@reduxjs/toolkit'

// Runemark font is taken from https://yaktribe.games/community/vault/warcry-runemarks.1016/
const initialState = {
  mapping: {
    attacks: '',
    damage: '',
    move: '',
    range: '',
    strength: '',
    toughness: '',
    wounds: '',
    berserker: '',
    elite: '',
    champion: '',
    mystic: '',
    'ranged weapon': '',
    'reach weapon': '',
    dagger: '',
    sword: '',
    spear: '',
    blast: '',
    leader: '',
    agile: '',
    beast: '',
    fangs: '',
    warrior: '',
    ferocious: '',
    frenzied: '',
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
