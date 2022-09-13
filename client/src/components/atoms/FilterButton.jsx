const FilterButton = ({type,label,text,unique,className}) => {
  return (
    <>
        <label htmlFor={label} className={`cursor-pointer ${className}`}>{text}</label>
        <input type={type} hidden name={unique} id={label} />
    </>
  )
}

export default FilterButton