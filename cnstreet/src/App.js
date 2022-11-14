import React, { useEffect } from "react";
import "./App.css";
import Community from "./Components/community/Community";
import Food from "./Components/food/Food";
import Main from "./Components/main/Main";
import Retail from "./Components/retail/Retail";

function App() {
  let [section, setSection] = React.useState("main");
  let [main, setMain] = React.useState(true);
  let [food, setFood] = React.useState(false);
  let [retail, setRetail] = React.useState(false);
  let [community, setCommunity] = React.useState(false);

  useEffect(() => {
    if (section === "retail") {
      setMain(false);
      setFood(false);
      setCommunity(false);
      setRetail(true)
    } else if (section === "community") {
      setMain(false);
      setFood(false);
      setRetail(false);
      setCommunity(true)
    } else if (section === "main") {
      setMain(true)
      setCommunity(false)
      setFood(false)
      setRetail(false)
    } else if (section === "food") {
      setFood(true)
      setCommunity(false)
      setMain(false)
      setRetail(false)
    }
  });

  console.log("main :- ",main)
  console.log("food :- ",food)
  console.log("retail :- ",retail)
  console.log("community :- ",community)

  return (
    <div className="App">
      <div className={main ? "main" : "mainShift"}>
        <Main setSection={setSection} />
      </div>
      <div className={food ? "foodShift" : "food"}>
        <Food setSection={setSection} />
      </div>
      <div className={retail ? "retailShift" : "retail"}>
        <Retail setSection={setSection} />
      </div>
      <div className={community ? "communityShift" : "community"}>
        <Community setSection={setSection} />
      </div>
    </div>
  );
}

export default App;
