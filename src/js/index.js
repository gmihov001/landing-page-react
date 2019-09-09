//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

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
		<Cards
			text1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
			text2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
			text3="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
			text4="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto."
			imageUrl="https://via.placeholder.com/500x325"
		/>
	</div>,
	document.querySelector("#app")
);
