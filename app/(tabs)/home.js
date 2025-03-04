import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
    const router = useRouter();
    const greeting = "Hello Brian";

    return (
        <ScrollView style={styles.container}>
            <View style={styles.greetingContainer}>
                <Text style={styles.greeting}>
                    {greeting} <Ionicons name="star" size={24} color="#960000" />
                </Text>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.wordsHeader}>
                    <Text style={styles.sectionTitle}>Words of the day</Text>
                    <TouchableOpacity onPress={() => router.push('/vocabulary/all')}>
                        <Text style={styles.showAllText}>Show all</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wordItem}>
                    <Text style={styles.wordText}>serendipity</Text>
                    <Ionicons name="bookmark-outline" size={20} color="#fff" />
                </View>
                <View style={styles.wordItem}>
                    <Text style={styles.wordText}>eloquent</Text>
                    <Ionicons name="bookmark-outline" size={20} color="#fff" />
                </View>
                <View style={styles.wordItem}>
                    <Text style={styles.wordText}>tenacious</Text>
                    <Ionicons name="bookmark-outline" size={20} color="#fff" />
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <View style={styles.progressHeader}>
                    <Text style={styles.sectionTitle}>My progress</Text>
                    <TouchableOpacity onPress={() => router.push('/progress/all')}>
                        <Text style={styles.showAllText}>Show all</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.progressCard}>
                    <View style={styles.cardHeader}>
                        <Ionicons name="book-outline" size={24} color="#fff" />
                        <Text style={styles.progressTitle}>Vocabulary</Text>
                    </View>
                    <Text style={styles.cardDescription}>Learn and master new words every day.</Text>
                    <Text style={styles.progressNumber}>85</Text>
                    <Text style={styles.progressFeedback}>Great job!</Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: '85%' }]} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.progressCard}>
                    <View style={styles.cardHeader}>
                        <Ionicons name="chatbubble-ellipses-outline" size={24} color="#fff" />
                        <Text style={styles.progressTitle}>Grammar</Text>
                    </View>
                    <Text style={styles.cardDescription}>Improve sentence structure and clarity.</Text>
                    <Text style={styles.progressNumber}>55</Text>
                    <Text style={styles.progressFeedback}>Keep it up!</Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: '55%' }]} />
                    </View>
                </TouchableOpacity>
                <View style={styles.sectionContainer}>
                    <View style={styles.progressHeader}>
                        <Text style={styles.sectionTitle}>Exercise</Text>
                        <TouchableOpacity onPress={() => router.push('/progress/all')}>
                            <Text style={styles.showAllText}>Show all</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/exercise/[game]')} style={styles.progressCard}>
                        <View style={styles.cardHeader}>
                            <Ionicons name="game-controller-outline" size={24} color="#fff" />
                            <Text style={styles.progressTitle}>Challenge Game</Text>
                        </View>
                        <Text style={styles.cardDescription}>Tap to play and earn extra XP!</Text>
                        <View style={styles.progressBar}>
                            <View style={[styles.progressFill, { width: '45%' }]} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => router.push('/progress/qa')} style={styles.progressCard}>
                        <View style={styles.cardHeader}>
                            <Ionicons name="chatbox-ellipses-outline" size={24} color="#fff" />
                            <Text style={styles.progressTitle}>Interactive Q & A</Text>
                        </View>
                        <Text style={styles.cardDescription}>Tap to answer questions and boost your skills!</Text>
                        <View style={styles.progressBar}>
                            <View style={[styles.progressFill, { width: '25%' }]} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingTop: 30,
    },
    greetingContainer: {
        borderRadius: 50,
        padding: 5,
        marginBottom: 20,
        marginRight: 50,
    },
    greeting: {
        fontSize: 28,
        fontWeight: '700',
        color: '#960000',
        marginBottom: 8,
    },
    sectionContainer: {
        marginBottom: 20,
    },
    wordsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    progressHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        marginBottom: 8,
    },
    showAllText: {
        fontSize: 16,
        color: '#960000',
        fontWeight: '600',
    },
    wordItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#960000',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 10,
    },
    wordText: {
        fontSize: 16,
        color: '#fff',
    },
    progressCard: {
        backgroundColor: '#960000',
        borderRadius: 12,
        padding: 16,
        marginBottom: 15,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    progressTitle: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 8,
        fontWeight: '600',
    },
    cardDescription: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 8,
    },
    progressNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    progressFeedback: {
        fontSize: 14,
        color: '#A3A3A3',
        marginBottom: 8,
    },
    progressBar: {
        height: 8,
        backgroundColor: '#333',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#ffd862',
    },
});