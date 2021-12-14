import { ITodo } from '../atoms/todosAtom';

function Todo({ text }: ITodo) {
  return <li>{text}</li>;
}

export default Todo;
