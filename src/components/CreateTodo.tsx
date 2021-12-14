import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { ITodo, todosAtom } from '../atoms/todosAtom';

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todosAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    console.log('Add:', todo);
    const newTodo: ITodo = {
      id: new Date().getTime(),
      text: todo,
      status: 'todo',
    };
    setTodos((currentTodos) => [newTodo, ...currentTodos]);
    setValue('todo', '');
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register('todo')} type="text" placeholder="Add a todo" />
      <button>Add</button>
    </form>
  );
}

export default CreateTodo;
