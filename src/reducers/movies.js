const defaultState = {
  movies: [],
  movie: {name:'', date: '', languaje: ''},
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {  
  switch (action.type) {
    case 'FETCH_MOVIES_FULFILLED': {      
      return {
        ...state,
        movies: action.payload.data.data,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_MOVIES_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_MOVIES_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }

    case 'NEW_MOVIE': {
      return {
        ...state,
        movie: {name:'', date: '', languaje: ''}
      }
    }

    case 'SAVE_MOVIE_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_MOVIE_FULFILLED': {
      return {
        ...state,
        movies: [...state.movies, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_MOVIE_REJECTED': {
      const data = action.payload.response.data;
      const { name, date, languaje } = data.errors;
      const errors = { global: data.message, name, date, languaje };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'FETCH_MOVIE_PENDING': {
      return {
        ...state,
        loading: true,
        movie: {name:'', date: '', languaje: ''}
      }
    }

    case 'FETCH_MOVIE_FULFILLED': {
      return {
        ...state,
        movie: action.payload.data.data,
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_MOVIE_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'UPDATE_MOVIE_FULFILLED': {
      const movie = action.payload.data.data;
      return {
        ...state,
        movies: state.movies.map(item => item.id === movie.id ? movie : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_MOVIE_REJECTED': {
      const data = action.payload.response.data;
      const { name, date, languaje } = data.errors;
      const errors = { global: data.message, name, date, languaje };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'DELETE_MOVIE_FULFILLED': {
      const id = action.payload.data.id;
      return {
        ...state,
        movies: state.movies.filter(item => item.id !== id)
      }
    }

    default:
      return state;
  }
}
