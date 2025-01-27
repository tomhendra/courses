import '~/global.css';

import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeToggle } from '~/components/ThemeToggle';
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar';
import { NAV_THEME } from '~/lib/constants';
import { useColorScheme } from '~/lib/useColorScheme';

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export { ErrorBoundary } from 'expo-router';

export default function RootLayout() {
  const hasMounted = React.useRef(false);
  const { colorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    if (Platform.OS === 'web') {
      // Adds the background color to the html element to prevent white background on overscroll.
      document.documentElement.classList.add('bg-background');
    }
    setAndroidNavigationBar(colorScheme);
    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
        <Drawer>
          <Drawer.Screen name="index" redirect />
          <Drawer.Screen
            name="pan-gesture"
            options={{
              drawerItemStyle: styles.drawerItemStyle,
              drawerLabel: 'Pan Gesture',
              title: 'Pan Gesture',
              headerRight: () => <ThemeToggle />,
            }}
          />
          <Drawer.Screen
            name="bouncing-square"
            options={{
              drawerItemStyle: styles.drawerItemStyle,
              drawerLabel: 'Bouncing Square',
              title: 'Bouncing Square',
              headerRight: () => <ThemeToggle />,
            }}
          />
          <Drawer.Screen
            name="playground"
            options={{
              drawerItemStyle: styles.drawerItemStyle,
              drawerLabel: 'Playground',
              title: 'Playground',
              headerRight: () => <ThemeToggle />,
            }}
          />
        </Drawer>
        <PortalHost />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

const useIsomorphicLayoutEffect =
  Platform.OS === 'web' && typeof window === 'undefined'
    ? React.useEffect
    : React.useLayoutEffect;

const styles = StyleSheet.create({
  drawerItemStyle: {
    borderRadius: 8,
  },
});
