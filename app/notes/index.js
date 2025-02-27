import { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { Link } from 'expo-router';

const languageEntries = [
    { id: 1, word: "Hello", translation: "Xin chào", pronunciation: "seen chow", image: "https://via.placeholder.com/150" },
    { id: 2, word: "Thank you", translation: "Cảm ơn", pronunciation: "kahm uhn", image: "https://via.placeholder.com/150" },
    { id: 3, word: "Goodbye", translation: "Tạm biệt", pronunciation: "tahm bee-et", image: "https://via.placeholder.com/150" },
    { id: 4, word: "Please", translation: "Làm ơn", pronunciation: "lahm uhn", image: "https://via.placeholder.com/150" },
    { id: 5, word: "Sorry", translation: "Xin lỗi", pronunciation: "seen loy", image: "https://via.placeholder.com/150" },
    { id: 6, word: "Yes", translation: "Vâng", pronunciation: "vuhng", image: "https://via.placeholder.com/150" },
    { id: 7, word: "No", translation: "Không", pronunciation: "khuhng", image: "https://via.placeholder.com/150" },
    { id: 8, word: "Excuse me", translation: "Xin lỗi", pronunciation: "seen loy", image: "https://via.placeholder.com/150" },
    { id: 9, word: "Beautiful", translation: "Đẹp", pronunciation: "dep", image: "https://via.placeholder.com/150" },
    { id: 10, word: "Good morning", translation: "Chào buổi sáng", pronunciation: "chow boo-ee sahng", image: "https://via.placeholder.com/150" },
    { id: 11, word: "Good night", translation: "Chúc ngủ ngon", pronunciation: "chook ngoo ngawn", image: "https://via.placeholder.com/150" },
    { id: 12, word: "How are you?", translation: "Bạn khỏe không?", pronunciation: "bahn kweh khuhng?", image: "https://via.placeholder.com/150" },
    { id: 13, word: "What is your name?", translation: "Tên bạn là gì?", pronunciation: "ten bahn lah zee?", image: "https://via.placeholder.com/150" },
    { id: 14, word: "Nice to meet you", translation: "Rất vui được gặp bạn", pronunciation: "ruht voo-ee duhk gahp bahn", image: "https://via.placeholder.com/150" },
    { id: 15, word: "Where are you from?", translation: "Bạn đến từ đâu?", pronunciation: "bahn den tuh dow?", image: "https://via.placeholder.com/150" },
    { id: 16, word: "I don’t understand", translation: "Tôi không hiểu", pronunciation: "toy khuhng hee-oo", image: "https://via.placeholder.com/150" },
    { id: 17, word: "How much is this?", translation: "Cái này bao nhiêu tiền?", pronunciation: "kai nai bow nyoo teen?", image: "https://via.placeholder.com/150" },
    { id: 18, word: "Delicious", translation: "Ngon", pronunciation: "ngawn", image: "https://via.placeholder.com/150" },
    { id: 19, word: "Where is the bathroom?", translation: "Nhà vệ sinh ở đâu?", pronunciation: "nyah vey sing uh dow?", image: "https://via.placeholder.com/150" },
    { id: 20, word: "Help!", translation: "Giúp tôi!", pronunciation: "zoop toy!", image: "https://via.placeholder.com/150" },
    { id: 21, word: "Stop!", translation: "Dừng lại!", pronunciation: "yoong lie!", image: "https://via.placeholder.com/150" },
    { id: 22, word: "I love you", translation: "Anh yêu em / Em yêu anh", pronunciation: "anh yew em / em yew anh", image: "https://via.placeholder.com/150" },
    { id: 23, word: "I’m hungry", translation: "Tôi đói", pronunciation: "toy doy", image: "https://via.placeholder.com/150" },
    { id: 24, word: "I’m tired", translation: "Tôi mệt", pronunciation: "toy met", image: "https://via.placeholder.com/150" },
    { id: 25, word: "Can you help me?", translation: "Bạn có thể giúp tôi không?", pronunciation: "bahn kaw teh zoop toy khuhng?", image: "https://via.placeholder.com/150" },
];

export default function HomeScreen() {
    const [searchText, setSearchText] = useState('');

    const filteredWords = languageEntries.filter(entry =>
        entry.word.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                <Text style={styles.title}>Language Learning App</Text>

                <TextInput
                    style={styles.searchInput}
                    placeholder="Search word..."
                    placeholderTextColor="#ccc"
                    value={searchText}
                    onChangeText={setSearchText}
                />

                {filteredWords.map(entry => (
                    <View key={entry.id} style={styles.card}>
                        <Image source={{ uri: entry.image }} style={styles.image} />
                        <View style={styles.cardContent}>
                            <Text style={styles.word}>{entry.word}</Text>
                            <Text style={styles.translation}>{entry.translation}</Text>
                            <Link
                                href={{
                                    pathname: '/notes/details',
                                    params: {
                                        id: entry.id,
                                        word: entry.word,
                                        translation: entry.translation,
                                        pronunciation: entry.pronunciation
                                    }
                                }}
                                asChild
                            >
                                <Pressable style={styles.button}>
                                    <Text style={styles.buttonText}>View Details</Text>
                                </Pressable>
                            </Link>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#8b0000' },
    title: { fontSize: 26, color: '#ffd33d', textAlign: 'center', marginBottom: 20, fontWeight: 'bold' },
    searchInput: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        marginBottom: 15,
        borderColor: '#a41f13',
        borderWidth: 1,
        color: '#000',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 4,
    },
    image: { width: 70, height: 70, borderRadius: 10, marginRight: 15 },
    cardContent: { flex: 1 },
    word: { fontSize: 18, fontWeight: 'bold', color: '#8b0000' },
    translation: { fontSize: 16, color: '#333', marginBottom: 5 },
    button: {
        backgroundColor: '#8b0000',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 5,
    },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
