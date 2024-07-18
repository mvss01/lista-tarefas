import { useEffect } from "react";
import { TasksProvider } from "./src/contexts";
import { Routes } from "./src/routes";
import { ShantellSans_600SemiBold, useFonts } from '@expo-google-fonts/shantell-sans'
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    ShantellSans_600SemiBold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <TasksProvider>
      <Routes />
    </TasksProvider>
  );
}
