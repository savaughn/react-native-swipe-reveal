#ifdef RCT_NEW_ARCH_ENABLED
#import "generated/RNSwipeRevealSpec/RNSwipeRevealSpec.h"

@interface SwipeReveal : NSObject <NativeSwipeRevealSpec>
#else
#import <React/RCTBridgeModule.h>

@interface SwipeReveal: NSObject <RCTBridgeModule>

#endif

@end