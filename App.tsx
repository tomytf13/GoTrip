import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { DestinosTuristicos } from './pages/DestinosTuristicos';
import { ChatBot } from './pages/ChatBot';
import { RealizarPlanDeViaje } from './pages/RealizarPlanDeViaje';
import Maps from './pages/Maps';
import { MisViajes } from './pages/MisViajes';
import { Cajeros } from './pages/Cajeros';
import { PuntosDeCarga } from './pages/PuntosDeCarga';

const Menu = createDrawerNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name='Realizar Plan DeViaje' component={RealizarPlanDeViaje} />
        <Menu.Screen name='Destinos Turisticos' component={DestinosTuristicos} />
        <Menu.Screen name='ChatBot' component={ChatBot} />
        <Menu.Screen name='Mis Viajes' component={MisViajes} />
        <Menu.Screen name='Cajeros' component={Cajeros} />
        <Menu.Screen name='Maps' component={Maps} />
        <Menu.Screen name='Puntos de carga' component={PuntosDeCarga} />
      </Menu.Navigator>
    </NavigationContainer>
  );
}