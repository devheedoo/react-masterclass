import { useForm } from "react-hook-form";

function TodoList() {
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("name")} placeholder="Add a name" />
        <input {...register("age")} placeholder="Add a age" />
        <input {...register("firstName")} placeholder="Add a first name" />
        <input {...register("lastName")} placeholder="Add a last name" />
        <input {...register("todo")} placeholder="Add a todo" />
        <button>add</button>
      </form>
    </div>
  );
}

export default TodoList;
