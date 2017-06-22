var jogadorX = prompt("Digite o nome do jogador X:");
var jogadorO = prompt("Digite o nome do jogador o:");
var jogadas = 0;

function verificarGanhador(){
    var casa1 = document.getElementById('1').innerHTML;
    var casa2 = document.getElementById('2').innerHTML;
    var casa3 = document.getElementById('3').innerHTML;
    var casa4 = document.getElementById('4').innerHTML;
    var casa5 = document.getElementById('5').innerHTML;
    var casa6 = document.getElementById('6').innerHTML;
    var casa7 = document.getElementById('7').innerHTML;
    var casa8 = document.getElementById('8').innerHTML;
    var casa9 = document.getElementById('9').innerHTML;

    if((casa1 == casa2 && casa2 == casa3 && casa1 != '&nbsp;')
   ||(casa4 == casa5 && casa5 == casa6 && casa4 != '&nbsp;')
   ||(casa7 == casa8 && casa8 == casa9 && casa7 != '&nbsp;')
   ||(casa1 == casa4 && casa4 == casa7 && casa1 != '&nbsp;')
   ||(casa2 == casa5 && casa5 == casa8 && casa2 != '&nbsp;')
   ||(casa3 == casa6 && casa6 == casa9 && casa3 != '&nbsp;')
   ||(casa1 == casa5 && casa5 == casa9 && casa1 != '&nbsp;')
   ||(casa3 == casa5 && casa5 == casa7 && casa3 != '&nbsp;'))
   {
      var campoVencedor = document.getElementById('vencedor');
        if(jogadas % 2 == 0){
          campoVencedor.innerHTML = "O vencedor é " + jogadoX;
        } else {
            campoVencedor.innerHTML = "O vencedor é " + jogadorO;
          }

          var casas = document.getElementsByClassName('casa');
          for(var i = 0; i < casas.length; i++){
            casas[i].onclick = null;
            }
      } else {
          if(jogadas == 8){
            var campoVencedor = document.getElementById('vencedor');
            campoVencedor.innerHTML = 'Deu velha!';
          }
      }
}

window.onload = function(){
  function jogar() {
      var colocar;

      if (jogadas % 2 == 0) {
        colocar = "X";
      } else {
        colocar = "O";
      }
      this.innerHTML = colocar;
      this.onclick = null;
      verificarGanhador();
      jogadas++;
  }

    var casas = document.getElementsByClassName('casa');
    for(var i = 0; i < casas.length; i++){
      casas[i].onclick = jogar;
      }
}
