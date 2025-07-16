import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Profile() {
  
  const name = 'Rimjhim';
  const progress = 70;
  const avgScore = 85;
  const bestTopic = 'Grammar';
  const badges = ['Starter', 'Quiz Master'];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Profile</Text>
      <Text style={styles.subheading}>Name: {name}</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Practice Progress:</Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.percentText}>{progress}% completed</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Average Quiz Score:</Text>
        <Text style={styles.dataText}>{avgScore}%</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Best Topic:</Text>
        <Text style={styles.dataText}>{bestTopic}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Badges:</Text>
        {badges.map((badge, index) => (
          <Text key={index} style={styles.badge}>{badge}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9C3',
    padding: 24,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 20,
    paddingTop: 50,
  },
  subheading: {
    fontSize: 16,
    marginBottom: 20,
    color: '#14532D',
  },
  section: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#14532D',
    marginBottom: 4,
    fontWeight: '600',
  },
  dataText: {
    fontSize: 16,
    color: '#1C1917',
  },
  progressBarContainer: {
    height: 20,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    backgroundColor: '#4ADE80',
    height: '100%',
  },
  percentText: {
    marginTop: 6,
    fontSize: 14,
    color: '#166534',
  },
  badge: {
    fontSize: 14,
    marginTop: 4,
    color: '#D97706',
    fontWeight: 'bold',
  },
});
