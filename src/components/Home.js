var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Home = React.createClass({
	render: function() {
		console.log('ENV:', process.env.NODE_ENV);
		return <div className="text-center bg-warning">
			<div>
				<h2 style={{marginTop: "0"}}>Enter a City and State</h2>
				<input placeholder="Mountain View, CA"/>
				<div>&nbsp;</div>
				<Link to="/forecast">
					<button className="btn btn-lg btn-success">Get Weather</button>
				</Link>
			</div>
		</div>
	}
});


module.exports = Home;
