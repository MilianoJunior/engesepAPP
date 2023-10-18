import React from "react";
import {View, HStack, VStack, Spinner, Box, Heading, Text} from 'native-base';
import { ActivityIndicator } from 'react-native';
import {color, styles} from '../funcoes/styles'
import MenuTop from '../componentes/menu_top'
import {MenuBottom } from '../componentes/menu_bottom'
import Caculadora from '../componentes/calculadora';
import Swiper from 'react-native-swiper'
import {Gauge} from '../componentes/gauge'
import { useSelector, useDispatch } from 'react-redux'
import { userUpdate } from '../redux/index'
import { validator } from "../funcoes/variaveis";
import axios from 'axios';
import { Debug } from "../testes/debug";
import { KeyboardAvoidingView, Platform } from 'react-native';


const requisicao = async (token) => {
    const url = 'https://fastapi-production-8d7e.up.railway.app/data/';
    const headers = {'Content-type': 'application/json'};
    const data = {'token': token};
    try {
        const response = await axios.post(url, data, {headers: headers});
        return response.data; // Assumindo que os dados estão diretamente na resposta. Se houver um wrapper, como response.data.data, ajuste isso.
    } catch (error) {
        Debug(`Erro na requisição: ${error}`);
        return null; // Ou qualquer outro valor padrão.
    }
}
function Home(props) {
    Debug('Pagina 1 - Home')
    const dispatch = useDispatch();
    const userData = useSelector(state => state.database.data);
    if (Object.keys(userData).length == 0) {
        console.log('userData vazio', Object.keys(userData).length);
        let token = props.route.params.data
        requisicao(token).then(dados => {
            if(dados) {
                dispatch(userUpdate(dados));
                setLoading(false)
            }
        });
    }
    const Data = validator(userData)
    const [loading, setLoading] = React.useState(true);
    const color_1 = ["#333333","#4436cb","#c511a1","#497a35","#000000","#FC961F","#000000","#F4BA68","#F6B152","#F4A533"];
    const percentual = {
        menu_top: `${((58/753)*100 + 1).toFixed(2)}%`,
        body: `${((693/753)*100).toFixed(2)}%`,
        descricao: `${((128/693)*100).toFixed(2)}%`,
        calculadora: `${((150/693)*100).toFixed(2)}%`,
        card: `${((415/693)*100).toFixed(2)}%`,
    }
    // Debug(`menu_top: ${percentual.menu_top} body: ${percentual.body} ${percentual.descricao} ${percentual.calculadora} ${percentual.card}`)
    if (loading) {
        return(
            <View style={styles.container}>
                <Box w="100%" h="100%" style={styles.backgroundColor} display='flex' flexDirection='row' alignItems="center" justifyContent="center">
                    <ActivityIndicator size="large" color="#0000ff" />
                </Box>
            </View>)
    }
    else {
        return(
            <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200}
            >
                <View style={styles.container}>
                        {/* Menu TOP */}
                        <Box w="100%" h={ percentual.menu_top } style={styles.backgroundColor} display='flex' flexDirection='row' alignItems="center" justifyContent="center">
                            <MenuTop {...props}/>npx
                        </Box>
                        {/* Body */}
                        <Box w="100%" h={percentual.body} display="flex" flexDirection="column" backgroundColor={color_1[1]}>
                            {/* Descrição */}
                              <Box w="100%" h={percentual.descricao} alignItems="center" justifyContent="center" m="0" p="0" style={styles.backgroundColor} >
                                <Heading style={styles.subtituloDark}>{Data.usina.usina_info.nome}</Heading>
                                <VStack w="80%" alignItems="flex-start"  space={0} >
                                    <Text style={styles.descricaoText} >Localização: {Data.usina.usina_info.localizacao} </Text>
                                    <Text style={styles.descricaoText} >Nr. de Turbinas: {Data.usina.usina_info.numero_de_turbinas} (Ugs) </Text>
                                    <Text style={styles.descricaoText} >Potência Instalada: {Data.usina.usina_info.potencia} </Text>
                                </VStack>
                              </Box>
                            {/* Calculadora */}
                              <Box w="100%" h={percentual.calculadora} alignItems="center"  justifyContent="center" m="0" p="0" style={styles.backgroundColor} >
                                  <Caculadora {...props} dados={Data} />
                              </Box>
                            {/* Card  */}
                                <Box w="100%" h={percentual.card} alignItems="center" justifyContent="center" m="0" p="0" style={styles.backgroundColor}>
                                    {/* Gauge */}
                                        <Box w="100%" h="100%" p="0" alignItems="center"  style={styles.backgroundColor}>
                                            <Swiper  dotColor='#fff' activeDotColor='#000' showsButtons={false}>
                                                {Array.from({ length: Data.usina.usina_info.numero_de_turbinas }, (_, index) => (
                                                      <Box key={index} w="100%" h="100%" alignItems="center" justifyContent='center' style={styles.backgroundColor}>
                                                          <Gauge style={{ flex: 1,  justifyContent: 'center', alignItems: 'center' }}
                                                                  estado={"color_" + (index +1)}
                                                                  nome={"UG-0" + (index +1)}
                                                                  value={(Data.usina.usina_dados["ug0" +(index + 1)].acumulador_energia).toFixed(2)}
                                                                  status={ Data.usina.usina_dados["ug0" +(index + 1)].status == 0 ?'ativa':'parada'}
                                                                  data={ Data.usina.usina_dados.gerais.hora }  />
                                                      </Box>
                                                ))}
                                            </Swiper>
                                        </Box>
                                    {/* Menu Buttom  */}
                                        <Box w="100%" h="16.7%" position="absolute" zIndex={1} bottom="0" borderTopLeftRadius="25" borderTopRightRadius="25"  style={styles.backgroundColor}>
                                            <MenuBottom {...props} />
                                        </Box>
                                </Box>
                        </Box>
                    </View>
                </KeyboardAvoidingView>);
    }
}

export {Home}

