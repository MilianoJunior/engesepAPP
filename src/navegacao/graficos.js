import React, { Component } from 'react';
import {View, VStack, Box, Heading, Text, Select} from 'native-base';
import {BoxInfo} from '../componentes/box_info';
import {Charts} from '../componentes/chart';
import {MenuBottom } from '../componentes/menu_bottom';
import MenuTop from '../componentes/menu_top';
import {color, styles} from '../funcoes/styles';
import { useSelector, useDispatch } from 'react-redux';
import { validator } from "../funcoes/variaveis";
import { Debug } from "../testes/debug";


function calcularTotalMesCorrente(dados, mesAnoCorrente) {
    let total = 0;
    let text = 'ug';

    for (let key in dados.usina.usina_dados) {
        if (dados.usina.usina_dados[key].geracao_mensal) {
            for (let data in dados.usina.usina_dados[key].geracao_mensal) {
                for (let mes in dados.usina.usina_dados[key].geracao_mensal[data]) {
                    if (mes.includes(text)) {
                        total += dados.usina.usina_dados[key].geracao_mensal[data][mes];
                    }
                }
            }
        }
    }
    // console.log('---------------------------------------')
    // console.log('mes de escolha: ', mesAnoCorrente)
    // console.log('total: ', total);
    return total;
}
function getMonthsFromData(data) {

    // verifique se há dados
    if (!data) return [];

    // // Obtenha as chaves do objeto
    const dates = Object.keys(data);
    const values = Object.values(data);

    // Separando o ultimo mes
    const mesAnoCorrente = dates[dates.length - 1];

    // Separando o total do mes
    const totalMesCorrente = values[values.length - 1];

    //Formatando o mes
    const [dia, mes, ano] = mesAnoCorrente.split('-');

    // Usando o objeto Date para obter o nome curto do mês
    const monthName = new Date(ano, mes -1).toLocaleString('default', { month: 'short' });

    return { mes: monthName, acumulado: totalMesCorrente };
}

let cont = 0;
//https://www.figma.com/file/qjJGg7fFwfYyMsVxcXvbgt/app-EngeSEP?type=design&node-id=13-1087&mode=dev
function Graficos(props) {
    const validacao = useSelector(state => state.database.data)
    if(JSON.stringify(validacao) === "{}"){
        console.log('vazio')
      // const dispatch = useDispatch()
      // dispatch(userUpdate(props.route.params.data))
    }
    const meses = {}
    Debug('Pagina 2 - Graficos')
    for (let key in validacao.data.usina.usina_dados) {
        if (key.includes('ug')) {
            for (let data in validacao.data.usina.usina_dados[key].geracao_mensal) {
                    meses[key] = getMonthsFromData(validacao.data.usina.usina_dados[key].geracao_mensal[data])
                }
            }
        }
    Object.entries(meses).map(([label, value], index) => (
        console.log(label, value, value, index)
    ))
    // const months = getMonthsFromData(validacao.data.usina.usina_dados);
    return (<View style={styles.container}>
                <Box w='100%' h='15.3%' style={styles.backgroundColor} justifyContent='center' alignItems='center'>
                    <MenuTop {...props}/>
                </Box>
                <Box w='100%' h='84.7%' style={styles.backgroundColor} justifyContent='flex-start'  alignItems='center'>
                    <Box w="89%" h="20%" style={styles.backgroundColor} display='flex' flexDirection='row' px="2" alignItems="center" justifyContent="center" >
                        {Object.entries(meses).map(([label, value], index) => (
                            <BoxInfo cor='#214494'  key={index}
                                     mes={value.mes}
                                     acumulado={(value.acumulado).toFixed(2)}
                                     nome={"UG-0" + (index +1)}
                                     >
                            </BoxInfo>
                        ))}
                    </Box>
                    <Box w="100%" h="80%" style={styles.backgroundColor}>
                        <Box w="100%" h="80%" style={styles.backgroundColor} mt={7}>
                            <Charts data={validacao.data.usina.usina_dados} />
                        </Box>
                        <Box w="100%" h="15%" alignItems="center" position='absolute' bg={color['chart']['backcolor']} left={0} bottom={0}>
                            <MenuBottom {...props} />
                        </Box>
                    </Box>
                </Box>
            </View>);
  }

  export {Graficos}


// class MyGraficos extends Component{
//     render(){
//         return (<View style={styles.container}>
//                     <Box w='100%' h='15.3%' style={styles.backgroundColor} justifyContent='center' alignItems='center'>
//                         <MenuTop {...this.props}/>
//                     </Box>
//                     <Box w='100%' h='84.7%' style={styles.backgroundColor} justifyContent='flex-start'  alignItems='center'>
//                         <Box w="89%" h="20%" style={styles.backgroundColor} display='flex' flexDirection='row' px="2" alignItems="center" justifyContent="center" >
//                             <BoxInfo cor='#214494' id={1} ></BoxInfo>
//                             <BoxInfo cor='#3F2194' id={2} ></BoxInfo>
//                         </Box>
//                         <Box w="100%" h="80%" style={styles.backgroundColor}>
//                             <Box w="100%" h="80%" style={styles.backgroundColor} mt={7}>
//                                 <Charts {...this.props} />
//                             </Box>
//                             <Box w="100%" h="15%" alignItems="center" position='absolute' bg={color['chart']['backcolor']} left={0} bottom={0}>
//                                 <MenuBottom {...this.props} />
//                             </Box>
                            
//                         </Box>
//                     </Box>
//                 </View>)}
//     }