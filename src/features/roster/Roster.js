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
        {allies.length <= 2
          ? <List.Item>
              <List.Icon color="green" name="check circle" />
              <List.Content>Your band has 2 allies or less</List.Content>
            </List.Item>
          : <List.Item>
              <List.Icon color="red" name="exclamation circle" />
              <List.Content>Your band has more than 2 allies</List.Content>
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

