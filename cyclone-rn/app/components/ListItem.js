import React from 'react'
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native'
import colors from '../config/colors'
import Swipeable from 'react-native-gesture-handler/Swipeable'

export default function ListItem({
  title,
  description,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{title}</Text>
            {description && (
              <Text style={styles.description} numberOfLines={2}>
                {description}
              </Text>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.white,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },

  title: {
    fontWeight: '500',
  },

  subTitle: {
    color: 'green',
  },

  description: {
    color: colors.medium,
  },
})
