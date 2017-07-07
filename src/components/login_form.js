import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { authenticate } from '../actions/index';


class LoginForm extends Component {

  componentWillMount() {
    if (this.props.authenticated) {
      console.log('Already logged in - error');
    }
  }

  renderField(field) {
    const { meta: { touched, error} } = field;
    const errorProp = (touched && error) ? ['error'] : [''];

    return (
      <div className="ui field" error {...errorProp} >
        <label>{field.label}</label>
        <input
          value=""
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.authenticate(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        className="ui form"
        onSubmit={handleSubmit(this.onSubmit.bind(this))}
      >
        <Field
          label="Team ID"
          name="team_id"
          component={this.renderField}
        />
      </form>
    )
  }
}

function mapStateToProps( {authenticated} ) {
  return {
    authenticated
  }
}

function validate(values) {
  const errors = {};

  if (!values.team_id) {
    errors.team_id = 'Invalid Team ID';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'LoginForm'
})(
  connect(mapStateToProps, { authenticate } )(LoginForm)
);
