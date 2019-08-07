import React from 'react';
import style from './Title.css'

const Title = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p className={style.taskcounter}>Number of tasks {props.length}</p>
    </div>
  )
}


export default Title;