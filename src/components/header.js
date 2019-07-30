import React from 'react';
import '../css/style.css';

const Header = (props) => {



		const style = {
			background: 'red'
		}

		return (
			<header>
				<div className='logo'>Logo</div>
		   		<input 
					type='text' 
					onChange={props.keywords} />

			</header>
		)
	
}

export default Header;