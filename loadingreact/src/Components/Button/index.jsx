function Button(props) {
    // console.log(props);
    
    return(
        <>
        <button id={props.id}>{props.name("Hello Button")}</button>
        </>
    )
}
export default Button