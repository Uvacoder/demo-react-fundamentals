const PageList = (props) => {
    const pages = props.pages;

    return ( 
        <div className="page-list">
            {pages.map((page) => (
                <div className="page-prev" key={page.id}>
                    <h2>{page.title}</h2>
                    <p>Written by me</p>
                </div>
            ))}
            {/* useState practice
            <p>{name}</p>
            <button onClick={handleClick}>Click me</button> */}
        </div>
     );
}
 
export default PageList ;