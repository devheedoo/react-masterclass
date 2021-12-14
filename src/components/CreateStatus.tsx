import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { statusesAtom } from '../states/statusAtom';

interface IForm {
  status: string;
}

function CreateStatus() {
  const [statuses, setStatuses] = useRecoilState(statusesAtom);
  const { register, handleSubmit, setValue, formState } = useForm<IForm>();
  const handleValid = ({ status }: IForm) => {
    console.log('Add:', status);
    setStatuses([...statuses, status]);
    setValue('status', '');
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('status', {
          validate: (status) =>
            statuses.includes(status)
              ? `ERROR: ${status} already exists.`
              : true,
        })}
        type="text"
        placeholder="Add a status"
      />
      <button>Add</button>
      <span>{formState.errors?.status?.message}</span>
    </form>
  );
}

export default CreateStatus;
