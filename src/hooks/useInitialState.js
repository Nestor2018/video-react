import { useState, useEffect } from 'react';

const useInitialState = (API) => {
	const [ videos, setVideos ] = useState({
		mylist: [],
		trends: [],
		originals: []
	});
	useEffect(() => {
		fetch(API).then((response) => response.json()).then((data) => setVideos(data));
	}, []);
	return videos.length === 0 ? <h1>Loading...</h1> : videos;
};

export default useInitialState;
