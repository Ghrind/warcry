import { useSelector, useDispatch } from 'react-redux';
import { addWarrior } from '../roster/rosterSlice'
import { List, Button } from 'semantic-ui-react'

export function Compendium() {
  const warriors = useSelector( (state) => state.compendium.warriors );
  const dispatch = useDispatch();
  return (
    <List divided verticalAlign="middle">
      {warriors && warriors.map( w =>
        <List.Item>
          <List.Header>
            {w.name}
          </List.Header>
          <List.Content floated="right">
            <Button onClick={ () => dispatch(addWarrior(w)) } aria-label="Add">+{w.cost}pts</Button>
          </List.Content>
          <List.Content>
            <List celled horizontal>
              <List.Item>S: 3</List.Item>
              <List.Item>HP: 12</List.Item>
            </List>
          </List.Content>
        </List.Item>
      )}
    </List>
  )
}

