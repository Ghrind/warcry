import { useDispatch } from 'react-redux';
import { addWarrior, removeWarrior } from '../roster/rosterSlice'
import { List, Button } from 'semantic-ui-react'

export function WarriorListItem(props) {
  const dispatch = useDispatch();

  return (
    <List.Item>
      <List.Header>
        {props.warrior.name}
      </List.Header>
      <List.Content floated="right">
        {props.context === "remove"
          ? <Button onClick={ () => dispatch(removeWarrior(props.warrior.id)) }>Remove</Button>
          : <Button onClick={ () => dispatch(addWarrior(props.warrior)) }>+{props.warrior.cost}pts</Button>
        }
        
      </List.Content>
      <List.Content>
        <List celled horizontal>
          <List.Item>M: {props.warrior.move}</List.Item>
          <List.Item>T: {props.warrior.toughness}3</List.Item>
          <List.Item>HP: {props.warrior.hp}</List.Item>
        </List>
      </List.Content>
    </List.Item>
  )
}

// <button onClick={ () => dispatch(removeWarrior(w.id))}>Remove</button>
