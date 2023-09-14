
const botãoAdicionar = document.querySelector('.adicionar-nota');
const modalAddNotas = document.querySelector('.modal-adionar-nota');
const notaEscrita = document.getElementById('nota-escrita');
const sairModal = document.getElementById('sair');
const salvarModal = document.getElementById('salvar');
const textoNota = document.querySelector('.texto-nova')

const modalAtualizarNota = document.querySelector('.modal-atualizar-nota')
const notaAtualizada = document.getElementById('nota-atualizada')
const btnAtualizar = document.getElementById('atualizar')

botãoAdicionar.addEventListener('click', () => {
    modalAddNotas.style.display = 'flex'
});

sairModal.addEventListener('click', () => {
    modalAddNotas.style.display = 'none'
    notaEscrita.value = ''
});

// Atualizar nota

function atualizarNota(e) {
    e.preventDeafult()
    textoNota.innerHTML = notaAtualizada.value
}