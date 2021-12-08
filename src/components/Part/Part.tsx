import React from 'react';

import { PartModel } from '../../interfaces/PartModel';
import './Part.scss';

interface PartProps {
	part: PartModel;
	selected?: boolean;
}

export const Part: React.FunctionComponent<PartProps> = ({
	part,
	selected = false
}) => {
	const selectedClass = selected ? 'selected' : '';

	return (
		<li
			className={`part clickable rounded-grey-border ${selectedClass}`}
			data-testid="component-part">
			<div>{part.name}</div>
			<div>£{part.price}</div>
		</li>
	);
};
