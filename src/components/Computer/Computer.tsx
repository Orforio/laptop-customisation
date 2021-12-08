import React from 'react';

import { Spec } from '../Spec';
import { SpecModel } from '../../interfaces/SpecModel';
import './Computer.scss';

interface ComputerProps {
	changeSpec: (spec: number, newPart: number) => void;
	selectedItems: number[];
	specs: SpecModel[];
}

export const Computer: React.FunctionComponent<ComputerProps> = ({
	changeSpec,
	selectedItems,
	specs
}) => {
	return (
		<div
			className="computer rounded-grey-border"
			data-testid="component-computer">
			<h2>Customisation Choices</h2>
			{specs.map((spec, index) => (
				<Spec
					key={`spec-${index}`}
					changePart={(newPart) => changeSpec(index, newPart)}
					selectedItem={selectedItems[index]}
					spec={spec} />
			))}
		</div>
	);
};
