var box1;

function setup() {
  createCanvas(600, 400);
  box1 = new Box();
  box1.widthBox(400);
}

function draw() {
  background(220);

  box1.show();
}

