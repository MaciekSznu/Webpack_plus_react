import React from 'react';
import style from './Title.css'

const Title = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2 className={style.taskcounter}>Number of tasks: {props.length}</h2>
    </div>
  )
}


export default Title;