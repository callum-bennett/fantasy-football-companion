import React, { Component } from 'react';
import { Menu, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import LoginForm from './login_form';


export default class TopMenu extends Component {
  state = { activeItem: 'home' };

  renderAuthenticationButton() {
    return (
      <Modal size="small" trigger={<Menu.Item name="Sign in" />}>
        <Modal.Header>Enter your Team ID</Modal.Header>
        <Modal.Content>
          <LoginForm />
        </Modal.Content>
      </Modal>
    );
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted color="teal">
        <Menu.Item name="home" as={Link} to="/" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name="players" as={Link} to="/players" active={activeItem === 'players'} onClick={this.handleItemClick} />
        <Menu.Item name="teams" as={Link} to="/teams" active={activeItem === 'teams'} onClick={this.handleItemClick} />
        <Menu.Menu position="right">
          {this.renderAuthenticationButton()}
        </Menu.Menu>
      </Menu>
    );
  }
};