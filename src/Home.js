import {useState} from 'react'

const Home = () => {
    // let name = 'Yudai'

    const [name, setName] = useState('Yudai'); 

    const handleClick = () => {
        setName('Radagon')
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