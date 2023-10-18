import React from "react";
import {Text,Box} from 'native-base';
import {color, styles} from '../funcoes/styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';


function BoxInfo(props) {
    const [fontsLoaded] = useFonts({
        WorkSans_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    const estilo = {color_1: ["#F3AF4F","#F1CA92","#F3F4F5","#F7F7F7","#000000","#FC961F","#000000","#F4BA68"],
                    color_2: ["#567AF9","#6888FB","#96ABF7","#F7F7F7","#000000","#3E67F9","#000000","#96ABF7"]}
    return (<Box w="50%" h="100%" display='flex' flexDirection='column' alignItems="center" justifyContent="center" bg={color['backcolor']}>
            <Box w="50%" h="20%" display='flex' flexDirection='row' alignItems="flex-end" m='1'justifyContent="center" >
                <Ionicons name="stats-chart" size={24} color={color[props.nome]['primary.7']} onPress={() => console.log('nova tela')}/>
                <Text  style={styles.boxInfoText} color="#fff">{props.mes}</Text>
            </Box>
            <Box w="90%" h="20%" display='flex' flexDirection='row' alignItems="center" justifyContent="center" >
                <Text  style={styles.boxInfoText} color ={color[props.nome]['primary.7']} >{props.nome}</Text>
            </Box>
            <Box w="90%" h="30%" display='flex' flexDirection='row' alignItems="center" justifyContent="center" >
                <Text  style={styles.boxInfoTextTitulo} color ={color[props.nome]['primary']} >{props.acumulado} MW</Text>
            </Box>
          </Box>);
    }

export {BoxInfo}