import { useCallback, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './List.styles';
import {
  EAnimationType,
  SwipeableItemWrapper,
} from 'react-native-swipe-reveal';
import { SCREEN_PADDING, SONGS } from '../constants';
import { getRandomColor } from '../helpers';

export const List = () => {
  const [songs, setSongs] = useState(SONGS);

  const deleteItem = useCallback((id: number) => {
    setSongs((prevSongs) => prevSongs.filter((eachSong) => eachSong.id !== id));
  }, []);

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={songs}
        style={{ paddingHorizontal: SCREEN_PADDING }}
        renderItem={({ item }) => (
          <SwipeableItemWrapper
            id={item.id}
            animationType={item.type}
            leftSwipeView={
              item.type === EAnimationType['left-swipe'] ||
              item.type === EAnimationType['left-right-swipe'] ||
              item.type === EAnimationType['combo-left-swipe'] ? (
                <View style={{ flexDirection: 'row', height: '100%' }}>
                  <TouchableOpacity
                    style={[
                      styles.reavealView,
                      {
                        backgroundColor: getRandomColor(),
                        paddingHorizontal: SCREEN_PADDING * 2,
                        borderRadius: 10,
                      },
                    ]}
                  >
                    <Text>Left 1</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      styles.reavealView,
                      {
                        backgroundColor: getRandomColor(),
                        paddingHorizontal: SCREEN_PADDING,
                        borderRadius: 10,
                      },
                    ]}
                  >
                    <Text>Left 2</Text>
                  </TouchableOpacity>
                </View>
              ) : undefined
            }
            rightSwipeView={
              item.type === EAnimationType['right-swipe'] ||
              item.type === EAnimationType['left-right-swipe'] ? (
                <View style={{ flexDirection: 'row', height: '100%' }}>
                  <View
                    style={[
                      styles.reavealView,
                      {
                        backgroundColor: getRandomColor(),
                        paddingHorizontal: SCREEN_PADDING,
                      },
                    ]}
                  >
                    <Text>Right 1</Text>
                  </View>
                  <View
                    style={[
                      styles.reavealView,
                      {
                        backgroundColor: getRandomColor(),
                        paddingHorizontal: SCREEN_PADDING,
                      },
                    ]}
                  >
                    <Text>Right 2</Text>
                  </View>
                </View>
              ) : undefined
            }
            onLeftFullSwipe={() => deleteItem(item.id)}
            onRightFullSwipe={() => deleteItem(item.id)}
            rightFullSwipeView={
              item.type === EAnimationType['right-full-swipe'] ? (
                <View
                  style={[
                    styles.reavealView,
                    styles.w100,
                    {
                      backgroundColor: getRandomColor(),
                      paddingHorizontal: SCREEN_PADDING,
                    },
                  ]}
                >
                  <Text>Delete</Text>
                </View>
              ) : undefined
            }
            leftFullSwipeView={
              item.type === EAnimationType['left-full-swipe'] || 
              item.type === EAnimationType['combo-left-swipe'] ? (
                <View
                  style={[
                    styles.reavealView,
                    styles.w100,
                    {
                      backgroundColor: getRandomColor(),
                      paddingHorizontal: SCREEN_PADDING,
                    },
                  ]}
                >
                  <Text>Delete</Text>
                </View>
              ) : undefined
            }
            leftSwipeViewContainerStyle={{ paddingVertical: 20 }}
          >
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image
                  source={{
                    uri: item.imageSrc,
                  }}
                  style={styles.image}
                  borderRadius={8}
                />
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.description1}>{item.title}</Text>
                <Text style={styles.description2}>{item.singer}</Text>
              </View>
            </View>
          </SwipeableItemWrapper>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
};
