import { useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';

import { styles } from './List.styles';
import { SwipeRevealWrapper } from 'react-native-swipe-reveal';
import { SCREEN_PADDING, SONGS } from '../constants';

export const List = () => {
  const [songs] = useState(SONGS);

  // const deleteItem = useCallback((id: number) => {
  //   setSongs((prevSongs) => prevSongs.filter((eachSong) => eachSong.id !== id));
  // }, []);

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={songs}
        style={{ paddingHorizontal: SCREEN_PADDING }}
        renderItem={({ item }) => (
          <SwipeRevealWrapper
            id={item.id}
            // animationType={item.type}
            // leftRevealedView={
            //   item.type === EAnimationType['left-reveal'] ? (
            //     <View style={styles.leftRevealedView}>
            //       <Text style={styles.leftRevealedViewText}>Left</Text>
            //     </View>
            //   ) : undefined
            // }
            // rightRevealedView={
            //   item.type === EAnimationType['right-reveal'] ? (
            //     <View style={styles.rightRevealedView}>
            //       <Text style={styles.rightRevealedViewText}>Right</Text>
            //     </View>
            //   ) : undefined
            // }
            // onLeftFullSwipe={() => deleteItem(item.id)}
            // onRightFullSwipe={() => deleteItem(item.id)}
          >
            <View
              style={{
                flexDirection: 'row',
              }}
            >
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
          </SwipeRevealWrapper>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};
