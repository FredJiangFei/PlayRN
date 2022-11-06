import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { View, Button } from 'react-native';
import React from 'react';

const ReAnimated = () => {
  const randomWidth = useSharedValue(10);

  const style = useAnimatedStyle(() => {
    console.log('==Animated==');
    return {
      width: withTiming(randomWidth.value),
    };
  });

  console.log('==render==');

  return (
    <View>
      <Animated.View
        style={[
          { width: 100, height: 30, backgroundColor: 'cornflowerblue' },
          style,
        ]}
      />
      <Button
        onPress={() => {
          randomWidth.value = Math.random() * 350;
        }}
      >
        切换宽度
      </Button>
    </View>
  );
};

export default ReAnimated;
