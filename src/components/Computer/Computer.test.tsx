import React from 'react';
import { render, screen } from '@testing-library/react';

import { Computer } from '.';
import { SpecModel } from '../../interfaces/SpecModel';

describe('Computer', () => {
	// Arrange
	const mockSpecs: SpecModel[] = [
		{
			name: 'Widgets',
			parts: [
				{
					name: 'Micro Widget',
					price: 100
				},
				{
					name: 'Mega Widget',
					price: 200
				}
			]
		},
		{
			name: 'Gizmos',
			parts: [
				{
					name: 'Super Gizmo',
					price: 300
				},
				{
					name: 'Nano Gizmo',
					price: 400
				},
				{
					name: 'Ultra Gizmo',
					price: 500
				}
			]
		}
	];

	it('should display all the specs available', () => {
		// Arrange

		// Act
		render(
			<Computer
				changeSpec={() => {}}
				selectedItems={[0, 0]}
				specs={mockSpecs} />
		);

		// Assert
		expect(screen.getAllByTestId('component-spec')).toHaveLength(2);
	});

	it('should pass on the new part selection, adding the spec', () => {
		// Arrange
		const mockChangeSpec = jest.fn();
		render(
			<Computer
				changeSpec={mockChangeSpec}
				selectedItems={[0, 0]}
				specs={mockSpecs} />
		);

		// Act
		screen.getByText('Ultra Gizmo').click();

		// Assert
		expect(mockChangeSpec).toHaveBeenCalledWith(1, 2)
	});
});
