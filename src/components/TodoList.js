import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';

class TodoTasks extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return this.props.data.length ? (
      this.props.data.map(data => {
        return (//zwracamy z mapowania listę zadań renderowaną w komponencie Todo, na click wywołujemy funkcję usuwającą zadanie
          <Todo key={data.id} click={this.props.remove.bind(this, data.id)} text={data.text} id={data.id} />
        )
      })
      ) : (
        <p>Nie masz żadnych zadań do wykonania</p>    
      )
  }
}

export default TodoTasks;