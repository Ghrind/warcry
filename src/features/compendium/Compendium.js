import { useSelector, useDispatch } from 'react-redux';
import { addWarrior } from '../roster/rosterSlice'

export function Compendium() {
  const warriors = useSelector( (state) => state.compendium.warriors );
  const dispatch = useDispatch();
  return (
    <table>
    <tbody>
      {warriors && warriors.map( w =>
        <tr>
          <td>{w.name}</td>
          <td><button onClick={ () => dispatch(addWarrior(w)) } aria-label="Add">Add</button></td>
        </tr>
      )}
      </tbody>
    </table>
  )
}

