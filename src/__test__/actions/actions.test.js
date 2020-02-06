import { SET_FAVORITE, DELETE_FAVORITE, LOGIN_REQUEST, LOGOUT_REQUEST } from '../../types';
import { setFavorite, deleteFavorite, loginRequest, logoutRequest } from '../../actions';
import videoMock from '../../__mocks__/videoMock';
import userMock from '../../__mocks__/userMock';

describe('Actions', () => {
	test('setFavorite Action', () => {
		const payload = videoMock;
		const expected = {
			type: SET_FAVORITE,
			payload
		};
		expect(setFavorite(payload)).toEqual(expected);
	});

	test('deleteFavorite Action', () => {
		const payload = videoMock;
		const expected = {
			type: DELETE_FAVORITE,
			payload
		};
		expect(deleteFavorite(payload)).toEqual(expected);
	});

	test('loginRequest Action', () => {
		const payload = userMock;
		const expected = {
			type: LOGIN_REQUEST,
			payload
		};
		expect(loginRequest(payload)).toEqual(expected);
	});

	test('logoutRequest Action', () => {
		const payload = [];
		const expected = {
			type: LOGOUT_REQUEST,
			payload
		};
		expect(logoutRequest(payload)).toEqual(expected);
	});
});
