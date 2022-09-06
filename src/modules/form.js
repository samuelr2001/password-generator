import getSenha from './geradores'

const display = document.querySelector('.senha-gerada')
const qtd = document.querySelector('.qtd-c')
const chkMaiusculas = document.querySelector('.checked-maiusculas')
const chkMinusculas = document.querySelector('.checked-minusculas')
const chkNumeros = document.querySelector('.checked-numeros')
const chksSimbols = document.querySelector('.checked-simbolos')
const gerarsenha = document.querySelector('.gerar')

export default () => {
    gerarsenha.addEventListener('click', () => {
        display.innerHTML = generate()
    })
}

function generate() {
    const senha = getSenha(
        qtd.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chksSimbols.checked
    )
    return senha
}