import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="Textutils" aboutText="About textutils" />
      <div className="container">
        <TextArea heading="Enter your text here" />
      </div>
    </>
  );
}

export default App;
