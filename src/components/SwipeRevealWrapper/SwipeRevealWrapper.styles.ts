import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  flex1: {
    width: '100%',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  itemContainer: {
    // position: 'absolute',
    // zIndex: 100,
    // elevation: 100,
    // flexDirection: 'row',
  },
  leftContainer: {
    height: '100%',
  },
  deleteContainer: {
    width: '100%',
  },
  leftDelete: {
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  rightDelete: {
    alignItems: 'flex-end',
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
  touchableContainer: {
    flexDirection: 'row',
  },
  rightContainer: { right: 0, position: 'absolute' },
});
