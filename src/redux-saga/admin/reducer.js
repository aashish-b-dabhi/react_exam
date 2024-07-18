import { DELETE_RECIPE_NOTFOUND, DELETE_RECIPE_PENDING, DELETE_RECIPE_RECIVED, GET_RECIPE_NOTFOUND, GET_RECIPE_PENDING, GET_RECIPE_RECIVED, POST_RECIPE_NOTFOUND, POST_RECIPE_PENDING, POST_RECIPE_RECIVED, UPDATE_RECIPE_NOTFOUND, UPDATE_RECIPE_PENDING, UPDATE_RECIPE_RECIVED } from "./action";

let initialState = {
  recipe: [],
  isLoading: false,
  isError: null,
};

let recipeReducer = (state = initialState, action) => {
  console.log(action, "action fro reducer");

  switch (action.type) {
    case (GET_RECIPE_PENDING,
    POST_RECIPE_PENDING,
    DELETE_RECIPE_PENDING,
    UPDATE_RECIPE_PENDING): {
      return {
        ...state,
        isLoading: true,
      };
    }

    case GET_RECIPE_RECIVED: {
      return {
        isLoading: false,
        recipe: action.payload,
      };
    }
    //for post recipe success

    case POST_RECIPE_RECIVED: {
      return {
        isLoading: false,
        recipe: state.recipe.concat(action.payload),
      };
    }

    //for delete recipe

    case DELETE_RECIPE_RECIVED: {
      return {
        isLoading: false,
        recipe: state.recipe.filter((val) => val.id !== action.payload.id),
      };
    }

    //for update recipe
    case UPDATE_RECIPE_RECIVED: {
      return {
        isLoading: false,
        recipe: state.recipe.map((val) =>
          val.id == action.payload.id ? { ...action.payload } : val
        ),
      };
    }

    case (GET_RECIPE_NOTFOUND,
    POST_RECIPE_NOTFOUND,
    DELETE_RECIPE_NOTFOUND,
    UPDATE_RECIPE_NOTFOUND): {
      return {
        isLoading: false,
        isError: action.payload,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};

export default recipeReducer;
