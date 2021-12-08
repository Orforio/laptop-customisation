import React from 'react';

import { PartModel } from '../../interfaces/PartModel';

interface PartProps {
	part: PartModel
}

export const Part: React.FunctionComponent<PartProps> = ({part}) => {
	return (
		<li data-testid="component-part">
			<div>{part.name}</div>
			<div>£{part.price}</div>
		</li>
	);
};
