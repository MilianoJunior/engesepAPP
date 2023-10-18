import React from 'react';
import { NativeBaseProvider, Box, Text, Heading,VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, userUpdate } from '../redux/index'
import { Debug } from "../testes/debug";

function MenuBottom(props) {
    Debug('Pagina - componente - Menu Bottom')
    const navigate = props.navigation;
    const route = props.route;
    return (<Box w="100%" h="100%" shadow="9"  alignItems="center" borderTopLeftRadius="25" borderTopRightRadius="25" justifyContent="center" bg="#181A20">
            <HStack space={3} justifyContent="center">
            <Pressable cursor="pointer" opacity={route.name === 'Home' ? 1 : 0.5} py="3" flex={1} onPress={()=> navigate.navigate('Home')}>
              <Center>
                <Icon mb="1" as={<Ionicons name={route.name === 'Home' ? 'home' : 'home-outline'} />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Início
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={route.name === 'Graficos' ? 1 : 0.5} py="3" flex={1} onPress={()=> navigate.navigate('Graficos')}>
              <Center>
                <Icon mb="1" as={<Ionicons name={route.name === 'Graficos' ? 'bar-chart' : 'bar-chart-outline'} />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Gráficos
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={route.name === 'Relatorios' ? 1 : 0.5} py="3" flex={1} onPress={()=> navigate.navigate('Relatorios')}>
              <Center>
                <Icon mb="1" as={<Ionicons name={route.name === 'Relatorios' ? 'reader' : 'reader-outline'} />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Relatórios
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={route.name === 'Historico' ? 1 : 0.5} py="3" flex={1} onPress={()=> navigate.navigate('Historico')}>
              <Center>
                <Icon mb="1" as={<Ionicons name={route.name === 'Historico' ? 'server' : 'server-outline'} />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Histórico
                </Text>
              </Center>
            </Pressable>
            <Pressable cursor="pointer" opacity={route.name === 'Perfil' ? 1 : 0.5} py="3" flex={1} onPress={()=> navigate.navigate('Perfil')}>
              <Center>
                <Icon mb="1" as={<Ionicons name={route.name === 'Perfil' ? 'settings' : 'settings-outline'} />} color="white" size="sm" />
                <Text color="white" fontSize="12">
                  Perfil
                </Text>
              </Center>
            </Pressable>
          </HStack>
        </Box>)
}

export {MenuBottom}