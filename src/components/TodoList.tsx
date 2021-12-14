import { useForm } from 'react-hook-form';
import { atom, useRecoilState } from 'recoil';

interface IForm {
  todo: string;
}

interface ITodo {
  id: number; // using Date
  text: string;
  status: 'TODO' | 'DOING' | 'IN_REVIEW' | 'DONE';
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
      status: 'TODO',
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
    </div>
  );
}

export default TodoList;
