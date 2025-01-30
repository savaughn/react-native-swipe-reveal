<div align="center">

# react-native-swipe-reveal

### A Powerful Swipe Animation Library for React Native ✨

Create beautiful swipe animations for your list items. When users swipe, reveal hidden content underneath. 
Perfect for swipe-to-delete, swipe-to-archive, or any other swipe actions in your app!

[![npm](https://img.shields.io/npm/v/react-native-swipe-reveal)](https://www.npmjs.com/package/react-native-swipe-reveal)
[![license](https://img.shields.io/npm/l/react-native-swipe-reveal)](https://github.com/varunkukade/react-native-swipe-reveal?tab=readme-ov-file#license)
[![platform](https://img.shields.io/badge/platform-ios%20%7C%20android-lightgrey)](https://reactnative.dev/)

</div>

## Features

This library helps you create smooth swipe animations in your React Native app. Here's what you can do:

- Swipe items left to reveal content (like a delete button)
- Swipe items right to reveal content (like an archive button)
- Swipe items both left and right to show different actions
- Full swipe to left or right to trigger actions (like deleting an item)
- Customize how everything looks with your own styles
- Works smoothly on both iPhone and Android phones
- ✅ Supports new Architecture
- ✅ Backwards compatibility with old architecture

> ⚠️ **Important**: This library only works with React Native CLI projects. It won't work if you're using Expo.

## Demo

https://github.com/user-attachments/assets/c2c17c54-171f-4dc4-99a8-c27677ba6863


## Installation

1. First, install the main library:

```bash
# If you use yarn
yarn add react-native-swipe-reveal
```

```bash
# If you use npm
npm install react-native-swipe-reveal
```

```bash
# For iPhone (iOS) users, you also need to run:
cd ios && pod install
```

2. Install and set up required dependencies:

You'll need two additional libraries for this to work:

- React Native Reanimated: Follow the setup guide [here](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started#installation)
- React Native Gesture Handler: Follow the setup guide [here](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation)

Make sure to follow their installation guides carefully!

## Compatibility

> **Important to know before you start:**

- **React Native**: Must be version 0.63.0 or newer because React Native Reanimated 3 and Gesture Handler require this minimum version
  - Check which version you have in your package.json file

- **React Native Gesture Handler**: The version you need depends on your React Native version
  - Check [this compatibility table](https://docs.swmansion.com/react-native-gesture-handler/docs/fundamentals/installation#requirements) to find the right version

- **React Native Reanimated**: The version you need depends on your React Native version
  - Check [this compatibility table](https://docs.swmansion.com/react-native-reanimated/docs/guides/compatibility/#currently-supported-react-native-versions-paper) to find the right version

## Usage

Look at our [example project](https://github.com/varunkukade/react-native-swipe-reveal/blob/main/example/src/App.tsx) to see all features in action!

Here's a simple example to get you started:

```jsx
import { EAnimationType, SwipeableItemWrapper } from 'react-native-swipe-reveal';

<SwipeableItemWrapper
  id={'123'}
  animationType={EAnimationType['left-swipe']}
  leftSwipeView={
    <View style={{ flexDirection: 'row', height: '100%' }}>
      <TouchableOpacity
        style={[
          {
            backgroundColor: 'red',
            paddingHorizontal: 20,
            borderRadius: 10,
          },
        ]}
      >
        <Text>Left 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          {
            backgroundColor: 'cyan',
            paddingHorizontal: 20,
            borderRadius: 10,
          },
        ]}
      >
        <Text>Left 2</Text>
      </TouchableOpacity>
    </View>
  }
>
  <View style={{ height: 100, backgroundColor: 'green' }}>
    <Text>{'Title'}</Text>
    <Text>{'Desc'}</Text>
  </View>
</SwipeableItemWrapper>

```

## Animation Types

You can use these different types of animations in your app:

```typescript
enum EAnimationType {
  'left-swipe' = 'left-swipe',           // Reveals content when swiping left
  'right-swipe' = 'right-swipe',         // Reveals content when swiping right
  'left-right-swipe' = 'left-right-swipe', // Reveals content when swiping either direction
  'right-full-swipe' = 'right-full-swipe', // Triggers action on full right swipe
  'left-full-swipe' = 'left-full-swipe'    // Triggers action on full left swipe
}
```

## Available Props

Here's everything you can customize in the `SwipeableItemWrapper` component:

| Prop | Required? | What it does | How to use it |
|------|-----------|--------------|---------------|
| `id` | Yes | A unique identifier for each swipeable item | Can be a number or text. Example: `id="item-1"` or `id={1}` |
| `children` | Yes | The main content that will be swipeable | This is your main component that users will see and can swipe. Example: `<YourListItem />` |
| `animationType` | No | The type of swipe animation you want | Use one of the `EAnimationType` values. Example: `animationType={EAnimationType['left-swipe']}` |
| `leftSwipeView` | No* | What shows up when user swipes left | The component that appears underneath when swiping left. Example: `leftSwipeView={<DeleteButton />}` |
| `rightSwipeView` | No* | What shows up when user swipes right | The component that appears underneath when swiping right. Example: `rightSwipeView={<ArchiveButton />}` |
| `leftFullSwipeView` | No* | What shows up on full left swipe | A component that appears when user swipes all the way left. Example: `leftFullSwipeView={<DeleteConfirm />}` |
| `rightFullSwipeView` | No* | What shows up on full right swipe | A component that appears when user swipes all the way right. Example: `rightFullSwipeView={<ArchiveConfirm />}` |
| `onLeftFullSwipe` | No | Function to call on full left swipe | Use this to do something when user swipes all the way left. Example: `onLeftFullSwipe={(id) => handleDelete(id)}` |
| `onRightFullSwipe` | No | Function to call on full right swipe | Use this to do something when user swipes all the way right. Example: `onRightFullSwipe={(id) => handleArchive(id)}` |
| `leftSwipeViewContainerStyle` | No | Custom styles for left swipe container | Style the container of your left swipe view. Example: `leftSwipeViewContainerStyle={{ backgroundColor: 'red' }}` |
| `rightSwipeViewContainerStyle` | No | Custom styles for right swipe container | Style the container of your right swipe view. Example: `rightSwipeViewContainerStyle={{ backgroundColor: 'blue' }}` |
| `leftFullSwipeViewContainerStyle` | No | Custom styles for full left swipe container | Style the container of your full left swipe view. Example: `leftFullSwipeViewContainerStyle={{ padding: 10 }}` |
| `rightFullSwipeViewContainerStyle` | No | Custom styles for full right swipe container | Style the container of your full right swipe view. Example: `rightFullSwipeViewContainerStyle={{ margin: 5 }}` |
| `itemContainerStyle` | No | Custom styles for the main item container | Style the container of your main content. Example: `itemContainerStyle={{ borderRadius: 8 }}` |

## ⚠️ Required Prop Combinations

Your swipeable items won't work properly unless you follow these rules:

### 1. Left Swipe Animation
When using `animationType="left-swipe"`:
```jsx
<SwipeableItemWrapper
  animationType={EAnimationType['left-swipe']}
  leftSwipeView={<DeleteButton />}  // Required!
>
  <YourContent />
</SwipeableItemWrapper>
```

### 2. Right Swipe Animation
When using `animationType="right-swipe"`:
```jsx
<SwipeableItemWrapper
  animationType={EAnimationType['right-swipe']}
  rightSwipeView={<ArchiveButton />}  // Required!
>
  <YourContent />
</SwipeableItemWrapper>
```

### 3. Left-Right Swipe Animation
When using `animationType="left-right-swipe"`:
```jsx
<SwipeableItemWrapper
  animationType={EAnimationType['left-right-swipe']}
  leftSwipeView={<DeleteButton />}    // Required!
  rightSwipeView={<ArchiveButton />}  // Required!
>
  <YourContent />
</SwipeableItemWrapper>
```

### 4. Left Full Swipe Animation
When using `animationType="left-full-swipe"`:
```jsx
<SwipeableItemWrapper
  animationType={EAnimationType['left-full-swipe']}
  leftFullSwipeView={<DeleteConfirm />}  // Required!
>
  <YourContent />
</SwipeableItemWrapper>
```

### 5. Right Full Swipe Animation
When using `animationType="right-full-swipe"`:
```jsx
<SwipeableItemWrapper
  animationType={EAnimationType['right-full-swipe']}
  rightFullSwipeView={<ArchiveConfirm />}  // Required!
>
  <YourContent />
</SwipeableItemWrapper>
```

> ⚠️ **Warning**: If you don't provide the required views for your chosen animation type, the swipe animation won't work! Make sure to always include the matching view prop for your animation type.

## License

MIT
