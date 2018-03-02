define(function(require) {

	var {combineReducers} = require('redux');

	var settings = (state = {}, action = {}) => {
		const {type, payload} = action;
		switch(type) {
			default: return state;
		}
	};

	var lastAction = (state = {}, action) => {
		const {type, payload} = action;	
		console.log(action);
		switch(type) {
			default: return state;
		}
	};

	return combineReducers({
		settings: settings,
		lastAction: lastAction
	});
});