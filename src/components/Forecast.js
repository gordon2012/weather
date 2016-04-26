var React = require('react');


var Forecast = React.createClass({
	render: function() {
		return <div className="text-center">
			<div className="jumbotron">
				<h1>Weather</h1>
				<p>A weather app</p>
			</div>
			<p>C-C-C-Cold!</p>
		</div>
	}
});


module.exports = Forecast;
