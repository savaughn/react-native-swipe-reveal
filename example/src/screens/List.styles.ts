import { StyleSheet } from 'react-native';
import { Color_Pallete, SONG_HEIGHT } from '../constants';

export const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: Color_Pallete.metal_black,
    height: '100%',
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: Color_Pallete.metal_black,
  },
  imageContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: '3%',
    paddingVertical: '3%',
  },
  descriptionContainer: {
    width: '80%',
    justifyContent: 'space-evenly',
  },
  description1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color_Pallete.crystal_white,
  },
  description2: { color: Color_Pallete.silver_storm },
  image: {
    height: SONG_HEIGHT - 20,
    width: '97%',
  },
  reavealView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  w100: {
    width: '100%',
  },
});
