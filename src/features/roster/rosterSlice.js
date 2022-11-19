import { createSlice } from '@reduxjs/toolkit'
import { v1 as uuidv1 } from 'uuid'

const initialState = {
  name: 'Unnamed Roster',
  alliance: '',
  faction: '',
  warriors: [
  ],
};

export function warriorHasKeyword(warrior, keyword) {
  return warrior.keywords.split(',').map( kw => kw.toLowerCase() ).includes(keyword);
}

function updateLeader(state) {
  var leader = state.warriors.filter( w => w.leader )[0]

  if (leader === undefined ) {
    state.faction = '';
    state.alliance = '';
  }

  // Leaders must have the champion runemark and not be an ally
  var leader = state.warriors.filter(w => warriorHasKeyword(w, 'champion') && (state.faction === '' || w.faction === state.faction))[0];

  if ( leader ) {
    state.faction = leader.faction;
    state.alliance = leader.alliance;
    leader.leader = true;
  }

}

export const rosterSlice = createSlice({
  name: 'roster',
  initialState,
  reducers: {
    addWarrior: (state, action) => {
      var warrior = action.payload;
      const rosterWarrior = {...warrior, ...{ id: uuidv1() }};
      state.warriors.push(rosterWarrior);
      updateLeader(state);
    },
    removeWarrior: (state, action) => {
      state.warriors = state.warriors.filter(warrior => warrior.id != action.payload);
      updateLeader(state);
    },
  }
});

export const { addWarrior, removeWarrior } = rosterSlice.actions;

export default rosterSlice.reducer;
