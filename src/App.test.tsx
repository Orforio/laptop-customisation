import React from 'react';
import { render, screen, within } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
	it('should display the Computer details', () => {
		// Arrange

		// Act
		render(<App />);

		// Assert
		expect(screen.getByTestId('component-computer')).toBeInTheDocument();
	});

	it('should display the Summary', () => {
		// Arrange

		// Act
		render(<App />);

		// Assert
		expect(screen.getByTestId('component-summary')).toBeInTheDocument();
	});

	// The next tests rely too much on the sample data and so are fairly brittle
	it('should allow users to change the selected parts', () => {
		// Arrange
		render(<App />);
		expect(within(screen.getByTestId('component-summary')).getByText('8 GB 2133MHz memory')).toBeInTheDocument()
		expect(screen.getByText(/£1200/i)).toBeInTheDocument;

		// Act
		within(screen.getByTestId('component-computer')).getByText('16 GB 2133MHz memory').click();

		// Assert
		expect(within(screen.getByTestId('component-summary')).getByText('16 GB 2133MHz memory')).toBeInTheDocument()
		expect(screen.getByText(/£1250/i)).toBeInTheDocument;
	});
});
