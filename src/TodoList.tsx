import { useForm } from 'react-hook-form';

interface IForm {
  todo: string;
}

function TodoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = (values: IForm) => {
    console.log('Add:', values.todo);
    setValue('todo', '');
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register('todo')} type="text" placeholder="Add a todo" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default TodoList;
