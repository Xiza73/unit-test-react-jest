import "./App.scss";
import { CounterApp } from "./components/CounterApp";
import { FirstApp } from "./components/FirstApp";

function App() {
  return (
    <>
      <CounterApp />
      <FirstApp
        title="Hello World"
        subtitle="This is a subtitle"
        name="Manuel"
      />
    </>
  );
}

export default App;
