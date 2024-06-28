//Usando a função MAP com radianos.
//Usando a função map para mapear o angulo de rotação em radianos
//Implementando a velocidade e a aceleração angular.
//A função map usa cinco parâmetro 
//Valor inicial(posição atual do mouse) e um intervalo inicial (posição 0 e widht da tela e um intervalo final (medido em radianos).

let angulo = 0;
let anguloV = 0;
let anguloA = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(RADIANS);
}

function draw() {
  anguloA = map(mouseX,0,width,-0.01,0.01);
  background(46,83,161);
  noStroke();
  fill(240,99,164);
  rectMode(CENTER);
  translate(220,200);
  rotate(angulo);
  rect(0,0,256,32);
  
  angulo += anguloV;
  anguloV += anguloA;
}