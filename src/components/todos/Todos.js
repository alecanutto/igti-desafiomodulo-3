import React from 'react';
import Todo from '../todo/Todo';

import css from './todos.module.css';

export default function Todos(props) {

  const handleUpdateTodo = (todo) => {
    props.onSelectTodo(todo);
  }

  const { todos } = props;

  return (
    <div className={css.todos}>
      {todos.map((todo, index) =>
        <Todo
          key={index}
          todo={todo}
          onSelectTodo={handleUpdateTodo}
        />
      )}
    </div>
  )
}
