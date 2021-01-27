import classes from "./App.module.css";
import ActiveChat from "./components/activeChat/activeChat"

function App() {
  return (
    <div className={classes.App}>
      <ActiveChat></ActiveChat>
      <h1>Welcome to iHola!, alphaSquad</h1>
    </div>
  );
}

export default App;
