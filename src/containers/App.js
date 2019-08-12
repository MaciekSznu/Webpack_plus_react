import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoTasks from '../components/TodoList';
import TodoForm from '../components/TodoForm';

import { hot } from 'react-hot-loader';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {//początkowy stan aplikacji
      data: [
        {
        id: 1,
        text: 'Task no 1'
        },
        {
        id: 2,
        text: 'Task no 2'
        },
        {
        id: 3,
        text: 'Task no 3'
        }
        ],
      title: 'To do list with React and webpack'
    };
  }

  addTodo(val){//metoda dodająca nowe elementy Todo
    const todo = {
      text: val,
      id: uuid.v4(),//biblioteka uuid generuje unikalne wartości, które będą dla nas kluczami
    };
    if (todo.text.trim() !== '') {
      const data = [...this.state.data, todo];//const zapewnia, że zmienna nie zostanie nadpisana, spread tablicy i jednoczesne tworzenie nowej tablicyz dodatkowym elementem todo na końcu - działa jak metoda push ale bez modyfikacji stanu
      this.setState({data});//skrócony zapis obiektu {data: data}
    } 
    else {
      alert('Podaj nazwę zadania')
    }
  }

  removeTodo(id) {//metoda usuwająca elementy z listy
    const remainder = this.state.data.filter(todo => todo.id !== id);//filtrowanie tablicy po id zwraca nową tablicę bez elementu o danym id
    this.setState({data: remainder});
  }

  render() {
    return (//bind - dla zachowania kontekstu
      <div className={style.TodoApp}>
        <Title title={this.state.title} length={this.state.data.length} />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <ul className={style.list}>
          <TodoTasks data={this.state.data} remove={this.removeTodo.bind(this)} />
        </ul>
      </div>
    );
  }
}

export default hot(module)(App);