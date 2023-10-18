import React from "react";
import {View, Text, Image, Icon, Input, VStack,  Checkbox, Button, Divider, Link} from 'native-base';
import { ActivityIndicator } from 'react-native';
import MsgCollapse from "../componentes/msg_collapse";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../funcoes/styles';
import { AuthLogin} from '../funcoes/autentic';
import {useSelector} from "react-redux";

function Login(props) {
    // Interface de Login
    const userData = useSelector(state => state.database.data);
    const [msg, setMsg] = React.useState(null);
    const [login, setLogin] = React.useState(false);
    const [show, setShow] = React.useState(null);
    const [user, setUser] = React.useState('');
    // const [user, setUser] = React.useState('milianojunior39@gmail.com');
    // const [user, setUser] = React.useState('gelsonoliveiracco@gmail.com');
    const [password, setPassword] = React.useState();
    const [loading, setLoading] = React.useState(false);
    console.log('userData: ', userData)
    // if (userData || Object.keys(userData).length != 0) {
    //     navigation.navigate('Home', {data: userData.token});
    // }
    function Logar(props, setLogin, setMsg, user, password){
        if (Object.keys(userData).length != 0) {
            console.log('1- userData: ', userData)
            props.navigation.navigate('Home', {data: userData.token});
            return false
        }

      setLoading(true)
      AuthLogin(props.navigation, setLoading, setLogin, setMsg, user, password)
    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} bg="#181A20">
        {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <></>}
        <VStack w="100%" space={4} alignItems="center" >
            <Image source={require('./../../assets/logo.png')} w="100%" h="31%" resizeMode={"contain"} alt="EngeSEP Logo" />
            <MsgCollapse {...{login, msg, setLogin}} />
            <Input w={{base: "88.5%",md: "25%"}} placeholderTextColor="white" bg="#4E5054"
                   InputLeftElement={<Icon as={<Ionicons name="mail" />} ml="2" color="muted.400" />} 
                   onChangeText={setUser}
                   color='white'
                   size={5}
                   placeholder="E-mail"/>
            <Input w={{base: "88.5%",md: "25%"}} placeholderTextColor="white" bg="#4E5054"
                   type={show ? "text" : "password"}
                   InputLeftElement={<Icon as={<Ionicons name={show ? "eye-outline" : "eye-off-outline"} />}
                                           ml="2"
                                           color="muted.400"
                                           onPress={() => setShow(!show)}/>}
                   onChangeText={setPassword}
                   color='white'
                   size={5}
                   placeholder="Senha"/>
            <Checkbox value="test" accessibilityLabel="This is a dummy checkbox">
                <Text style={styles.linkText}>Lembrar</Text>
            </Checkbox>
            <Button  w="88.5%" h="55px" onPress={()=> Logar(props, setLogin, setMsg, user, password) }>
                <Text style={styles.buttonText}>Entrar</Text>
            </Button>
            <Divider my="2" w="88.5%"/>
            <Link onPress={() => props.navigation.navigate('RecuperarSenha')}>
                <Text style={styles.linkText} >Recuperar Senha</Text>
            </Link>
        </VStack>
      </View>
    );
  }

export default Login

