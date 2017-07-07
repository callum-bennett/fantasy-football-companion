import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Icon } from 'semantic-ui-react';

import { fetchFantasyTeam } from '../actions/index';

const CARD_VIEW = 'card_view';
const LIST_VIEW = 'list_view';

const IMAGE_ROOT = 'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p';

class MyTeam extends Component {

    constructor() {
      super();
      this.state = {
          view: CARD_VIEW
      };
    }

    componentWillMount() {
        this.props.fetchFantasyTeam();
    }

    renderPlayerCard(player) {
        const team = this.props.teams[player.team];
        return (
            <Card
              raised
              image={IMAGE_ROOT + player.photo.replace('.jpg', '.png')}
              key={player.id}
              header={player.second_name}
              meta={team.name}
            />
        );
    }

    renderCardGroup(selectedPlayers) {
        return (
          <Card.Group doubling itemsPerRow="10">
            {selectedPlayers.map(player => this.renderPlayerCard(player))}
          </Card.Group>
        );
    }

  render() {
    const selectedPlayers = this.props.selectedPlayers;
    let theComponent = <div></div>;

    if (selectedPlayers) {
      if (this.state.view === CARD_VIEW) {
        theComponent = this.renderCardGroup(selectedPlayers);
      } else {
        theComponent = <div>This view isnt defined yet</div>
      }

    }

    return (
      <div>
        {theComponent}
      </div>
    );
  }
}

function mapStateToProps({ players, teams, userPicks }) {
  let selectedPlayers;

  if (players && userPicks.length) {
    selectedPlayers = getPlayersFromPicks(players, userPicks);
  }

  return {
    selectedPlayers,
    teams
  };
}

function getPlayersFromPicks(players, userPicks) {
  let selectedPlayers = [];

  userPicks.forEach(({ element, position }) => {
      selectedPlayers.push(players[element]);
  });
  return selectedPlayers;
}


export default connect(mapStateToProps, { fetchFantasyTeam } )(MyTeam);