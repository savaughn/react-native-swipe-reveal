package com.swipereveal;

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = SwipeRevealModuleImpl.NAME)
class SwipeRevealModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {

  // declare an instance of the implementation and use it in all the methods
  private var implementation: SwipeRevealModuleImpl = SwipeRevealModuleImpl()

  override fun getName(): String = SwipeRevealModuleImpl.NAME

  @ReactMethod
  fun multiply(a: Double, b: Double): Double {
    // Use the implementation instance to execute the function.
   return implementation.multiply(a, b)
  }
}