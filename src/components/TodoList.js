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

// const TodoTasks = ({ data, removeTodo}) => {//funkcja przyjmująca jako argumenty listę zadań (data) oraz funkcje usuwającą zadania
//   const todoList = data.length ? (//sprawdzamy długość tablicy tzn czy sa zadania do wykonania
//     data.map(data => {//jesli są zadania do wykonania mapujemy tablicę 
//       return (//zwracamy z mapowania listę zadań, na <li> onClick wywołujemy funkcję usuwającą zadanie
//         <Todo key={data.id} click={this.props.remove.bind(this, data.id)} text={data.text} id={data.id} />
//       )
//     })
//   ) : ( //jeśli nie ma zadań do wykonania to wyświetlamy poniższy tekst
//     <p>Nie masz żadnych zadań do wykonania</p>
//   );
//   return (//zwracamy cały obiekt
//     <div>{todoList}</div>
//   )
// }

export default TodoTasks;