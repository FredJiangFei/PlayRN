import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Switch, Text, View, Button } from 'react-native'
import routes from '../navigation/routes'
import ListItem from './../components/ListItem'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import teamService from '../api/teamService'
import Loader from '../components/Loader'

const initialTeams = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lakers',
    imageUrl: 'https://picsum.photos/id/237/200/300',
    rank: '4, 2',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Nets',
    imageUrl: 'https://picsum.photos/seed/picsum/200/300',
    rank: '4, 3',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Rocket',
    imageUrl: 'https://picsum.photos/200/300?grayscale',
    rank: '4, 1',
  },
]

export default function TeamListScreen({ navigation }) {
  const [teams, setTeams] = useState(initialTeams)
  const [refreshing, setRefreshing] = useState(false)
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getTeams()
  }, [])

  const getTeams = async () => {
    await teamService.getTeams((res) => console.log(res))
  }

  const handleDelete = (team) => {
    setTeams(teams.filter((t) => t.id !== team.id))
  }

  const loadTeams = () => {
    const newTeams = [
      {
        id: '58694a0f-3da1-471f-bd96-145571e29872',
        name: 'Wolfs',
        imageUrl: 'https://picsum.photos/id/244/200/300',
        rank: '4, 4',
      },
    ]

    setTeams((teams) => [...teams, ...newTeams])
  }

  const createTeam = async () => {
    alert('123');
    await teamService.createTeam();
  }

  return (
    <>
      <Loader visible={loading} />
      <View style={styles.switch}>
        <Text>Open to join the team</Text>
        <Switch value={open} onValueChange={setOpen} />
        <Button title='Create team' onPress={createTeam}/>
      </View>
      {!loading && (
        <FlatList
          data={teams}
          keyExtractor={(team) => team.id}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={loadTeams}
          renderItem={({ item }) => (
            <ListItem
              image={{uri: item.imageUrl}}
              title={item.name}
              subTitle={`rank: ${item.rank}`}
              onPress={() => navigation.navigate(routes.TeamDetails, item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            ></ListItem>
          )}
        />
      )}
    </>
  )
}

const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
})
