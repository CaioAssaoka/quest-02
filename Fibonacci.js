function fibonacci (n) {
    const sequencia = [0 , 1]
    for (let i = 2; i < n; i++) {
        sequencia[i] = sequencia [i - 1 ] + sequencia [i - 2 ]
    }
    return sequencia
}

const array = (fibonacci(20))
console.log (array)

// Digite um número de 0 a 5000 igualado a element na constante found. 


const found = array.find(element => element == 8)
console.log (found)

if (typeof(found) === "number") {
    return console.log ("Esse número faz parte da sequência")
} else { 
    return console.log ("Esse número não faz parte da sequência")
}

