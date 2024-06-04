import React, { useState } from 'react';
import { m } from 'framer-motion';

interface P {
	children: React.ReactNode;
	content: React.ReactNode;
}

const Tooltip: React.FC<P> = ({ children, content }) => {
	const [open, setOpen] = useState(true);

	return (
		<div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
			{open && (
				<m.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} className='tooltip'>
					{content}
				</m.div>
			)}
			{children}
		</div>
	);
};

export default Tooltip;
