import { useDispatch, useSelector } from 'react-redux';
import { addWarrior, removeWarrior } from '../roster/rosterSlice'
import { List, Button } from 'semantic-ui-react'
import { Rune } from '../rune/Rune'
import { warriorHasKeyword } from '../roster/rosterSlice'

function warriorIsSelectable(roster, warrior) {
  if (roster.faction === '' || warrior.faction === roster.faction) {
    return true
  }

  if (warriorHasKeyword(warrior, 'champion') && warrior.alliance === roster.alliance) {
    return true
  }

  return false
}

export function WarriorListItem(props) {
  const dispatch = useDispatch();
  const roster = useSelector( (state) => state.roster );

  return (
    <List.Item>
      <List.Header>
        {props.warrior.name}
      </List.Header>
      <List.Content floated="right">
        {props.context === "remove"
          ? <Button onClick={ () => dispatch(removeWarrior(props.warrior.id)) }>Remove</Button>
          : <Button disabled={!warriorIsSelectable(roster, props.warrior)} onClick={ () => dispatch(addWarrior(props.warrior)) }>+{props.warrior.cost}pts</Button>
        }
      </List.Content>
      <List.Content>
        <List celled horizontal>
          <List.Item><Rune name="move" /> {props.warrior.move}</List.Item>
          <List.Item><Rune name="toughness" /> {props.warrior.toughness}3</List.Item>
          <List.Item><Rune name="wounds" /> {props.warrior.hp}</List.Item>
          <List.Item>
            {props.warrior.leader && <Rune name="leader" />}
            {props.warrior.keywords.split(',').map( (kw) => <span><Rune name={kw} /> </span> )}
          </List.Item>
        </List>
        <br />
        <List celled horizontal>
          <List.Item><Rune name={props.warrior.attack1_type} /></List.Item>
          <List.Item><Rune name="range" /> {props.warrior.attack1_range}</List.Item>
          <List.Item><Rune name="attacks" /> {props.warrior.attack1_attacks}</List.Item>
          <List.Item><Rune name="strength" /> {props.warrior.attack1_strength}</List.Item>
          <List.Item><Rune name="damage" /> {props.warrior.attack1_damage}</List.Item>
        </List>
        <br />
        {props.warrior.attack2_type &&
          <List celled horizontal>
            <List.Item><Rune name={props.warrior.attack2_type} /></List.Item>
            <List.Item><Rune name="range" /> {props.warrior.attack2_range}</List.Item>
            <List.Item><Rune name="attacks" /> {props.warrior.attack2_attacks}</List.Item>
            <List.Item><Rune name="strength" /> {props.warrior.attack2_strength}</List.Item>
            <List.Item><Rune name="damage" /> {props.warrior.attack2_damage}</List.Item>
          </List>
        }
      </List.Content>
    </List.Item>
  )
}
