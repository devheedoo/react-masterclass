import { useRecoilValue } from 'recoil';
import { todosSelector, TodoStatus } from '../atoms/todosAtom';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

function TodoList() {
  const todosByStatus = useRecoilValue(todosSelector);

  return (
    <div>
      <h1>TODOLIST</h1>
      <CreateTodo />
      {todosByStatus.map((todos, index) => (
        <div style={{ marginTop: 10 }}>
          <h2>{Object.keys(TodoStatus)[index]}</h2>
          <ul>
            {todos.map((todo) => (
              <Todo {...todo} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
