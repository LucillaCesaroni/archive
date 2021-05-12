//   __   __ _  ____  ____  ____   __  
//  / _\ (  ( \(    \(  _ \(  __) / _\
// /    \/    / ) D ( )   / ) _) /    \
// \_/\_/\_)__)(____/(__\_)(____)\_/\_/
//  

// 10PRINT + GUI
// Variazione 1 + GUI
// Andrea Castellucci

let x = 0;
let y = 0;
var y1 = 10;
let incrementoColore = 60; // incrementa  il colore alla fine di ogni riga
let modulo = 40;

// PARAMETRI GUI
let parametri = {
  variazioneNoise: 0.005,
  strokeWeight: 2,
  strokeColor: 255,
};

// FUNZIONE GUI
window.onload = function() {
  var gui = new dat.GUI();
  
  gui.add(parametri, 'variazioneNoise', 0, 0.1); 
  gui.add(parametri, 'strokeWeight', 0, 10); 
  gui.add(parametri, 'strokeColor', 0, 255);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  translate(x,y);
  strokeWeight(parametri.strokeWeight);
  fill(incrementoColore, 50);
  
  beginShape();
  let variazione = parametri.variazioneNoise;
  
  // definizione primo vertice della Shape
  noStroke();
  vertex(0,height);

  
  // generazione vertici della Shape
  // disegno punti che formano la curva bianca
  for(var i=0; i<=modulo; i++){
    noStroke();
    vertex(i,map(noise(y1), 0,1, 0,modulo));
    stroke(parametri.strokeColor);
    point(i,map(noise(y1), 0,1, 0,modulo));
    y1+=variazione;
  }
  
  // definizione ultimo vertice della Shape
  noStroke();
  vertex(modulo,height);

  endShape();
  
  if(x<width){
    x+=modulo;
  } else{
    incrementoColore += 10;
    x=0;
    y+=modulo;
  }
}
