import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface IForm {
  userId: string;
  password: string;
  repassword: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  serverError?: string;
}

const EMAIL_DOMAIN_ALLOWED = '@gmail.com';
const IS_API_SERVER_LIVE = true;

function TodoList() {
  const { register, handleSubmit, formState, setError, getValues, trigger } =
    useForm<IForm>({
      defaultValues: {
        email: EMAIL_DOMAIN_ALLOWED,
      },
    });

  const onValid = (inputValues: IForm) => {
    if (!IS_API_SERVER_LIVE) {
      setError('serverError', { message: 'API server is not working' });
    }
  };

  useEffect(() => {
    trigger();
  }, []);

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
        <span>{formState.errors?.userId?.message}</span>

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
          type="password"
          placeholder="password"
        />
        <span>{formState.errors?.password?.message}</span>

        <input
          {...register('repassword', {
            required: 'Re-password is required',
            validate: (repassword) =>
              repassword !== getValues().password
                ? 're-password should match password'
                : true,
          })}
          type="password"
          placeholder="re-password"
        />
        <span>{formState.errors?.repassword?.message}</span>

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
        <span>{formState.errors?.firstName?.message}</span>

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
        <span>{formState.errors?.lastName?.message}</span>

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
        <span>{formState.errors?.email?.message}</span>

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
            validate: {
              noAdmin: (username) =>
                username.includes('admin') ? 'no admins allowed' : true,
              noDev: (username) =>
                username.includes('dev') ? 'no devs allowed' : true,
            },
          })}
          placeholder="username"
        />
        <span>{formState.errors?.username?.message}</span>

        <button>add</button>
      </form>
    </div>
  );
}

export default TodoList;
