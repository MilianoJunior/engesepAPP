import React from "react";
import { StyleSheet} from "react-native";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryAxis, VictoryLine} from "victory-native";
import {Circle, View, Text, Box} from 'native-base';
import {color} from '../funcoes/styles'
import { Debug } from "../testes/debug";

function convertData(dataObj) {
    // Pega a data atual e o mês
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Os meses começam de 0 em JavaScript
    const currentYear = currentDate.getFullYear();

    // Filtra os valores que são diferentes de 0 e somente as datas do mês atual
    const dates = Object.keys(dataObj)
        .filter(date => dataObj[date] !== 0)
        .filter(date => {
            const [day, month, year] = date.split('-').map(Number);
            return month === currentMonth && year === currentYear;
        })
        .sort((a, b) => new Date(b) - new Date(a)) // Ordena de forma decrescente
        .slice(0, 6); // Pega somente os 6 primeiros registros

    return dates.map(date => {
        const day = parseInt(date.split('-')[0], 10);  // Extrai o dia do mês
        return { x: day, y: dataObj[date] };
    });
}

function getSixDate(dataObj, key) {
    // Pega a data atual e o mês
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1; // Os meses começam de 0 em JavaScript
    const currentYear = currentDate.getFullYear();

    // Separa os valores que são do mês atual
    const dates = Object.keys(dataObj)
        .filter(date => {
            const [day, month, year] = date.split('-').map(Number);
            return month === currentMonth && year === currentYear;
        }
    )

    const values = dataObj

    // Ordena de forma decrescente
    const dates_sort = dates.sort((a, b) => new Date(b) - new Date(a))

    // Pega somente os 6 primeiros registros
    const dates_six = dates_sort.slice(0, 7);

    let cont = 0;

    const result = dates_six.map((date) => {
        cont += 1;
        const day = parseInt(date.split('-')[0], 10);  // Extrai o dia do mês
        console.log(cont, key, day, date, values[date])
        console.log('-----------------------------------------------------------------------')
        return { x: cont, y: values[date]};
    });

    return result
}


function Charts(props){
    Debug('Pagina - componente - Charts')
    const meses_date = {}
    for (let key in props.data) {
        if (key.includes('ug')) {
            for (let data in props.data[key].geracao_diaria) {
                // meses[key] = getMonthsFromData(validacao.data.usina.usina_dados[key].geracao_mensal[data])
                meses_date[key] = getSixDate(props.data[key].geracao_diaria[data], key)
                // console.log('1- diaria: ',  getSixDate(props.data[key].geracao_diaria[data]))
                // console.log('-----------------------------------------------------------------------')
            }
        }
    }
    // console.log(props.data.ug01)
    Object.entries(meses_date).map(([label, value], index) => (
        console.log(index, label, value)
    ))
    const qtd_ugs = 2;
    const cor_circle = ['#214494','#3F2194']
    const acumulado = ["UG-01", "UG-02"]
    return (
          <View style={styles.container} backgroundColor={color['chart']['backcolor']}>
            <Box w='80%' h='15%'  pt="1" bg={color['chart']['backcolor']}>
              <Box w='100%' h='50%' bg={color['chart']['backcolor']} display='flex' flexDirection='row' justifyContent='center' alignItems="flex-end" >
                <Text fontSize={24} fontWeight='bold' fontFamily='body' color='#fff' >Geração de energia</Text>
              </Box>
              <Box w='100%' h='50%' display='flex' flexDirection='row' justifyContent='center' alignItems="center" bg={color['chart']['backcolor']}>
               {Array.from({ length: qtd_ugs }, (_, index) => (
                  <Box key={index} display='flex' flexDirection='row' justifyContent='center' alignItems="center">
                    <Circle size="10px" bg={cor_circle[index]} m='2'></Circle>
                    <Text fontSize={12} fontFamily='body' color={cor_circle[index]}>{acumulado[index]} MW</Text>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box w='100%' h='80%' display='flex' flexDirection='row' justifyContent='center' alignItems="center"  bg={color['chart']['backcolor']}>
              <VictoryChart maxDomain={{x: 10}} padding={{ top: 10, bottom: 50, left: 30, right: 10 }} height={330} width={350}
                            style={{background: { fill: color['chart']['backcolor'] }}} animate={{duration: 2000, onLoad: { duration: 1000 }}}>
                    <VictoryGroup offset={10} style={{ data: { fillOpacity: 0.9 }}}>
                        {Object.entries(meses_date).map(([label, value], index) => (
                             <VictoryBar key={index} data={value}
                                          cornerRadius={{ topLeft: 2 , topRight: 3}}
                                          style={{data: {fill: cor_circle[index], width: 10}}}/>
                            ))
                        }
                    </VictoryGroup>
                <VictoryAxis style={{ axis: {stroke: color['chart']['backcolor'] }, tickLabels: { fill: color['chart']['text'] } }} />
                <VictoryAxis dependentAxis={true}
                              style={{
                                      axis: {stroke: color['chart']['backcolor'] },
                                      tickLabels: { fill: color['chart']['text'], fontSize:10 }
                                    }} />
              </VictoryChart>
            </Box>
          </View>
        );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    width:'100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color['chart']['backcolor'] 
  }
});

export {Charts}
