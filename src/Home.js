const Home = () => {
    let name = 'Yudai'

    const handleClick = () => {
        console.log('Hola mijo')
    }
    return ( 
        <div className="home">
            <h2>Home</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}
 
export default Home;