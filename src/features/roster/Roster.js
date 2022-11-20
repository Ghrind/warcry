import { useSelector, useDispatch } from 'react-redux';
import { Container, List, Button, Header, Divider } from 'semantic-ui-react'
import { WarriorListItem } from '../warriorListItem/WarriorListItem'
import { warriorHasKeyword } from './rosterSlice'

export function Roster() {
  const roster = useSelector( (state) => state.roster );
  const totalCost = roster.warriors.map(w => w.cost).reduce((a, b) => a + parseInt(b), 0);
  const dispatch = useDispatch();
  const leader = roster.warriors.filter(w => w.leader)[0]
  const champions = roster.warriors.filter(w => warriorHasKeyword(w, 'champion'))
  const allies = roster.warriors.filter(w => w.faction !== roster.faction)

  // Bladeborn fighters without a champion mark can only be added as allies if
  // a the bladeborn champion has been added. And in that case they don't
  // count toward the allies limit.
  const alliesForLimit = allies.filter(w => warriorHasKeyword(w, 'champion'))

  const availableBladeborn = roster.warriors.filter(w => warriorHasKeyword(w, 'champion')).map(w => w.bladeborn).filter(b => b !== '')

  // Detects bladeborn fighters that are no more valid in the roster. IE: when
  // they've been added when they champion was in the roster and their champion
  // was then removed from the roster.
  const illicitBladebornFighters = roster.warriors.some(w => w.faction !== roster.faction && w.bladeborn !== '' && !availableBladeborn.includes(w.bladeborn))

  return (
    <Container>
      <h2>{roster.name} ({roster.warriors.length} warriors | {totalCost}pts)</h2>
      <h3>{roster.faction} ({roster.alliance})</h3>
      <List>
        {totalCost <= 1000
          ? <List.Item>
              <List.Icon color="green" name="check circle" />
              <List.Content>Your band is 1000pts or less</List.Content>
            </List.Item>
          : <List.Item>
              <List.Icon color="red" name="exclamation circle" />
              <List.Content>Your band is more than 1000pts</List.Content>
            </List.Item>}
        {leader
          ? <List.Item>
              <List.Icon color="green" name="check circle" />
              <List.Content>Your band has a leader</List.Content>
            </List.Item>
          : <List.Item>
              <List.Icon color="red" name="exclamation circle" />
              <List.Content>Your band has no leader</List.Content>
            </List.Item>}
        {champions.length <= 3
          ? <List.Item>
              <List.Icon color="green" name="check circle" />
              <List.Content>Your band has 3 heroes or less</List.Content>
            </List.Item>
          : <List.Item>
              <List.Icon color="red" name="exclamation circle" />
              <List.Content>Your band has more than 3 heroes</List.Content>
            </List.Item>}
        {alliesForLimit.length <= 2
          ? <List.Item>
              <List.Icon color="green" name="check circle" />
              <List.Content>Your band has 2 allies or less</List.Content>
            </List.Item>
          : <List.Item>
              <List.Icon color="red" name="exclamation circle" />
              <List.Content>Your band has more than 2 allies</List.Content>
            </List.Item>}
         {illicitBladebornFighters &&
           <List.Item>
             <List.Icon color="red" name="exclamation circle" />
             <List.Content>You include bladeborn fighters without including their champion</List.Content>
           </List.Item>}
      </ List>
      <Header as="h4">Heroes</Header>
      <List>
        {champions.filter(w => !allies.includes(w)).map( w =>
          <WarriorListItem context="remove" warrior={w} />
        )}
      </List>
      <Divider />
      <Header as="h4">Warriors</Header>
      <List>
        {roster.warriors.filter(w => !champions.includes(w) && !allies.includes(w)).map( w =>
          <WarriorListItem context="remove" warrior={w} />
        )}
      </List>
      <Divider />
      <Header as="h4">Allies</Header>
      <List>
        {allies.map( w =>
          <WarriorListItem context="remove" warrior={w} />
        )}
      </List>
    </Container>
  )
}

