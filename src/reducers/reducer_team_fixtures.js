import _ from 'lodash';
import { FETCH_FIXTURES } from '../actions'

export default function(state = {}, action) {

  switch (action.type) {

    case FETCH_FIXTURES:
      let fixtures = {};
      action.payload.map(fixture => {
        (fixtures[fixture.event] = fixtures[fixture.event] || []).push(fixture);
      });

      return _.mapKeys(action.payload, 'event');
      break;

    default:
      return state;
  }
}