var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Home = React.createClass({
	render: function() {
		return <div className="text-center">
			<div className="jumbotron">
				<h1>Weather</h1>
				<p>A weather app</p>
			</div>
			<Link to="/forecast">
				<button className="btn btn-lg btn-success">Begin</button>
			</Link>
		</div>
	}
});


module.exports = Home;
