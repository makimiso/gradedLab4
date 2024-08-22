import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

const MenuScreen = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Burger', quantity: 2, price: 50.00, image: require('./burger.jpg') },
    { id: 2, name: 'Pizza', quantity: 1, price: 80.00, image: require('./pizza.jpg') },
    { id: 3, name: 'Pasta', quantity: 1, price: 70.00, image: require('./pasta.jpg') },
    { id: 4, name: 'Wings', quantity: 3, price: 60.00, image: require('./wings.jpg') },
    { id: 5, name: 'Chicken', quantity: 1, price: 75.00, image: require('./chicken.jpg') },
    { id: 6, name: 'Seafood', quantity: 1, price: 120.00, image: require('./seafood.jpg') },
  ]);

  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Menu Screen</Text>
      <View style={styles.menuGrid}>
        {menuItems.map((item) => (
          <View key={item.id} style={styles.menuItem}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.name}</Text>
            <Text>Price: R{item.price.toFixed(2)}</Text>
            <Button title="Add to Cart" onPress={() => addItemToCart(item)} />
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
        <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
        <Button title="Go to MultiStepForm" onPress={() => navigation.navigate('MultiStepForm')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  menuItem: {
    width: '45%',
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default MenuScreen;
