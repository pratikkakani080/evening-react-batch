import logo from "./logo.svg";
import "./App.css";
import Button from "./common/components/button";
import Input from "./common/components/input";

function App() {
  // your javascript will be here
  return (
    <div className="App">
      <Input />

      <Button className={"colorPink"} />
      <Button buttonName={"First"} />
    </div>
  );
}

export default App;
