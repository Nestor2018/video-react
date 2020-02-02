import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';

import Carousel from '../../components/Carousel';

describe('<Carousel/>', () => {
	const carousel = mount(<Carousel />);
	test('Render del componente Carousel', () => {
		expect(carousel.length).toEqual(1);
	});
});

describe('Carousel Snapshot', () => {
	const carousel = create(<Carousel />);
	test('Comprobar la Ui del componente Carouse', () => {
		expect(carousel.toJSON()).toMatchSnapshot();
	});
});
