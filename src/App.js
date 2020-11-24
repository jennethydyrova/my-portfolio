import "./App.scss";

import MainNavbar from "./components/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "react-vertical-timeline-component/style.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResumePage from "./containers/ResumePage";
import Home from "./containers/Home";
import ProjectsPage from "./containers/ProjectsPage";
import SocialMediIcons from "./components/SocialMediaIcons";

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "#f2f0ec", height: "auto" }}>
        <MainNavbar />
        <SocialMediIcons />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
