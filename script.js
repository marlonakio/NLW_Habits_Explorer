const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup (form)  
const button = document.querySelector('header button')


//Evento de clique do mouse e de mudança da página
button.addEventListener('click', add)
form.addEventListener("change", save)

//adiciona o dia de hoje, verifica se o dia já existe
function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)
    if (dayExists) {
        alert("🔴 Dia já incluso! 🔴")
        return
    }
    alert("🟢 Dia adicionado com sucesso! 🟢")
    nlwSetup.addDay(today)
}

//quando clicar nos botões ele irá armazenar as mudanças na memória local do navegador
function save(){
    // console.log(nlwSetup.data)
    localStorage.setItem('NLWSetup@habits',JSON.stringify(nlwSetup.data))
}

//Puxa do navegador o dados armazenados e apresenta para o usuário
const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()