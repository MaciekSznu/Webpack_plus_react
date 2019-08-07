import React from 'react';
import style from './TodoList.css';


const TodoTasks = ({ data, removeTodo}) => {//funkcja przyjmująca jako argumenty listę zadań (data) oraz funkcje usuwającą zadania
  const todoList = data.length ? (//sprawdzamy długość tablicy tzn czy sa zadania do wykonania
    data.map(data => {//jesli są zadania do wykonania mapujemy tablicę 
      return (//zwracamy z mapowania listę zadań, na <li> onClick wywołujemy funkcję usuwającą zadanie
        <ul key={data.id}>
          <li className={style.list} onClick={() => {removeTodo(data.id)}} >{data.text}</li>
        </ul>
      )
    })
  ) : ( //jeśli nie ma zadań do wykonania to wyświetlamy poniższy tekst
    <p>Nie masz żadnych zadań do wykonania</p>
  );
  return (//zwracamy cały obiekt
    <div>{todoList}</div>
  )
}

export default TodoTasks;