import { useState } from "react";
import Dropdown from "./component/Dropdown";
import Header from "./component/Header";
function App() {
  const [selected, setSelected] = useState("Select");
  return (
    <div className="App">
      {/* Custom Dropdown Menu Suing React*/}
      <Header />
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
