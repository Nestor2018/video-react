import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Search from '../../components/Search';

describe('<Search/>', () => {
	const search = mount(<Search />);
	test('Render del componente Search', () => {
		expect(search.length).toEqual(1);
	});
});

describe('Search Snapshot', () => {
	const search = create(<Search />);
	test('Comprobar la UI del componente Search', () => {
		expect(search.toJSON()).toMatchSnapshot();
	});
});
