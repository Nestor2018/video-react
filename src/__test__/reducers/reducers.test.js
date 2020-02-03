import { SET_FAVORITE, DELETE_FAVORITE, LOGIN_REQUEST, LOGOUT_REQUEST } from '../../types';
import reducer from '../../reducers';
import videoMock from '../../__mocks__/videoMock';
import userMock from '../../__mocks__/userMock';

describe('reducers', () => {
	test('Retornar initialState', () => {
		expect(reducer({}, '')).toEqual({});
	});
	test('SET_FAVORITE', () => {
		const initialState = {
			myList: []
		};
		const payload = videoMock;
		const action = {
			type: SET_FAVORITE,
			payload
		};
		const expected = {
			myList: [ videoMock ]
		};
		expect(reducer(initialState, action)).toEqual(expected);
	});

	test('DELETE_FAVORITE', () => {
		const initialState = {
			myList: []
		};
		const payload = videoMock;
		const action = {
			type: DELETE_FAVORITE,
			payload
		};
		const expected = {
			myList: []
		};
		expect(reducer(initialState, action)).toEqual(expected);
	});

	test('LOGIN_REQUEST', () => {
		const initialState = {
			user: []
		};
		const payload = userMock;
		const action = {
			type: LOGIN_REQUEST,
			payload
		};
		const expected = {
			user: userMock
		};
		expect(reducer(initialState, action)).toEqual(expected);
	});

	test('LOGOUT_REQUEST', () => {
		const initialState = {
			user: userMock
		};
		const payload = userMock;
		const action = {
			type: LOGOUT_REQUEST,
			payload
		};
		const expected = {
			user: {}
		};
		expect(reducer(initialState, action)).toEqual(expected);
	});
});
