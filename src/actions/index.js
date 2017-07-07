import axios from 'axios';

import {
  FETCH_FANTASY_TEAM
} from './types';

export const FETCH_MASTER = 'fetch_master';
export const FETCH_TEAMS = 'fetch_teams';
export const FETCH_FIXTURES = 'fetch_fixtures';

const CORS_ANYHWERE = 'https://cors-anywhere.herokuapp.com';
const ROOT_URL = 'https://fantasy.premierleague.com/drf';

export function authenticate(data) {
  return (dispatch) => {
      dispatch({ type: FETCH_MASTER, payload: data })
  };
}

export function fetchFantasyTeam(teamId) {
  teamId = '1647988';
  const request = axios.get(`${CORS_ANYHWERE}/${ROOT_URL}/drf/entry/${teamId}/event/38/picks`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: FETCH_FANTASY_TEAM, payload: data })
    });
  }
}

export function fetchMaster() {

  const request = axios.get(`${CORS_ANYHWERE}/${ROOT_URL}/bootstrap-static`);

  return (dispatch) => {
    request.then(({data}) => {
        dispatch({ type: FETCH_MASTER, payload: data })
    });
  };
}

export function fetchTeams() {

  const request = axios.get(`${CORS_ANYHWERE}/${ROOT_URL}/teams`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: FETCH_TEAMS, payload: data })
    });
  };
}

export function fetchFixtures() {

  const request = axios.get(`${CORS_ANYHWERE}/${ROOT_URL}/fixtures`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: FETCH_FIXTURES, payload: data })
    });
  };
}