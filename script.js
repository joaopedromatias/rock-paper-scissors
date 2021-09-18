
const userButtons = window.document.querySelectorAll("input[type=button]"); //seleciona os botões que os usuarios podem clicar 

const ours = [0,1,2]; //index dos botoes que os usuarios clicam 
const them = [3,4,5]; //index dos botoes que os usuarios nao clicam

for (let i in ours) { //para os valores de index dentro do que os usuarios clicam: 
    userButtons[i].addEventListener('mouseenter', () => { 
    userButtons[i].style.background = '#863A8D'; }) //muda a cor com a entrada do mouse no elemento

    userButtons[i].addEventListener('mouseout', () => { 
    userButtons[i].style.background = '#75147E';}) //volta para a cor anterior com a saida do mouse no elemento

    userButtons[i].addEventListener('click', () => { 

    let userChoicePromise = new Promise((resolve) => { //cria uma promise que retornará informacoes de acordo com a acao do usuario
    
    var textChoice = userButtons[i].value; //pega o texto do botao clicado pelo usuario

    if (textChoice == 'rock') {
        var userChoice = 1; //stands for rock
        var userImgParam = {source: './images/rock.png', alt: `${textChoice}`}; //objeto com os parametros
        resolve(userImgParam) //envia como resposta de sucesso da Promise o objeto, com a src e o alt da imagem

    } else if (textChoice == 'paper'){ 
        var userChoice = 2; //stands for paper 
        var userImgParam = {source: './images/paper.png', alt: `${textChoice}`}; //objeto com os parametros
        resolve(userImgParam) //envia como resposta de sucesso da Promise o objeto, com a src e o alt da imagem

    } else { 
        var userChoice = 3; //stands for scissors
        var userImgParam = {source: './images/scissors.png', alt: `${textChoice}`}; //objeto com os parametros
        resolve(userImgParam) //envia como resposta de sucesso da Promise o objeto, com a src e o alt da imagem
    }})

    const userImg = document.querySelector('img#user-img'); //seleciona a imagem referente a escolha do usuario

    userChoicePromise.then((param) => { //acao executada a partir da resposta da promise (async javascript)
    userImg.src = param.source;  //atribuicao do valor à src da imagem
    userImg.alt = param.alt;  //atribuicao do valor ao alt da imagem
    userImg.style.height = '150px'; 
    })});
    
    userButtons[i].addEventListener('click', () => { 
    
    let alienChoicePromise = new Promise((resolve) => { //criacao da promise para a escolha do alien
    
    var x = Math.random() //gera um numero aleatorio entre 0 e 1 

    if (x < 0.33) { 
        var alienChoice = 1;
        var alienImgParam = {source: './images/rock.png', alt: 'rock'};
        resolve(alienImgParam)

    } else if (x > 0.66) { 
        var alienChoice = 3;
        var alienImgParam = {source: './images/scissors.png', alt: 'scissors'};
        resolve(alienImgParam)

    } else { 
        var alienChoice = 2;
        var alienImgParam = {source: './images/paper.png', alt: 'paper'};
        resolve(alienImgParam)

    }})

    const alienImg = document.querySelector('img#alien-img')

    alienChoicePromise.then((param) => { 
        alienImg.src = param.source; 
        alienImg.alt = param.alt;
        alienImg.style.height = '150px';       
    })})};

const alienMsg = document.querySelector('span') //seleciona a mensagem de aviso 

for (let i in them) {  // como them tem 3 entradas, o let i no caso é 0, 1 e 2 
    let e = them[i]; // o "e" acessa os 3 valores do them (3,4,5) através de seus indices (0,1,2).
    userButtons[e].addEventListener('click', () => {  // A cada iteracao do loop de repeticao, um dos botoes que nao fazem parte da escolha do usuario recebem um event listener.
    alienMsg.style.opacity = '1'; //mostra a mensagem
    setTimeout(() => {alienMsg.style.opacity = '0'}, 4000); //retira a mensagem da tela após 4 segundos
})}
