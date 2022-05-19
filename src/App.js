import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contents from "./components/pages/Contents";
import Courses from "./components/pages/Courses";
import Subject from "./components/pages/Subject";

const App = () => {
	const [searchTerm, setSearchTerm] = useState("");

	const handleSearchInput = (e) => {
		setSearchTerm(e.target.value);
	};

	// const renderAllCourses = beers.map((beer) => {
	// 	return (
	// 		<Card key={beer.id} beer={beer} handleFavourites={handleFavourites} />
	// 	);
	// });
	// // useEffect(() => {
	// // 	OpenData();
	// // }, [searchTerm]);

	return (
		<>
			<Router>
				<NavBar handleSearchInput={handleSearchInput} />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/contents">
						<Contents />
					</Route>
					<Route path="/courses">
						<Courses />
					</Route>
					<Route path="/subject">
						<Subject />
					</Route>
				</Switch>
			</Router>
		</>
	);
};

export default App;
