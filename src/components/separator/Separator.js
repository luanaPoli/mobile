import React from 'react';
import { View, StyleSheet } from 'react-native';
import light from 'politokens/build/js/mob/light';

const Separator = ({
  width = '100%',
  vertical = false
}) => {
  let height = 1

  if (vertical) {
    const oldWidth = width
    width = height
    height = oldWidth
  }

  console.log(width, height)

  return (
    <View style={[styles.separator, {width: width, height: height}]} />
  );
};

const styles = StyleSheet.create({
  separator: {
    backgroundColor: light.neutral100,
  },
});

export default Separator;
