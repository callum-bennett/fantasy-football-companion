
import { ADD_TEAM_FILTER } from '../actions/filtering'

export default function(state = {}, action) {

  switch (action.type) {



    // const post = action.payload.data;
    // const newState = { ...state };
    // newState[post.id] = post;
    // return newState;
    // return { ...state, [action.payload.data.id]: action.payload.data };
    case ADD_TEAM_FILTER:
      const team = action.data;
      const newState = { ...state };
      (newState.teams = newState.teams || []).push(team);
      return newState;
      break;

    default:
      return state;
  }
}