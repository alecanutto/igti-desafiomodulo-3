import React from 'react';

import css from './summary.module.css';

export default function Summary({ totalTasks, totalTasksDone, totalTasksNotDone }) {
  return (
    <div className={css.summary}>
      <span>Total de tarefas: <strong className={css.total}>{totalTasks}</strong> </span>
      <span>Tarefas realizadas: <strong className={css.done}>{totalTasksDone}</strong> </span>
      <span>Tarefas não realizadas: <strong className={css.notDone}>{totalTasksNotDone}</strong> </span>
    </div>
  )
}
