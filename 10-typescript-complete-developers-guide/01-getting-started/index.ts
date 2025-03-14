import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// interface is used to define structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    has a title of: ${title}
    Is it completed? ${completed}
  `);
};
