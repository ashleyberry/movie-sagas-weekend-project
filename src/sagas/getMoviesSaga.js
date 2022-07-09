import axios from "axios";
import { put } from "redux-saga/effects";

function* getMoviesSaga() {
  const response = yield axios({
    method: "GET",
    url: "/api/movie",
  });
  if (response) {
    yield put({
      type: "SET_MOVIES",
      payload: response.data,
    });
  } else {
    console.log("error:");
  }
} // end getMoviesSaga

export default getMoviesSaga;
