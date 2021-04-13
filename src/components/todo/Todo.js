import React, { useEffect, useState } from 'react';
import css from './todo.module.css';

export default function Todo(props) {

  const { todo } = props;

  const [isDone, setIsDone] = useState(todo.done);

  const dateFormatted = `${todo.date.split('-')[2]}/${todo.date.split('-')[1]}/${todo.date.split('-')[0]}`;

  useEffect(() => {
    todo.done = isDone;
    document.getElementById(todo.id).innerHTML = isDone ? "check_box" : "check_box_outline_blank";
  }, [isDone])

  const handleUpdateTodo = () => {
    setIsDone(!isDone);
    props.onSelectTodo(todo);
  }

  return (
    <div className={css.todo}>
      <span className={css.details}>
        <i id={todo.id}
          className="material-icons small"
          onClick={handleUpdateTodo}>
          {todo.done ? "check_box" : "check_box_outline_blank"}
        </i>
        <strong>{dateFormatted}</strong> - {todo.description}
      </span>
    </div>
  )
}
