import React from "react";
// import OpenData from "./data/OpenDay.json";
import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dentistry from "./pages/Dentistry/Dentistry.js";
import InfoTech from "./pages/InfoTech/InfoTech.js";

const App = () => {
	return (
		<div className="App">
			<Router>
				<SideBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/dentistry" component={Dentistry} />
					<Route path="/infotech" component={InfoTech} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
