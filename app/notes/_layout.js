import { Stack } from 'expo-router';

export default function NotesLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" options={{ title: 'Notes' }} />
            <Stack.Screen name="details" options={{ title: 'Word Details' }} />
        </Stack>
    );
}
