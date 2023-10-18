import { Debug } from "../testes/debug";

const variaveis = {
    'token':'bf71b37a75c204f9dcbd02676ebf1ea9',
    'user': {
        'id': 1,
        'nome': 'Miliano Fernandes de Oliveira Junior',
        'telefone':'(11) 9 9999-9999',
        'nascimento': '18/06/1984',
        'email':'milianojunior39@gmail.com',
        'usina': 'cgh_fae',
        'usina_id': 1,
        'privilegios' : 1,
    },
    'usina': {
        'usina_info': {
            'id': 1,
            'nome': 'CGH Fae',
            'localizacao': 'Encruzilhada, Campos Novos - SI',
            'numero_de_turbinas': 2,
            'potencia': 1.8,
            'nome_tabela': 'cgh_fae',
        },
        'usina_dados': {},
    }
}

const validator = (entradas) =>{
    // console.log('---------------------------------')
    // console.log('entradas')
    // console.log('---------------------------------')
    Debug('Variaveis - Validator')
    if (typeof entradas === "undefined" || !entradas || Object.keys(entradas).length === 0) {
        return variaveis;
    }
    // console.log('.................................')
    // console.log('Token')
    // console.log('.................................')
    // Token extraction
    if ('token' in entradas.data) {
        // console.log('entradas.token: ',entradas.data.token)
        variaveis.token = entradas.data.token;
    }
    // console.log('.................................')
    // console.log('User')
    // console.log('.................................')
    // User extraction
    if ('user' in entradas.data) {
        for (let key in entradas.data.user) {
            // console.log('entradas.user[key]: ',entradas.data.user[key])
            variaveis.user[key] = entradas.data.user[key];
        }
    }

    // Usina extraction
    if ('usina' in entradas.data) {
        // console.log('.................................')
        // console.log('Usina.info')
        // console.log('.................................')
        // console.log('entradas.usina: ',entradas.data.usina.usina_info)
        if ('usina_info' in entradas.data.usina) {
            // console.log('1- entradas.usina.usina_info: ',entradas.data.usina.usina_info)
            for (let key in entradas.data.usina.usina_info) {
                // console.log(key,' : ',entradas.data.usina.usina_info[key])
                variaveis.usina.usina_info[key] = entradas.data.usina.usina_info[key];
            }
        }
        // console.log('.................................')
        // console.log('Usina.dados')
        // console.log('.................................')
        if ('usina_dados' in entradas.data.usina) {
            for (let key in entradas.data.usina.usina_dados) {
                // console.log(key,' : ')
                variaveis.usina.usina_dados[key] = entradas.data.usina.usina_dados[key];
                for (let key2 in entradas.data.usina.usina_dados[key]) {
                    // console.log(key2,' : ',entradas.data.usina.usina_dados[key][key2])
                    // variaveis.usina.usina_dados[key][key2] = entradas.data.usina.usina_dados[key][key2];
                }
            }
        }
    }
    return variaveis;
  }


export {validator}


/* const turbina = {
                'status_ativacao': null,
                'nome_turbina': null,
                'data': null,
                'energia_acumulada': null,
                'geracao_mensal': null,
                'geracao_diaria': [],
                'ultimos':null,
}
const variaveis = {
    'token':'engesep6161',
    'user':{
              'id': 1,
              'nome': 'Gelson Fernandes de Oliveira',
              'telefone':'(11) 9 9999-9999',
              'nascimento': null,
              'email':null,
              'senha':null,
              'imagem': null,
              'usina': null,
              'usina_id':null,
              'status' : null,
              'ultimo_acesso' : null,
              'numero_acessos': null,
              'acessos_consecutivos': null,
              'created_at':null,
              'updated_at': null
    },
    'usina':{
                'usina_info': {
                                'id':null,
                                'nome': null,
                                'local': null,
                                'cidade': null,
                                'numero_de_turbinas': null,
                                'potencia':null,
                                'nome_tabela': null,
                                'inicio_funcionamento': null,
                                'created_at':null,
                                'updated_at': null

                },
                'usina_dados':[],

    }
}*/
// const turbina = {
//     'status_ativacao': 'Ativo',
//     'nome_turbina': 'Turbina 01',
//     'data': '2023-09-19',
//     'energia_acumulada': 1200,
//     'geracao_mensal': 400,
//     'geracao_diaria': [ {'data': '2023-09-19', 'producao': 100},
//                         {'data': '2023-09-18', 'producao': 95},
//                         {'data': '2023-09-17', 'producao': 98},],
//     'ultimos': '2023-09-18'
// }

// considerando que o objeto de entrada seja:
/*
{"data":
{
    "token": "83f52498032755062392d51ab5b2901d",
    "user": {
            "email": "milianojunior39@gmail.com",
            "id": 1,
            "nascimento": "18/06/1983",
            "nome": "Miliano Fernandes de Oliveira Junior",
            "privilegios": 2,
            "telefone": "49999771330",
            "usina": "cgh_fae",
            "usina_id": 1
       },
       "usina": {
                    "usina_dados": {
                                    "gerais": {
                                            "hora": "19/09/2023 07:27:49",
                                            "nivel_agua":6.44,
                                            "nivel_media_diaria": [Object]
                                            },
                                     "ug01": {
                                            "acumulador_energia": 1260.45,
                                            "geracao_diaria": [Object],
                                            "geracao_mensal": [Object],
                                            "status": 1
                                            },
                                      "ug02": {
                                            "acumulador_energia": 1266.35,
                                            "geracao_diaria": [Object],
                                            "geracao_mensal": [Object],
                                            "status": 0
                                            }
                                        },
                      "usina_info": {
                                      "id": 1,
                                      "localizacao": "Encruzilhada, Campos Novos - SC, 89633-000",
                                      "nome": "CGH Fae",
                                      "nome_tabela": "cgh_fae",
                                      "numero_de_turbinas": 2,
                                      "potencia": 1.8
                                      }
        }

 {

          }

*/
// Como implementar a função validator para que ela retorne o objeto variaveis com os dados do objeto de entrada?