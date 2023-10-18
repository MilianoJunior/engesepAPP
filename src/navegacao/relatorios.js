import React, { Component } from 'react';
import {View, Box, ScrollView, Center} from 'native-base';
import { MenuBottom } from '../componentes/menu_bottom'
import MenuTop from '../componentes/menu_top'
import { MiniGauge } from '../componentes/mini_gauge'
import { MyDatePicker } from '../componentes/date_picker'
import { color, styles } from '../funcoes/styles'
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from 'react-redux';
import { Dimensions } from 'react-native';
import { Debug } from "../testes/debug";

function Relatorios(props){
    Debug('Pagina 3 - Relatorios')
    const validacao = useSelector(state => state.database.data)
    // if(JSON.stringify(validacao) === "{}"){
    //     const dispatch = useDispatch()
    //     dispatch(userUpdate(props.route.params.data))
    // }
    const estilo = {
        color_1: ["#F4A533","#F4BA68","#F1CA92","#F7F7F7","#000000","#FC961F","#000000","#F4BA68","#F6B152","#F4A533"],
        color_2: ["#567AF9","#6888FB","#96ABF7","#F7F7F7","#000000","#3E67F9","#000000","#96ABF7","#567AFD","#3E67F9"],
        color_3: ["#F4A533","#F4BA68","#F1CA92","#F7F7F7","#000000","#FC961F","#000000","#F4BA68","#F6B152","#F4A533"],
        color_4: ["#567AF9","#6888FB","#96ABF7","#F7F7F7","#000000","#3E67F9","#000000","#96ABF7","#567AFD","#3E67F9"],
        color_5: ["#F4A533","#F4BA68","#F1CA92","#F7F7F7","#000000","#FC961F","#000000","#F4BA68","#F6B152","#F4A533"],
        color_6: ["#567AF9","#6888FB","#96ABF7","#F7F7F7","#000000","#3E67F9","#000000","#96ABF7","#567AFD","#3E67F9"],
    }
    const { mesFiltrado } = 10;
    var cont = 0;
    const nr_turbinas = 2;
    const nr_dias_reg = 1;
    for (let key in validacao.data.usina.usina_dados) {
        if (key.includes('ug')) {
            for (let data in validacao.data.usina.usina_dados[key].geracao_mensal) {
                // meses[key] = getMonthsFromData(validacao.data.usina.usina_dados[key].geracao_mensal[data])
                console.log(data, validacao.data.usina.usina_dados[key].geracao_mensal[data])
            }
        }
        else {
            // meses[key] = getMonthsFromData(validacao.data.usina.usina_dados[key].geracao_mensal)
            console.log(key, validacao.data.usina.usina_dados[key])
        }
    }

    return (<View style={styles.container} >
                <Box w='100%' h='15.3%' bg={color['backcolor']} justifyContent='center' alignItems='center'>
                    <MenuTop {...props}/>
                </Box>
                <Box w='100%' h='85.7%'  justifyContent='flex-start'  alignItems='center'>
                    <Box w="89%" h="89%" p="1" display='flex' flexDirection='column' alignItems="flex-start" justifyContent="center" borderRadius="md" bg={color['backcolor']}>
                        <ScrollView style={{flex: 1}}  paddingTop={2} display="flex" flexDirection="column" >
                            {Array.from({ length:nr_turbinas }, (_, index) => (
                                Array.from({ length: nr_dias_reg}, (_, index_b) => {
                                    const dadosAtuais = { data: { mes: '10/10/2023' }}
                                    if (10 === 10) {
                                        cont += 1;
                                        return (<Center key={cont} p={2} mt="1" mb="1">
                                                    <LinearGradient colors={[estilo['color_' + (index + 1)][8], estilo['color_' + (index + 1)][9]]} style={styles.boxMiniGauge} start={{x:0, y:0}} end={{x:1, y: 1}}>
                                                        <MiniGauge  estado={'color_' + (index + 1)}
                                                                    nome={"UG-0" + (index + 1)}
                                                                    value={(validacao.data.usina.usina_dados["ug0" +(index + 1)].acumulador_energia).toFixed(2)}
                                                                    status={ validacao.data.usina.usina_dados["ug0" +(index + 1)].status == 0 ?'ativa':'parada'}
                                                                    nivel_agua={(validacao.data.usina.usina_dados.gerais.nivel_agua).toFixed(2)}
                                                                    media_diaria={(validacao.data.usina.usina_dados.gerais.nivel_agua).toFixed(2)}
                                                                    data={ '17/10/2023' }/>
                                                    </LinearGradient>
                                                </Center>)
                                    }
                                })
                            ))}
                        </ScrollView>
                    </Box>
                    <Box w="100%" h="9%" alignItems="center" justifyContent="flex-start">
                        <Box w='100%' h='100%' bg={color['backcolor']} position='absolute' left={0} bottom={0} >
                            <MenuBottom {...props} />
                        </Box>
                    </Box>
                </Box>
            </View>)
}
export {Relatorios}
