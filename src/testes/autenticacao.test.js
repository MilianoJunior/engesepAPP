// const conexao = require('./../funcoes/autentic');
import { Conexao } from './../funcoes/autentic'

let testes = {
    teste_A : {value: true, msg: "Digite um email válido" },
    teste_B : {value: true, msg: "Digite uma senha"},
    teste_C : {value: true, msg: "E-mail não está cadastrado."},
    teste_D : {value: true, msg: "A senha não confere, ápos 5 tentativas a conta é bloqueada."},
    teste_E : {value: true, msg: "A conta foi desativada, entre em contato com a EngeSEP."},
    teste_F : {value: true, msg: "E-mail não está cadastrado."}
}

test('teste autenticacao sem preencher e-mail', async ()=>{
    user = null
    password = '123456789'
    const data = await Conexao(user, password);
    expect(data).toStrictEqual(testes.teste_A)
})

test('teste autenticacao sem preencher a senha',async ()=>{
    user = 'milianojunior39@gmail.com'
    password = null
    const data = await Conexao(user, password);

    
    expect(data).toStrictEqual(testes.teste_B)
})

// test('teste autenticacao e-mail não cadastrado', async ()=>{
//     expect.assertions(1);
//     try{
//         user = 'milianojunior39@gmail.comm';
//         password = '123456789';
//         const data = await Conexao(user, password);
//         console.log(data)
//         // await expect(data).resolves.toStrictEqual(testes.teste_C);
//     }catch(e){
//         console.log(e)
//     }
    
// })

// test('teste autenticacao e-mail conta bloqueada após 5 tentativas', ()=>{
//     user = 'milianojunior39@gmail.comm'
//     password = '123456789'
//     expect(conexao(user, password), testes.teste_A)
// })

