import React from "react";
// import OpenData from "./data/OpenDay.json";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contents from "./components/pages/Contents";
import InfoTech from "./components/pages/InfoTech";

const App = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/contents">
					<Contents />
				</Route>
				<Route path="/infotech">
					<InfoTech />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
