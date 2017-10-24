import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import store from './state'

import fetch from 'isomorphic-fetch'


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


store.subscribe( () => console.log('New state',store.getState() ) )

console.log(1)
store.dispatch({
	type : 'INCRESE_COUNTER',
})
console.log(2)
store.dispatch({
	type : 'INCRESE_COUNTER',
})
console.log(3)
store.dispatch({
	type : 'RESET_COUNTER',
})
console.log(4)
store.dispatch({
	type : 'UNKNOWN',
})

console.log(5)
store.dispatch({
	type: 'LOAD_ISSUES',
	payload: [
		{id:'1',name:'First Issue'},
		{id:'2',name:'Second Issue'}
	],
})

fetch('https://api.github.com/repos/Yomguithereal/baobab/issues')
	.then((r) => r.json())
	.then((r) => console.log(r))

	