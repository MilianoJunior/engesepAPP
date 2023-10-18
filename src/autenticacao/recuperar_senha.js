import React from "react";
import {View, Text, Image, Icon, Heading, Input,VStack, Button, Divider, Link} from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../funcoes/styles';

function RecuperarSenha(props) {

  const [user, setUser] = React.useState(null);

  return (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} bg="#181A20">
              <VStack w="100%" space={4} alignItems="center" >
                  <Image source={require('./../../assets/logo.png')} w="100%" h="31%" resizeMode={"contain"} alt="EngeSEP Logo" />
                  <Heading style={styles.titulo} >Recuperar Senha</Heading>
                  <Input w={{base: "88.5%",md: "25%"}} placeholderTextColor="white" bg="#4E5054"
                         InputLeftElement={<Icon as={<Ionicons name="mail" />} ml="2" color="muted.400" />} 
                         onChangeText={setUser}
                         color='white'
                         size={5}
                         placeholder="E-mail"/>
                  <Button  w="88.5%" h="55px" onPress={()=>{console.warn('Enviar Recuperar Senha')}}>
                      <Text style={styles.buttonText}>Enviar</Text>
                  </Button>
                  <Divider my="2" w="88.5%"/>
                  <Link onPress={() => props.navigation.navigate('Login')} >
                      <Text style={styles.linkText}>Login</Text>
                  </Link>
              </VStack>
          </View>)
}



export default RecuperarSenha