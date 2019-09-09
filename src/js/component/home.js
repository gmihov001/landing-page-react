import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<a className="navbar-brand text-white" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-secondary" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-secondary" href="#">
								Services
							</a>
						</li>
						<li className="nav-item">
							<a classNameName="nav-link text-secondary" href="#">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export class MainPanel extends React.Component {
	render() {
		return (
			<div className="card w-75">
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">
						With supporting text below as a natural lead-in to
						additional content.
					</p>
					<a href="#" className="btn btn-primary">
						Button
					</a>
				</div>
			</div>
		);
	}
}

export class Cards extends React.Component {
	render() {
		return (
			<div className="card-group">
				<div className="card">
					<img
						className="card-img-top"
						src="..."
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
				<div className="card">
					<img
						className="card-img-top"
						src="..."
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This card has supporting text below as a natural
							lead-in to additional content.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
				<div className="card">
					<img
						className="card-img-top"
						src="..."
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted">
							Last updated 3 mins ago
						</small>
					</div>
				</div>
			</div>
		);
	}
}
