import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #81ecec, #c23699);
`;

const WhiteBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Content = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(137, 40, 40, 0.7);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

function App() {
  const [isClicked, setClicked] = useState(false);
  const toggleClick = () => setClicked((prev) => !prev);
  return (
    <Wrapper onClick={toggleClick}>
      <WhiteBox>
        {!isClicked ? (
          <Content layoutId="content" style={{ borderRadius: 25 }} />
        ) : null}
      </WhiteBox>
      <WhiteBox>
        {isClicked ? (
          <Content layoutId="content" style={{ borderRadius: 0, scale: 2 }} />
        ) : null}
      </WhiteBox>
    </Wrapper>
  );
}

export default App;
