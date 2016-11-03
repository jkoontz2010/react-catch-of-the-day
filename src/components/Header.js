import React from 'react';

// stateless functional component
const Header = (props) => {
	return (
		<header className="top">
			<h1>
			Catch 
				<span className="of-the">
					<span className="of">Of</span>
					<span className="the">The</span>
				</span>
			Day
			</h1>
			<h3 className="tagline"><span>{props.tagline}</span></h3>
		</header>
	)
	
}

export default Header;