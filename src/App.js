// import "./App.css";
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";


function App() {

	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/profile/:id" component={Profile} />
			</Switch>
		</Router>
	);
}

export default App;
