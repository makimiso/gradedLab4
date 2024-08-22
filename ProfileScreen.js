import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext';

const ProfileScreen = ({ navigation }) => {
  const { theme, updateTheme } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={{ color: theme.textColor }}>Profile Screen</Text>
      <Text style={{ color: theme.textColor }}>John Doka</Text>
      <Text style={{ color: theme.textColor }}>123 Main Street</Text>
      <Button title="Update Theme" onPress={() => updateTheme('blue', 'gray')} />
      <Button title="Go to Menu" onPress={() => navigation.navigate('Menu')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
