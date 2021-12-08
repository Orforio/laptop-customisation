import React from 'react';

import { Spec } from '../Spec';
import { SpecModel } from '../../interfaces/SpecModel';
import './Computer.scss';

interface ComputerProps {
	specs: SpecModel[];
}

export const Computer: React.FunctionComponent<ComputerProps> = ({specs}) => {
	return (
		<div className="computer rounded-grey-border">
			<h2>Customisation Choices</h2>
			{specs.map((spec, index) => (
				<Spec
					key={`spec-${index}`}
					spec={spec} />
			))}
		</div>
	);
};
