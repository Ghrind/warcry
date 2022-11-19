import { useSelector } from 'react-redux';
import '../../runes.css'

export function Rune(props) {
  const character = useSelector( (state) => state.rune.mapping[props.name.toLowerCase()] );
  const className = character ? 'rune' : ''

  return (
    <span className={className}>{character ? character : props.name}</span>
  )
}
