import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

const ScrollableLayout = ({children, customStyles}) => {
  return (
    <ScrollView
      contentContainerStyle={[styles.container, {...customStyles}]}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 16,
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default ScrollableLayout;
