import React from 'react';
import type { TSwipeableItemWrapper } from '../../types';
import Animated from 'react-native-reanimated';
import { EAnimationType } from '../../constants';
import { View, type LayoutChangeEvent } from 'react-native';
import { styles } from './SwipeRevealWrapper.styles';
import { GestureDetectorComponent } from '../GestureDetectorComponent';

export const SwipeableItemWrapperComponent = ({
  id,
  children,
  animationType,
  leftRevealedView,
  rightRevealedView,
  onLeftFullSwipeView,
  onRightFullSwipeView,
  onLeftFullSwipe,
  onRightFullSwipe,
  leftRevealedViewContainerStyle,
  rightRevealedViewContainerStyle,
  onLeftFullSwipeViewContainerStyle,
  onRightFullSwipeViewContainerStyle,
  itemContainerStyle,
}: TSwipeableItemWrapper) => {
  const [leftRevealedViewWidth, setLeftRevealedViewWidth] = React.useState(0);
  const [rightRevealedViewWidth, setRightRevealedViewWidth] = React.useState(0);
  const [itemWidth, setItemWidth] = React.useState(0);

  const onLayoutLeftRevealedView = (event: LayoutChangeEvent) => {
    setLeftRevealedViewWidth(event.nativeEvent.layout.width);
  };

  const onLayoutRightRevealedView = (event: LayoutChangeEvent) => {
    setRightRevealedViewWidth(event.nativeEvent.layout.width);
  };

  const onLayoutItem = (event: LayoutChangeEvent) => {
    setItemWidth(event.nativeEvent.layout.width);
  };

  return (
    <View onLayout={onLayoutItem} key={id}>
      <GestureDetectorComponent
        onLeftFullSwipe={onLeftFullSwipe}
        onRightFullSwipe={onRightFullSwipe}
        id={id}
        animationType={animationType}
        leftRevealedViewWidth={leftRevealedViewWidth}
        rightRevealedViewWidth={rightRevealedViewWidth}
        itemWidth={itemWidth}
        itemContainerStyle={itemContainerStyle}
      >
        {children}
      </GestureDetectorComponent>
      {(animationType === EAnimationType['left-reveal'] ||
        animationType === EAnimationType['left-right-reveal']) &&
      leftRevealedView ? (
        <View
          onLayout={onLayoutLeftRevealedView}
          style={[
            styles.leftRevealedViewContainer,
            leftRevealedViewContainerStyle && leftRevealedViewContainerStyle,
          ]}
        >
          {leftRevealedView}
        </View>
      ) : null}
      {(animationType === EAnimationType['right-reveal'] ||
        animationType === EAnimationType['left-right-reveal']) &&
      rightRevealedView ? (
        <View
          onLayout={onLayoutRightRevealedView}
          style={[
            styles.rightContainer,
            rightRevealedViewContainerStyle && rightRevealedViewContainerStyle,
          ]}
        >
          {rightRevealedView}
        </View>
      ) : null}
      {animationType === EAnimationType['right-full-swipe'] &&
      onRightFullSwipeView &&
      typeof onRightFullSwipe === 'function' ? (
        <View
          style={[
            styles.leftRevealedViewContainer,
            styles.w100,
            onRightFullSwipeViewContainerStyle &&
              onRightFullSwipeViewContainerStyle,
          ]}
        >
          {onRightFullSwipeView}
        </View>
      ) : null}
      {animationType === EAnimationType['left-full-swipe'] &&
      onLeftFullSwipeView &&
      typeof onLeftFullSwipe === 'function' ? (
        <Animated.View
          style={[
            styles.rightContainer,
            styles.w100,
            onLeftFullSwipeViewContainerStyle &&
              onLeftFullSwipeViewContainerStyle,
          ]}
        >
          {onLeftFullSwipeView}
        </Animated.View>
      ) : null}
    </View>
  );
};
