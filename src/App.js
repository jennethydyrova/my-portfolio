import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.scss";
import MainNavbar from "./components/Navbar";
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
      <div style={{ backgroundColor: "#FBF7F4", height: "auto" }}>
        <div style={{ backgroundColor: "#8c5e58" }}>
          <MainNavbar />
        </div>

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
