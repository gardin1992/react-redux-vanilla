define(function(require) {

	var {createClass, createElement} = require('react');
	var PropTypes = require('prop-types');


	
});

/*


	var PostTitleComponent = new function() {
		var {
			createElement,
			createClass
		} = React;

		var postComponent = createClass({
			displayName: 'PostTitleComponent',
			render: () => {

				var _this = this;

				var nextProps = Object.assign({
					title: '',
					show: false,
				}, _this.props);

				var {
					show,
					title
				} = nextProps;

				var tag = show => show ? 'h1' : 'h2';
				var titleComponent = createElement(tag, null, title);
				
				return createElement('div', null, titleComponent)
			}
		});

		return (props = {}) => createElement(postComponent, props);
	}();

	var PostComponent = new function() {
		
		var {
			createElement,
			createClass
		} = React;

		var postComponent = createClass({
			displayName: 'PostComponent',
			render: () => {

				var _this = this;
				var {
					title
				} = _this.props;

				var titleComponent = PostTitleComponent(title);

				var contentComponent = createElement('div', null, 'Content Componenet');
				
				return createElement('div', null, [
					titleComponent,
					contentComponent
				])
			}
		});

		postComponent.propTypes = {
			title: PropTypes.string
		};

		return (props = {}) => createElement(postComponent, props);
	}();



	var PostsContainer = new function() {
		
		var {
			createElement,
			createClass
		} = React;

		// Containers
		var postsContainer = createClass({
			displayName: 'PostsContainer',
			render: function() {

				var {posts = {}} = this.props;
				console.log(this);

				var items = Object.keys(posts).map((id, key) => {

					var post = posts[id];
					post.key = key;

					return PostComponent(post);
				});

				items = [];

				return createElement('div', null, items);
			}
		});

		return (props = {}) => createElement(postsContainer, props);
	}();

*/