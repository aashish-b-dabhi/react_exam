import axios from "axios";
import {
  BASE_URL,
  DELETE_RECIPE,
  GET_RECIPE,
  POST_RECIPE,
  PUT_RECIPE,
} from "../constant";

let get_recipe = async (action) => {
  // console.log(action, "action from get api");

  let res = await axios.get(BASE_URL + GET_RECIPE);
  // console.log(res, "res from get api");
  let data = res.data;
  let status = res.status;
  return { data, status };
};

let post_recipe = async (action) => {
  // console.log(action, "action from post api");
  let { data, status } = await axios.post(
    BASE_URL + POST_RECIPE,
    action.payload
  );
  return { data, status };
};

let delete_recipe = async (action) => {
  // console.log(action, "from delete api");
  let { data, status } = await axios.delete(
    BASE_URL + DELETE_RECIPE + action.payload
  );
  return { data, status };
};

let update_recipe = async (action) => {
  console.log(action, "from update api");

  let { data, status } = await axios.put(
    BASE_URL + PUT_RECIPE + action.payload.id,
    action.payload
  );
  return { data, status };
};

export { get_recipe, post_recipe, delete_recipe, update_recipe };
