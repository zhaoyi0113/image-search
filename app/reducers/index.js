import { combineReducers } from 'redux';
import actions from '../actions';

const queryImage = (state, action) => {
  if (typeof state === 'undefined') {
    return {};
  }
  console.log('reducer:', action);
  switch (action.type) {
    case actions.QUERY_IMAGES:
      const images = action.images.data.items;
      return { ...state, images };
    default:
      return state;
  }
};

export default combineReducers({ images: queryImage });
