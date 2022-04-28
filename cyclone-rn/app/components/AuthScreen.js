import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';

export default function AuthScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.header}></View>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
  header: {
    height: 20,
    backgroundColor: colors.primary,
  },
});
