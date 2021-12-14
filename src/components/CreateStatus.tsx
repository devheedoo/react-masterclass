import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { statusesAtom } from '../states/statusAtom';

interface IForm {
  status: string;
}

function CreateStatus() {
  const [statuses, setStatuses] = useRecoilState(statusesAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ status }: IForm) => {
    console.log('Add:', status);
    if (statuses.includes(status)) {
      console.log(`${status} already exists`);
      return;
    }
    setStatuses([...statuses, status]);
    setValue('status', '');
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register('status')} type="text" placeholder="Add a status" />
      <button>Add</button>
    </form>
  );
}

export default CreateStatus;
