// import logo from "./logo.svg";
// import "./App.css";
// import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Project from "./pages/Project";
import About from "./pages/About";
import Home from "./pages/Home";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
