import React, {useRef, useEffect} from 'react';
import {View, Animated, Easing} from 'react-native';

const Loading = props => {
  const animatedValue = useRef(new Animated.Value(1)).current;
  const {visible, size, color, innerColor} = props;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1.1,
          duration: 1200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  return visible ?? true ? (
    <View>
      <Animated.View
        style={[
          {
            width: size ?? 100,
            height: size ?? 100,
            borderRadius: size ? size / 2 : 50,
            backgroundColor: color ?? 'orange',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: color ?? '#fff',
            shadowOpacity: 1,
            shadowOffset: {width: 0, height: 0},
            maxWidth: 200,
            maxHeight: 200,
          },
          {transform: [{scale: animatedValue}]},
        ]}>
        <Animated.View
          style={[
            {
              width: size ? size - size * 0.2 : 80,
              height: size ? size - size * 0.2 : 80,
              borderRadius: size ? (size - size * 0.2) / 2 : 80,
              backgroundColor: innerColor ?? '#fff',
              shadowColor: '#fff',
              shadowOpacity: 1,
              shadowOffset: {width: 0, height: 0},
              maxWidth: 160,
              maxHeight: 160,
            },
            {transform: [{scale: animatedValue}]},
          ]}
        />
      </Animated.View>
    </View>
  ) : null;
};

export default Loading;
