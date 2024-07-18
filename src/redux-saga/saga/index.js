import { all } from "redux-saga/effects";
import { handle_delete_recipe_saga, handle_get_recipe_saga, handle_post_recipe_saga, handle_update_recipe_saga } from "./root/recipeSaga";

function* rootSaga() {
  yield all([
    handle_get_recipe_saga(),
    handle_post_recipe_saga(),
    handle_delete_recipe_saga(),
    handle_update_recipe_saga(),
  ]);
}

export default rootSaga;
