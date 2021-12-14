import { useForm } from 'react-hook-form';

function TodoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('userId', {
            required: 'ID is required',
            minLength: {
              value: 5,
              message: 'Length of first name should be longer than 4',
            },
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: 'Only alphabet and number are allowed for ID',
            },
          })}
          placeholder="ID"
        />
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Length of first name should be longer than 7',
            },
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: 'Only alphabet and number are allowed for password',
            },
          })}
          placeholder="password"
        />
        <input
          {...register('firstName', {
            required: 'first name is required',
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: 'Only alphabet and number are allowed for first name',
            },
          })}
          placeholder="first name"
        />
        <input
          {...register('lastName', {
            required: 'last name is required',
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: 'Only alphabet and number are allowed for last name',
            },
          })}
          placeholder="last name"
        />
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@gmail.com$/,
              message: 'only @gmail.com emails are allowed',
            },
          })}
          placeholder="email"
        />
        <input
          {...register('username', {
            required: 'Username is required',
            minLength: {
              value: 5,
              message: 'Length of name should be longer than 4',
            },
            pattern: {
              value: /^[A-Za-z0-9]+$/,
              message: 'Only alphabet and number are allowed for username',
            },
          })}
          placeholder="username"
        />
        <button>add</button>
      </form>
    </div>
  );
}

export default TodoList;
