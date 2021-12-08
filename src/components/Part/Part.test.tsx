import React from 'react';
import { render, screen } from '@testing-library/react';

import { Part } from '.';
import { PartModel } from '../../interfaces/PartModel';

describe('Part', () => {
	it('should display part details', () => {
		// Arrange
		const mockPart: PartModel = {
			name: 'Sample Part',
			price: 200
		};

		// Act
		render(
			<Part part={mockPart} />
		);

		// Assert
		expect(screen.getByText('Sample Part')).toBeInTheDocument();
		expect(screen.getByText('£200'));
	});
});
