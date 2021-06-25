import {
  fetchGeneralmanager
} from "../actions/ActionTypes";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case fetchGeneralmanager:
      return {
        ...state,
        items: action.payload.data,
      };
    default:
      return state;
  }
}
