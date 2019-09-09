//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Navbar } from "./component/home.js";
import { MainPanel } from "./component/home.js";
import { Cards } from "./component/home.js";

//render your react application
ReactDOM.render(
	<div>
		<Navbar />
		<MainPanel />
		<Cards />
	</div>,
	document.querySelector("#app")
);
