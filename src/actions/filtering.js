export const ADD_TEAM_FILTER = 'add_team_filter';

export function addTeamFilter(id) {
  return {
    type: ADD_TEAM_FILTER,
    data: id
  };
};
