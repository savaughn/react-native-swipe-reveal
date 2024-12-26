import { Dimensions } from 'react-native';

export enum EAnimationType {
  'left-reveal' = 'left-reveal',
  'right-reveal' = 'right-reveal',
  'left-right-reveal' = 'left-right-reveal',
  'right-full-swipe' = 'right-full-swipe',
  'left-full-swipe' = 'left-full-swipe',
}

export const SCREEN_PADDING = 10;

export const ITEM_WIDTH = Dimensions.get('window').width - SCREEN_PADDING * 2;

export const ANIMATION_DURATION = 200;

export enum EDraggingDirection {
  'left',
  'right',
  'none',
}
