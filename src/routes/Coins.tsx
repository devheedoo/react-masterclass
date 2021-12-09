import styled from "styled-components";

const H1 = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

function Coins() {
  return <H1>Coins</H1>;
}

export default Coins;
