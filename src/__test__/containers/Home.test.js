import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import Home from '../../containers/Home';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Home/>', () => {
	const header = shallow(
		<ProviderMock>
			<Home />
		</ProviderMock>
	);
	test('Render del container Home', () => {
		expect(header.length).toEqual(1);
	});
});
