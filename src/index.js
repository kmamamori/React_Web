import React from 'react';
import ReactDOM from 'react-dom';

//COMPONENETS
import Header from './components/header';
//COMPONENETS


const App = () =>{
	return (
		<div className='divclass'>
			<Header/>
		</div>
	)
}

//document.querySelector('#root')
ReactDOM.render(<App/>, document.getElementById('root'));