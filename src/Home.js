import {useState, useEffect} from 'react'
import PageList from './PageList';
import useFetch from './useFetch';

const Home = () => {
    
    const {data: pages, isPending} = useFetch('http://localhost:8000/pages')
    // [
    //     {title: 'React Components' , body: 'lorem ipsum...', id: 1},
    //     {title: 'JSX Syntax' , body: 'lorem ipsum...', id: 2},
    //     {title: 'Using styles' , body: 'lorem ipsum...', id: 3},
    // ]
    

    // const handleDelete = (id) => {
    //     const newPages = pages.filter(page => page.id !== id);
    //     setPages(newPages);
    // }

    // useState practice
    // const [name, setName] = useState('Yudai'); 
    // const handleClick = () => {
    //     setName('Radagon')
    // }


    return ( 
        <div className="home">
            {isPending && <div>Loading...</div>}
            {pages && <PageList pages={pages} title="All pages" />}
            {/* <PageList pages={pages.filter((page) => page.title === 'JSX Syntax')} title="JSX"/> */}


            {/* useState practice
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button> */}
        </div>
     );
}
 
export default Home;