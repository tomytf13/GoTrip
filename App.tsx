import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import { NavigationContainer, StackRouter} from '@react-navigation/native';
import { DestinosTuristicos } from './pages/DestinosTuristicos';
import { ChatBot } from './pages/ChatBot';
import { RealizarPlanDeViaje } from './pages/RealizarPlanDeViaje';
import Maps from './pages/Maps';
import { MisViajes } from './pages/MisViajes';
import { Cajeros } from './pages/Cajeros';
import { PuntosDeCarga } from './pages/PuntosDeCarga';
import { Categorias } from './pages/Categorias';
import 'react-native-gesture-handler';
import { PuntoTuristicoSeleccionado } from './pages/PuntoTuristicoSeleccionado';
import MapWithPuntos from './pages/MapWithPuntos';
import { EventosActivos } from './pages/EventosActivos';
import { RutaDelVino } from './pages/RutaDelVino';
import { Museos } from './pages/Museos';
import { BirraFest } from './pages/BirraFest';
import { StyleSheet } from "react-native";


const Menu = createDrawerNavigator()


export default function App() {

  return (

    <NavigationContainer>
        <Menu.Navigator>
        <Menu.Screen name='Realizar Plan DeViaje' component={RealizarPlanDeViaje} />
        <Menu.Screen name= 'Eventos Activos' component={EventosActivos}></Menu.Screen>
        <Menu.Screen name='Maps' component={Maps}  />
        <Menu.Screen name='Puntos de carga' component={PuntosDeCarga} />
        <Menu.Screen name='Cajeros' component={Cajeros} />
        <Menu.Screen name='Ruta Del Vino' component={RutaDelVino} options={{headerShown:false,title:''}} ></Menu.Screen>
        <Menu.Screen name='Museos' component={Museos}  options={{headerShown:false,title:''}}  ></Menu.Screen>
        <Menu.Screen  name='BirraFest' component={BirraFest}  options={{headerShown:false,title:''}} ></Menu.Screen>
        <Menu.Screen name='Categorias' component={Categorias}  options={{headerShown:false,title:''}} ></Menu.Screen>
        <Menu.Screen name='Mapa con markers' component={MapWithPuntos}  options={{headerShown:false,title:''}}></Menu.Screen> 
        {/* <Menu.Screen name='Destinos Turisticos' component={DestinosTuristicos} /> */}
        {/* <Menu.Screen name='ChatBot' component={ChatBot} /> */}
        {/* <Menu.Screen name='Mis Viajes' component={MisViajes} /> */}
      {/* <Menu.Screen name='Punto Turistico Seleccionado'component={PuntoTuristicoSeleccionado} options={{headerShown:false}} ></Menu.Screen> */}
      </Menu.Navigator>
    </NavigationContainer>
  );
}
