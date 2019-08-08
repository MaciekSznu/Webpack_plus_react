import React from 'react';
import style from './TodoForm.css'

class TodoForm extends React.Component {//nowa klasa TodoForm
  constructor(props) {
    super(props)
    this.state = {content: ''}//stan początkowy pusty string
  }

  handleChange(e) {//po zmianie zawartości zmienia stan na  wpisaną zawartość
    this.setState({content: e.target.value})
  }

  handleClick() {//po kliknięciu dodaje elemet korzystając z funkcji addTodo przyjmując jako stan wpisaną zawartość
    this.props.addTodo(this.state.content)
  }

  render() {//dodajemy pole input zawierające wpisany task i obsługujące funkcję handleChange oraz button dodający nowy task do listy za pomoca funkcji handleClick
    return <div>
      <input  className={style.addtaskinput} type="text" placeholder='Dodaj zadanie' value={this.state.content} onChange={this.handleChange.bind(this)} />
      <button className={style.addtaskbutton} onClick={this.handleClick.bind(this)}>Add new task</button>
    </div>
  }
}

export default TodoForm;