define(function (require) {
	var {createClass, createElement} = require('react');

	var _propsDefault = {
		className: 'Sidebar'
	};

	var _spec = {
		displayName: 'Sidebar',
		render: function _render(argument) {

			var nextProps = Object.assign({}, _propsDefault, this.props);

			return createElement('div', nextProps, 'Sidebar');
		}
	};

	return createClass(_spec);
});