import { useSelector, useDispatch } from 'react-redux';
import { Container, List, Button } from 'semantic-ui-react'
import { WarriorListItem } from '../warriorListItem/WarriorListItem'

export function Roster() {
  const name = useSelector( (state) => state.roster.name );
  const warriors = useSelector( (state) => state.roster.warriors );
  const totalCost = warriors.map(w => w.cost).reduce((a, b) => a + parseInt(b), 0);
  const dispatch = useDispatch();
  return (
    <Container>
      <h2>{name} ({warriors.length} warriors | {totalCost}pts)</h2>
      <List>
        {warriors && warriors.map( w =>
          <WarriorListItem context="remove" warrior={w} />
        )}
      </List>
    </Container>
  )
}

