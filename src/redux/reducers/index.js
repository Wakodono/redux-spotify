import { initialState } from "../tools/initialState";

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ARTIST":
      return {
        ...state,
        artist: action.payload,
        loading: {
          albums: [],
          albumsInfo: [],
          artistInfo: [],
        },
      };

    default:
      return state;
  }
}
