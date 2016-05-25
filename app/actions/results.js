import { polyfill } from 'es6-promise';
import * as types from 'types';
import request from 'axios';

polyfill();

function makeResultRequest(method, id, data, api = '/result') {
  return request[method](api + (id ? ('/' + id) : ''), data);
}

function destroy(index) {
  return { type: types.DESTROY_RESULT, index };
}

export function fetchResults(){
  return {
    type: types.GET_RESULTS,
    promise: makeResultRequest('get')
  }
}

export function changeSearchQuery(text){
  return {
    type: types.SEARCH_BOX_QUERY,
    data:{
      text: text
    }
  }
}
