
import React from "react"
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
            container:{
                display:'flex',
                flexDirection:'column',
                alignItems:"center",
                justifyContent:"flex-start",
                backgroundColor:"#181A20",
            },
            titulo: {
                fontWeight: 'bold',
                color: 'white',
                fontSize: 22,
                textAlign:"center",
                lineHeight:30,
                padding:3,
                backgroundColor:"#181A20",
            },
            calculadoraText: {
                fontWeight: '500',
                fontSize: 12,
                textAlign:"left",
                lineHeight: 16,
                letterSpacing: 0.6000000238418579,
                color: 'white',
            },
            subtitulo:{
                fontWeight: 'bold',
                fontSize: 24,
                textAlign:"center",
                lineHeight: 32,
            },
            subtituloDark:{
                fontWeight: 'semibold',
                color: 'white',
                fontSize: 20,
                textAlign:"left",
                lineHeight: 36,
            },
            menuText:{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 16,
                textAlign:"left",
                lineHeight: 24,
            },
            descricaoText:{
                fontWeight: 'semibold',
                color: 'white',
                fontSize: 13,
                textAlign:"center",
                lineHeight: 24,
            },
            buttonText:{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 18,
                textAlign:"center",
                lineHeight: 32,
            },
            linkText:{
                fontWeight: 'normal',
                color: 'white',
                fontSize: 12,
                textAlign:"center",
                lineHeight: 16,
            },
            backgroundColor:{
                backgroundColor:"#181A20",
            },
            boxMiniGauge:{
                flex: 1,
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
            },
            boxInfoLayout:{
                width: 95,
                height: 20,
                top: 64,
            },
            boxInfoText:{
                    fontFamily: 'WorkSans_400Regular',
                    fontWeight: '400',
                    fontSize: 12,
                    lineHeight: 20,
                    letterSpacing: 0.6000000238418579,
                    textAlign:"center",
                    marginLeft:5,
            },
            boxInfoTextTitulo:{
                fontFamily: 'WorkSans_400Regular',
                fontWeight: '600',
                fontSize: 18,
                lineHeight: 25,
                letterSpacing: 0.6000000238418579,
                textAlign:"center",
                marginLeft:5,
            }
});

const iconStyle = {
                    size:20,
                    color:"white",
}
const color = {
    'chart':{'backcolor':'#333340','text':'#5B5B66'},
    'backcolor':"#181A20",
    'UG-01':{
                'primary': '#F4A533',
                'primary.9': '#F9B451',
                'primary.8': '#FABF6B',
                'primary.7': '#FCCE8D',
                'last': '#F7F7F7',
                'text_UG':'#000000',
    },
    'UG-02':{
        'primary': '#3E67F9',
        'primary.9': '#4F74F8',
        'primary.8': '#6D8CFC',
        'primary.7': '#8BA4FD',
        'last': '#F7F7F7',
        'text_UG':'#000000',
    },
}

export {color, styles, iconStyle}