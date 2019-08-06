import React from 'react';
import uuid from 'uuid';
import style from '../App.css';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {//początkowy stan aplikacji
            data: []
        };
    }

    addTodo(val){//metoda dodająca nowe elementy Todo
        const todo = {
            text: val,
            id: uuid.v4(),//biblioteka uuid generuje unikalne wartości, które będą dla nas kluczami
        };
        const data = [...this.state.data, todo];//const zapeani, że zmienna nie zostanie nadpisana, spread tablicy i jednoczesne tworzenie nowej tablicyz dodatkowym elementem todo na końcu - działa jak metoda push ale bez modyfikacji stanu
        this.setState({data});//skrócony zapis obiektu {data: data}
    }

    removeTodo(id) {//metoda usuwająca elementy z listy
      const remainder = this.state.data.filter(todo => todo.id !== id);//filtrowanie tablicy po id zwraca nową tablicę bez elementu o danym id
      this.setState({data: remainder});
    }

    render() {
      return (
          <div className={style.TodoApp}>
              Tutaj pojawią się komponenty naszej aplikacji.
          </div>
      );
    }
}

export default App;