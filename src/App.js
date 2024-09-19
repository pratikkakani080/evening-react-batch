import logo from "./logo.svg";
import "./App.css";
import Button from "./common/components/button";
import Input from "./common/components/input";
import { useState } from "react";

function App() {
  // your javascript will be here
  const [state, setState] = useState('test');
  const [data, setData] = useState({})
  const [count, setCount] = useState(0)

  const handleOnClick = () => {
    setState('testing')
  };
  return (
    <div className="App">
      <Input />
      {state}
      <Button className={"colorPink"} onClick={handleOnClick} />
      <Button buttonName={"First"} />
    </div>
  );
}

export default App;
