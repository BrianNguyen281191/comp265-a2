import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <Text style={styles.subtitle}>Manage your preferences here.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8b0000',
    },
    title: {
        fontSize: 28,
        color: '#ffd33d',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
    },
});
