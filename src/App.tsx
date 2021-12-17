import { motion, useMotionValue, useTransform, Variants } from 'framer-motion';
import styled from 'styled-components';

const Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #81ecec, #c23699);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const boxVariants: Variants = {
  hover: { scale: 1.5, rotateZ: 90 },
  tap: { scale: 1, borderRadius: '100px' },
};

function App() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-400, 0, 400], [0.1, 1, 2]);
  const gradient = useTransform(
    x,
    [-400, 0, 400],
    [
      'linear-gradient(135deg,#d2e96c,#8cd451)',
      'linear-gradient(135deg,#81ecec,#c23699)',
      'linear-gradient(135deg,#47287a,#5a0f4d)',
    ]
  );

  // useEffect(() => {
  //   x.onChange(() => console.log(x.get()));
  // }, [x]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        variants={boxVariants}
        whileHover="hover"
        whileTap="tap"
        drag
        dragSnapToOrigin
        style={{ x, scale }}
      />
    </Wrapper>
  );
}

export default App;
