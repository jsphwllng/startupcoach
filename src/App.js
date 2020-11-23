import "bootstrap/dist/css/bootstrap.min.css";
import FirstPane from "./components/firstpane.component";
import SecondPane from "./components/secondpane.component";
import ThirdPane from "./components/thirdpane.component";
import FourthPane from "./components/fourthpane.component";
import FithPane from "./components/fithpane.component";
import "./index.css"

function App() {
  return (
    // the first orange one
    <div
      style={{
        width: "100%",
        height: "100%;",
        margin: "0px;",
        padding: "0px;",
        overflow: "hidden",
      }}
    >
      <FirstPane />
      <SecondPane />
      <ThirdPane />
      <FourthPane />
      <FithPane />
    </div>
    //
  );
}

export default App;
