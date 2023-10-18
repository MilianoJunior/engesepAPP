import React, { Component } from 'react';
import {View, VStack, Box, Input, Icon, Button} from 'native-base';
import {MenuBottom } from '../componentes/menu_bottom'
import MenuTop from '../componentes/menu_top'
import {color, styles} from '../funcoes/styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { Debug } from "../testes/debug";

function Perfil(props) {
    Debug('Pagina 5 - Perfil')
    const show = true;
    const userData = useSelector(state => state.database.data)
    return (<View display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Box w='100%' h='17.3%' bg={color['backcolor']} justifyContent='center' alignItems='center'>
                        <MenuTop {...props}/>
                    </Box>
                    <Box w='100%' h='82.7%' bg='#61646B' justifyContent='flex-start'  alignItems='center'>
                        <Box w="100%" h="83.6%" alignItems="center" justifyContent="flex-start" bg={color['backcolor']}>
                            <VStack space={3} justifyContent="center"> 
                                <Input w={{base: "88.5%",md: "25%"}} placeholderTextColor="white" bg="#4E5054"
                                    InputLeftElement={<Icon as={<Ionicons name="person" />} ml="2" color="muted.400" />} 
                                    color='white'
                                    size={5}
                                    placeholder=  {userData.nome}/>    
                                <Input w={{base: "88.5%",md: "25%"}} placeholderTextColor="white" bg="#4E5054"
                                    InputLeftElement={<Icon as={<MaterialIcons name="local-phone" />}  ml="2" color="muted.400" />} 
                                    color='white'
                                    size={5}
                                    placeholder={ userData.telefone}/>
                                <Input w={{base: "88.5%",md: "25%"}} placeholderTextColor="white" bg="#4E5054"
                                    InputLeftElement={<Icon as={<Ionicons name="today" />} ml="2" color="muted.400" />} 
                                    color='white'
                                    size={5}
                                    placeholder={ userData.nascimento}/>
                                <Input w={{base: "88.5%",md: "25%"}} placeholderTextColor="white" bg="#4E5054"
                                    InputLeftElement={<Icon as={<Ionicons name="mail" />} ml="2" color="muted.400" />} 
                                    color='white'
                                    size={5}
                                    placeholder={ userData.email}/>
                                <Input w={{base: "88.5%",md: "25%"}} placeholderTextColor="white" bg="#4E5054"
                                       type={show ? "text" : "password"}
                                       InputLeftElement={<Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} ml="2" color="muted.400" onPress={() => console.log(!show)}/>} 
                                       color='white'
                                       size={5}
                                       placeholder='Senha Atual'/>
                                <Input w={{base: "88.5%",md: "25%"}} placeholderTextColor="white" bg="#4E5054"
                                       type={show ? "text" : "password"}
                                       InputLeftElement={<Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />} ml="2" color="muted.400" onPress={() => console.log(!show)}/>} 
                                       color='white'
                                       size={5}
                                       placeholder='Digite uma nova senha'/>                       
                            </VStack>
                            <Button  w="90%" h="55px" m='4' onPress={()=> console.log('Atulizar Dados')}>Atualizar</Button>
                        </Box>
                        <Box w="100%" h="16.4%" alignItems="center" justifyContent="flex-start" bg={color['backcolor']}>
                            <Box w='100%' h='100%' position='absolute' left={0} bottom={0} >
                                <MenuBottom {...props} />
                            </Box>
                        </Box>
                    </Box>
                </View>)
  }

  export {Perfil}