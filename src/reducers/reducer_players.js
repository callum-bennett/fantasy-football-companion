import _ from 'lodash';

import { FETCH_MASTER } from '../actions'

export default function(state = [], action) {

  switch (action.type) {

    case FETCH_MASTER:
      return _.mapKeys(action.payload.elements, 'id');
      break;

    default:
      return state;
  }
}