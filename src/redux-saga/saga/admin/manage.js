import { call, put } from "redux-saga/effects";
import {
  delete_recipe,
  get_recipe,
  post_recipe,
  update_recipe,
} from "../../admin/api";
import { DELETE_RECIPE_NOTFOUND, DELETE_RECIPE_RECIVED, GET_RECIPE_NOTFOUND, GET_RECIPE_RECIVED, POST_RECIPE_NOTFOUND, POST_RECIPE_RECIVED, UPDATE_RECIPE_NOTFOUND, UPDATE_RECIPE_RECIVED } from "../../admin/action";

function* handle_get_recipe(action) {
  try {
    // console.log(action, "action from manage");
    let { status, data } = yield call(get_recipe, action);

    if (status == 200) {
      yield put({ type: GET_RECIPE_RECIVED, payload: data });
    }
  } catch (err) {
    yield put({ type: GET_RECIPE_NOTFOUND, payload: err });
  }
}

function* handle_post_recipe(action) {
  try {
    let { data, status } = yield call(post_recipe, action);
    yield put({ type: POST_RECIPE_RECIVED, payload: data });
  } catch (err) {
    yield put({ type: POST_RECIPE_NOTFOUND, payload: err });
  }
}

function* handle_delete_recipe(action) {
  try {
    let { data, status } = yield call(delete_recipe, action);
    yield put({ type: DELETE_RECIPE_RECIVED, payload: data });
  } catch (err) {
    yield put({ type: DELETE_RECIPE_NOTFOUND, payload: err });
  }
}

function* handle_update_recipe(action) {
  try {
    let { data, status } = yield call(update_recipe, action);

    yield put({ type: UPDATE_RECIPE_RECIVED, payload: data });
  } catch (err) {
    yield put({ type: UPDATE_RECIPE_NOTFOUND, payload: err });
  }
}

export {
  handle_get_recipe,
  handle_post_recipe,
  handle_delete_recipe,
  handle_update_recipe,
};
