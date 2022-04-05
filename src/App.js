import './App.css';

function App() {
  // dynamic variables
  const title = "React dynamic variable";
  const link = "https://yudaicreator.com";
  
  return (
    <div className="App">
      <div className="content">
        {/* using dynamic variables */}
        <h1>{title}</h1>
        <a href={link}>My personal website</a>
      </div>
    </div>
  );
}

export default App;
