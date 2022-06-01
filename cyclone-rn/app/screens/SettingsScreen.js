import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={styles.switch}>
        <Text>Network</Text>
        <Switch value={open} onValueChange={setOpen} />
      </View>
      <View style={styles.switch}>
        <Text>VPN</Text>
        <Switch value={open} onValueChange={setOpen} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
