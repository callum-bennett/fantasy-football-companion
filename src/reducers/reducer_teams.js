import _ from 'lodash';

import { FETCH_MASTER, FETCH_TEAMS } from '../actions'

export default function(state = {}, {type, payload}) {

  switch (type) {

    case FETCH_MASTER:
      return _.mapKeys(payload.teams, 'id');
      break;

    case FETCH_TEAMS:
      return _.mapKeys(payload, 'id');
      break;

    default:
      return state;
  }
}