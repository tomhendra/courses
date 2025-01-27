import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/useColorScheme';

export default function Screen() {
  const { isDarkColorScheme } = useColorScheme();
  const theme = NAV_THEME[isDarkColorScheme ? 'dark' : 'light'];
  /**
   * Define values to be shared between the JS and native thread
   */
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  /**
   * The event translation properties are recomputed every time
   * the gesture is started, in this case from 0.
   *
   * In order to keep track of the previous position,
   * we need to store the values using a context.
   */
  const context = useSharedValue({ x: 0, y: 0 });

  const isDragging = useSharedValue(false);
  /**
   * Define the pan gesture handler
   */
  const panGesture = Gesture.Pan()
    /**
     * When the gesture starts, we store the current position in
     * the context.
     */
    .onBegin(() => {
      isDragging.value = true;
      context.value = { x: translateX.value, y: translateY.value };
    })
    /**
     * As the gesture is active, we update the shared values, by
     * adding the translation values to the stored context values.
     */
    .onUpdate(event => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onFinalize(() => {
      isDragging.value = false;
    });

  /**
   * Define derived value for the rotation and scale.
   */
  const rotate = useDerivedValue(() => {
    return withSpring(isDragging.value ? '45deg' : '0deg');
  }, []);

  const scale = useDerivedValue(() => {
    return withSpring(isDragging.value ? 0.8 : 1);
  }, []);

  const color = useDerivedValue(() => {
    const isInTop = translateY.value < 0;
    const isInBottom = translateY.value > 0;

    if (isDragging.value) {
      return theme.primary;
    }
    if (isInTop) {
      return theme.text;
    }
    if (isInBottom) {
      return theme.background;
    }

    return theme.primary;
  }, []);

  const animatedColor = useDerivedValue(() => {
    return withTiming(color.value);
  }, []);

  const rStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: animatedColor.value,
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: rotate.value },
        { scale: scale.value },
      ],
    };
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-background">
      <View className="absolute top-1/2 w-full h-1/2 bg-secondary" />
      <GestureDetector gesture={panGesture}>
        <Animated.View className="w-24 h-24 rounded-3xl" style={rStyle} />
      </GestureDetector>
    </View>
  );
}
