//Exemplo da função pra criar um cronômetro.

let objeto;
let jogador;
let raio = 30;
let timer = 5;
let pontos = 0;

function setup() {
  createCanvas(400, 400);
  objeto = createVector(random(0,width),random(0,height));
}

function draw() {
  timer -=1/60;
  jogador = createVector(mouseX,mouseY);
  background(220);
  
  //----------Verificando o Tempo-----
  if(timer <= 0){
    textSize(36);
    text("GAMER OVER",85,200);
    noLoop();
  }
  
  circle(objeto.x,objeto.y,raio);
  //----Monitorando tempo
  let comprimento = map(timer,0,5,0,200);
  rect(20,20,18,comprimento);
  
  //------Exibindo pontos---
  textSize(24);
  text(pontos,100,40);
}

//------Implementando o CLICK
function mousePressed(){
  let dis  = p5.Vector.dist(jogador,objeto);
  //
  if (dis < raio){
    objeto = createVector(random(width),random(height));
    timer += 0.5;
    pontos += 1;
  }
}


  //Criar o objeto CLICK---> ok
  //Criar o Vetor CLICK ---> ok
  //Mover o objeto quando clicando
  //Criar o timer usando a função MAP---> ok
  //Criar pontos do Jogo
