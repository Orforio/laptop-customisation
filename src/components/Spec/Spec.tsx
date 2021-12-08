import React from 'react';

import { SpecModel } from '../../interfaces/SpecModel';
import { Part } from '../Part';

interface SpecProps {
	spec: SpecModel;
}

export const Spec: React.FunctionComponent<SpecProps> = ({spec}) => {
	return (
		<section data-testid="component-spec">
			<h3>{spec.name}</h3>
			{spec.parts.map((part, index) => (
				<Part
					key={`part-${spec.name}-${index}`}
					part={part} />
			))}
		</section>
	)
};
