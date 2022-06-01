import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import routes from '../navigation/routes';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import Loader from '../components/Loader';
import userService from '../api/userService';

export default function UserListScreen({ navigation }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await userService.getUsers(page);
    setUsers((us) => [...res.data.data, ...us]);
  };

  const handleDelete = (u) => {
    setUsers(users.filter((t) => t.id !== u.id));
  };

  const loadUsers = () => {
    setPage(page + 1);
    getUsers();
  };

  return (
    <>
      <Loader visible={loading} />
      {!loading && (
        <FlatList
          data={users}
          keyExtractor={(user) => user.id}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refreshing}
          onRefresh={loadUsers}
          renderItem={({ item }) => (
            <ListItem
              image={{ uri: item.avatar }}
              title={item.first_name}
              onPress={() => navigation.navigate(routes.UserDetails, item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            ></ListItem>
          )}
        />
      )}
    </>
  );
}
