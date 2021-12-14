import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

interface IForm {
  todo: string;
}

interface ITodo {
  id: number; // using Date
  text: string;
  status: TodoStatus;
}

enum TodoStatus {
  TODO = 'todo',
  DOING = 'doing',
  IN_REVIEW = 'in_review',
  DONE = 'done',
}

const todosAtom = atom<ITodo[]>({
  key: 'todos',
  default: [],
});

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
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
