import { FETCH_ITEMS_SUCCESS, FETCH_ITEMS_ERROR } from './../actions/items';

const INITIAL_STATE = { items: [] };

export default function items(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS: {
      return state;
    }
    case FETCH_ITEMS_ERROR: {
      return state;
    }
    default:
      return state;
  }
}
