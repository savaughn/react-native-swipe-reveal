import React, { useMemo } from 'react';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { usePanXGesture } from '../hooks/usePanXGesture';
import type { TListItem } from '../types';
import { EAnimationType } from '../constants';
import { View } from 'react-native';
import { styles } from './SwipeRevealWrapper/SwipeRevealWrapper.styles';

export const GestureDetectorComponent = ({
  id,
  children,
  animationType,
  onLeftFullSwipe,
  onRightFullSwipe,
  leftSwipeViewWidth,
  rightSwipeViewWidth,
  itemWidth,
  itemContainerStyle,
}: TListItem) => {
  const isLeftSwipe = useMemo(() => {
    return (
      (animationType === EAnimationType['left-swipe'] ||
        animationType === EAnimationType['left-right-swipe']) &&
      leftSwipeViewWidth !== 0
    );
  }, [animationType, leftSwipeViewWidth]);

  const isRightSwipe = useMemo(() => {
    return (
      (animationType === EAnimationType['right-swipe'] ||
        animationType === EAnimationType['left-right-swipe']) &&
      rightSwipeViewWidth !== 0
    );
  }, [animationType, rightSwipeViewWidth]);

  const isLeftFullSwipe = useMemo(() => {
    return animationType === EAnimationType['left-full-swipe'];
  }, [animationType]);

  const isRightFullSwipe = useMemo(() => {
    return animationType === EAnimationType['right-full-swipe'];
  }, [animationType]);

  const { panXAnimatedStyles, panXGesture } = usePanXGesture(
    leftSwipeViewWidth,
    rightSwipeViewWidth,
    id,
    onLeftFullSwipe,
    onRightFullSwipe,
    isLeftSwipe,
    isRightSwipe,
    isLeftFullSwipe,
    isRightFullSwipe,
    itemWidth
  );

  return isLeftSwipe || isRightSwipe || isLeftFullSwipe || isRightFullSwipe ? (
    <GestureDetector gesture={panXGesture}>
      <Animated.View
        style={[
          panXAnimatedStyles,
          styles.zindex,
          itemContainerStyle && itemContainerStyle,
        ]}
      >
        {children}
      </Animated.View>
    </GestureDetector>
  ) : (
    <View style={[itemContainerStyle && itemContainerStyle]}>{children}</View>
  );
};
