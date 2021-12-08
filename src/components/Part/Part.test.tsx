import React from 'react';
import { render, screen } from '@testing-library/react';

import { Part } from '.';
import { PartModel } from '../../interfaces/PartModel';

describe('Part', () => {
	// Arrange
	const mockPart: PartModel = {
		name: 'Sample Part',
		price: 200
	};

	it('should display part details', () => {
		// Arrange

		// Act
		render(
			<Part part={mockPart} />
		);

		// Assert
		expect(screen.getByText('Sample Part')).toBeInTheDocument();
		expect(screen.getByText('£200'));
	});

	it('should highlight the part if it is selected', () => {
		// Arrange
		const selected = true;

		// Act
		render(
			<Part
				part={mockPart}
				selected={selected} />
		);

		// Assert
		expect(screen.getByRole('listitem')).toHaveClass('part-selected');
	})

	it('should not highlight the part if it is not selected', () => {
		// Arrange
		const selected = false;

		// Act
		render(
			<Part
				part={mockPart}
				selected={selected} />
		);

		// Assert
		expect(screen.getByRole('listitem')).not.toHaveClass('part-selected');
	})
});
