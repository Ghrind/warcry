import { useSelector, useDispatch } from 'react-redux';
import { removeWarrior } from './rosterSlice'

export function Roster() {
  const name = useSelector( (state) => state.roster.name );
  const warriors = useSelector( (state) => state.roster.warriors );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{name}</h2>
      <table>
      <tbody>
        {warriors && warriors.map( w =>
          <tr>
            <td>{w.id}</td>
            <td>{w.name}</td>
            <td><button onClick={ () => dispatch(removeWarrior(w.id))}>Remove</button></td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  )
}

