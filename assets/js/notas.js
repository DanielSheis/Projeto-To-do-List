
const notasLista = document.getElementById('conteiner-notas')

function notaAdd(e) {
    e.preventDefault();

    // Criação de nota
    let li = document.createElement('li');
    li.classList = 'nota';

    let check = document.createElement('input');
    check.type = 'checkbox';
    check.classList = 'checkbox';

    let textoNota = document.createElement('p')
    textoNota.innerText = notaEscrita.value
    textoNota.classList = 'texto-nova'

    let maisOpcao = document.createElement('button');
    maisOpcao.type = 'button';
    maisOpcao.classList = 'mais-funçoes';
    maisOpcao.id = 'mais-funçoes'

    let maisOpcaoImg = document.createElement('img')
    maisOpcaoImg.src = './assets/imgs/ellipsis-vertical.svg'
    maisOpcaoImg.classList = 'mais-funçoes-img'

    let funcaoConteiner = document.createElement('div')
    funcaoConteiner.classList = 'mais-funçoes-conteiner';

    let btnEditar = document.createElement('button')
    btnEditar.type = 'button';
    btnEditar.textContent = 'Editar'
    btnEditar.classList = 'editar'

    let btnApagar= document.createElement('button')
    btnApagar.type = 'button';
    btnApagar.textContent = 'Apagar'
    btnApagar.classList = 'apagar'


    li.appendChild(check)
    li.appendChild(textoNota)
    maisOpcao.appendChild(maisOpcaoImg)
    li.appendChild(maisOpcao)
    funcaoConteiner.appendChild(btnEditar)
    funcaoConteiner.appendChild(btnApagar)
    li.appendChild(funcaoConteiner)
    notasLista.appendChild(li)
    

    // Menu de opção para cada nota
    function chamarConteinerFuncao() {
        funcaoConteiner.style.display = 'flex';
        check.style.display = 'none'
        textoNota.style.display = 'none'
        console.log('Funfando')
    };
    
    maisOpcao.addEventListener('click', chamarConteinerFuncao);

    document.addEventListener('click', (e) => {
        if(e.target !== li && e.target !== funcaoConteiner && e.target !== maisOpcao && e.target !== maisOpcaoImg) {
            funcaoConteiner.style.display = '';
            check.style.display = ''
            textoNota.style.display = ''
        }
    })
    // editar
    btnEditar.addEventListener('click', () => {
        alert('❗ Essa funcionalidade ainda não foi adicionada')
    })

    // Apagar nota
    btnApagar.addEventListener('click', ()=> {
        li.remove()
    })


    // Fechando modal e limpando ele
    notaEscrita.value = '';
    modalAddNotas.style.display = 'none'
};


salvarModal.addEventListener('click', notaAdd)