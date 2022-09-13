const FilterButton = ({type,id,text,name,className}) => {
  return (
    <>
        <label htmlFor={id} className={`cursor-pointer ${className}`}>{text}</label>
        <input type={type} hidden name={name} id={id} />
    </>
  )
}

export default FilterButton