import React from 'react';
import './button.scss';

const Button = ({ children, ...rest }) => (
	<button className="button"
	
		
		{...rest}
	> SEARCH
		{children}
	</button>
);

export default Button;