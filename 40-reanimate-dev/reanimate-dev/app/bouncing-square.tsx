import { Pressable, View, StyleSheet, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const MAX_TRANSLATION = 100;

export default function Screen() {
  /**
   * Define values to be shared between the JS and native thread
   */
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  /**
   * define the animated style to be used in the animated view
   * which binds the shared values to the Animated view
   */
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
        { rotate: `${rotate.value}deg` },
      ],
    };
  }, []);

  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-background">
      <Animated.View
        className="w-24 h-24 bg-primary rounded-3xl"
        onTouchStart={() => {
          scale.value = withTiming(1.2);
        }}
        onTouchEnd={() => {
          scale.value = withTiming(1);
          rotate.value = withTiming(rotate.value + 90);
        }}
        style={rStyle}
      />
      <Pressable
        className="absolute bottom-12 justify-center items-center right-8 h-12 w-12 p-2 bg-secondary rounded-full"
        onPress={() => {
          // updated translate between [-100, 100]
          const tx = Math.random() * MAX_TRANSLATION * 2 - MAX_TRANSLATION;
          const ty = Math.random() * MAX_TRANSLATION * 2 - MAX_TRANSLATION;
          translateX.value = withSpring(tx);
          translateY.value = withSpring(ty);
        }}
      >
        <Text className="font-bold text-xl text-secondary-foreground">?</Text>
      </Pressable>
    </View>
  );
}
