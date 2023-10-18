import React from "react";
import { NativeBaseProvider, extendTheme, Box, Text, View } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './autenticacao/login'
import RecuperarSenha from './autenticacao/recuperar_senha'

import {Home} from './navegacao/home'
import {Graficos} from './navegacao/graficos'
import {Relatorios} from './navegacao/relatorios'
import {Historico} from './navegacao/historico'
import {Perfil} from './navegacao/perfil'


const themeEngeSEP = {
    useSystemColorMode: true,
    initialColorMode: 'light',
    fonts: {
        heading: 'Work Sans',
        body: 'Work Sans',
        mono: 'Work Sans',
    }}

const customTheme = extendTheme({ themeEngeSEP });
// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();
export default function App () {
    const estado = 0
    return (
        <NavigationContainer>
            <NativeBaseProvider theme={customTheme}>
                <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login"  component={Login} />
                    <Stack.Screen name="RecuperarSenha"  component={RecuperarSenha}/>
                    <Stack.Screen name="Home"  component={Home} initialParams={{ data: null }}/>
                    <Stack.Screen name="Graficos"  component={Graficos} estado={1}/>
                    <Stack.Screen name="Relatorios"  component={Relatorios} estado={2}/>
                    <Stack.Screen name="Historico"  component={Historico} estado={3}/>
                    <Stack.Screen name="Perfil"  component={Perfil} estado={4}/>
                </Stack.Navigator>
            </NativeBaseProvider>
        </NavigationContainer>
    );
};