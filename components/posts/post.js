define(function(require) {

var {createClass, createElement} = require('react');

var PostTitle = require('./title');
var PostAuthor = require('./author');
var PostDescription = require('./description');

return createClass({
	displayName: 'Posts_PostItem',
	handleClick (url) {

		return function (e) {
			e.preventDefault();
			console.log(e.currentTarget);
			console.log(url);
		}
	},
	render: function () {
		var  {
			title = '',
			description = '',
			author = '',
			updatedAt = new Date().toUTCString(),
			url = '#',
			tags = [],
		} = this.props;


		var children = [
			createElement(PostTitle, {
				key: 0,
				title: title,
				updatedAt: updatedAt
			}),
			createElement(PostDescription, {
				key: 1,
				description: description
			}),
			createElement(PostAuthor, {
				key: 2,
				author: author
			}),
		];

		var props = {
			className: 'PostItem',
			href: url,
			onClick: this.handleClick(`URL ${url}`)
		};

		return createElement('a', props, children);
	}
});
});