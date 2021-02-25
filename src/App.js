import About from "./components/About";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <h1 style={{ textAlign: "center", paddingTop: "5em" }}>PROJECTS</h1>
      <Projects />
      <Contacts />
    </div>
  );
}

export default App;
