import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Constants from 'expo-constants';
import colors from '../config/colors';
import { useNavigation } from '@react-navigation/native';
import GoBack from '../svgs/goBack';
import ElIconButton from './ElIconButton';
import Search from '../svgs/search';
import Notification from '../svgs/notification';
import Message from '../svgs/message';
import Menu from '../svgs/menu';

export default function Screen({ children, style }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.header}>
        <ElIconButton onPress={() => navigation.goBack()}>
          <GoBack />
        </ElIconButton>
        <View style={styles.menuBar}>
          <Search />
          <Notification />
          <Message />
          <Menu />
        </View>
      </View>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: colors.primary,
    paddingLeft: 8,
    paddingRight: 8
  },
  menuBar: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
