import { useSelector, useDispatch } from 'react-redux';
import { setAlliance, setFaction, loadData } from './compendiumSlice'
import { Container, List, Button } from 'semantic-ui-react'
import { WarriorListItem } from '../warriorListItem/WarriorListItem'

export function Compendium() {
  const alliances = useSelector( (state) => [...new Set(state.compendium.warriors.map(w => w.alliance))] );
  const alliance = useSelector( (state) => state.compendium.alliance );
  const factions = useSelector( (state) => [...new Set(state.compendium.warriors.filter(warrior => warrior.alliance === alliance).map(w => w.faction))] );
  const faction = useSelector( (state) => state.compendium.faction );
  const warriors = useSelector( (state) => state.compendium.warriors.filter(warrior => warrior.faction === faction) );
  const dispatch = useDispatch();
  return (
    <Container>
      <Button secondary onClick={ () => dispatch(loadData()) }>Load</Button>
      <List celled horizontal>
        {alliances && alliances.map( a =>
          <List.Item>
            <Button primary={alliance === a} onClick={() => dispatch(setAlliance(a))}>{a}</Button>
          </List.Item>
        )}
      </List>
      <br />
      <List celled horizontal>
        {factions && factions.map( f =>
          <List.Item>
            <Button primary={faction === f} onClick={() => dispatch(setFaction(f))}>{f}</Button>
          </List.Item>
        )}
      </List>
      <List divided verticalAlign="middle">
        {warriors && warriors.map( w =>
          <WarriorListItem warrior={w} />
        )}
      </List>
    </Container>
  )
}

