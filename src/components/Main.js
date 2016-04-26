var React = require('react');//
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var Main = React.createClass({
	render: function() {
		return <div className="main-container">
			<div className="bg-success" style={{padding: "8px", paddingBottom: "16px"}}>
				<span style={{fontSize: "1.5em"}}>Weather App</span>
				<span className="pull-right">
					<input placeholder="Mountain View, CA"/>
					<Link to="/forecast">
						<button className="btn btn-sm btn-success">Get Weather</button>
					</Link>
				</span>


			</div>
			{this.props.children}
		</div>
	}
});


module.exports = Main;
