var a = window.document.getElementById('area') // mexer com a div 'area'

// 'Escutador' de eventos
a.addEventListener("click", clicar) // É uma função, nativa do JS (evento de clique)
a.addEventListener("mouseenter", entrar) // evento de passar o mouse por cima
a.addEventListener("mouseout", sair) // evento de tirar o mouse de cima

// Quando eu clico muda o texto
function clicar() {
    a.innerHTML = "Clicou" // evento
    a.style.background = "red" // evento: quando clicar muda a cor de fundo para vermelho
}

// Quando passo o mouse por cima altera cor e palavra
function entrar() {
    a.innerHTML = "Entrou"
    a.style.background = "yellow"
    a.style.color = "black"
    a.style.fontWeight = "bold"
}

// Quando tiro o mouse de cima altera cor e palavra
function sair() {
    a.innerHTML = "Saiu"
    a.style.background = "darkcyan"
    a.style.color = "white"
    a.style.fontWeight = "bold"
}