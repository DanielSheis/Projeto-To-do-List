# 📝Projeto To-do List

A idea desse projeto é colocar em praticas os meus conhecimentos em **`HTML`**, **`CSS`** e principalmente **`JavaScript`**. Segue abaixo como eu fiz esse projeto ⬇:
>Essa documentação serve principalmente para eu reler no futuro e enteder 
<br/>

## </> HTML

Nessa parte foi a mais facíl e tranquila de fazer, criei um `<header>` onde abriga a imagem que vem antes do título e um titulo em `<h1>` e somente isso mesmo.

```HTML
<header class="cabecalho">
    <img src="./assets/imgs/checkmark-outline.svg" class="visto"></img>
    <h1>To-Do List</h1>
</header>
```

<br/>

Logo depois do `<header>` tenho a `<main>` onde abriga um formulario onde tem um `<input>` para receber o valor e outro que tenha a função de enviar o valor. e tambem na propria main tenho uma `<div>` que vai ser receber as notas gerada dinamicamente pelo **`JavaScript`**.

```HTML
<main>
    <form action="" class="add_nota">
        <input type="text" id="anotar">
        <input type="submit" id="salvar" value=" ">
    </form>
    <div id="notas"></div>
</main>
```

<br/>

## 🖼 CSS

Essa parte eu vou falar mais sobre alguns *`propriedades do CSS`* que achei util e aqueles que acabei descobrindo:
<br/>

- **filter: drop-shadow()** Esse filtro permite poder colocar uma sombra no elemento em si e não na box dela.
- **word-break:** Ele permite eu configurar como vai ser a quebra de palavra gerado nas minhas notas
<br/>

Esse são as novas propriedades que descobri, agora falando de algumas que eu já conhecia mas descobri funcionalidades a mais foi usar o `vw` e `vh` para redimensionar o meu formulario e as notas de acordo com o tamanho da tela.
<br/>

## 💻 JavaScript

De todo esse projeto oque mais me agarrou e tambem oque mais aprendi foi essa parte, então deixa eu começar. A primeira coisa que fiz foi capturar o `DOM` dos meus input para anotar e enviar, tambem capturei o elemento pai onde vai ficar as notas gerada e tambem o formulario para ele resetar sempre que salvar uma nota.

```JS
var anotar = document.getElementById('anotar');
var salvar = document.getElementById('salvar');
var notas = document.getElementById('notas');
var formulario = document.querySelector('.add_nota');
```

<br/>

Logo após isso eu crie duas função uma chamada `verificarAnotação` e a outra `salvarNota`.
### Função verificarAnotação

Essa função ela verifica a anotação e verifica se ela está vazia e tambem é aqui que aprendo o método `trim()`, resumindo ele retirar os espaços da direita e esquerda do valor. Então usando isso eu criei essa estrutura condicional:

```JS
if(anotar.value.trim() != 0){}
```
Com isso agora ele consegue identificar valores em branco.
<br/>

Logo depois disso eu usei o método **`createElement()`** para criar um `<article>` para ser a base da nota, um `<input>` com o type checkbox, um `<p>` para o valor escrito, e um `<button>` para servir como o botão de deletar

```JS
let notaNova = document.createElement('article');

    let check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'checked';

    let textoConteudo = document.createElement('p');
    textoConteudo.innerText = anotar.value;

    let deletar = document.createElement('button');
    deletar.className = 'deletar';
    deletar.innerText = 'X';
```

e então eu coloquei o `<input>`, tambem o `<p>` e por ultimo `<button>` dentro do `<article>` usando o método **`appendChild()`** e depois disso tudo coloco o `<article>` dentro do elemento pai capturado usando o mesmo método

```JS
notaNova.appendChild(check)
notaNova.appendChild(textoConteudo)
notaNova.appendChild(deletar)
notas.appendChild(notaNova)
```

<br/>

E ainda dentro dessa função eu coloco um `deletar.addEventListener('click')` com um arrow function com o método `remove()` para excluir a nota, esse método tambem foi outra coisa que aprendi

```JS
deletar.addEventListener('click', () => {
    notaNova.remove();
});
```

### Função salvarNota
Nela tem poucas coisas mais uma delas é o método `preventDefault()` para o formulario não ser enviado, e chamo a função `verificarAnotação` e termino com o método `reset()` para resetar o formulario.

```JS
function salvarNota(e) {
    e.preventDefault();
    verificarAnotação();
    formulario.reset()
};
```
<br/>

E para encerrar eu uso novamento o método addEventListener para chamar a função `salvarNota`

```JS
salvar.addEventListener('click', salvarNota);
```