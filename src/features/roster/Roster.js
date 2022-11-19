import { useSelector, useDispatch } from 'react-redux';
import { Container, List, Button } from 'semantic-ui-react'
import { WarriorListItem } from '../warriorListItem/WarriorListItem'

export function Roster() {
  const roster = useSelector( (state) => state.roster );
  const totalCost = roster.warriors.map(w => w.cost).reduce((a, b) => a + parseInt(b), 0);
  const dispatch = useDispatch();
  return (
    <Container>
      <h2>{roster.name} ({roster.warriors.length} warriors | {totalCost}pts)</h2>
      <h3>{roster.faction} ({roster.alliance})</h3>
      <List>
        {roster.warriors && roster.warriors.map( w =>
          <WarriorListItem context="remove" warrior={w} />
        )}
      </List>
    </Container>
  )
}

