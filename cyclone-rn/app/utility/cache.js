import { AsyncStorage } from '@react-native-community/async-storage'
import moment from 'moment'

const prefix = 'cache'
const expiryInMinutes = 5

const store = async (key, value) => {
  const item = {
    value,
    timestamp: Date.now(),
  }

  await AsyncStorage.setItem(prefix + key, JSON.stringify(item))
}

const isExpired = (item) => {
  const now = moment(Date.now())
  const storedTime = moment(item.timestamp)
  return now.diff(storedTime, 'minutes') > expiryInMinutes
}

const get = async (key) => {
  const value = await AsyncStorage.getItem(prefix + key)
  const item = JSON.parse(value)

  if (!item) return null

  if (isExpired(item)) {
    // Command Query Separation (CQS)
    await AsyncStorage.removeItem(prefix + key)
    return null
  }

  return item.value
}

export default {
  store,
  get,
}
