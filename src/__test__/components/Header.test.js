import React from 'react';
import { mount, shallow } from 'enzyme';

import Header from '../../components/Header';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Header />', () => {
	const header = shallow(
		<ProviderMock>
			<Header />
		</ProviderMock>
	);
	test('Render del componente Header', () => {
		expect(header.length).toEqual(1);
	});
});
