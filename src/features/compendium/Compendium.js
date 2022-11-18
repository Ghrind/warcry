import { useSelector, useDispatch } from 'react-redux';
import { addWarrior } from '../roster/rosterSlice'
import { setAlliance, setFaction, loadData } from './compendiumSlice'
import { Container, List, Button } from 'semantic-ui-react'

export function Compendium() {
  const alliances = useSelector( (state) => [...new Set(state.compendium.warriors.map(w => w.alliance))] );
  const alliance = useSelector( (state) => state.compendium.alliance );
  const factions = useSelector( (state) => [...new Set(state.compendium.warriors.filter(warrior => warrior.alliance === alliance).map(w => w.faction))] );
  console.log(factions)
  const faction = useSelector( (state) => state.compendium.faction );
  const warriors = useSelector( (state) => state.compendium.warriors.filter(warrior => warrior.faction === faction) );
  const dispatch = useDispatch();
  return (
    <Container>
      <Button onClick={ () => dispatch(loadData()) }>Load</Button>
      <List celled horizontal>
        {alliances && alliances.map( a =>
          <List.Item>
            <Button onClick={() => dispatch(setAlliance(a))}>{a}</Button>
          </List.Item>
        )}
      </List>
      <List celled horizontal>
        {factions && factions.map( f =>
          <List.Item>
            <Button onClick={() => dispatch(setFaction(f))}>{f}</Button>
          </List.Item>
        )}
      </List>
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
                <List.Item>M: {w.move}</List.Item>
                <List.Item>T: {w.toughness}3</List.Item>
                <List.Item>HP: {w.hp}</List.Item>
              </List>
            </List.Content>
          </List.Item>
        )}
      </List>
    </Container>
  )
}

