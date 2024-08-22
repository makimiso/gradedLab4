import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [addressData, setAddressData] = useState({});
  const [paymentData, setPaymentData] = useState({});

  return (
    <FormContext.Provider value={{ userData, setUserData, addressData, setAddressData, paymentData, setPaymentData }}>
      {children}
    </FormContext.Provider>
  );
};
