import { useRecoilState } from 'recoil';
import { DEFAULT_STATUSES, statusesAtom } from '../states/statusAtom';
import { todosAtom } from '../states/todosAtom';

function SaveAndClearLocalStorage() {
  const [todos, setTodos] = useRecoilState(todosAtom);
  const [statuses, setStatuses] = useRecoilState(statusesAtom);

  const saveTodosOnLocalStorage = (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    window.localStorage.setItem('todos', JSON.stringify(todos));
    window.localStorage.setItem('statuses', JSON.stringify(statuses));
  };

  const clearAllWithLocalStorage = (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    window.localStorage.clear();
    setTodos([]);
    setStatuses(DEFAULT_STATUSES);
  };

  return (
    <div>
      <button onClick={saveTodosOnLocalStorage}>
        Save todos on LocalStorage
      </button>
      <button onClick={clearAllWithLocalStorage}>
        Clear all with LocalStorage
      </button>
    </div>
  );
}

export default SaveAndClearLocalStorage;
