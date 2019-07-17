import React, {Component}from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

//COMPONENETS
import Header from './components/header';
//COMPONENETS

class App extends Component{
	render(){
		return (
			<div className='divclass'>
				<Header/>
			</div>
		)
	}
}

//document.querySelector('#root')
ReactDOM.render(<App/>, document.getElementById('root'));