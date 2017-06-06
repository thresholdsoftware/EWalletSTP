import {UPDATE_TRANSACTIONS} from '../actions/index.actions';

export default function language (state = [], action) {
  switch (action.type) {
  case UPDATE_TRANSACTIONS: {
    return action.payload;
  }
  default:
    return state;
  }
}
