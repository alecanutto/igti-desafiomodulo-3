import axios from 'axios';

const API_URL = 'http://localhost:3001/todos/';

async function getAllTodos() {
  const response = await axios.get(API_URL);
  return response.data;
}

async function getTodosByYearAndMonth(year, month) {
  const response = await axios.get(`${API_URL}?year=${year}&month=${month}`);
  return response.data;
}

async function updateTodo(todo) {
  if (todo === undefined) return;
  const response = await axios.put(`${API_URL}${todo.id}`, todo);
  return response.data;
}

export { getAllTodos, getTodosByYearAndMonth, updateTodo };