import React, { useState } from 'react'
import { Text, ScrollView, VStack, HStack, Pressable, Button, Icon, Box } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

function MyDatePicker() {
  const handleMes = (mes) => {
    meses.map((item)=>{
      if (item.actived) {item.actived = false}
      if (item.mes == mes){item.actived = true}
    })
    return meses
  };
  const handleAno = (ano) => {
    ano.map((item)=>{
      if (item.actived) {item.actived = false}
      if (item.ano == ano){item.actived = true}
    })
    return ano
  };
  const meses = [ {
                    mes: 'Janeiro',
                    actived: false,
                  },
                  {
                    mes: 'Fevereiro',
                    actived: false,
                  },
                  {
                    mes: 'Março',
                    actived: false,
                  },
                  {
                    mes: 'Abril',
                    actived: false,
                  },
                  {
                    mes: 'Maio',
                    actived: false,
                  },
                  {
                    mes: 'Junho',
                    actived: false,
                  },
                  {
                    mes: 'Julho',
                    actived: false,
                  },
                  {
                    mes: 'Agosto',
                    actived: false,
                  },
                  {
                    mes: 'Setembro',
                    actived: false,
                  },
                  {
                    mes: 'Outubro',
                    actived: false,
                  },
                  {
                    mes: 'Novembro',
                    actived: false,
                  },
                  {
                    mes: 'Dezembro',
                    actived: false,
                  }]
  const anos = [ { 
                  ano: 2019,
                  actived:false,
                 },
                 { 
                  ano: 2020,
                  actived:false,
                 },
                 { 
                  ano: 2021,
                  actived:false,
                 },
                 { 
                  ano: 2022,
                  actived:false,
                 },
                ]

  // const [activedMeses, setMeses] = useState(meses);
  const [Mes, setMes] = useState('');
  const [Ano, setAno] = useState('');
  return (
    <Box w='95%' h='100%' display='flex' flexDirection='column'  justifyContent='center' alignItems='center' >
        <Box w='100%' h='30%'  justifyContent='center' alignItems='center'>
          <Text fontSize="sm" color='white' bold >Seleção : {Mes}/{Ano}</Text>
        </Box>
        <Box w='100%' h='70%'  justifyContent='flex-start' alignItems='center'>
          <HStack space={0} borderBottomRadius={15} borderTopRadius={15} justifyContent="space-between" alignItems='center' bg='#181A20'>
            <Box w='40%' h='50%'  borderBottomRadius={30} borderTopRadius={30} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
              <ScrollView>
                {meses.map((item)=>{
                  return <Pressable key={item.mes} onPress={() => setMes(item.mes)} rounded="8" overflow="hidden" pl="2">
                            <Box  borderBottomWidth="1" h='38'
                                 borderColor='#35383F' borderBottomRadius={5} borderTopRadius={5} justifyContent='center' alignItems='center'>
                              <Text color={item.actived ?'info.600' :'white'}>{item.mes}</Text>
                            </Box>
                          </Pressable>
                })}
              </ScrollView>
              <VStack alignItems="center">
                <Icon as={MaterialIcons} name="keyboard-arrow-up" size="sm" />
                <Icon as={MaterialIcons} name="keyboard-arrow-down" size="sm" />
              </VStack>
            </Box>
            <Box w='30%' h='50%' borderBottomRadius={30} borderTopRadius={30} display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
              <ScrollView >
                {anos.map((item)=>{
                    return <Pressable key={item.ano} onPress={() => setAno(item.ano)}>
                              <Box  borderBottomWidth="1" h='38'  borderColor='#35383F' borderBottomRadius={5} borderTopRadius={5} justifyContent='center' alignItems='center'>
                                  <Text color={item.actived ?'info.600' :'white'}>{item.ano}</Text>
                              </Box>
                            </Pressable>
                  })}
              </ScrollView>
              <VStack alignItems="center">
                <Icon as={MaterialIcons} name="keyboard-arrow-up" size="sm" />
                <Icon as={MaterialIcons} name="keyboard-arrow-down" size="sm" />
              </VStack>
            </Box>
            <Box w='30%' h='100%' borderBottomRadius={30} borderTopRadius={30}  justifyContent='center' alignItems='center' pr="2">
              <Button size="sm" variant="outline" endIcon={<Icon as={MaterialIcons} name="cloud-download" size="sm" />} >PDF</Button>
            </Box>
          </HStack>
        </Box>
    </Box>
  )
}

export {MyDatePicker}
