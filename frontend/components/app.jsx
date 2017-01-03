import React from 'react';
import TodoListContainer from './todo_list_container';

class App extends React.Component {
  render () {
    return <div>
      <h1>To-Do app</h1>
      <TodoListContainer/>
    </div>;
  }
}

export default App;
