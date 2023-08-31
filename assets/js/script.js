var anotar = document.getElementById('anotar');
var salvar = document.getElementById('salvar');
var notas = document.getElementById('notas');
var formulario = document.querySelector('.add_nota');



function verificarAnotação (){
    if(anotar.value.trim() != 0){
        let notaNova = document.createElement('article');

        let check = document.createElement('input');
        check.type = 'checkbox';
        check.className = 'checked';

        let textoConteudo = document.createElement('p');
        textoConteudo.innerText = anotar.value;

        let deletar = document.createElement('button');
        deletar.className = 'deletar';
        deletar.innerText = 'X';


        notaNova.appendChild(check)
        notaNova.appendChild(textoConteudo)
        notaNova.appendChild(deletar)
        notas.appendChild(notaNova)

        // Remover nota
        deletar.addEventListener('click', () => {
            notaNova.remove();
        });
    }
}

function salvarNota(e) {
    e.preventDefault();
    verificarAnotação();
    formulario.reset()
};


salvar.addEventListener('click', salvarNota);

