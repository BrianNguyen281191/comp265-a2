import { useLocalSearchParams, router } from 'expo-router';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function DetailsScreen() {
    const params = useLocalSearchParams();

    // Ensure we have valid data
    const word = params.word || "Unknown";
    const translation = params.translation || "N/A";
    const pronunciation = params.pronunciation || "N/A";

    return (
        <View style={styles.container}>
            <Text style={styles.word}>{word}</Text>
            <Text style={styles.translation}>Translation: {translation}</Text>
            <Text style={styles.pronunciation}>Pronunciation: {pronunciation}</Text>

            <Pressable style={styles.button} onPress={() => router.back()}>
                <Text style={styles.buttonText}>Go Back</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#8b0000' },
    word: { fontSize: 26, color: '#ffd33d', marginBottom: 10, fontWeight: "bold" },
    translation: { fontSize: 20, color: '#fff', marginBottom: 5 },
    pronunciation: { fontSize: 18, color: '#ccc', marginBottom: 20 },
    button: { 
        backgroundColor: '#fff', paddingVertical: 12, paddingHorizontal: 20, 
        borderRadius: 10, alignItems: 'center', marginTop: 20,
    },
    buttonText: { color: '#000', fontWeight: 'bold', fontSize: 18 },
});
