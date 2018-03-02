define(function (require) {
	var {createClass, createElement} = require('react');

	var _propsDefault = {
		className: 'Navbar'
	};
	
	var _spec = {
		displayName: 'Navbar',
		render: function _render(argument) {

var nextProps = Object.assign({}, _propsDefault, this.props);
			return createElement('div', nextProps, 'Navbar');
		}
	};

	return createClass(_spec);
});