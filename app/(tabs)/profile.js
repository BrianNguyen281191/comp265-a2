import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.userCard}>
                <View style={styles.userInfo}>
                    <Text style={styles.userName}>Brian Nguyen</Text>
                    <Text style={styles.userDetail}>Native: Vietnam</Text>
                    <Text style={styles.userDetail}>English Level: C1</Text>
                </View>
                <View style={styles.gemContainer}>
                    <Text style={styles.gemLabel}>Gems:</Text>
                    <Text style={styles.gemCount}>275</Text>
                </View>
            </View>

            <View style={styles.streakCard}>
                <Text style={styles.streakTitle}>14 days on streak!</Text>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.streakRow}
                >
                    {['11D', '12D', '13D', '14D', '15D'].map((day, index) => (
                        <View
                            key={index}
                            style={[
                                styles.streakItem,
                                day === '14D' && styles.highlightedItem,
                            ]}
                        >
                            <Text
                                style={[
                                    styles.streakText,
                                    day === '14D' && { color: '#960000' },
                                ]}
                            >
                                {day}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
                <TouchableOpacity style={styles.rewardButton}>
                    <Text style={styles.rewardButtonText}>Get a reward</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },

    userCard: {
        backgroundColor: '#F9F9F9',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    userInfo: {
        flex: 1,
    },

    userName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    },

    userDetail: {
        fontSize: 14,
        color: '#777',
    },

    gemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    gemLabel: {
        fontSize: 16,
        color: '#960000',
        marginRight: 4,
    },

    gemCount: {
        fontSize: 16,
        fontWeight: '600',
        color: '#960000',
    },

    streakCard: {
        backgroundColor: '#960000',
        borderRadius: 12,
        padding: 16,
    },

    streakTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 12,
    },

    streakRow: {
        flexDirection: 'row',
        marginBottom: 16,
    },

    streakItem: {
        width: 60,
        height: 60,
        backgroundColor: '#e66b6b',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

    highlightedItem: {
        backgroundColor: '#fff',
    },

    streakText: {
        color: '#fff',
        fontWeight: '600',
    },

    rewardButton: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: 'center',
    },

    rewardButtonText: {
        color: '#960000',
        fontWeight: '600',
        fontSize: 16,
    },
});
