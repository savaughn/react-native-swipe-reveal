import { useState } from 'react';
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
  leftSwipeView,
  rightSwipeView,
  leftFullSwipeView,
  rightFullSwipeView,
  onLeftFullSwipe,
  onRightFullSwipe,
  leftSwipeViewContainerStyle,
  rightSwipeViewContainerStyle,
  leftFullSwipeViewContainerStyle,
  rightFullSwipeViewContainerStyle,
  itemContainerStyle,
}: TSwipeableItemWrapper) => {
  const [leftSwipeViewWidth, setLeftSwipeViewWidth] = useState(0);
  const [rightSwipeViewWidth, setRightSwipeViewWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  const onLayoutLeftSwipeView = (event: LayoutChangeEvent) => {
    setLeftSwipeViewWidth(event.nativeEvent.layout.width);
  };

  const onLayoutRightSwipeView = (event: LayoutChangeEvent) => {
    setRightSwipeViewWidth(event.nativeEvent.layout.width);
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
        leftSwipeViewWidth={leftSwipeViewWidth}
        rightSwipeViewWidth={rightSwipeViewWidth}
        itemWidth={itemWidth}
        itemContainerStyle={itemContainerStyle}
      >
        {children}
      </GestureDetectorComponent>
      {(animationType === EAnimationType['left-swipe'] ||
        animationType === EAnimationType['left-right-swipe'] ||
        animationType === EAnimationType['combo-left-swipe']) &&
      leftSwipeView ? (
        <View
          onLayout={onLayoutLeftSwipeView}
          style={[
            styles.rightContainer,
            leftSwipeViewContainerStyle && leftSwipeViewContainerStyle,
          ]}
        >
          {leftSwipeView}
        </View>
      ) : null}
      {(animationType === EAnimationType['right-swipe'] ||
        animationType === EAnimationType['left-right-swipe']) &&
      rightSwipeView ? (
        <View
          onLayout={onLayoutRightSwipeView}
          style={[
            styles.leftRevealedViewContainer,
            rightSwipeViewContainerStyle && rightSwipeViewContainerStyle,
          ]}
        >
          {rightSwipeView}
        </View>
      ) : null}
      {animationType === EAnimationType['right-full-swipe'] &&
      rightFullSwipeView ? (
        <View
          style={[
            styles.leftRevealedViewContainer,
            styles.w100,
            rightFullSwipeViewContainerStyle &&
              rightFullSwipeViewContainerStyle,
          ]}
        >
          {rightFullSwipeView}
        </View>
      ) : null}
      {animationType === EAnimationType['left-full-swipe'] &&
      leftFullSwipeView ? (
        <Animated.View
          style={[
            styles.rightContainer,
            styles.w100,
            leftFullSwipeViewContainerStyle && leftFullSwipeViewContainerStyle,
          ]}
        >
          {leftFullSwipeView}
        </Animated.View>
      ) : null}
    </View>
  );
};
