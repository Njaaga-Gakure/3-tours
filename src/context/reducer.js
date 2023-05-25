import {
  GET_TOURS_BEGIN,
  GET_TOURS_SUCCESS,
  GET_TOURS_ERROR,
  REMOVE_TOUR,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === GET_TOURS_BEGIN) {
    return { ...state, loading: true };
  }
  if (action.type === GET_TOURS_SUCCESS) {
    return { ...state, loading: false, tours: action.payload };
  }
  if (action.type === GET_TOURS_ERROR) {
    return { ...state, loading: false, error: true };
  }
  if (action.type === REMOVE_TOUR) {
    const newTours = state.tours.filter((tour) => tour.id !== action.payload);
    return { ...state, tours: newTours };
  }
};

export default reducer;
