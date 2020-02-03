import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import '../assets/styles/app.sass';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = ({ myList, trends, originals }) => {
	return (
		<Fragment>
			<Search />
			{myList.length > 0 && (
				<Categories title="Mi lista">
					<Carousel>{myList.map((item) => <CarouselItem key={item.id} {...item} isList />)}</Carousel>
				</Categories>
			)}

			<Categories title="Tendencias">
				<Carousel>{trends.map((item) => <CarouselItem key={item.id} {...item} />)}</Carousel>
			</Categories>

			<Categories title="Originales">
				<Carousel>{originals.map((item) => <CarouselItem key={item.id} {...item} />)}</Carousel>
			</Categories>
		</Fragment>
	);
};

const mapStatetoProps = (state) => {
	return {
		myList: state.myList,
		trends: state.trends,
		originals: state.originals
	};
};

export default connect(mapStatetoProps, null)(Home);
