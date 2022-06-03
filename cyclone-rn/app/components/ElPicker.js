import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
  Text,
} from 'react-native'
import Screen from './Screen'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import ElPickerItem from './ElPickerItem'

export default function ElPicker({
  selectedItem,
  onSelectedItem,
  items,
  numberOfColumns = 1,
  PickerItem = ElPickerItem,
  placeholder,
  icon,
  width = '100%',
}) {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
          ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItem
                item={item}
                onPress={() => {
                  setModalVisible(false)
                  onSelectedItem(item)
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },

  text: {
    flex: 1,
  },

  placeholder: {
    color: colors.medium,
    flex: 1,
  },
})
