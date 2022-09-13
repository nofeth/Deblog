const TitleSection = (props) => { 
    return (
        <>
            <h1 className={`text-3xl font-extrabold ${props.style}`}>{props.text}</h1>
        </>
    )
}

export default TitleSection