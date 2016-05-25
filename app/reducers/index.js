import { combineReducers } from 'redux';
import user from 'reducers/user';
import topic from 'reducers/topic';
import result from 'reducers/result';
import message from 'reducers/message';
import layout from 'reducers/layout';
import { routerReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  layout,
  topic,
  result,
  message,
  routing
});

export default rootReducer;
