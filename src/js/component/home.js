import React from "react";
import PropType from "prop-types";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<div className="w-75 mx-auto d-inline-flex">
					<div className="mr-auto">
						<a className="navbar-brand text-white" href="#">
							Start Bootstrap
						</a>
					</div>
					<div className="navbar-nav text-right ml-auto">
						<a className="nav-item nav-link text-white" href="#">
							Home
						</a>
						<a
							className="nav-item nav-link text-secondary"
							href="#">
							About
						</a>
						<a
							className="nav-item nav-link text-secondary"
							href="#">
							Services
						</a>
						<a
							className="nav-item nav-link disabled text-secondary"
							href="#">
							Contact
						</a>
					</div>
				</div>
			</nav>
		);
	}
}

export class MainPanel extends React.Component {
	render() {
		return (
			<div className="card w-75 bg-light mx-auto mt-4 mb-4 pt-4 pb-4">
				<div className="card-body">
					<h1 className="card-title display-4">A Warm Welcome!</h1>
					<p className="card-text lead">
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Ipsa, ipsam, eligendi, in quo sunt possimus non
						incidunt odit vero aliquid similique quaerat nam nobis
						illo aspernatur vitae fugiat numquam repellat.
					</p>
					<a href="#" className="btn btn-primary lead">
						Call to action!
					</a>
				</div>
			</div>
		);
	}
}

export class Cards extends React.Component {
	render() {
		return (
			<div className="card-group w-75 mx-auto">
				<div className="card mr-3 border rounded">
					<img
						className="card-img-top"
						src={this.props.imageUrl}
						alt="Card image cap"
					/>
					<div className="card-body text-center">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">{this.props.text1}</p>
					</div>
					<div className="card-footer text-center">
						<a href="#" className="btn btn-primary">
							Button
						</a>
					</div>
				</div>
				<div className="card ml-3 mr-3 border rounded">
					<img
						className="card-img-top"
						src={this.props.imageUrl}
						alt="Card image cap"
					/>
					<div className="card-body text-center">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">{this.props.text2}</p>
					</div>
					<div className="card-footer text-center">
						<a href="#" className="btn btn-primary">
							Button
						</a>
					</div>
				</div>
				<div className="card ml-3 mr-3 border rounded">
					<img
						className="card-img-top"
						src={this.props.imageUrl}
						alt="Card image cap"
					/>
					<div className="card-body text-center">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">{this.props.text3}</p>
					</div>
					<div className="card-footer text-center">
						<a href="#" className="btn btn-primary">
							Button
						</a>
					</div>
				</div>
				<div className="card ml-3 border rounded">
					<img
						className="card-img-top"
						src={this.props.imageUrl}
						alt="Card image cap"
					/>
					<div className="card-body text-center">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">{this.props.text4}</p>
					</div>
					<div className="card-footer text-center">
						<a href="#" className="btn btn-primary">
							Button
						</a>
					</div>
				</div>
			</div>
		);
	}
}

Cards.propTypes = {
	text1: PropType.string,
	text2: PropType.string,
	text3: PropType.string,
	text4: PropType.string,
	imageUrl: PropType.string
};
