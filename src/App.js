import { UserProvider } from "./Components/UserContext";
import "./App.css";
import ComponentC from "./Components/ComponentC";

function App() {
  return (
    <div className="App">
      <UserProvider value="hewr">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
