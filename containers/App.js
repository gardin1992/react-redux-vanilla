define(function (require) {
	
	var {createElement, createClass, renderToString} = require('react');
	var PropTypes = require('prop-types');
	//
	var factoryFakeData = require('../utils/fakeData');
	//
	var PostsContainer = require('./Posts');
	var NavbarContainer = require('./Navbar');
	var SidebarContainer = require('./Sidebar');

	var _defaultProps = {
		className: 'App'
	};

	var _spec = {
		displayName: 'AppContainer',
		render: function () {
			
			var nextProps = Object.assign({}, _defaultProps, this.props); 
			var posts = factoryFakeData(5);

			return createElement('div', nextProps, [
				createElement(SidebarContainer, {key: 0}),
				createElement(NavbarContainer, {key: 1}),
				createElement(PostsContainer, {posts: posts, key: 2})
			]);
		}
	}

	return createClass(_spec);
});