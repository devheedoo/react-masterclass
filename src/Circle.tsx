import styled from 'styled-components';

interface CircleProps {
  backgroundColor: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.backgroundColor};
`;

function Circle({ backgroundColor }: CircleProps) {
  return <Container backgroundColor={backgroundColor} />;
}

export default Circle;
