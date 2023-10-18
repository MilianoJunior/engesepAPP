import React from "react";
import {Center, View, Text, Container,Image, Icon, Heading, Input,HStack, VStack, Collapse, Alert, IconButton, CloseIcon, Box, Checkbox, Button, Divider, Link} from 'native-base';


function MsgCollapse(props){
    return (<Collapse isOpen={props.login}>
                <Alert maxW="300" minW="300" status="undefined" bg={props.login ? "#10b981": "#181A20"}>
                    <VStack space={1} flexShrink={1} w="100%">
                        <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                            <HStack flexShrink={1} space={2} alignItems="center">
                                <Alert.Icon />
                                <Text fontSize="md" fontWeight="medium" _dark={{color: "coolGray.800"}}>
                                    Erro!
                                </Text>
                            </HStack>
                                <IconButton 
                                        variant="unstyled" 
                                        _focus={{borderWidth: 0}} 
                                        icon={<CloseIcon size="3" />} 
                                        _icon={{color: "coolGray.600"}} 
                                        onPress={() => props.setLogin(false)} />
                        </HStack>
                            <Box pl="6" _dark={{_text: {color: "coolGray.600"}}}>
                                {props.msg}
                            </Box>
                    </VStack>
                </Alert>
            </Collapse>);
}

export default MsgCollapse