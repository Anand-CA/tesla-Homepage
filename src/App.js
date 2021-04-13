import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function App() {
  return (
    //   BEM
    <div className="app">
      <div className="app__container">
        <Header />
        <Body id="section-1" title="Model S" bgImage="./Desktop-ModelS.jpeg" />
        <Body id="section-2" title="Model 3" bgImage="./Desktop-Model3.jpeg" />
        <Body id="section-3" title="Model X" bgImage="./Desktop-ModelX.jpeg" />
        <Body id="section-4" title="Model Y" bgImage="./Desktop-ModelY.jpeg" />
      </div>
    </div>
  );
}

export default App;
