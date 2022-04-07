import "./App.css";
import Editor from "rich-markdown-editor";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "70vw", height: "70vh", border: "2px solid black" }}>
        <Editor dark={true} placeholder={'Write something here'}/>
      </div>
    </div>
  );
}

export default App;
