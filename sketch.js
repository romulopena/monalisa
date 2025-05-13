
let olhoX;
let olhoY;

function setup() {
  createCanvas(400, 380);
}

function draw() {
  background("red");
  fill("black");
  rect(50, 55, 300, 200, 20);
  fill("rgb(248,241,141)");
  circle(70, 150, 60);
  circle(330, 150, 60);
  fill("rgb(248,241,141)")
  rect(75, 70, 250);
  fill("rgb(248,241,141)");
  rect(165, 321, 70);
  fill("rgb(250,249,249)");
  circle(150, 150, 60);
  circle(250, 150, 60);
  //fill("black")
  line(150, 270, 250, 235);
  fill("#00BCD4")
  triangle(200, 180, 170, 220, 220, 220);

  // Remapeando as coordenadas do mouse
  olhoX = map(mouseX, 0, width, 130, 170);
  olhoY = map(mouseY, 0, height, 130, 170);

  // Desenhando as pupilas
  //fill("rgb(250,250,250)")
  circle(olhoX, olhoY, 10); // Pupila esquerda
  circle(olhoX + 100, olhoY, 10); // Pupila direita

  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}