import { Center, NativeBaseProvider, Text } from "native-base";
import { AppTheme } from "./src/theme";

import { useFonts } from 'expo-font'
import { Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla'
import { ActivityIndicator } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Karla_400Regular, 
    Karla_700Bold 
  })

  if (!fontsLoaded) {
    return (
      <ActivityIndicator />
    )
  }

  return (
    <NativeBaseProvider theme={AppTheme}>
      <Text>Hello</Text>
    </NativeBaseProvider>
    );
}
