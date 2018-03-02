define(function (require) {

	var {createElement} = require('react');
	var {render} = require('react-dom');
	var {Provider} = require('react-redux');
	
	var createStore = require('./stores');
	var AppContainer = require('./containers/App');
	var styles = require('./styles');

	var head = document.head;

	Object.values(styles).forEach(style => {
		head.appendChild(style);
	});

	render(
		createElement(
			Provider, {store: createStore()},
			createElement(AppContainer)
		), 
		document.querySelector('#root')
	);
});