/* Script do Jogo da Velha Mastertech  */
var jogadorX = prompt("Digite o nome do jogador X:"); //Variável que armazena o nome do jogador que irá ficar com X;
var jogadorO = prompt("Digite o nome do jogador o:"); //Variável que armazena o nome do jogador que irá ficar com O;
var jogadas = 0; //Váriavel que 'conta' as jogadas (que no codigo usamos para validar cada jogada (par para X e impar para O) )

function verificarGanhador(){ //Função
    //Variáveis que irão receber o valor das string's que estão em cada casa do jogo  (Se a casa não foi preenchida(clicada) ela vai estar com o valor ;nbsp se estiver preenchida vai estar com X ou O)
    var casa1 = document.getElementById('1').innerHTML;
    var casa2 = document.getElementById('2').innerHTML;
    var casa3 = document.getElementById('3').innerHTML;
    var casa4 = document.getElementById('4').innerHTML;
    var casa5 = document.getElementById('5').innerHTML;
    var casa6 = document.getElementById('6').innerHTML;
    var casa7 = document.getElementById('7').innerHTML;
    var casa8 = document.getElementById('8').innerHTML;
    var casa9 = document.getElementById('9').innerHTML;

    //Valida se há 3 casas iguais na horizontal ou vertical (se há algum ganhador)
    if((casa1 == casa2 && casa2 == casa3 && casa1 != '&nbsp;')
   ||(casa4 == casa5 && casa5 == casa6 && casa4 != '&nbsp;')
   ||(casa7 == casa8 && casa8 == casa9 && casa7 != '&nbsp;')
   ||(casa1 == casa4 && casa4 == casa7 && casa1 != '&nbsp;')
   ||(casa2 == casa5 && casa5 == casa8 && casa2 != '&nbsp;')
   ||(casa3 == casa6 && casa6 == casa9 && casa3 != '&nbsp;')
   ||(casa1 == casa5 && casa5 == casa9 && casa1 != '&nbsp;')
   ||(casa3 == casa5 && casa5 == casa7 && casa3 != '&nbsp;'))
   {
      //campoVencedor recebe o elemento <h3 id="vencedor"></h3> do html
      var campoVencedor = document.getElementById('vencedor');
        if(jogadas % 2 == 0){ //se a jogada for par
          campoVencedor.innerHTML = "O vencedor é " + jogadoX;
        } else {
            campoVencedor.innerHTML = "O vencedor é " + jogadorO;
          }

          var casas = document.getElementsByClassName('casa');
          for(var i = 0; i < casas.length; i++){
            casas[i].onclick = null; //Todas as casas recebem onclick=null para não ficar ativado mais os click e as casas não serem substituidas por outro jogador
            }
      } else {
          if(jogadas == 8){
            var campoVencedor = document.getElementById('vencedor');
            campoVencedor.innerHTML = 'Deu velha!'; // Escreve Deu velha no elemnto <h3 id="vencedor"></h3> do html
          }
      }
}

window.onload = function(){
  function jogar() {
      var colocar;

      if (jogadas % 2 == 0) { // se a jogada for par é vez do jogador com o X senão é a vez do jogador O
        colocar = "X";
      } else {
        colocar = "O";
      }
      this.innerHTML = colocar;
      this.onclick = null; //Deixa o onclick vazio para o campo que foi preenchido por X ou O (Para manter a casa que foi preenchido/não deixa colocar mais X/O na casa)
      verificarGanhador();//Chama a função verificarGanhador() - que verifica a cada jogada se há ganhador
      jogadas++; //Adiciona mais uma jogada (Vai passando a vez)
  }

    var casas = document.getElementsByClassName('casa'); //Recebe todas as casas do html
    for(var i = 0; i < casas.length; i++){//For que percore todo o vetor casas
      casas[i].onclick = jogar; //Adiciona um onclick=jogar() em cada casa do html; (Para quando clicar em cima da casa ela chamar a função jogar e por X ou O)
      }
}
