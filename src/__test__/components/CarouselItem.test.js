import React from 'react';
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';

import CarouselItem from '../../components/CarouselItem';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<CarouseItem />', () => {
	const carouselItem = shallow(
		<ProviderMock>
			<CarouselItem />
		</ProviderMock>
	);
	test('Render del componente CarouselItem', () => {
		expect(carouselItem.length).toEqual(1);
	});
});

describe('CarouselItem Snapshot', () => {
	const carouseItem = create(
		<ProviderMock>
			<CarouselItem />
		</ProviderMock>
	);
	test('Comprobar la UI del componente CarouselItem', () => {
		expect(carouseItem.toJSON()).toMatchSnapshot();
	});
});
