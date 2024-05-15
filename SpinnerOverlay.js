import React from 'react';
import {StyleSheet, Modal, Animated, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const SpinnerOverlay = props => {
  const {color} = props;
  return (
    <Modal visible={props.visible} transparent>
      <Animated.View style={[styles.container, {backgroundColor: color ?? '#005EA0CC'}]}>
        {props.children}
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SpinnerOverlay;
