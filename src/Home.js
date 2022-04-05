import {useState} from 'react'

const Home = () => {
    
    const [pages, setPages] = useState([
        {title: 'React Components' , body: 'lorem ipsum...', id: 1},
        {title: 'JSX Syntax' , body: 'lorem ipsum...', id: 2},
        {title: 'Using styles' , body: 'lorem ipsum...', id: 3},
    ]);


    // useState practice
    // const [name, setName] = useState('Yudai'); 
    // const handleClick = () => {
    //     setName('Radagon')
    // }
    return ( 
        <div className="home">
            {pages.map((page) => (
                <div className="page-prev" key={page.id}>
                    <h2>{page.title}</h2>
                    <p>Written by me boss</p>
                </div>
            ))}
            {/* useState practice
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button> */}
        </div>
     );
}
 
export default Home;