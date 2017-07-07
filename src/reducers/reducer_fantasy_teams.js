import _ from 'lodash';

import { FETCH_FANTASY_TEAM } from '../actions/types';

export default function fetchFantasyTeam(state = {}, {type, payload} ) {

    switch (type) {
        case FETCH_FANTASY_TEAM:
        return payload.picks;
        break;
    }
    return state;
}