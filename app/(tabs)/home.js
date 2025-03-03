import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.sectionContainer}>
                <View style={styles.header}>
                    <Text style={styles.sectionTitle}>Words of the Day</Text>
                    <TouchableOpacity onPress={() => router.push('/vocabulary/all')}>
                        <Text style={styles.link}>Show all</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.itemCard}>
                    <Text style={styles.itemTitle}>serendipity</Text>
                </View>
                <View style={styles.itemCard}>
                    <Text style={styles.itemTitle}>eloquent</Text>
                </View>
                <View style={styles.itemCard}>
                    <Text style={styles.itemTitle}>tenacious</Text>
                </View>
            </View>

            <View style={styles.sectionContainer}>
                <View style={styles.header}>
                    <Text style={styles.sectionTitle}>My Progress</Text>
                    <TouchableOpacity onPress={() => router.push('/progress/all')}>
                        <Text style={styles.link}>Show all</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.progressCard}>
                    <Text style={styles.progressTitle}>Vocabulary</Text>
                    <Text style={styles.progressDescription}>Learn new words daily.</Text>
                    <Text style={styles.progressStat}>85%</Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: '85%' }]} />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },

    sectionContainer: {
        marginBottom: 24,
        padding: 12,
        backgroundColor: '#f0f0f0',
        borderRadius: 12
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
    },

    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333'
    },

    link: {
        fontSize: 16,
        color: '#960000'
    },

    itemCard: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 8,
        marginBottom: 8
    },

    itemTitle: {
        fontSize: 16,
        color: '#333'
    },

    progressCard: {
        backgroundColor: '#960000',
        padding: 16,
        borderRadius: 12
    },

    progressTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4
    },

    progressDescription: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 8
    },

    progressStat: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8
    },

    progressBar: {
        height: 8,
        backgroundColor: '#333',
        borderRadius: 4,
        overflow: 'hidden'
    },

    progressFill: {
        height: '100%',
        backgroundColor: '#ffd862'
    }
});
