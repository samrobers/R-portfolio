// import logo from "./logo.svg";
// import "./App.css";
// import Home from "./pages/Home";
import Header from "./component/Header";
import Footer from "./component/Footer";
// import Projects from "./pages/Projects";
import Project from "./pages/Project";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
