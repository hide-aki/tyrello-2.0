import { merge } from 'lodash';

import { RECEIVE_SHARED_BOARDS } from '../actions/board_actions';

const sharedWithReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHARED_BOARDS:
      return merge({}, state, action.boards.user);
    default:
      return state;
  }
};

export default sharedWithReducer;