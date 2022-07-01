import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

// Components
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';

// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const H1 = styled.h1`
  background: -webkit-linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
  };

  handleAddTask(value) {
    this.setState({
      tasks: [
      ...this.state.tasks,
      {
        id: nanoid(),
        task: value, 
        complete: false,
      },
    ]});
  };

  handleRemoveTask(event, id) {
    event.stopPropagation();
    this.setState({
      tasks: [...this.state.tasks.filter((todo) => todo.id !== id)],
    });
  };

  handleUpdateTask(id) {
    this.setState({
      tasks: [
        ...this.state.tasks.map((todo) => todo.id === id
          ? { ...todo, complete: !todo.complete }
          : todo
        )]
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <Wrapper>
        <header>
          <H1>Task list: {tasks.length}</H1>
        </header>
        <ToDoForm handleAddTask={this.handleAddTask} />
        {tasks.map((todo) => (
          <ToDo
            todo={todo}
            key={todo.id}
            handleUpdateTask={this.handleUpdateTask}
            handleRemoveTask={this.handleRemoveTask}
          />
        ))}
      </Wrapper>
    );
  };
};

export default App;
