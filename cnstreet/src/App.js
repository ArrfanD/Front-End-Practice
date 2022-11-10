import React from 'react'
import "./App.css";
import Community from "./Components/community/Community";
import Food from "./Components/food/Food";
import Main from "./Components/main/Main";
import Retail from "./Components/retail/Retail";

function App() {
  let [main, setMain] = React.useState(true);
  let [food, setFood] = React.useState(false);
  let [retail, setRetail] = React.useState(false);
  let [community, setCommunity] = React.useState(false);
  console.log("app food boolean: ",food)

  return (
    <div className="App">
      <div className="main">
        <Main setMain={setMain}/>
      </div>
      <div className={food ? "foodShift" : "food"}>
        <Food setFood={setFood}/>
      </div>
      <div className={!retail ? "retail" : "retailShift"}>
        <Retail setRetail={setRetail}/>
      </div>
      <div className={!community ? "community" : "communityShift"}>
        <Community setCommunity={setCommunity}/>
      </div>
    </div>
  );
}

export default App;
