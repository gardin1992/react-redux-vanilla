define(function(require) {

var {createClass, createElement} = require('react');

return createClass({
render() {
		return createElement('span', {className: 'Post-author'}, this.props.author)
	}
});
});