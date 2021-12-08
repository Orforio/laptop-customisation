import React from 'react';

import { SpecModel } from '../../interfaces/SpecModel';
import { Part } from '../Part';
import './Spec.scss';

interface SpecProps {
	spec: SpecModel;
}

export const Spec: React.FunctionComponent<SpecProps> = ({spec}) => {
	return (
		<section
			className="spec"
			data-testid="component-spec">
			<h3>{spec.name}</h3>
			<ul className="spec-list">
				{spec.parts.map((part, index) => (
					<Part
						key={`part-${spec.name}-${index}`}
						part={part} />
				))}
			</ul>
		</section>
	);
};
