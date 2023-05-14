function Header({name,id}){
    console.log(id);
    // const {name,id}=props
    return (

        <>
        <h1 id={id}>{name("Hello header")} </h1>
        </>
    )
}
export default Header