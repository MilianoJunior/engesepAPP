import React from "react";
import { HStack, ScrollView, Text, Box, Divider} from 'native-base';
import { Dimensions } from 'react-native';
import {color} from '../funcoes/styles'
import { MaterialIcons } from '@expo/vector-icons';

export function Lista(props){
    const estilo = {
        color_a: ["#F4A533","#F4BA68","#F1CA92","#F7F7F7","#000000","#FC961F","#000000","#F4BA68","#F6B152","#F4A533"],
        color_b: ["#567AF9","#6888FB","#96ABF7","#F7F7F7","#000000","#3E67F9","#000000","#96ABF7","#567AFD","#3E67F9"],
    }
    const largura = Dimensions.get('window').width.toFixed(2)
    const altura = Dimensions.get('window').height.toFixed(2)
    const cont = 0
    return (
        <Box w="100%" h="100%" display='flex' flexDirection='column' alignItems="center" justifyContent="center" >
            <Box w="90%" h="8%" alignItems="center" justifyContent="flex-start">
                <HStack space={0} justifyContent="center">
                    <Box w='20%' h='27px' bg={color['backcolor']}  justifyContent='center' alignItems='center'>
                        <Text fontSize={16} fontWeight='600' fontFamily='body' color='#fff' >Data</Text>
                    </Box>
                    <Box w='40%' h='27px' bg={color['backcolor']}  flexDirection='row' justifyContent='center' alignItems='center'>
                        <MaterialIcons name='trending-up' size={20} color='#F4A533' />
                        <Text ml='1' fontSize={16} fontWeight='600' fontFamily='body' color='#fff' >UG-01
                            <Text fontSize={14}> (MW)</Text>
                        </Text>
                    </Box>
                    <Box w='40%' h='27px' bg={color['backcolor']} flexDirection='row' justifyContent='center' alignItems='center'>
                        <MaterialIcons name='trending-up' size={20} color='#567AF9'></MaterialIcons>
                        <Text ml='1' fontSize={16} fontWeight='600' fontFamily='body' color='#fff'>UG-02
                            <Text fontSize={14}> (MW)</Text>
                        </Text>
                    </Box>
                </HStack>
                <Divider bg="#646161" thickness="1"  orientation="horizontal" />
            </Box>
            <ScrollView w={["300", "600"]} h="92%" bg={color['backcolor']}>
                <Box w="100%" h="100%" alignItems="center" justifyContent="center">
                    { Object.keys(props.state.history_data).map((item) =>  
                                                            <HStack space={0} key={item} justifyContent="center">
                                                                <Box w='25%' h='50px' bg={color['backcolor']}  justifyContent='center' alignItems='flex-start'>
                                                                    <Text fontSize={12} fontWeight='300' fontFamily='body' color='#fff' textAlign='justify'>{props.state.history_data[item][0]}</Text>
                                                                </Box>
                                                                <Box w='37.5%' h='50px' bg={color['backcolor']}  justifyContent='center' alignItems='center'>
                                                                    <Text ml='1' fontSize={16} fontWeight='600' fontFamily='body' color='#F4A533'>{props.state.history_data[item][1]}</Text>
                                                                </Box>
                                                                <Box w='37.5%' h='50px' bg={color['backcolor']} justifyContent='center' alignItems='center'>
                                                                    <Text ml='1' fontSize={16} fontWeight='600' fontFamily='body' color='#3E67F9'>{props.state.history_data[item][2]}</Text>
                                                                </Box>
                                                            </HStack>
                                                    )}
                </Box>
            </ScrollView>
        </Box>
        )
}