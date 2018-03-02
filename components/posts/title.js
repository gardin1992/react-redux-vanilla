define(function(require) {

var {createClass, createElement} = require('react');

return createClass({
render() {
		return createElement('h3', {className: 'Post-title'}, [
			this.props.title,
			createElement('small', null, this.props.updatedAt)
		])
	}
});
});