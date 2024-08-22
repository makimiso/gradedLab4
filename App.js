import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormProvider } from './FormContext';  
import { CartProvider } from './CartContext';  
import { ThemeProvider } from './ThemeContext'; 
import MenuScreen from './MenuScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import MultiStepForm from './MultiStepForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FormProvider>
      <CartProvider>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="MultiStepForm">  
              <Stack.Screen name="MultiStepForm" component={MultiStepForm} />
              <Stack.Screen name="Menu" component={MenuScreen} />
              <Stack.Screen name="Cart" component={CartScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </CartProvider>
    </FormProvider>
  );
}