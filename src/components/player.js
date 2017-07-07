import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {

  render() {
    return (
      <div>
        {theComponent}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    players: state,
  }
}

export default connect(mapStateToProps)(Player);