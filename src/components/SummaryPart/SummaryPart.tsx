import React from 'react';

interface SummaryPartProps {
	name: string;
}

export const SummaryPart: React.FunctionComponent<SummaryPartProps> = ({name}) => {
	return (
		<li
			className="summary-part"
			data-testid="component-summary-part">{name}</li>
	)
}
