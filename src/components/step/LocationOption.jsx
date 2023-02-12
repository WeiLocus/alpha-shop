export default function LocationOption ({options}) {
  return (
    <>
      <select required>
        {options.map((option) => {
          return <option value={option.value}>{option.name}</option>
        })}
      </select>          
    </>
  )
}