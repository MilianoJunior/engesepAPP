import React from "react";
import {Center, View, Text, HStack, Avatar, Menu, Container,Image, Pressable, HamburgerIcon, Icon, Heading,Input, VStack, Box, Checkbox, Button, Divider, Link} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons'; 
import { styles, cores, iconStyle } from '../funcoes/styles'
import { useSelector, useDispatch } from 'react-redux'
import {Debug} from "../testes/debug";

function abreviar(str) {
    {/* Função que abrevia o nome dos usuários */}
    const [nome, ...sobrenomes] = str.split(' ');
    const abreviaturas = sobrenomes.reduce((arr, str) => {
        const letraGrande = str.match(/[A-ZÖÄÅÀÁÂÃÌÍÒÓÉÊÚ]/);
        if (!letraGrande) return arr;
            return arr.concat(`${letraGrande[0]}.`);
    }, []);

    return [nome, ...abreviaturas].join(' ');
}

function MenuTop(props) {
    {/* Menu Top */}
    Debug('Pagina - componente - Menu Top')
    const userData = useSelector(state => state.database.data)
    return  <HStack w="89%" alignItems="center" justifyContent='center' style={styles.backgroundColor}>
              <Box w="20%" style={styles.backgroundColor} alignItems="flex-start">
                <Avatar bg="#000" source={require('./../../assets/new_avatar.png')}></Avatar>
              </Box>
              <Box w="60%" style={styles.backgroundColor} alignItems="flex-start">
                <View mx='0'>
                    <Text style={styles.menuText}>Seja bem vindo!</Text>
                    <Text style={styles.menuText}>{'Junior'}</Text>
                </View>
              </Box>
              <Box w="20%" style={styles.backgroundColor} alignItems="flex-end" justifyContent='flex-end'>
                <MaterialIcons name="logout" size = {iconStyle.size } color={iconStyle.color} onPress={() => props.navigation.navigate('Login')}/>
              </Box>
          </HStack>
  }
export default MenuTop