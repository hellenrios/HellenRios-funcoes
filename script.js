//1 - crie uma função que exiba uma mensagem no console
function hello() {
    console.log("Olá!");
}
hello()


//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function name(myName) {
    console.log(`Olá, ${myName}`);
}
name("Hellen")

//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console

function data(personsName, personNumber, musicStyle) {
    console.log(`Olá, ${personsName}! Você digitou o número ${personNumber} e o estilo muscial ${musicStyle}. Correto?`);
}
data("Hellen", "24", "Pagode")


//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function preferences(movie, music) {
    console.log(`Você escolheu o filme ${movie} e a música ${music}. Essas são suas preferências?`);
}
preferences("Wall-e", "Same Ol` Mistakes")