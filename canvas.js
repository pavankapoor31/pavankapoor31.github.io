const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const MAXRADIUS = 50;
const distanceFromMouse = 40;
let numOfCircles = 1000;
var c = canvas.getContext('2d'); //context

// Circle class to create circles
class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minradius = radius;
    this.colors = [
      '#BD2A2E',
      '#3B3936',
      '#330000',
      '#1a0000',
      // '#B2BEBF',
      '#889C9B',
      '#486966',
      '#520120',
      '#08403E',
    ];
    this.randomColor =
      this.colors[Math.floor(Math.random() * this.colors.length - 1)];
    // Function to Print the circle on screen
    this.draw = function () {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.randomColor;
      c.fill();

    };

    // Update circle when it touches boundary or mouse
    this.update = () => {
      if (this.y >= window.innerHeight - this.radius * 2)
        this.dy = -generateRandomNumber(2);
      if (this.y <= this.radius) this.dy = generateRandomNumber(2);
      if (this.x >= window.innerWidth - this.radius * 2)
        this.dx = -generateRandomNumber(2);
      if (this.x <= this.radius) this.dx = generateRandomNumber(2);
      this.x += this.dx;
      this.y += this.dy;

      //   Increasing circle radius when its near mouse
      if (
        mouse.x - this.x < distanceFromMouse &&
        mouse.x - this.x > -distanceFromMouse &&
        mouse.y - this.y < distanceFromMouse &&
        mouse.y - this.y > -distanceFromMouse
      ) {
        if (this.radius <= MAXRADIUS) this.radius += 2;
      } else if (this.radius > this.minradius && this.radius > 2)
        this.radius -= 1;
      this.draw();  
    };
  }
}

// returns a random number
function generateRandomNumber(max) {
  if (!max) return Math.random();
  return Math.random() * max;
}

// Creating an array of circles objects
let circleArray = [];
let numOfBalls = 800;
if (window.innerWidth < 800) numOfCircles = window.innerWidth;
for (var i = 0; i < numOfCircles; i++) {
  let radius = generateRandomNumber(9);
  let x = generateRandomNumber(window.innerWidth) - 2 * radius + radius;
  let y = generateRandomNumber(window.innerHeight);
  let dy = generateRandomNumber(4) - 0.5;
  let dx = generateRandomNumber(4) - 0.5;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function init() {
  circleArray = [];
  for (var i = 0; i < numOfCircles; i++) {
    let radius = generateRandomNumber(9);
    let x = generateRandomNumber(window.innerWidth) - 2 * radius + radius;
    let y = generateRandomNumber(window.innerHeight);
    let dy = generateRandomNumber() - 0.5;
    let dx = generateRandomNumber() - 0.5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  c.beginPath();
  //   Print all circles
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

// Mouse Coordinates
var mouse = {
  x: undefined,
  y: undefined,
};
// Event listener for when mouse is moved around the page
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});
window.addEventListener('resize', (e) => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  if (window.innerWidth < 800) {
    numOfCircles = window.innerWidth;

  }
  init();
});
animate();
init();
