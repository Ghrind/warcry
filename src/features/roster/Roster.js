import { useSelector } from 'react-redux'

export function Roster() {
  const name = useSelector( (state) => state.roster.name );
  const warriors = useSelector( (state) => state.roster.warriors );
  return (
    <div>
      <h2>{name}</h2>
      <table>
      {warriors && warriors.map( w =>
        <tr>
          <td>{w.name}</td>
        </tr>
      )}
      </table>
    </div>
  )
}

