define(function(require) {

	var {createClass, createElement} = require('react');
	var PropTypes = require('prop-types');


	// var PostContainer = createClass({
	// 	displayName: 'PostContainer',
	// 	render: function function_name (argument) {
			
	// 		var children = [];

	// var getHTML = function (innerHTML) {
	// 	return {__html: innerHTML}
	// };
	// 		var PostTitleComponent = createElement('h1', null, 'title');
	// 		children.push(PostTitleComponent);

	// 		var date = new Date().toUTCString();

	// 		var PostDateTimeComponent = createElement('div', null, date);
	// 		children.push(PostDateTimeComponent);

	// 		var conten =

	// 		var PostContentComponent = createElement('article', {dangerouslySetInnerHTML: getHTML(conten)});
	// 		children.push(PostContentComponent);

	// 		var PostComponent = createElement('div', null, children)
			
	// 		return createElement('section', null, PostComponent);
	// 	}
	// });



	var _spect = {
		displayName: 'PostContainer',
		render: function _render() {

			var PostComponent = createElement(
				'article',
				null,
				'<h1>Teste 123</h1>'
			);

			return createElement('section', null, PostComponent);
		}
	};
	
});