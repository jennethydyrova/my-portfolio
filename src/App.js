import "./App.scss";
import MainNavbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResumePage from "./containers/ResumePage";
import AboutPage from "./containers/AboutPage";
import ProjectsPage from "./containers/ProjectsPage";
import ContactPage from "./containers/ContactPage";

function App() {
  return (
    <div>
      <MainNavbar />
      <Router>
        <Switch>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
