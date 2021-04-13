import React, { useEffect, useState } from 'react';

import * as api from './api/apiService';
import ButtonContainer from './components/buttonContainer/ButtonContainer';

import Summary from './components/summary/Summary';
import Todos from './components/todos/Todos';

export default function App() {

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedTodo, setSelectedTodo] = useState();

  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    setTodos(await api.getTodosByYearAndMonth(selectedYear, selectedMonth));
  };

  useEffect(() => {
    getTodos();
  }, [selectedYear, selectedMonth]);

  useEffect(() => {
    const updateTodo = async () => {
      await api.updateTodo(selectedTodo);
      getTodos();
    };
    updateTodo();
  }, [selectedTodo])

  const handleSelectYear = (year) => {
    setSelectedYear(year);
  }

  const handleSelectMonth = (month) => {
    setSelectedMonth(month);
  }

  const handleUpdateTodo = (todo) => {
    setSelectedTodo(todo);
  }

  const totalTasks = todos.length;
  const totalTasksDone = todos.filter(todo => todo.done).length;
  const totalTasksNotDone = totalTasks - totalTasksDone;

  todos.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <>
      <ButtonContainer
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        onSelectYear={handleSelectYear}
        onSelectMonth={handleSelectMonth}
      />

      <Summary
        totalTasks={totalTasks}
        totalTasksDone={totalTasksDone}
        totalTasksNotDone={totalTasksNotDone}
      />

      <Todos
        todos={todos}
        onSelectTodo={handleUpdateTodo}
      />
    </>
  )

}
