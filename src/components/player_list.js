import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container, Table, Popup, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import { fetchMaster } from '../actions/index';

class PlayerList extends Component {

  getPlayerIcon(player) {
    const status = player.status;
    let iconName = 'info';
    let color = 'yellow';

    if (status === 's') {
      iconName = 'bookmark';
      color = 'red';
    } else if (status === 'i') {
      iconName = 'doctor';
      color = 'red';
    }

    return (
      <Popup label={player.news}>
        <Icon
          name={iconName}
          />
      </Popup>
    )
  }

  numericalSort(a, b, isAsc) {
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      return isAsc ? numA - numB : numB - numA;
  }

  renderCell(data) {
    return (
      <Table.Cell>{data}</Table.Cell>
    )
  }

  renderPlayerRow(player) {
    const playerName = `${player.first_name} ${player.second_name}`;
    let playerInfo = (player.status !== 'a') ? this.getPlayerIcon(player) : '';

    return (
      <Table.Row key={player.id}>
        {this.renderCell(playerInfo)}
        <Table.Cell><Link to={`/players/${player.id}`}>{playerName}</Link></Table.Cell>
        {this.renderCell(this.props.teams[player.team]['short_name'])}
        {this.renderCell(player.selected_by_percent)}
        {this.renderCell(player.total_points)}
        {this.renderCell(player.points_per_game)}
        {this.renderCell(player.now_cost / 10)}
      </Table.Row>
    );
  }

  renderPlayerRows() {
    return _.map(this.props.players, player => {
      return this.renderPlayerRow(player);
    });
  }

  render() {
    let theComponent = null;

    if (this.props.players.length) {
      theComponent = (
        <Table>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell name="news"></Table.HeaderCell>
              <Table.HeaderCell
                name="name"
                sortFn={(a, b, isAsc) => (isAsc ? a : b).localeCompare((isAsc ? b : a))}
              >Name</Table.HeaderCell>
              <Table.HeaderCell name="team">Team</Table.HeaderCell>
              <Table.HeaderCell name="selectedBy" sortFn={this.numericalSort} numeric={true}>Selected by</Table.HeaderCell>
              <Table.HeaderCell
                name="totalPoints"
                sortFn={this.numericalSort}
                numeric={true}
              >Total points
              </Table.HeaderCell>
              <Table.HeaderCell name="pointsPerGame" numeric={true}>Points/game</Table.HeaderCell>
              <Table.HeaderCell name="cost" numeric={true}>Cost</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.renderPlayerRows()}
          </Table.Body>

        </Table>
      );
    }

    return (
      <Container>
        {theComponent}
      </Container>
    )
  }
}



function filterPlayers(state) {
  const teams = state.filters.teams;
  let players = state.players;

  return players.filter((player) => {
    let result = true;
    if (teams) {
      result = (result && filterByTeams(player, teams));
    }
    return result;
  });
}

function filterByTeams(player, teams) {
  return teams.find(team => {
      return team === player.team_code;
  });
}

function mapStateToProps(state) {
  return {
    players: filterPlayers(state),
    teams: state.teams
  }
}

export default connect(mapStateToProps, { fetchMaster } )(PlayerList);