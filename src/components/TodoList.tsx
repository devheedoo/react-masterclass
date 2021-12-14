import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { ITodo, todosAtom, TodoStatus } from '../atoms/todosAtom';
import Todo from './Todo';

interface IForm {
  todo: string;
}

function TodoList() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ todo }: IForm) => {
    console.log('Add:', todo);
    const newTodo: ITodo = {
      id: new Date().getTime(),
      text: todo,
      status: TodoStatus.TODO,
    };
    setTodos((currentTodos) => [newTodo, ...currentTodos]);
    setValue('todo', '');
  };

  return (
    <div>
      <h1>TODOLIST</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register('todo')} type="text" placeholder="Add a todo" />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
