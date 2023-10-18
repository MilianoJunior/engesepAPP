import React, { useState, useEffect } from 'react';
import {Text, Box, HStack, Center, VStack, Input, Select, Icon} from 'native-base';
import { CheckIcon } from 'native-base';
import {color, styles } from '../funcoes/styles'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Debug } from "../testes/debug";
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';
import { MaterialIcons } from '@expo/vector-icons';

function calcularTotalMesCorrente(dados, mesAnoCorrente) {
    let total = 0;

    for (let key in dados.usina.usina_dados) {
        if (dados.usina.usina_dados[key].geracao_mensal) {
            for (let data in dados.usina.usina_dados[key].geracao_mensal) {
                for (let mes in dados.usina.usina_dados[key].geracao_mensal[data]) {
                    if (mes.includes(mesAnoCorrente)) {
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
    if (!data.ug01.geracao_mensal['ug01_acumulador_energia']) return [];

    // Obtenha as chaves do objeto
    const dates = Object.keys(data.ug01.geracao_mensal['ug01_acumulador_energia']);

    // Reduza o array de datas a um objeto mapeado
    const months = dates.reduce((acc, date) => {
        const [day, month, year] = date.split('-');

        // Usando o objeto Date para obter o nome curto do mês
        const monthName = new Date(year, month - 1).toLocaleString('default', { month: 'short' });

        acc[`${monthName}-${year}`] = date;
        return acc;
    }, {});

    // console.log('months disponíveis: ', months);
    return months;
}


function valorGanho(totalMes, concessionaria, custos, cota) {


    if (isNaN(totalMes) || isNaN(concessionaria) || isNaN(custos) || isNaN(cota)) {
        return "0,00";
    }

    totalMes = parseFloat(totalMes);
    concessionaria = parseFloat(concessionaria);
    custos = parseFloat(custos);
    cota = parseFloat(cota);

    let valor = totalMes * concessionaria;
    let mcustos = valor * (custos/100);
    let resultado = valor - mcustos;
    resultado = resultado * (cota/100);

    resultado = resultado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    // console.log('valor: ', valor)
    // console.log('custos: ', mcustos)
    // console.log('resultado: ',resultado)

    return resultado;
}


function Calculadora(props) {
    const mes = props.mes? props.mes : 'Junho'
    Debug('Pagina Home - componente -  Calculadora')
    // for (let key in props.dados.usina.usina_dados) {
    //     console.log(key,' : ',props.dados.usina.usina_dados[key], '\n')
    // }
    const months = getMonthsFromData(props.dados.usina.usina_dados);
    const [mesAnoCorrente, setMesAnoCorrente] = useState(Object.values(months)[0]); // Valor inicial
    const [totalMes, setTotalMes] = useState(calcularTotalMesCorrente(props.dados, mesAnoCorrente));
    const [concessionaria, setConcessionaria] = useState(470);
    const [custos, setCustos] = useState(2.0);
    const [cota, setCota] = useState(2.0);
    const [valorMes, setValorMes] = useState(valorGanho(totalMes, concessionaria, custos, cota));
    const [service, setService] = React.useState("");

    // console.log('months: ', months);
    useEffect(() => {
        setTotalMes(calcularTotalMesCorrente(props.dados, mesAnoCorrente));
        setValorMes(valorGanho(totalMes, concessionaria, custos, cota));
    }, [totalMes, concessionaria, custos, cota, mesAnoCorrente]);


    return(
            <HStack space={3} justifyContent="center" alignContent="center" alignItems="center">
                <VStack space={3} justifyContent="center" alignContent="center" alignItems="left" h="95%" w="154" paddingLeft="3" bg="#2F3036" rounded="md" shadow={3} >
                    <Select selectedValue={mesAnoCorrente}
                            w="120px"
                            h="35px"
                            px="20px"
                            py="1px"
                            color="#fff"
                            bg="#181A20"
                            shadow={3}
                            accessibilityLabel={Object.keys(months)[0]}
                            placeholder={Object.keys(months)[0]}
                            dropdownIcon={<Icon as={<Ionicons name="chevron-down" />} size={5} color="#fff" right={3} />}
                            variant="unstyled"
                            borderRadius="12px"
                            mt="1" onValueChange={itemValue => setMesAnoCorrente(itemValue)}>
                                {Object.entries(months).map(([label, value], index) => (
                                    <Select.Item key={index} label={label} value={value} />
                                ))}
                    </Select>
                    <Text font="body" textAlign="left" style={styles.calculadoraText}>Total ugs: {totalMes} MW</Text>
                    <Text font="body" style={styles.subtituloDark}>{valorMes}</Text>
                </VStack>
                <VStack space={1} justifyContent="center" alignItems="center" h="100%"  w="154" >
                    <Input
                        w="166px"
                        h="40px"
                        px="30px"
                        py="8px"
                        color="#fff"
                        bg="#181A20"
                        borderRadius="32px"
                        shadow={3}
                        placeholder={`$${concessionaria} MW/h`}
                        onEndEditing={event => setConcessionaria(parseFloat(event.nativeEvent.text))}
                        textAlign="center"
                    />
                    <Input
                        w="166px"
                        h="40px"
                        px="30px"
                        py="8px"
                        color="#fff"
                        bg="#181A20"
                        borderRadius="32px"
                        shadow={3}
                        placeholder={`cota ${cota} %`}
                        onEndEditing={event => setCota(parseFloat(event.nativeEvent.text))}
                        textAlign="center"
                    />
                    <Input
                        w="166px"
                        h="40px"
                        px="30px"
                        py="8px"
                        color="#fff"
                        borderRadius="32px"
                        bg="#181A20"
                        shadow={3}
                        placeholder={`custos ${custos} %`}
                        onEndEditing={event => setCustos(parseFloat(event.nativeEvent.text))}
                        textAlign="center"
                    />
                </VStack>
            </HStack>
    );
}



export default Calculadora;


/*
ug01  :  {
            "acumulador_energia": 1390.53,
            "geracao_diaria": {
                                "ug01_acumulador_energia": {
                                                            "01-10-2023": 0.96,
                                                            "02-10-2023": 0.09,
                                                            "03-10-2023": 5.04,
                                                            "04-10-2023": 12.26,
                                                            "05-10-2023": 10.97,
                                                            "06-10-2023": 12.19,
                                                            "07-10-2023": 11.58,
                                                            "08-10-2023": 11.59,
                                                            "09-10-2023": 12.53,
                                                            "10-10-2023": 13.06,
                                                            "11-10-2023": 6.13,
                                                            "12-10-2023": 0,
                                                            "13-10-2023": 0,
                                                            "14-10-2023": 0,
                                                            "15-10-2023": 0,
                                                            "16-10-2023": 0,
                                                            "17-09-2023": 0,
                                                            "18-09-2023": 7.3,
                                                            "19-09-2023": 12.13,
                                                            "20-09-2023": 0.1,
                                                            "21-09-2023": 0.56,
                                                            "22-09-2023": 0,
                                                            "23-09-2023": 0,
                                                            "24-09-2023": 4.25,
                                                            "25-09-2023": 7.88,
                                                            "26-09-2023": 0.14,
                                                            "27-09-2023": 2.4,
                                                            "28-09-2023": 2.76,
                                                            "29-09-2023": 0,
                                                            "30-09-2023": 1.34
                                                            }
                               },
                   "geracao_mensal": {
                                    "ug01_acumulador_energia": {
                                                                 "30-09-2023": 77.49,
                                                                 "31-08-2023": 119.18,
                                                                 "31-10-2023": 96.48
                                                                 }
                                       },
                   "status": 1
                   }
ug02  :  {
            "acumulador_energia": 1390.53,
            "geracao_diaria": {
                                "ug02_acumulador_energia": {
                                                            "01-10-2023": 0.96,
                                                            "02-10-2023": 0.09,
                                                            "03-10-2023": 5.04,
                                                            "04-10-2023": 12.26,
                                                            "05-10-2023": 10.97,
                                                            "06-10-2023": 12.19,
                                                            "07-10-2023": 11.58,
                                                            "08-10-2023": 11.59,
                                                            "09-10-2023": 12.53,
                                                            "10-10-2023": 13.06,
                                                            "11-10-2023": 6.13,
                                                            "12-10-2023": 0,
                                                            "13-10-2023": 0,
                                                            "14-10-2023": 0,
                                                            "15-10-2023": 0,
                                                            "16-10-2023": 0,
                                                            "17-09-2023": 0,
                                                            "18-09-2023": 7.3,
                                                            "19-09-2023": 12.13,
                                                            "20-09-2023": 0.1,
                                                            "21-09-2023": 0.56,
                                                            "22-09-2023": 0,
                                                            "23-09-2023": 0,
                                                            "24-09-2023": 4.25,
                                                            "25-09-2023": 7.88,
                                                            "26-09-2023": 0.14,
                                                            "27-09-2023": 2.4,
                                                            "28-09-2023": 2.76,
                                                            "29-09-2023": 0,
                                                            "30-09-2023": 1.34
                                                            }
                               },
                   "geracao_mensal": {
                                    "ug02_acumulador_energia": {
                                                                 "30-09-2023": 77.49,
                                                                 "31-08-2023": 119.18,
                                                                 "31-10-2023": 96.48
                                                                 }
                                       },
                   "status": 1
                   }

 */
