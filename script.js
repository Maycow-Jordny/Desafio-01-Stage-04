

let numberOne = prompt("Digite o prineiro número")
let numberTwo = prompt("Digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

alert(`A soma dos dois números é : ${sum = numberOne + numberTwo} `)
alert(` A subtração dos dois números é : ${sub = numberOne - numberTwo}`)
alert(` A multiplicação dos dois números é : ${multi = numberOne * numberTwo}`)
alert(`A divisão dos dois números é : ${div = (numberOne / numberTwo).toFixed(2)}`)
alert(`O resto da divisão dos dois números é : ${restDiv = numberOne % numberTwo}`)

if (sum % 2 == 0) {
    alert(`O número ${sum} é par`)
} else {
    alert(`O número ${sum} é impar`)
}

if (numberOne == numberTwo) {
    alert(`Os números inserídos são iguais.`)
} else {
    alert(`Os números inserídos são diferentes.`)
}