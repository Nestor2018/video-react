import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Categories from '../../components/Categories';

describe('<Categories/>', () => {
	const categories = mount(<Categories />);
	test('Render del componente categories', () => {
		expect(categories.length).toEqual(1);
	});
});

describe('Categories Snapshot', () => {
	const categories = create(<Categories />);
	test('Comprobar la UI del componente Categories', () => {
		expect(categories.toJSON()).toMatchSnapshot();
	});
});
