import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView } from 'react-native';

const CartScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([
      { id: 1, name: 'Burger', quantity: 2, price: 50.00, image: require('./burger.jpg') },
    { id: 2, name: 'Pizza', quantity: 1, price: 80.00, image: require('./pizza.jpg') },
    { id: 3, name: 'Pasta', quantity: 1, price: 70.00, image: require('./pasta.jpg') },
    { id: 4, name: 'Wings', quantity: 3, price: 60.00, image: require('./wings.jpg') },
    { id: 5, name: 'Chicken', quantity: 1, price: 75.00, image: require('./chicken.jpg') },
    { id: 6, name: 'Seafood', quantity: 1, price: 120.00, image: require('./seafood.jpg') },
  ]);


  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>
      <View style={styles.cartGrid}>
        {cartItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.image} />
            <Text>{item.name} - Quantity: {item.quantity}</Text>
            <Text>Price: R{item.price.toFixed(2)}</Text>
            <Button title="Update Quantity" onPress={() => updateQuantity(item.id, item.quantity + 1)} />
          </View>
        ))}
      </View>
      <Button title="Go to Menu" onPress={() => navigation.navigate('Menu')} />
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
  cartGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 10,
  },
  cartItem: {
    width: '45%',
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default CartScreen;
