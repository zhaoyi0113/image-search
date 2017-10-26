import { combineReducers } from 'redux';
import actions from '../actions';

const initState = { images: [] };

const queryImage = (state, action) => {
  if (typeof state === 'undefined') {
    return {};
  }
  console.log('reducer:', action);
  switch (action.type) {
    case actions.QUERY_IMAGES:
      const images = action.images;
      return { ...state, images };
    case actions.CLEAR_SEARCH_IMAGES:
      return { ...state, images: {} };
    default:
      return initState;
  }
};

export default combineReducers({ images: queryImage });
