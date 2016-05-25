import {
  GET_RESULTS_REQUEST,
  GET_RESULTS_SUCCESS,
  GET_RESULTS_FAILURE,
  DESTROY_RESULT,
  SEARCH_BOX_QUERY
} from 'types';

export default function result(state = {results : [], searchQuery: '' }, action){
  switch (action.type) {
    case GET_RESULTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_RESULTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        results: action.req.data
      });
    case GET_RESULTS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case SEARCH_BOX_QUERY:{
      return Object.assign({}, state, {
        searchQuery: action.data.text
      });
    }
    default:
      return state;
  }
}
