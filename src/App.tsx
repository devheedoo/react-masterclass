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
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

function App() {
  return (
    <Wrapper>
      <Box
        whileHover={{ scale: 1.5, rotateZ: 90 }}
        whileTap={{ scale: 1, borderRadius: '100px' }}
      />
    </Wrapper>
  );
}

export default App;
