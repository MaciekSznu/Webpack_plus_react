import React from 'react';
import style from './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (//zwracamy komponent z onclickiem oraz textem
      <li className={style.listelement} onClick={this.props.click}>{this.props.text}</li>
    )
  };
}

export default Todo;