import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }}
                style={styles.profileImage}
            />

            <Text style={styles.name}>Brian Nguyen</Text>
            <Text style={styles.email}>nguyenmaithanhphu@gmail.com</Text>

            <View style={styles.buttonContainer}>
                <Link href="/profile/settings" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Settings</Text>
                    </Pressable>
                </Link>

                <Pressable style={[styles.button, styles.logoutButton]}>
                    <Text style={styles.buttonText}>Logout</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8b0000' },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#ffd33d',
        marginBottom: 20,
    },
    name: { fontSize: 24, color: '#ffd33d', fontWeight: 'bold' },
    email: { fontSize: 16, color: '#fff', marginBottom: 30 },

    buttonContainer: { width: '80%' },

    button: {
        backgroundColor: '#ffd33d',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    logoutButton: {
        backgroundColor: '#ff4d4d',
    },
    buttonText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
});
