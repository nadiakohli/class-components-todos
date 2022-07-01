import React, { Component } from 'react';

// Styles
import { ItemTodo, ItemText, DeleteItem } from './styled';

// Icons
import { ReactComponent as IconClose } from '../../icons/timesSolid.svg';

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

export default ToDo;
