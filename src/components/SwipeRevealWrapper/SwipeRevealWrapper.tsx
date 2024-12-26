import React from 'react';
import type { TSwipeRevealWrapper } from '../../types';
import Animated from 'react-native-reanimated';
import { EAnimationType } from '../../constants';
import { View, type LayoutChangeEvent } from 'react-native';
import { styles } from './SwipeRevealWrapper.styles';
import { GestureDetectorComponent } from '../GestureDetectorComponent';

export const SwipeRevealWrapperComponent = ({
  id,
  children,
  animationType,
  leftRevealedView,
  rightRevealedView,
  onLeftFullSwipeView,
  onRightFullSwipeView,
  onLeftFullSwipe,
  onRightFullSwipe,
}: TSwipeRevealWrapper) => {
  const [leftRevealedViewWidth, setLeftRevealedViewWidth] = React.useState(0);
  const [rightRevealedViewWidth, setRightRevealedViewWidth] = React.useState(0);

  const onLayoutLeftRevealedView = (event: LayoutChangeEvent) => {
    setLeftRevealedViewWidth(event.nativeEvent.layout.width);
  };

  const onLayoutRightRevealedView = (event: LayoutChangeEvent) => {
    setRightRevealedViewWidth(event.nativeEvent.layout.width);
  };

  return (
    <View key={id} style={styles.flex1}>
      {(animationType === EAnimationType['left-reveal'] ||
        animationType === EAnimationType['left-right-reveal']) &&
      leftRevealedView ? (
        <View onLayout={onLayoutLeftRevealedView} style={styles.flex1}>
          {leftRevealedView}
        </View>
      ) : null}
      {animationType === EAnimationType['right-full-swipe'] &&
      onRightFullSwipeView &&
      typeof onRightFullSwipe === 'function' ? (
        <View style={styles.flex1}>{onRightFullSwipeView}</View>
      ) : null}
      <GestureDetectorComponent
        onLeftFullSwipe={onLeftFullSwipe}
        onRightFullSwipe={onRightFullSwipe}
        id={id}
        animationType={animationType}
        leftRevealedViewWidth={leftRevealedViewWidth}
        rightRevealedViewWidth={rightRevealedViewWidth}
      >
        {children}
      </GestureDetectorComponent>
      {animationType === EAnimationType['left-full-swipe'] &&
      onLeftFullSwipeView &&
      typeof onLeftFullSwipe === 'function' ? (
        <Animated.View
          style={[styles.rightContainer, styles.flex1, styles.rightDelete]}
        >
          {onLeftFullSwipeView}
        </Animated.View>
      ) : null}
      {(animationType === EAnimationType['right-reveal'] ||
        animationType === EAnimationType['left-right-reveal']) &&
      rightRevealedView ? (
        <View
          onLayout={onLayoutRightRevealedView}
          style={[styles.flex1, styles.rightContainer]}
        >
          {rightRevealedView}
        </View>
      ) : null}
    </View>
  );
};
