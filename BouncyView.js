import React from 'react';
import {StyleSheet, Animated, Easing} from 'react-native';

const BouncyView = props => {
  const [animatedValue] = React.useState(new Animated.Value(0));
  React.useEffect(() => {
    if (props.visible) {
      Animated.spring(animatedValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start();
    }
  }, [props.visible]);
  return (
    <Animated.View
      style={[
        styles.container,
        props.style,
        {transform: [{scale: animatedValue}]},
      ]}>
      {props.children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default BouncyView;
