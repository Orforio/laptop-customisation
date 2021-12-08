import React from 'react';
import { render, screen } from '@testing-library/react';

import { Spec } from '.';
import { SpecModel } from '../../interfaces/SpecModel';

describe('Spec', () => {
	// Arrange
	const mockSpec: SpecModel = {
		name: 'Sample Spec',
		parts: [
			{
				name: 'Part A',
				price: 100
			},
			{
				name: 'Part B',
				price: 200
			}
		]
	};

	it('should display each Part in the Spec', () => {
		// Arrange

		// Act
		render(
			<Spec 
				changePart={() => {}}
				selectedItem={0}
				spec={mockSpec} />
		);

		// Arrange
		expect(screen.getAllByTestId('component-part')).toHaveLength(2);
	});

	it('should allow the user to select a different part', () => {
		// Arrange
		const mockChangePart = jest.fn();
		render(
			<Spec
				changePart={mockChangePart}
				selectedItem={0}
				spec={mockSpec} />
		);

		// Act
		screen.getByText('Part B').click();

		// Assert
		expect(mockChangePart).toHaveBeenCalledWith(1);
	});
});
