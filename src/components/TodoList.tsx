import { useRecoilValue } from 'recoil';
import { todosAtom } from '../atoms/todosAtom';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

function TodoList() {
  const todos = useRecoilValue(todosAtom);

  return (
    <div>
      <h1>TODOLIST</h1>
      <CreateTodo />
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
