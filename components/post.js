define(function(require) {

	var _handleMapItems = items => {

		return (item, key) => {
				
				var {tagName, props, children} = items[item];
				var nextProps = Object.assign(props, {key});

				return createElement(tagName, nextProps, children);
			};
	};

	var _specPost = {
		displayName: 'PostComponent',
		render: function _render() {

			var {title = ''} = this.props;
			
			var _items = {};			
			
			_items.title = {
				tagName: 'h1',
				props: {className: 'Post-title'},
				children: title
			};

			return createElement(
				'section', 
				{className: 'Post'},
				Object.keys(_children).map(_handleMapItems(items))
			);
		}
	};

	var _specPostTitle = {
		displayName: 'PostTitle',
		render: function _render () {

			return createElement(
				'div',
				{className: 'Post-title'},
				children
			)
		}

	};

	return {
		Post: createClass(_specPost),
		PostTitle,
		PostContent,
		PostAuthor,
		PostTags,
		PostCommments
	}
});