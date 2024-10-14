import { Provider } from "react-redux";
import "./App.css";
import NewRouting from "./common/components/layout/routing/newRouting";
import OldRouting from "./common/components/layout/routing/oldRouting";
import AuthContextProvider from "./common/contexts/authContext/authCOntextProvider";
import MyContextProvider from "./common/contexts/myContext/myContextProvider";
import store from "./common/redux/store";

function App() {
  return (
    <div className="App">
      {/* <OldRouting /> */}
      <Provider store={store}>
        <MyContextProvider>
          <AuthContextProvider>
            <NewRouting />
          </AuthContextProvider>
        </MyContextProvider>
      </Provider>
    </div>
  );
}

export default App;
