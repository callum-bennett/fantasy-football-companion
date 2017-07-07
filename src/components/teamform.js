import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamForm extends Component {

  render() {

    console.log(this.props.fixtures);

    let forms;
    for (let i=0; i<6; i++) {
      forms += {i};
    }

    return (
      <div>
        {forms}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { fixtures: state.teamFixtures }
}

export default connect(mapStateToProps)(TeamForm);
