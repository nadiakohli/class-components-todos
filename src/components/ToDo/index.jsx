import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import { ItemTodo, ItemText, DeleteItem } from 'components/ToDo/styled';

// Icons
import { ReactComponent as IconClose } from 'assets/icons/timesSolid.svg';

class ToDo extends Component {
  render () {
    const { todo, handleUpdateTask, handleRemoveTask } = this.props;
    return (
      <ItemTodo onClick={() => handleUpdateTask(todo.id)}>
        <ItemText primary={todo.complete}>{todo.task}</ItemText>
        <DeleteItem onClick={(e) => handleRemoveTask(e, todo.id)}>
          <IconClose/>
        </DeleteItem>
      </ItemTodo>
    );
  };
};

ToDo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    complete: PropTypes.bool,
    task: PropTypes.string,
  }).isRequired,
  handleUpdateTask: PropTypes.func.isRequired,
  handleRemoveTask: PropTypes.func.isRequired,
};

export default ToDo;
