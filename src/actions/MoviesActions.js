import * as types from '../constants/ActionsTypes'

export const searchMovie = search => ({
	type: types.SEARCH_MOVIE,
	payload:search
});

export const searchByrate = payload => ({
	type: types.SEARCH_BYRATE,
	payload
});


export const addMovie = movie=> ({
	type: types.ADD_MOVIE,
	movie
});


export const editMovie = movie => ({
	type: types.EDIT_MOVIE,
	movie
});
export const updateMovie = (movie,i) => ({
	type: types.UPDATE_MOVIE,
	movie,i
});

export const removeMovie = (payload) => ({
	type: types.REMOVE_MOVIE,payload
});