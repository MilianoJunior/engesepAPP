import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import {View, VStack, Box, Heading, Text} from 'native-base';
import {MenuBottom } from '../componentes/menu_bottom';
import MenuTop from '../componentes/menu_top';
import {Lista} from '../componentes/lista';
import {color, styles} from '../funcoes/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Debug } from "../testes/debug";

class MyHistorico extends Component{

    state = {
              var:this.props.var,
              layout:{
                       'widthMenu':.1,
                       'heightMenu':.1,
                       'widthBody':.8,
                       'heightBody':.8,
                       'widthFooter':.1,
                       'heightFooter':.1
                     },
              size:{
                     'widthDevice':(Dimensions.get('window').width).toFixed(2),
                     'heightDevice':(Dimensions.get('window').height).toFixed(2),
                   },
              history_data:{
                            1:["06-16-2022 21:56:29", 400.51, 765.89],
                            2:["06-16-2022 21:56:29", 400.51, 765.89],
                            3:["06-16-2022 21:56:29", 400.51, 765.89],
                            4:["06-16-2022 21:56:29", 400.51, 765.89],
                            5:["06-16-2022 21:56:29", 400.51, 765.89],
                            6:["06-16-2022 21:56:29", 400.51, 765.89],
                            7:["06-16-2022 21:56:29", 400.51, 765.89],
                            8:["06-16-2022 21:56:29", 400.51, 765.89],
                            9:["06-16-2022 21:56:29", 400.51, 765.89],
                            10:["06-16-2022 21:56:29", 400.51, 765.89],
                            11:["06-16-2022 21:56:29", 400.51, 765.89],
                            12:["06-16-2022 21:56:29", 400.51, 765.89],
                            13:["06-16-2022 21:56:29", 400.51, 765.89],
                            14:["06-16-2022 21:56:29", 400.51, 765.89],
                            15:["06-16-2022 21:56:29", 400.51, 765.89],
                            16:["06-16-2022 21:56:29", 400.51, 765.89],
                            17:["06-16-2022 21:56:29", 400.51, 765.89],
                            18:["06-16-2022 21:56:29", 400.51, 765.89],
                            19:["06-16-2022 21:56:29", 400.51, 765.89],

              }
    }

    layout = () => {
                     console.log('---------------')
                     console.log('width geral: ' + this.state.size.widthDevice)
                     console.log('height geral: '+ this.state.size.heightDevice)
    }
    alterarMes = () => {
        let cont = 0;
        let aux= {};
        let array = [];
        Object.keys(this.props.validacao.usina.usina_dados).forEach((a) => {
            cont = 0;
            Object.keys(this.props.validacao.usina.usina_dados[a].ultimos).forEach((b)=>{
                cont += 1
                array.push(cont)
                aux[cont] = array
                array = [];
            })
        })
    }

    render(){
        Debug('Pagina 4 - Historico')
        const historico_dados = {}
        return (<View display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Box w='100%' h='17.3%' bg={color['backcolor']} justifyContent='center' alignItems='center'>
                        <MenuTop {...this.props}/>
                    </Box>
                    <Box w='100%' h='82.7%' bg='#61646B' justifyContent='flex-start'  alignItems='center'>
                        <Box w="100%" h="83.6%" 
                            display='flex' flexDirection='column' 
                            alignItems="center" justifyContent="flex-start" bg={color['backcolor']}>
                                <Lista {...this} />
                        </Box>
                        <Box w="100%" h="16.4%" alignItems="center" justifyContent="flex-start" bg={color['backcolor']}>
                            <Box w='100%' h='100%' position='absolute' left={0} bottom={0} >
                                <MenuBottom {...this.props} />
                            </Box>
                        </Box>
                    </Box>
                </View>)}
    }
function Historico(props) {
    const validacao = useSelector(state => state.database.data)
    if(JSON.stringify(validacao) === "{}"){
        const dispatch = useDispatch()
        dispatch(userUpdate(props.route.params.data))
    }
    return <MyHistorico {...props} validacao={validacao}/>
}

  export {Historico}