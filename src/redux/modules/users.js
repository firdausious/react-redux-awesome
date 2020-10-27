const LOAD = "users/LOAD";
const LOAD_SUCCESS = "users/LOAD_SUCCESS";
const LOAD_FAIL = "users/LOAD_FAIL";

const initialState = {
  loaded: false,
  loading: false,
  data: [],
  error: null
};

export default function info(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error,
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.users && globalState.users.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => {
      return client("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error("404");
        })
    },
  };
}
