import type { ReactElement, ReactNode } from 'react';
import { EAnimationType } from './constants';
import type { ViewStyle } from 'react-native';

export type TItemKey = string | number;

export type TSwipeableItemWrapper = {
  id: TItemKey;
  children: ReactElement;
  animationType?: EAnimationType;
  leftRevealedView?: ReactElement;
  rightRevealedView?: ReactElement;
  onLeftFullSwipeView?: ReactElement;
  onRightFullSwipeView?: ReactElement;
  onLeftFullSwipe?: (key: TItemKey) => void;
  onRightFullSwipe?: (key: TItemKey) => void;
  leftRevealedViewContainerStyle?: ViewStyle;
  rightRevealedViewContainerStyle?: ViewStyle;
  onRightFullSwipeViewContainerStyle?: ViewStyle;
  onLeftFullSwipeViewContainerStyle?: ViewStyle;
  itemContainerStyle?: ViewStyle;
};

export type TListItem = {
  id: TItemKey;
  children: ReactNode;
  animationType: EAnimationType | undefined;
  onLeftFullSwipe: ((key: TItemKey) => void) | undefined;
  onRightFullSwipe: ((key: TItemKey) => void) | undefined;
  leftRevealedViewWidth: number;
  rightRevealedViewWidth: number;
  itemWidth: number;
  itemContainerStyle?: ViewStyle;
};
