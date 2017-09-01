import PouchDB from 'pouchdb';

export const FETCH_ITEMS_SUCCESS = 'ITEMS_FETCH_SUCCESS';
export const FETCH_ITEMS_ERROR = 'ITEMS_FETCH_ERROR';

export function fetchItemsSuccess(items) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items
  }
}

export function fetchItemsError(errorMsg) {
  return {
    type: FETCH_ITEMS_ERROR,
    payload: errorMsg
  }
}

export function fetchItems() {
  return (dispatch) => {
    const db = new PouchDB('shopping-list');

    dispatch(fetchItemsSuccess([]));
  };
}
