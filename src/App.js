import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;

const BoxOne = styled.div`
  background-color: teal;
  width: 200px;
  height: 200px;
`;

const BoxTwo = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
`;

function App() {
  return (
    <Father>
      <BoxOne />
      <BoxTwo />
    </Father>
  );
}

export default App;
