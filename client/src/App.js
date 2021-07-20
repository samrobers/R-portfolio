// import logo from "./logo.svg";
// import "./App.css";
// import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Project from "./pages/Project";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import MLB from "./pages/MLB";
import Fitness from "./pages/Fitness";
import Daily from "./pages/Daily";
import Contact from "./pages/Contact";
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
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/daily" component={Daily} />
          <Route exact path="/mlb" component={MLB} />
          <Route exact path="/fitness" component={Fitness} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
//
