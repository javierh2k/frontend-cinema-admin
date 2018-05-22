import { http, httpFormData } from './http'

const url = '/movies';


export const fetchMovies = () => {
  return dispatch => {
    dispatch({
      type: 'FETCH_MOVIES',
      payload: http.get(url)
    })
  }
}

export function newMovie() {
  return dispatch => {
    dispatch({
      type: 'NEW_MOVIE'
    })
  }
}

export function saveMovie(movie) {
  let data = new FormData();
  for (var key in movie) {
    data.append(key, movie[key]);
  }

  return dispatch => {
    return dispatch({
      type: 'SAVE_MOVIE',
      payload: httpFormData.post(url, data)
    })
  }
}

export function fetchMovie(id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_MOVIE',
      payload: http.get(`${url}/${id}`)
    })
  }
}

export function updateMovie(movie) {
  let data = new FormData();
  for (var key in movie) {
    data.append(key, movie[key]);
  }

  return dispatch => {
    return dispatch({
      type: 'UPDATE_MOVIE',
      payload: httpFormData.patch(`${url}/${movie.id}`, data)
    })
  }
}

export function deleteMovie(id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_MOVIE',
      payload: http.delete(`${url}/${id}`)
    })
  }
}
