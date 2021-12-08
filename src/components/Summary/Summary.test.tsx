import React from 'react';
import { render, screen } from '@testing-library/react';

import { Summary } from '.';

describe('Summary', () => {
	it('should display each selected part', () => {
		// Arrange
		const selectedParts = [
			'Super Thingamajig',
			'Giga Gizmo',
			'Wonder Whatsit'
		];

		// Act
		render(
			<Summary selectedParts={selectedParts} />
		);

		// Assert
		expect(screen.getAllByTestId('component-summary-part')).toHaveLength(3);
	});

	it('should display the total cost of the selected items', () => {
		// Arrange
		const totalCost = 1500;

		// Act
		render(
			<Summary totalCost={totalCost} />
		);

		// Assert
		expect(screen.getByText(/£1500/i)).toBeInTheDocument();
	});
});