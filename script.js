function aplicar() {
    let ini =document.getElementById("txti")
    let fin = document.getElementById("txtf")
    let passo = document.getElementById("txtp")
    let res = document.getElementById("res")

    if (ini.value.length == 0 || fin.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = "Contando : <br>"
        let i = Number(ini.value)
        let f = Number(fin.value)
        let p = Number(passo.value)

        if ( i < f ) { 
         // Contagem crescente   
        for( let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} , `
        }

        // Contagem regressiva

        } else {
            for ( let c = i; c > f; c -= p) {
                res.innerHTML += ` ${c} , `
        }

    }
    res.innerHTML += ` \u{1F3C1}`
    }

}