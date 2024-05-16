import React from 'react';
import {View, StyleSheet, Modal, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const SpinnerOverlay = props => {
  const {color, animationType} = props;
  return (
    <Modal
      visible={props.visible}
      transparent
      animationType={animationType ?? 'fade'}>
      <View style={[styles.container, {backgroundColor: color ?? '#005EA0CC'}]}>
        {props.children}
      </View>
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
