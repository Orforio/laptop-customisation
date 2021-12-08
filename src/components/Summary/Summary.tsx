import React from 'react';

import { SummaryPart } from '../SummaryPart';
import './Summary.scss';

interface SummaryProps {
	selectedParts?: string[];
	totalCost?: number;
}

export const Summary: React.FunctionComponent<SummaryProps> = ({
	selectedParts = [],
	totalCost = 0
}) => {
	const handleBuyButton = () => {
		console.log('Buy button clicked!');
	}

	return (
		<div
			className="summary rounded-grey-border"
			data-testid="component-summary">
			<h2>Summary</h2>
			<ul className="">
				{selectedParts.map((part, index) => (
					<SummaryPart
						key={`summary-part-${index}`}
						name={part} />
				))}
			</ul>
			<strong>Total: £{totalCost}</strong>
			<button
				className="summary-buy-button clickable"
				onClick={handleBuyButton}
				type="button">Buy now</button>
		</div>
	);
};
