import * as React from 'react';
import axios from 'axios';
import {decode, encode} from 'base-64';
import { Debug } from "../testes/debug";
import { useSelector, useDispatch } from 'react-redux'
import {userUpdate} from "../redux";

if (!global.btoa) {
    global.btoa = encode;
}

if (!global.atob) {
    global.atob = decode;
}

var errors = new Map();
errors.set(404, "E-mail não está cadastrado.");
errors.set(401, "A senha não confere, ápos 5 tentativas a conta é bloqueada.");
errors.set(402, "A conta foi desativada, entre em contato com a EngeSEP.");
errors.set(1,"Digite um e-mail válido")
errors.set(2,"Digite uma senha")
errors.set(3,"Erro de conexão")

function isEmail(email) {
  // Verifica se o tipo da variável é string
  if (typeof email !== 'string') {
    return false;
  }

  // Verifica se está vazia ou nula
  if (email === null || email.trim() === '') {
    return false;
  }
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function Conexao(navigation,setLoading, setLogin, setMsg, user, password){
  Debug(`user: ${user} password: ${password}`)
  if (isEmail(user) == false){
    setMsg(errors.get(1))
    setLogin(true)
    setLoading(false)
    return false
  }
  if (password == null){
    setMsg(errors.get(2))
    setLogin(true)
    setLoading(false)
    return false
  }
  let url = "https://fastapi-production-8d7e.up.railway.app/login/";

  const instance = axios.create({
    headers: {'Content-type': 'application/json'}
  });
  let data = {
    email: user,
    password: password
  };

  instance.post(url, data)
      .then(response => {
        setLoading(false);

        if (response.data.status != 'Usuário autenticado com sucesso.') {
          Debug(`Erro: ${response.data}`)
          setLogin(true);
          setMsg(response.data.status);
        }else {
          Debug(`Autenticado com sucesso: ${response.data}`)
          navigation.navigate('Home', {data: response.data.token});
        }
        return true;
      })
      .catch(error => {

        Debug('Pagina - Erro de conexão')
        for (let [key, value] of Object.entries(error)) {
          Debug(`${key}: ${value}`);
        }
        setLoading(false);

        let errorMessage = errors.get(3);  // Valor padrão

        if (error.response) {
          errorMessage = errors.get(error.response.status);
        }

        setMsg(errorMessage);
        setLogin(true);
        return false;
      });
}

function AuthLogin(navigation, setLoading, setLogin, setMsg, user, password) {
  user = "fae@gmail.com"
  password = "123456"
  return Conexao(navigation,setLoading, setLogin, setMsg, user, password)
};

export { AuthLogin, Conexao }


