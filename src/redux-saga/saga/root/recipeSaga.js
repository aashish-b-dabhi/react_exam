import { takeLatest } from "redux-saga/effects";
import { DELETE_RECIPE_PENDING, GET_RECIPE_PENDING, POST_RECIPE_PENDING, UPDATE_RECIPE_PENDING } from "../../admin/action";
import {
  handle_delete_recipe,
  handle_get_recipe,
  handle_post_recipe,
  handle_update_recipe,
} from "../admin/manage";

function* handle_get_recipe_saga() {
  yield takeLatest(GET_RECIPE_PENDING, handle_get_recipe);
}

function* handle_post_recipe_saga() {
  yield takeLatest(POST_RECIPE_PENDING, handle_post_recipe);
}

function* handle_delete_recipe_saga() {
  yield takeLatest(DELETE_RECIPE_PENDING, handle_delete_recipe);
}

function* handle_update_recipe_saga() {
  yield takeLatest(UPDATE_RECIPE_PENDING, handle_update_recipe);
}

export {
  handle_get_recipe_saga,
  handle_post_recipe_saga,
  handle_delete_recipe_saga,
  handle_update_recipe_saga,
};
