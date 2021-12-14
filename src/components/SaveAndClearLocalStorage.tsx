import { useRecoilValue } from 'recoil';
import { statusesAtom } from '../states/statusAtom';
import { todosSelector } from '../states/todosSelector';

function SaveAndClearLocalStorage() {
  const todos = useRecoilValue(todosSelector);
  const statuses = useRecoilValue(statusesAtom);

  const saveTodosOnLocalStorage = (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    window.localStorage.setItem('todos', JSON.stringify(todos));
    window.localStorage.setItem('statuses', JSON.stringify(statuses));
  };

  const clearLocalStorage = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.localStorage.clear();
  };

  return (
    <div>
      <button onClick={saveTodosOnLocalStorage}>
        Save todos on LocalStorage
      </button>
      <button onClick={clearLocalStorage}>Clear LocalStorage</button>
    </div>
  );
}

export default SaveAndClearLocalStorage;
