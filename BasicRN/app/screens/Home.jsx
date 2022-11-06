import { Box } from 'native-base';
import React, { useState } from 'react';
import ElSlider from '../components/ElSlider';

const Home = ({ navigation }) => {
  const [rangeValue, setRangeValue] = useState([0, 3]);

  return (
    <Box mt={5}>
      <ElSlider min={0} max={20} value={rangeValue} onChange={setRangeValue} />
    </Box>
  );
};

export default Home;
