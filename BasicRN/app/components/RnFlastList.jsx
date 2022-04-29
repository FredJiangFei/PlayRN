import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';

const RnFlastList = () => {
  const posts = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      desc: 'The mind is everything. What you think you become.',
      imageUrl: 'https://picsum.photos/id/1002/200/300',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      desc: 'Eighty percent of success is showing up.',
      imageUrl: 'https://picsum.photos/id/1003/200/300',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        desc: 'Go confidently in the direction of your dreams. Live the life you have imagined.',
        imageUrl: 'https://picsum.photos/id/1004/200/300',
    }
  ];

  return (
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
  );
};

export default RnFlastList;
