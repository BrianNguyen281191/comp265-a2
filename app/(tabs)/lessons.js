import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const LESSON_SECTIONS = [
    {
        id: 1,
        title: 'Basic Greetings',
        time: '1 Hr',
        totalLessons: '3 Lessons',
        xpInfo: 'Earn 30 XP',
        lessons: [
            { id: 'bg1', title: 'Lesson 1: Saying Hello', hearts: 20, xp: 10 },
            { id: 'bg2', title: 'Lesson 2: Introducing Yourself', hearts: 45, xp: 15 },
            { id: 'bg3', title: 'Lesson 3: Common Phrases', hearts: 60, xp: 20 },
        ],
    },
];

export default function LessonsScreen() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {LESSON_SECTIONS.map((section) => (
                <View key={section.id} style={styles.section}>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    <Text style={styles.sectionSub}>
                        {section.time} • {section.totalLessons}
                    </Text>
                    <Text style={styles.xpInfo}>{section.xpInfo}</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.lessonRow}
                    >
                        {section.lessons.map((lesson) => (
                            <TouchableOpacity key={lesson.id} style={styles.lessonCard}>
                                <Text style={styles.lessonTitle} numberOfLines={2}>
                                    {lesson.title}
                                </Text>
                                <View style={styles.lessonMeta}>
                                    <Text style={styles.metaText}>{lesson.hearts} ♥</Text>
                                    <Text style={styles.metaText}>{lesson.xp} XP</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },

    section: {
        marginBottom: 24,
        backgroundColor: '#960000',
        borderRadius: 12,
        padding: 16,
    },

    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4,
    },

    sectionSub: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 4,
    },

    xpInfo: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 12,
    },

    lessonRow: {
        flexDirection: 'row',
    },

    lessonCard: {
        width: 140,
        backgroundColor: '#e66b6b',
        borderRadius: 8,
        padding: 10,
        marginRight: 12,
    },

    lessonTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 8,
    },

    lessonMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    metaText: {
        fontSize: 12,
        color: '#fff',
    },
});
