type Props = {
  options: string[]
  name: string
}

export const Select = ({ options, name }: Props) => {
  return (
    <select name={name} id={name}>
      {options.map((option) => (
        <option value={option}>{option}</option>
      ))}
    </select>
  )
}
