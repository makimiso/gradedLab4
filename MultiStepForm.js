import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const MultiStepForm = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [addressData, setAddressData] = useState({
    address: '',
    city: '',
    state: '',
    zip: '',
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleUserDataChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleAddressDataChange = (field, value) => {
    setAddressData({ ...addressData, [field]: value });
  };

  const handlePaymentDataChange = (field, value) => {
    setPaymentData({ ...paymentData, [field]: value });
  };

  const handleSubmit = () => {
    console.log(userData, addressData, paymentData);
    navigation.navigate('Menu');  
  };

  return (
    <View style={styles.container}>
      {step === 1 && (
        <View>
          <Text>User Details</Text>
          <TextInput
            placeholder="Name"
            value={userData.name}
            onChangeText={(text) => handleUserDataChange('name', text)}
          />
          <TextInput
            placeholder="Email"
            value={userData.email}
            onChangeText={(text) => handleUserDataChange('email', text)}
          />
          <TextInput
            placeholder="Phone"
            value={userData.phone}
            onChangeText={(text) => handleUserDataChange('phone', text)}
          />
          <Button title="Next" onPress={handleNextStep} />
        </View>
      )}
      {step === 2 && (
        <View>
          <Text>Address Details</Text>
          <TextInput
            placeholder="Address"
            value={addressData.address}
            onChangeText={(text) => handleAddressDataChange('address', text)}
          />
          <TextInput
            placeholder="City"
            value={addressData.city}
            onChangeText={(text) => handleAddressDataChange('city', text)}
          />
          <TextInput
            placeholder="State"
            value={addressData.state}
            onChangeText={(text) => handleAddressDataChange('state', text)}
          />
          <TextInput
            placeholder="Zip"
            value={addressData.zip}
            onChangeText={(text) => handleAddressDataChange('zip', text)}
          />
          <Button title="Next" onPress={handleNextStep} />
          <Button title="Prev" onPress={handlePrevStep} />
        </View>
      )}
      {step === 3 && (
        <View>
          <Text>Payment Details</Text>
          <TextInput
            placeholder="Card Number"
            value={paymentData.cardNumber}
            onChangeText={(text) => handlePaymentDataChange('cardNumber', text)}
          />
          <TextInput
            placeholder="Expiration Date"
            value={paymentData.expirationDate}
            onChangeText={(text) => handlePaymentDataChange('expirationDate', text)}
          />
          <TextInput
            placeholder="CVV"
            value={paymentData.cvv}
            onChangeText={(text) => handlePaymentDataChange('cvv', text)}
          />
          <Button title="Submit" onPress={handleSubmit} />
          <Button title="Prev" onPress={handlePrevStep} />
        </View>
      )}
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

export default MultiStepForm;
