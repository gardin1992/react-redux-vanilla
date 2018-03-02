define(function(require) {

	var {createStore} = require('redux');
	var _rootReducers = require('./reducers');

	return (preLoaded = {}) => createStore(
		_rootReducers,
		preLoaded
	)
});