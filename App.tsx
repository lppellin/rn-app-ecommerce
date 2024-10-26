import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Produtos from './src/screens/Produtos';
import Carrinho from './src/screens/Carrinho';
import { CartProvider } from './src/context/CarrinhoContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>

      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="Produtos" >

          <Stack.Screen
            name="Produtos"
            component={Produtos}
            options={{
              header: () => (
                <View style={{ height: 40, }} />
              ) // header vazio
            }}
          />

          <Stack.Screen
            name="Carrinho"
            component={Carrinho}
          />

        </Stack.Navigator>
      </NavigationContainer>

    </CartProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
