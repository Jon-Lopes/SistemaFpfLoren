//definido os botoes
var cadastrar1 = document.querySelector('#cadastrar1');
var editar1 = document.querySelector('#editar1');
var excluir1 = document.querySelector('#excluir1');
var simular1 = document.querySelector('#simular1');

var enviar1 = document.querySelector('#enviar1');
var simular2 = document.querySelector('#simular2');


//1º cenario, preenche formulario, nomeProj ainda nao existe no BD
function registry() {
    console.log('esta funcionando');
}

cadastrar1.addEventListener("click", function () { registry() }, 1000);
editar1.onclick = function () { registry() };
//2º cenario,
// function eita() {
//     var teste;
//     var r = confirm("Voce quer deletar?");
//     if (r == true) {
//         teste = "ok";
//     } else {
//         teste = "nao";
//     }
//     console.log(teste);
// };
// eita();