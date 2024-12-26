import { GestureDetector } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { usePanXGesture } from '../hooks/usePanXGesture';
import type { TListItem } from '../types';
import { styles } from './SwipeRevealWrapper/SwipeRevealWrapper.styles';

export const GestureDetectorComponent = ({
  id,
  children,
  animationType,
  onLeftFullSwipe,
  onRightFullSwipe,
  leftRevealedViewWidth,
  rightRevealedViewWidth,
}: TListItem) => {
  const { panXAnimatedStyles, panXGesture } = usePanXGesture(
    leftRevealedViewWidth,
    rightRevealedViewWidth,
    animationType,
    id,
    onLeftFullSwipe,
    onRightFullSwipe
  );

  return (
    <GestureDetector gesture={panXGesture}>
      <Animated.View
        style={[styles.flex1, styles.itemContainer, panXAnimatedStyles]}
      >
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
