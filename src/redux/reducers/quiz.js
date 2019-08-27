const initialState = {
  loading: false,
  quiz: [],
};

export default function quiz(state = initialState, action) {
  switch (action.type) {
    case 'GET_QUIZ_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_QUIZ_SUCCESS':
      return {
        ...state,
        loading: false,
        quiz: action.payload,
      };
    case 'GET_QUIZ_ERROR':
      return {
        ...state,
        loading: false,
        quiz: [],
      };
    default:
      return state;
  }
}
