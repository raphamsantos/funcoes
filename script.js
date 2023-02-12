//1 - crie uma função que exiba uma mensagem no console
 function exibir(){
    console.log (" BEM VINDO!");
}

exibir();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
let nome= 'Raphael';

function meuName(name){
    console.log(name);
    return name
}

let  res = meuName(`Meu nome é: ${nome}`);

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
let =' Paulo';
let idade = 18;
let musica = 'Funk';

function perfil(name, idade, musica){
    console.log('Nome: ' + name);
    console.log('Idade: ' + idade + ' anos');
    console.log('Gosto Musical: ' + musica)
}
perfil(nome, idade, musica);
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

let filme =' Avatar'
let musicaFilme = function(musica, filme){
        console.log(musica, filme);
}

musicaFilme(musica, filme );

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
let numero = 2;

function triplo(number){
    console.log(`O triplo de ${numero} é:  ${number * 3} `);
}

triplo(numero);

//6 - crie uma função que  verifique se uma  variável é true ou false

let verificao = false;

function verificar(){
    if(verificao === true){
        console.log('true');
    }else{
        console.log('false');
    }
}

verificar()