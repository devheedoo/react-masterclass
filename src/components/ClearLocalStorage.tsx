import { useSetRecoilState } from 'recoil';
import {
  DEFAULT_STATUSES,
  statusAtom,
  statusesAtom,
} from '../states/statusAtom';
import { todosAtom } from '../states/todosAtom';

function SaveAndClearLocalStorage() {
  const setTodos = useSetRecoilState(todosAtom);
  const setStatuses = useSetRecoilState(statusesAtom);
  const setStatus = useSetRecoilState(statusAtom);

  const clearAllWithLocalStorage = (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    window.localStorage.clear();
    setTodos([]);
    setStatuses(DEFAULT_STATUSES);
    setStatus(DEFAULT_STATUSES[0]);
  };

  return (
    <div>
      <button onClick={clearAllWithLocalStorage}>
        Clear all with LocalStorage
      </button>
    </div>
  );
}

export default SaveAndClearLocalStorage;
