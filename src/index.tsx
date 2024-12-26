import { SwipeRevealWrapperComponent } from './components/SwipeRevealWrapper/SwipeRevealWrapper';
import type { TSwipeRevealWrapper } from './types';

export { EAnimationType } from './constants';

export const SwipeRevealWrapper = ({
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
  return (
    <SwipeRevealWrapperComponent
      id={id}
      animationType={animationType}
      leftRevealedView={leftRevealedView}
      rightRevealedView={rightRevealedView}
      onLeftFullSwipeView={onLeftFullSwipeView}
      onRightFullSwipeView={onRightFullSwipeView}
      onLeftFullSwipe={onLeftFullSwipe}
      onRightFullSwipe={onRightFullSwipe}
    >
      {children}
    </SwipeRevealWrapperComponent>
  );
};
