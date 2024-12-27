import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { usePanXGesture } from '../hooks/usePanXGesture';
import type { TListItem } from '../types';
import { useMemo } from 'react';
import { EAnimationType } from '../constants';
import { View } from 'react-native';
import { styles } from './SwipeRevealWrapper/SwipeRevealWrapper.styles';

export const GestureDetectorComponent = ({
  id,
  children,
  animationType,
  onLeftFullSwipe,
  onRightFullSwipe,
  leftRevealedViewWidth,
  rightRevealedViewWidth,
  itemWidth,
  itemContainerStyle,
}: TListItem) => {
  const doesLeftRevealViewExist = useMemo(() => {
    return (
      (animationType === EAnimationType['left-reveal'] ||
        animationType === EAnimationType['left-right-reveal']) &&
      leftRevealedViewWidth !== 0
    );
  }, [animationType, leftRevealedViewWidth]);

  const doesRightRevealViewExist = useMemo(() => {
    return (
      (animationType === EAnimationType['right-reveal'] ||
        animationType === EAnimationType['left-right-reveal']) &&
      rightRevealedViewWidth !== 0
    );
  }, [animationType, rightRevealedViewWidth]);

  const doesLeftFullSwipeExist = useMemo(() => {
    return animationType === EAnimationType['left-full-swipe'];
  }, [animationType]);

  const doesRightFullSwipeExist = useMemo(() => {
    return animationType === EAnimationType['right-full-swipe'];
  }, [animationType]);

  const { panXAnimatedStyles, panXGesture } = usePanXGesture(
    leftRevealedViewWidth,
    rightRevealedViewWidth,
    id,
    onLeftFullSwipe,
    onRightFullSwipe,
    doesLeftRevealViewExist,
    doesRightRevealViewExist,
    doesLeftFullSwipeExist,
    doesRightFullSwipeExist,
    itemWidth
  );

  return doesLeftRevealViewExist ||
    doesRightRevealViewExist ||
    doesLeftFullSwipeExist ||
    doesRightFullSwipeExist ? (
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
