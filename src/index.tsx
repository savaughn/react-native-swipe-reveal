import { SwipeableItemWrapperComponent } from './components/SwipeRevealWrapper/SwipeRevealWrapper';
import type { TSwipeableItemWrapper } from './types';

export { EAnimationType } from './constants';

/**
 * SwipeableItemWrapper component for wrapping items which need to be swipeable
 * @param id - Unique key for item
 * @param children - Children to be wrapped
 * @param animationType - Type of animation (left-reveal, right-reveal, left-right-reveal, right-left-reveal, left-full-swipe, right-full-swipe)
 * @param leftRevealedView - View to be revealed on left most end for animationType left-reveal, left-right-reveal
 * @param rightRevealedView - View to be revealed on right most end for animationType right-reveal, left-right-reveal
 * @param onLeftFullSwipeView - View to be shown on full swipe to left most end for animationType left-full-swipe
 * @param onRightFullSwipeView - View to be shown on full swipe to right most end for animationType right-full-swipe
 * @param onLeftFullSwipe - Function that needs to be called on full swipe to left most end for animationType left-full-swipe
 * @param onRightFullSwipe - Function that needs to be called on full swipe to right most end for animationType left-full-swipe
 * @param leftRevealedViewContainerStyle - Styles for immediate parent view container of leftRevealedView
 * @param rightRevealedViewContainerStyle - Styles for immediate parent view container of rightRevealedView
 * @param onLeftFullSwipeViewContainerStyle - Styles for immediate parent view container of onLeftFullSwipeView
 * @param onRightFullSwipeViewContainerStyle - Styles for immediate parent view container of onRightFullSwipeView
 * @param itemContainerStyle - Styles for immediate parent view container of Children to be wrapped
 */

export const SwipeableItemWrapper = ({
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
  return (
    <SwipeableItemWrapperComponent
      id={id}
      animationType={animationType}
      leftRevealedView={leftRevealedView}
      rightRevealedView={rightRevealedView}
      onLeftFullSwipeView={onLeftFullSwipeView}
      onRightFullSwipeView={onRightFullSwipeView}
      onLeftFullSwipe={onLeftFullSwipe}
      onRightFullSwipe={onRightFullSwipe}
      leftRevealedViewContainerStyle={leftRevealedViewContainerStyle}
      rightRevealedViewContainerStyle={rightRevealedViewContainerStyle}
      onLeftFullSwipeViewContainerStyle={onLeftFullSwipeViewContainerStyle}
      onRightFullSwipeViewContainerStyle={onRightFullSwipeViewContainerStyle}
      itemContainerStyle={itemContainerStyle}
    >
      {children}
    </SwipeableItemWrapperComponent>
  );
};
