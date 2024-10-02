import "./App.css";
import NewRouting from "./common/components/layout/routing/newRouting";
import OldRouting from "./common/components/layout/routing/oldRouting";
import AuthContextProvider from "./common/contexts/authContext/authCOntextProvider";
import MyContextProvider from "./common/contexts/myContext/myContextProvider";

function App() {
  return (
    <div className="App">
      {/* <OldRouting /> */}
      <MyContextProvider>
        <AuthContextProvider>
          <NewRouting />
        </AuthContextProvider>
      </MyContextProvider>
    </div>
  );
}

export default App;
