define(function(require) {

var {createClass, createElement} = require('react');

return createClass({
render() {
		return createElement('p', {className: 'Post-description'}, this.props.description)
	}
});
});