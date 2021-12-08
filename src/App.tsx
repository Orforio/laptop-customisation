import React, { useState } from 'react';

import { Computer } from './components/Computer/Computer';
import { sampleLaptop } from './data/sampleLaptop';
import { Summary } from './components/Summary';
import './App.scss';

export const App = () => {
	const [selectedItems, setSelectedItems] = useState(sampleLaptop.specs.map(spec => 0));

	const handleChangeSpec = (spec: number, newPart: number) => {
		setSelectedItems(oldSelectedItems => oldSelectedItems.map((oldPart, index) => index === spec ? newPart : oldPart));
	};

	const selectedPartNames = sampleLaptop.specs.map((spec, index) => spec.parts[selectedItems[index]].name);

	const totalCost = sampleLaptop.specs.reduce((runningTotal, currentSpec, index) =>
		runningTotal + currentSpec.parts[selectedItems[index]].price, 0);

	return (
		<div className="app">
			<header className="app-header">
				<h1>Laptop customisation tool</h1>
			</header>
			<div className="app-content">
				<Computer
					changeSpec={handleChangeSpec}
					selectedItems={selectedItems}
					specs={sampleLaptop.specs} />
				<Summary
					selectedParts={selectedPartNames}
					totalCost={totalCost} />
			</div>
		</div>
	);
};
