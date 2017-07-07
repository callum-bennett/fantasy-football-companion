import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchTeams } from '../actions/index';
import { addTeamFilter } from '../actions/filtering';

class TeamList extends Component {

  handleClick(team) {
    this.props.addTeamFilter(team.code)
  }

  renderTeams() {
    return this.props.teams.map(team => {
      return (
        <li
          key={team.id}
          className="list-group-item"
          onClick={() => {this.handleClick(team)}}
        >
          <a href="#">{team.name}</a>
        </li>
      )
    });
  }

  render() {
    if (!this.props.teams.length) {
      return <div></div>;
    }

    return (
      <div>
        <ul className="list-group">
          {this.renderTeams()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { teams: state.teams }
}

export default connect(mapStateToProps, { fetchTeams, addTeamFilter })(TeamList);