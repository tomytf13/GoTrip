import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Acercade } from './pages/Acercade';
import { Categorias } from './pages/Categorias';
import { Contacto } from './pages/Contacto';
import { Inicio } from './pages/Inicio';
import Maps from './pages/Maps';
import { PuntosTuristicos } from './pages/PuntosTuristicos';

const Menu = createDrawerNavigator()


export default function App() {
 
  return (
  <NavigationContainer>
    <Menu.Navigator>
      <Menu.Screen name='Inicio' component={Inicio}/>
      <Menu.Screen name='Maps' component={Maps}/>
      <Menu.Screen name='Categorias' component={Categorias}/>
      <Menu.Screen name='Contacto' component={Contacto}/>
      <Menu.Screen name='Puntos Turisticos' component={PuntosTuristicos}/>
      <Menu.Screen name='Acerca De' component={Acercade}/>
    </Menu.Navigator>
  </NavigationContainer> 
  );
}
