import React from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	className?: string;
	locked?: boolean;
}

const Scrollable: React.FC<Props> = ({ children, className, locked, ...rest }) => {
	return (
		<div className={`scroll${locked ? ' locked' : ''} ${className}`} {...rest}>
			{children}
		</div>
	);
};

export default Scrollable;
