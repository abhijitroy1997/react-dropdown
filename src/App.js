import { useState } from "react";
import Dropdown from "./component/Dropdown";
import Home from "./component/Home";
function App() {
  const [selected, setSelected] = useState("Select");
  return (
    <div className="App">
      {/* Custom Dropdown Menu Suing React*/}
      <Home />
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
