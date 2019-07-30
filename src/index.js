import React, {Component}from 'react';
import ReactDOM from 'react-dom';

import JSON from './db.json';

//COMPONENETS
import Header from './components/header';
import NewsList from './components/news_list';
import { isTemplateElement } from '@babel/types';
//COMPONENETS

class App extends Component{

	state = {
		news: JSON,
		filtered: []
	}

	getKeyword = (event) => {
		// console.log(event.target.value)
		let keyword = event.target.value;
		let filtered = this.state.news.filter((item)=>{
			return item.title.indexOf(keyword) > -1
		});
		this.setState({
			filtered
		})
		// console.log(filtered)
	}

	render(){
		let newsFiltered = this.state.filtered;
		let newsWhole = this.state.news;
		return (
			<div className='divclass'>
				<Header keywords={this.getKeyword}/>
				<NewsList 
					news={newsFiltered.length === 0 ? newsWhole : newsFiltered}
				>
					Hello todos
				</NewsList>

				
			</div>
		)
	}
}

//document.querySelector('#root')
ReactDOM.render(<App/>, document.getElementById('root'));