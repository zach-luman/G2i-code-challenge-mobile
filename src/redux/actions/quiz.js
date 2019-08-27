export const getQuiz = () => (dispatch) => {
  dispatch({ type: 'GET_QUIZ_REQUEST' });

  fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'GET_QUIZ_SUCCESS', payload: data.results });
    })
    .catch(() => {
      dispatch({ type: 'GET_QUIZ_ERROR' });
    });
};
