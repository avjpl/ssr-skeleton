import * as ActionTypes from '../constants';

const initialState = {};

const comments = (state = initialState, action = '') => {
  switch (action.type) {
    case ActionTypes.FETCH_COMMENTS_SUCCESS:
      console.log('** FETCH_COMMENTS_SUCCESS **');
      console.log('action: ', action.res.data);
      console.log({
        ...state,
        comments: action.res.data,
      });
      return {
        ...state,
        comments: action.res.data,
      };

    case ActionTypes.FETCH_COMMENTS_FAILURE:
      return { error: action.error };

    default:
      return state;
  }
};

export default comments;
