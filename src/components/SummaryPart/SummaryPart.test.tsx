import React from 'react';
import { render, screen } from '@testing-library/react';

import { SummaryPart } from '.';

describe('SummaryPart', () => {
	it('should display the part name', () => {
		// Arrange
		const name = 'Mega Widget';

		// Act
		render(
			<SummaryPart name={name} />
		);

		// Assert
		expect(screen.getByText('Mega Widget')).toBeInTheDocument();
	});
});
