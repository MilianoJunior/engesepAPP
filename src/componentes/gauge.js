import React from "react";
import {Circle, Text, Box } from 'native-base';
import { Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from '../funcoes/styles'
import {Debug} from "../testes/debug";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export function Gauge(props){
    Debug('Pagina - componente - Gauge')
    const estilo = {color_1: ["#F3AF4F","#F1CA92","#F3F4F5","#F7F7F7","#000000","#FC961F","#000000","#F4BA68"],
                    color_2: ["#567AF9","#6888FB","#96ABF7","#F7F7F7","#000000","#3E67F9","#000000","#96ABF7"]}
    // console.log('Width:', windowWidth, 'Height:', windowHeight);
    const percentual = {
        circle_1: windowWidth * 0.7,
        circle_2: windowWidth * 0.62,
        circle_3: windowWidth * 0.54,
        circle_4: windowWidth * 0.46,
    }
    // Debug(`Gauge: ${percentual.circle_1} ${percentual.circle_2} ${percentual.circle_3}`)
    return (
            <Box w="100%" h="100%" display='flex' alignItems="center" justifyContent="flex-start" borderTopLeftRadius="25" borderTopRightRadius="25" bg={estilo[props.estado][5]}>
                <Box w="15%" h="15%" position="absolute" zIndex={1} top="0" right="0" p='2'  >
                    <Ionicons name="arrow-forward-circle-outline"  size={24} color="white" onPress={() => console.log('nova tela')}/>
                </Box>
                <Box w="100%" h="65%" alignItems="center" m="2" justifyContent="center" borderTopLeftRadius="25" borderTopRightRadius="25" bg={estilo[props.estado][5]}>
                    <Circle size={percentual.circle_1} bg={estilo[props.estado][0]} shadow={2}>
                        <Circle size={percentual.circle_2} bg={estilo[props.estado][1]}>
                            <Circle size={percentual.circle_3} bg={estilo[props.estado][2]}>
                                <Circle size={percentual.circle_4} bg={estilo[props.estado][3]} shadow={1}>
                                    <Text style={styles.subtitulo} color={estilo[props.estado][4]}>{props.nome}</Text>
                                    <Text style={styles.subtitulo} color={estilo[props.estado][5]}>{props.value} MW</Text>
                                    <Text fontSize={12} fontWeight="bold" color={estilo[props.estado][6]}>status: {props.status}</Text>
                                </Circle>
                            </Circle>
                        </Circle>
                    </Circle>
                </Box>
                <Box w="100%" h="35%" alignItems="center" justifyContent="flex-start" bg={estilo[props.estado][5]}>
                    <Circle w="150px" h="40px" bg={estilo[props.estado][7]} shadow={2}>
                        <Text fontSize={10} color="#7A7272">última atualização</Text>
                        <Text fontSize={10} color="#4F4E4E">{props.data}</Text>
                    </Circle>
                </Box>
            </Box>
        )
}