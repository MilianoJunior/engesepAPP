__DEV__ = true
contComponentes = 0
function Debug(msg){
    if (__DEV__){
        // verificando se msg é um objeto
        // if (typeof msg === "object"){
        //     // percorrendo o objeto
        //     for (let key in msg) {
        //         console.log("--------------------------------------------------")
        //         console.log("Debug: " + key )
        //         console.log("--------------------------------------------------")
        //     }
        // }
        //Verificando se a variável msg contém a palavra "Pagina"
        if (msg.includes("Pagina")){
            if (msg.includes("componente")) {
                contComponentes += 1
                console.log("\n")
                console.log("--------------------------------------------------")
                console.log(' '.repeat(10),contComponentes, msg)
                console.log("--------------------------------------------------")
            }else {
                console.log("\n")
                console.log("--------------------------------------------------")
                console.log('1- ',msg)
                console.log("--------------------------------------------------")
            }
        }else{
            console.log(msg)
        }
    }
}

export { Debug }