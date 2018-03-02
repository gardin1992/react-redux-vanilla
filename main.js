var _requirePaths = [
	'redux',
	'redux-thunk',
	'prop-types',
	'react',
	'react-dom',
	'react-dom-server',
	'react-redux',
];

requirejs.config({
	baseUrl: './',
	paths:  new function (argument) {
		var paths = {};

		_requirePaths.forEach(path => {
			paths[path] = "./libs/" + path;
		})
	
	return paths;
}()
});

require(['index']);