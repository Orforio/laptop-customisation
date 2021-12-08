import React from 'react';
import { render, screen } from '@testing-library/react';

import { Spec } from '.';
import { SpecModel } from '../../interfaces/SpecModel';

describe('Spec', () => {
	it('should display each Part in the Spec', () => {
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

		// Act
		render(
			<Spec spec={mockSpec} />
		);

		// Arrange
		expect(screen.getAllByTestId('component-part')).toHaveLength(2);
	});
});
