package com.swipereveal;

import com.facebook.react.bridge.ReactApplicationContext

class SwipeRevealModule(reactContext: ReactApplicationContext) : NativeSwipeRevealSpec(reactContext) {

  // declare an instance of the implementation and use it in all the methods
  private var implementation: SwipeRevealModuleImpl = SwipeRevealModuleImpl()

  override fun getName(): String = SwipeRevealModuleImpl.NAME

  override fun multiply(a: Double, b: Double): Double {
    // Use the implementation instance to execute the function.
    return implementation.multiply(a, b)
  }
}