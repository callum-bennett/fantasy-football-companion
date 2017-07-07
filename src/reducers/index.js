import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import GameweekFixtureReducer from './reducer_gameweek_fixtures';
import AuthenticationReducer from './reducer_authentication';
import TeamFixtureReducer from './reducer_team_fixtures';
import TeamReducer from './reducer_teams';
import PlayerReducer from './reducer_players';
import FilterReducer from './reducer_filters';
import FantasyTeamReducer from './reducer_fantasy_teams';

const rootReducer = combineReducers({
  authenticated: AuthenticationReducer,
  gameweekFixtures: GameweekFixtureReducer,
  teamFixtures: TeamFixtureReducer,
  teams: TeamReducer,
  players: PlayerReducer,
  filters: FilterReducer,
  form: formReducer,
  userPicks: FantasyTeamReducer
});

export default rootReducer;
