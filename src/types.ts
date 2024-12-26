import type { ReactElement, ReactNode } from 'react';
import { EAnimationType } from './constants';

export type TItemKey = string | number;
export type TSwipeRevealWrapper = {
  id: TItemKey;
  children: ReactElement;
  animationType?: EAnimationType;
  leftRevealedView?: ReactElement;
  rightRevealedView?: ReactElement;
  onLeftFullSwipeView?: ReactElement;
  onRightFullSwipeView?: ReactElement;
  onLeftFullSwipe?: (key: TItemKey) => void;
  onRightFullSwipe?: (key: TItemKey) => void;
};

export type TTouchable = {
  id: number;
  title: string;
  width: number;
  bgColor?: string;
};

export type TItem = {
  id: number;
  title: string;
  singer: string;
  imageSrc: string;
  leftTouchables?: TTouchable[];
  rightTouchables?: TTouchable[];
  type?: EAnimationType;
};

export type TListItem = {
  id: TItemKey;
  children: ReactNode;
  animationType: EAnimationType | undefined;
  onLeftFullSwipe: ((key: TItemKey) => void) | undefined;
  onRightFullSwipe: ((key: TItemKey) => void) | undefined;
  leftRevealedViewWidth: number;
  rightRevealedViewWidth: number;
};

export type NullableNumber = null | number;
