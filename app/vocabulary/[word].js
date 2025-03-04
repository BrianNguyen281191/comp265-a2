import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const initialVocabulary = [
  {
    word: 'candid',
    partOfSpeech: '(adj)',
    definition: 'Truthful and straightforward; frank.',
    pronunciation: '/KAN-did/',
    synonyms: ['frank', 'direct', 'honest'],
    exampleUsage: 'Her candid remarks surprised everyone at the meeting.',
    isCompleted: false,
  },
  {
    word: 'eloquent',
    partOfSpeech: '(adj)',
    definition: 'Fluent or persuasive in speaking or writing.',
    pronunciation: '/EL-oh-kwent/',
    synonyms: ['articulate', 'expressive', 'persuasive'],
    exampleUsage: 'His eloquent speech moved the entire audience.',
    isCompleted: false,
  },
  {
    word: 'ephemeral',
    partOfSpeech: '(adj)',
    definition: 'Lasting for a very short time.',
    pronunciation: '/ih-FEM-er-uhl/',
    synonyms: ['fleeting', 'transient', 'short-lived'],
    exampleUsage: 'The beauty of the sunset was ephemeral.',
    isCompleted: false,
  },
  {
    word: 'inquisitive',
    partOfSpeech: '(adj)',
    definition: 'Curious or inquiring.',
    pronunciation: '/in-KWIZ-ih-tiv/',
    synonyms: ['curious', 'inquiring', 'questioning'],
    exampleUsage: 'The inquisitive child asked many questions about the stars.',
    isCompleted: false,
  },
  {
    word: 'lucid',
    partOfSpeech: '(adj)',
    definition: 'Expressed clearly; easy to understand.',
    pronunciation: '/LOO-sid/',
    synonyms: ['clear', 'comprehensible', 'intelligible'],
    exampleUsage: 'Her explanation was so lucid that everyone understood the concept immediately.',
    isCompleted: false,
  },
];

initialVocabulary.sort((a, b) => a.word.localeCompare(b.word));

export default function VocabularyList() {
  const [vocabulary, setVocabulary] = useState(initialVocabulary);
  const [expandedWord, setExpandedWord] = useState(null);

  const handlePressWord = (selectedWord) => {
    setVocabulary((prev) =>
      prev.map((item) =>
        item.word === selectedWord ? { ...item, isCompleted: true } : item
      )
    );

    setExpandedWord(expandedWord === selectedWord ? null : selectedWord);
  };

  return (
    <View style={styles.container}>
      {vocabulary.map((item) => (
        <View key={item.word} style={styles.wordBlock}>
          <TouchableOpacity
            style={[
              styles.wordItem,
              item.isCompleted && styles.completedItem,
            ]}
            onPress={() => handlePressWord(item.word)}
          >
            <Text style={styles.wordText}>
              {item.word} {item.partOfSpeech}
            </Text>
            <Ionicons
              name={item.isCompleted ? 'checkmark' : 'chevron-forward'}
              size={20}
              color="#fff"
            />
          </TouchableOpacity>
          {expandedWord === item.word && (
            <View style={styles.detailsContainer}>
              <Text style={styles.definition}>
                <Text style={styles.label}>Definition: </Text>
                {item.definition}
              </Text>
              <Text style={styles.pronunciation}>
                <Text style={styles.label}>Pronunciation: </Text>
                {item.pronunciation}
              </Text>
              <Text style={styles.example}>
                <Text style={styles.label}>Example: </Text>
                {item.exampleUsage}
              </Text>
              {item.synonyms.length > 0 && (
                <Text style={styles.synonyms}>
                  <Text style={styles.label}>Synonyms: </Text>
                  {item.synonyms.join(', ')}
                </Text>
              )}
              <Text style={styles.infoText}>(Tap again to collapse)</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  wordBlock: {
    marginBottom: 10,
  },
  wordItem: {
    backgroundColor: '#960000',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  completedItem: {
    backgroundColor: '#008000',
  },
  wordText: {
    fontSize: 16,
    color: '#fff',
  },
  detailsContainer: {
    backgroundColor: '#fff5f5',
    padding: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  label: {
    fontWeight: 'bold',
  },
  definition: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  pronunciation: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  example: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  synonyms: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 12,
    color: '#555',
    fontStyle: 'italic',
  },
});
