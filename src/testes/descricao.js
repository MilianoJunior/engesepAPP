/*
Documentação do aplicativo

Estrutura de pastas

    App.js
    - src
        composite.js
        - autenticacao
            login.js
            recuperar_senha.js
        - componentes
            box_info.js
            chart.js
            data_picker.js
            gauge.js
            lista.js
            menu_bottom.js
            menu_top.js
            mini_gauge.js
            msg_collapse.js
         - context
            UsersContext.js
         - funcoes
            autentic.js
            context.js
            styles.js
            variaveis.js
          - navegacao
            graficos.js
            historico.js
            home.js
            perfil.js
            relatorios.js
          - redux
            index.js
            store.js
        - testes
            autenticacao.test.js
            descricao.js


O aplicativo foi desenvolvido utilizando o framework React Native, com o gerenciador de pacotes NPM, e o ambiente de desenvolvimento Expo.

Para design foi utilizado o Native Base, que é um conjunto de componentes de interface de usuário de código aberto para plataformas móveis.

Sistema de autenticação
    1. O usuário digita o e-mail e senha.
    2. É realizado a validação dos campos, caso estejam vazios é exibido uma mensagem de erro.
    3. É realizado a conexão com o servidor, caso não seja possível é exibido uma mensagem de erro.
    4. É realizado a autenticação do usuário, caso não seja possível é exibido uma mensagem de erro.
    5. É realizado o redirecionamento para a tela Home.
    6. É realizado o armazenamento do token de autenticação.
    7. É realizado o preenchimento dos dados do usuário e dos dados do sistema, as variaveis de preenchimento estão pré-configuradas com valores default
     caso não seja possível o preenchimento é exibido valores default. Esses dados são armazenados no contexto do Redux.

Testando o sistema de autenticação
    1. O usuário digita o e-mail e senha.
        A) Caso o e-mail esteja vazio é exibido uma mensagem de erro. - OK
        B) Caso a senha esteja vazia é exibido uma mensagem de erro. - OK


Sistema de recuperação de senha
    1. O usuário digita o e-mail.
    2. É realizado a validação do campo, caso estejam vazios é exibido uma mensagem de erro.
    3. É realizado a conexão com o servidor, caso não seja possível é exibido uma mensagem de erro.
    4. É realizado a verificação do e-mail, caso não seja possível é exibido uma mensagem de erro.
    5. É realizado o envio de uma nova senha para o e-mail do usuário, caso não seja possível é exibido uma mensagem de erro.

Sistema de navegação
    1. O usuário seleciona uma das opções do menu inferior.
    2. É realizado o redirecionamento para a tela selecionada.
    3. É realizado o preenchimento dos dados da tela selecionada, as variaveis de preenchimento estão pré-configuradas com valores default
        caso não seja possível o preenchimento é exibido valores default. Esses dados são armazenados no contexto do Redux.
    4. É realizado o armazenamento do token de autenticação.




Descrição dos arquivos

    App.js:
        Funções: Arquivo principal do aplicativo, onde é passado o contexto do Redux e o SafeAreaView do Native Base.
        Componentes: SafeAreaView, StatusBar, SplashScreen, Provider, Composite.

    composite.js:
        Funções: Arquivo que contém a navegação do aplicativo, onde é definido o tema do Native Base e as telas do aplicativo.
        Componentes: NativeBaseProvider, NavigationContainer, createNativeStackNavigator, Login, RecuperarSenha, Home, Graficos, Relatorios, Historico, Perfil.

    login.js:
        Funções: Arquivo que contém os componentes iniciais para autenticação do usuário.
        Componentes: Imagem - Logo da empresa,
                     MsgCollapse - Mensagens de erros de autenticação,
                     Input - Input login e-mail,
                     Input - Input senha,
                     Checkbox - Lembrar Senha,
                     Button - Enviar autenticação,
                     Divider - Serparar componentes,
                     Link - Recuperar Senha.
        Callback: funcoes/autentic.js - Função que faz a autenticação do usuário.
                  funcoes/styles.js - Função que contém as configurações de design do app.

    recuperar_senha.js:
        Funções: Arquivo que contém os componentes para recuperação de senha.
        Componentes: Imagem - Logo da empresa,
                     MsgCollapse - Mensagens de erros de autenticação - Não implementado,
                     Input - Input login e-mail,
                     Button - Enviar autenticação,
                     Divider - Serparar componentes,
                     Link - Retornar a pagina de login.
        Callback: funcoes/autentic.js - Função que verifica o e-mail e envia uma nova senha - Não implementado.

layout - HOME
    tela_principal = {
            x: 0,
            y: 0,
            width: 368,
            height: 867,
    }
    guia = {
        x: 0,
        y: 0,
        width: 368,
        height: 38,
    }
    toolbar_top_fixo = {
        x: 0,
        y: 38,
        width: 368,
        height: 30,
    }
    menu_top = {
        x: 0,
        y: 68,
        width: 368,
        height: 58,
    }
    body = {
        x: 0,
        y: 126,
        width: 368,
        height: 693,
    }
    toolbar_bottom_fixo = {
        x: 0,
        y: 819,
        width: 368,
        height: 48,
    }

    # o body é dividido em 3 partes: descrição, calculadora, card
    descricao = {
        x: 0,
        y: 0,
        width: Hug (288px),
        height: Hug (128px),
        padding: 10px,
     }
     calculadora = {
        x: 0,
        y: 128,
        width: Hug (288px),
        height: Hug (150px),
        padding: 10px,
        gap: 5px
        }
    card = {
        x: 0,
        y: 278,
        width: Hug (368px),
        height: Fixed (415px),
        padding: 15px, 0px, 0px, 0px,
        border-radius: 35px, 35px, 0px, 0px,
        gap: 10px,
        }
    # o card é dividido em 3 partes: gauge, icon, menu button.
    gauge = {
        x: 0,
        y: 15,
        width: Fixed (280px),
        height: Fixed (280px),
        padding: 0px, 0px, 0px, 0px,
        }
    icon = {
        x: 0,
        y: 305,
        width: Fixed (150px),
        height: Fixed (35px),
        border-radius: 20px, 20px, 20px, 20px,
        }

    menu_button = {
        x: 0,
        y: 350,
        width: Fixed (368px),
        height: Fixed (65px),
        border-radius: 0px, 0px, 35px, 35px,
        }

# considerando as medidas em pixels, a tela principal tem 368px de largura e 867px de altura.
pode me ajudar a fazer o layout?

tamanho_principal = 867 - 38 - 30 - 48 = 751
percentual dos componentes:
       menu_top = 58/751 = 7.7%
       body = 693/751 = 92.3%

tamanho_body = 693
percentual dos componentes:
    descricao = 128/693 = 18.4%
    calculadora = 150/693 = 21.6%
    card = 415/693 = 59.8%

tamanho_card = 415
percentual dos componentes:
    gauge = 280/415 = 67.4%
    icon = 35/415 = 8.4%
    menu_button = 65/415 = 15.7%

const percentual = {
    menu_top: "7.7%",
    body: "92.3%",
    descricao: "18.4%",
    calculadora: "21.6%",
    card: "59.8%",
    gauge: "67.4%",
    icon: "8.4%",
    menu_button: "15.7%",
}

 */