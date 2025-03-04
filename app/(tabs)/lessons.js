import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const LESSON_SECTIONS = [
    {
        id: 1,
        title: 'Basic Greetings',
        time: '1 Hr 10 Min',
        totalLessons: '3 Lessons',
        xpInfo: 'You will get 30 XP',
        lessons: [
            { id: 'bg1', title: 'Lesson 1: Saying Hello', hearts: 20, xp: 10 },
            { id: 'bg2', title: 'Lesson 2: Introducing Yourself', hearts: 45, xp: 15 },
            { id: 'bg3', title: 'Lesson 3: Common Polite Phrases', hearts: 60, xp: 20 },
        ],
    },
    {
        id: 2,
        title: 'Essential Vocabulary',
        time: '2 Hrs 30 Min',
        totalLessons: '4 Lessons',
        xpInfo: 'You will get 50 XP',
        lessons: [
            { id: 'ev1', title: 'Lesson 1: Daily Objects', hearts: 75, xp: 20 },
            { id: 'ev2', title: 'Lesson 2: Verbs You Need to Know', hearts: 80, xp: 25 },
            { id: 'ev3', title: 'Lesson 3: Adjectives & Adverbs', hearts: 50, xp: 15 },
            { id: 'ev4', title: 'Lesson 4: Essential Phrasal Verbs', hearts: 90, xp: 30 },
        ],
    },
    {
        id: 3,
        title: 'Grammar Fundamentals',
        time: '3 Hrs 10 Min',
        totalLessons: '4 Lessons',
        xpInfo: 'You will get 70 XP',
        lessons: [
            { id: 'gf1', title: 'Lesson 1: Present Tenses', hearts: 65, xp: 25 },
            { id: 'gf2', title: 'Lesson 2: Past & Future Tenses', hearts: 80, xp: 30 },
            { id: 'gf3', title: 'Lesson 3: Question Formation', hearts: 90, xp: 35 },
            { id: 'gf4', title: 'Lesson 4: Basic Sentence Structure', hearts: 100, xp: 40 },
        ],
    },
    {
        id: 4,
        title: 'Listening Practice',
        time: '1 Hr 50 Min',
        totalLessons: '3 Lessons',
        xpInfo: 'You will get 40 XP',
        lessons: [
            { id: 'lp1', title: 'Lesson 1: Short Conversations', hearts: 55, xp: 15 },
            { id: 'lp2', title: 'Lesson 2: Everyday Dialogues', hearts: 70, xp: 20 },
            { id: 'lp3', title: 'Lesson 3: Real-Life Scenarios', hearts: 95, xp: 25 },
        ],
    },
    {
        id: 5,
        title: 'Reading Comprehension',
        time: '2 Hrs 5 Min',
        totalLessons: '2 Lessons',
        xpInfo: 'You will get 40 XP',
        lessons: [
            { id: 'rc1', title: 'Lesson 1: Short Stories', hearts: 45, xp: 15 },
            { id: 'rc2', title: 'Lesson 2: Newspaper Articles', hearts: 65, xp: 20 },
        ],
    },
];

export default function LessonsScreen() {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {LESSON_SECTIONS.map(section => (
                <View key={section.id} style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>{section.title}</Text>
                    <Text style={styles.sectionInfo}>
                        {section.time} • {section.totalLessons}
                    </Text>
                    <Text style={styles.xpInfo}>{section.xpInfo}</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsRow}>
                        {section.lessons.map(lesson => (
                            <TouchableOpacity key={lesson.id} style={styles.lessonCard}>
                                <Text style={styles.lessonTitle} numberOfLines={2}>
                                    {lesson.title}
                                </Text>
                                <View style={styles.lessonMetaRow}>
                                    <Text style={styles.lessonMetaText}>{lesson.hearts} ♥</Text>
                                    <Text style={styles.lessonMetaText}>{lesson.xp} XP</Text>
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
        paddingTop: 40,
        paddingHorizontal: 16,
        backgroundColor: '#FFF',
    },
    sectionContainer: {
        backgroundColor: '#960000',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 6,
        color: '#FFF',
    },
    sectionInfo: {
        fontSize: 14,
        color: '#FFF',
        marginBottom: 4,
    },
    xpInfo: {
        fontSize: 14,
        color: '#FFF',
        marginBottom: 12,
    },
    cardsRow: {
        flexDirection: 'row',
    },
    lessonCard: {
        width: 140,
        borderRadius: 12,
        backgroundColor: '#e66b6b',
        marginRight: 12,
        padding: 10,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    lessonTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFF',
        marginBottom: 8,
    },
    lessonMetaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    lessonMetaText: {
        fontSize: 12,
        color: '#FFF',
    },
});