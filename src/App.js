
import TextDisplay from "./Gpt-display"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://www.itv.com/presscentre/sites/default/files/styles/max_width_double/public/itv_studios_1.jpg?itok=Kf2Ws5Rk"} 
        style={{width:"800px",height:"600px"}} 
        alt={"itv"} />
        <p>
         Ask a question about ITV Compass:
        </p>
        <TextDisplay/>
      </header>
    </div>
  );
}

export default App;
