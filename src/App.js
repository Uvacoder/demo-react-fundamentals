import Navbar from './Navbar';
import Home from './Home';

function App() {
  // dynamic variables
  const title = "React dynamic variable";
  const link = "https://yudaicreator.com";
  
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        {/* using dynamic variables */}
        {/* <h1>{title}</h1>
        <a href={link}>My personal website</a> */}
      </div>
    </div>
  );
}

export default App;
