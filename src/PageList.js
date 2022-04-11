const PageList = ({pages, title, handleDelete}) => {

    // invoke props using the props object as a parameter in component function 
    // const pages = props.pages;
    // const title = props.title;

    return ( 
        <div className="page-list">
            <h1>{title}</h1>
            {pages.map((page) => (
                <div className="page-prev" key={page.id}>
                    <h2>{page.title}</h2>
                    <p>Written by me</p>
                    <button onClick={() => handleDelete(page.id)}>Delete entry</button>
                </div>
            ))}
            {/* useState practice
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button> */}
        </div>
     );
}
 
export default PageList ;