import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                tabBarInactiveTintColor: '#fff',
                tabBarStyle: { backgroundColor: '#8b0000' },
                headerStyle: { backgroundColor: '#8b0000' },
                headerTintColor: '#fff',
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
            }}
        >
            <Tabs.Screen
                name="notes"
                options={{
                    title: 'Notes',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'book' : 'book-outline'} color={color} size={28} />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={28} />
                    ),
                }}
            />
            <Tabs.Screen
                name="index"
                options={{ href: null }} 
            />
        </Tabs>
    );
}
