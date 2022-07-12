import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import { Input, Button, Form } from 'components/ToDoForm/styled';

class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  };

  handleChange({ target: { value: inputValue } }) {
    this.setState({ value: inputValue });
  };

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.value.trim() !== '') {
      this.props.handleAddTask(this.state.value);
      this.setState({ value: '' });
    };
  };

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    };
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          value={this.state.value}
          type="text"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}
          placeholder="Add a new task..."
        />
        <Button>Save</Button>
      </Form>
    );
  };
};

ToDoForm.propTypes = {
  handleAddTask: PropTypes.func.isRequired,
};

export default ToDoForm;
