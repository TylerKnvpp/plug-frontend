import INITIAL_FETCH from "../Constants/actionCreators";

export function getData() {
  return function(dispatch) {
    return fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "INITIAL_FETCH", payload: data });
      });
  };
}
