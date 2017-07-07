import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMaster, fetchFixtures } from '../actions/index';

import MyTeam from './my_team';

class App extends Component {

  componentDidMount() {
    this.props.fetchFixtures();
    this.props.fetchMaster();
  }

  render() {
    return (
      <div>
        <MyTeam />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    teams: state.teams,
  }
}

export default connect(mapStateToProps, { fetchMaster, fetchFixtures })(App);
