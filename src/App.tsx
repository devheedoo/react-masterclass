import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  width: 70px;
  height: 70px;
  place-self: center;
  border-radius: 35px;
  background-color: white;
  opacity: 0.5;
`;

const boxAnimation: Variants = {
  start: { scale: 0.0, opacity: 0 },
  end: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const circleAnimation = {
  start: { opacity: 0, y: 10 },
  end: { opacity: 0.5, y: 0 },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxAnimation} initial="start" animate="end">
        <Circle variants={circleAnimation} />
        <Circle variants={circleAnimation} />
        <Circle variants={circleAnimation} />
        <Circle variants={circleAnimation} />
      </Box>
    </Wrapper>
  );
}

export default App;
