import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: this.props.todo
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  handleDelete (e) {
    e.preventDefault();
    this.props.removeTodo(this.state.todo.id);
  }
  toggleDone (e) {
    e.preventDefault();
    let donebutton = this.props.todo;
    donebutton.done = !donebutton.done;
    this.props.receiveTodo(donebutton);
  }

  render () {
    let doneStatus =  this.props.todo.done ? "Undo" : "Done";
    return <li>
      {this.props.todo.title}
      <button onClick={this.handleDelete}>Remove</button>
      <button onClick={this.toggleDone}>{doneStatus}</button>

    </li>;
  }
}

export default TodoListItem;
