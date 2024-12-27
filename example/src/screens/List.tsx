import { useCallback, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

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
            leftRevealedView={
              item.type === EAnimationType['left-reveal'] ||
              item.type === EAnimationType['left-right-reveal'] ? (
                <View style={{ flexDirection: 'row', height: '100%' }}>
                  <View
                    style={[
                      styles.reavealView,
                      {
                        backgroundColor: getRandomColor(),
                        paddingHorizontal: SCREEN_PADDING * 2,
                      },
                    ]}
                  >
                    <Text>Left 1</Text>
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
                    <Text>Left 2</Text>
                  </View>
                </View>
              ) : undefined
            }
            rightRevealedView={
              item.type === EAnimationType['right-reveal'] ||
              item.type === EAnimationType['left-right-reveal'] ? (
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
            onRightFullSwipeView={
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
            onLeftFullSwipeView={
              item.type === EAnimationType['left-full-swipe'] ? (
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
      />
    </View>
  );
};
