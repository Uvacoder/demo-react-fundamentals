const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>React Fundamentals</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New page</a>

                {/* inline styles */}
                {/* <a href="/" style={{
                    color: "white",
                    backgroundColor: '#150050',
                    borderRadius: '8px'
                }}>Try inline styles</a> */}
            </div>
        </nav>
     );
}
 
export default Navbar;