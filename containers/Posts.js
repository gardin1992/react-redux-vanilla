define(function(require) {

	var {createClass, createElement} = require('react');
	var postComponents = require('../components/posts/index.js');
	console.log(postComponents);
	var {PostItem} = postComponents

	var _propsDefault = {
		className: 'Posts',
		posts: {
		}
	};

	var _spec = {
		displayName: 'PostsContainer',
		render: function() {
			var {posts = {}} = Object.assign({}, _propsDefault, this.props);
			var {items = {}, itemsIds = []} = posts;
			var children = itemsIds.map(function function_name(id) {
				 return createElement(PostItem, items[id]);
			})

			return createElement('div', {}, children);
		}
	};

	return createClass(_spec);
});