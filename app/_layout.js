// app/_layout.js
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Main Tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Vocabulary detail route */}
      <Stack.Screen
        name="vocabulary/[word]"
        options={{
          headerTitle: 'Vocabulary',
          headerBackTitle: 'Home',
        }}
      />

      {/* Progress detail route */}
      <Stack.Screen
        name="progress/[progress]"
        options={{
          headerTitle: 'Progress Detail',
          headerBackTitle: 'Home',
        }}
      />

      <Stack.Screen
        name="exercise/[game]"
        options={{
          headerTitle: 'Game',
          headerBackTitle: 'Home',
        }}
      />
    </Stack>
  );
}