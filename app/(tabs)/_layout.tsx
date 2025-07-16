import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#166534',
        tabBarInactiveTintColor: '#9CA3AF',
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
        tabBarStyle: {
          backgroundColor: '#FFF',
          borderTopColor: '#D1D5DB',
          paddingBottom: 5,
          height: 60,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'homepage') iconName = 'home';
          else if (route.name === 'quiz') iconName = 'book';
          else if (route.name === 'profile') iconName = 'person';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* ✅ Reordered to: Home, Quiz, Profile */}
      <Tabs.Screen name="homepage" options={{ title: 'Home' }} />
      <Tabs.Screen name="quiz" options={{ title: 'Take Quiz' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
