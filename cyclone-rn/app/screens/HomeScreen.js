import React, { useState } from 'react'
import { Button, FlatList, Modal } from 'react-native'
import Card from '../components/Card'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'
import ElTextInput from '../components/ElTextInput'
import CyFlex from '../components/CyFlex'
import Screen from './../components/Screen'
import { Formik } from 'formik'
import Loader from '../components/Loader'
import ImageInputList from '../components/ImageInputList'

const initValue = {
  text: '',
}

export default function HomeScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MaterialCommunityIcons
          name="plus"
          color={colors.light}
          size={32}
          style={defaultStyles.ml8}
          onPress={() => setModalVisible(true)}
        />
      ),
    })
  }, [navigation])

  const initPosts = [
    {
      id: 1,
      desc: 'The mind is everything. What you think you become.',
      imageUrl: 'https://picsum.photos/id/1002/200/300',
    },
    {
      id: 2,
      desc: 'Eighty percent of success is showing up.',
      imageUrl: 'https://picsum.photos/id/1003/200/300',
    },
    {
      id: 3,
      desc: 'Go confidently in the direction of your dreams. Live the life you have imagined.',
      imageUrl: 'https://picsum.photos/id/1004/200/300',
    },
  ]

  const [posts, setPosts] = useState(initPosts)
  const [loading, setLoading] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const submit = async (values) => {
    setLoading(true)
    setTimeout(() => {
      setPosts((ps) => [
        {
          id: ps.length + 1,
          desc: values.text,
          imageUrl: 'https://picsum.photos/id/1004/200/300',
        },
        ...ps,
      ])
      setLoading(false)
      setModalVisible(false)
    }, 1000)
  }

  const [images, setImages] = useState([])

  const handleAdd = (uri) => {
    setImages([...images, uri])
  }

  const handleRemove = (uri) => {
    setImages(images.filter((imageUri) => imageUri !== uri))
  }

  return (
    <>
      <FlatList
        data={posts}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => (
          <Card
            desc={item.desc}
            imageUrl={item.imageUrl}
            onPress={(desc) => alert(desc)}
          />
        )}
      />

      <Modal visible={modalVisible} animationType="slide">
        <Loader visible={loading} />
        <Screen>
          <Formik
            initialValues={initValue}
            onSubmit={(values) => submit(values)}
          >
            {({ handleChange, handleSubmit, setFieldTouched }) => (
              <>
                <CyFlex>
                  <Button title="Save" onPress={handleSubmit} />
                  <Button
                    title="Cancel"
                    onPress={() => setModalVisible(false)}
                  />
                </CyFlex>

                <ElTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  name="text"
                  icon="text"
                  placeholder="Write something..."
                  onBlur={() => setFieldTouched('text')}
                  onChangeText={handleChange('text')}
                />

                <ImageInputList
                  imageUris={images}
                  onAddImage={handleAdd}
                  onRemoveImage={handleRemove}
                />
              </>
            )}
          </Formik>
        </Screen>
      </Modal>
    </>
  )
}
