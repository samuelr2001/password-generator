
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiuscula = () => String.fromCharCode(rand(65, 91))
const geraNumber = () => String.fromCharCode(rand(48, 58))
const geraMinuscula = () => String.fromCharCode(rand(97, 123))
const simbols = '#%$@*&!_'
const geraSimbolo = () => simbols[rand(0, simbols.length)]


export default function getSenha(qtd, maiusculas, minusculas, numeros, simbolos) {
    const senhaArray = []
    qtd = Number(qtd)
    for (let i = 0; i < qtd; i++) {
        maiusculas && senhaArray.push(geraMaiuscula())
        minusculas && senhaArray.push(geraMinuscula())
        numeros && senhaArray.push(geraNumber())
        simbolos && senhaArray.push(geraSimbolo())
    }

    return senhaArray.join('').slice(0, qtd)


}


