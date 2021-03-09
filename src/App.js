import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import DashboardPage from "./components/dashboard/DashboardPage";
import Nav from "./components/layout/Nav";
import "./App.css";

function App() {
	return (
		<Router>
			<Nav />

			<div className="container">
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route path="/login">
						<LoginPage />
					</Route>
					<Route path="/dashboard" exact>
						<DashboardPage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
