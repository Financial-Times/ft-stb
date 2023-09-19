import { useState, useLayoutEffect, useEffect } from 'react';

export function useWindowSize() {
	const [size, setSize] = useState('');

	useEffect(() => {
		function updateSize() {
			setSize([window.matchMedia('(min-width: 769px)').matches]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	return size;
}
