import React from 'react';
import './button.scss';

const Button = ({ children, ...rest }) => (
	<button
		
		{...rest}
	>
		{children}
	</button>
);

export default Button;