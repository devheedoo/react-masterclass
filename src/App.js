import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const Button = styled.div`
  color: white;
  background-color: tomato;
  border: none;
  border-radius: 10px;
`;

function App() {
  return (
    <Father>
      <Button>Button</Button>
      <Button as="a" href="/abc">
        Button as a
      </Button>
    </Father>
  );
}

export default App;
