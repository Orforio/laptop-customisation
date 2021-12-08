import React from 'react';

import { SpecModel } from '../../interfaces/SpecModel';
import { Part } from '../Part';
import './Spec.scss';

interface SpecProps {
	changePart: (newPart: number) => void;
	selectedItem: number;
	spec: SpecModel;
}

export const Spec: React.FunctionComponent<SpecProps> = ({
	changePart,
	selectedItem,
	spec
}) => {
	return (
		<section
			className="spec"
			data-testid="component-spec">
			<h3>{spec.name}</h3>
			<ul className="spec-list">
				{spec.parts.map((part, index) => (
					<span
						key={`part-${spec.name}-${index}`}
						onClick={() => changePart(index)}>
						<Part
							part={part}
							selected={index === selectedItem} />
					</span>
				))}
			</ul>
		</section>
	);
};
