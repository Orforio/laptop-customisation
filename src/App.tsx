import React from 'react';

import { Computer } from './components/Computer/Computer';
import { sampleLaptop } from './data/sampleLaptop';
import './App.scss';

export const App = () => {
	return (
		<div className="app">
			<header className="app-header">
				<h1>Laptop customisation tool</h1>
			</header>
			<div className="app-content">
				<Computer
					specs={sampleLaptop.specs} />
				<div>
					Summary
				</div>
			</div>
		</div>
	);
};
