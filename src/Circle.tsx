import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  backgroundColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.backgroundColor};
  border: 5px solid ${(props) => props.borderColor ?? props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Circle({ backgroundColor, borderColor, text }: CircleProps) {
  const [value, setValue] = useState<number | string>(0);
  return (
    <Container backgroundColor={backgroundColor} borderColor={borderColor}>
      {text ?? "NO TEXT"}
    </Container>
  );
}

export default Circle;
