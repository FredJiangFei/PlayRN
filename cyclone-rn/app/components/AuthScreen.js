import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';

export default function AuthScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.header}></View>
      <ScrollView style={[styles.view, style]}>
          {children}
      </ScrollView>
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
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 24
  },
  header: {
    height: 20,
    backgroundColor: colors.primary,
  },
});
