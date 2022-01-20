// select elements on the page - canvas, shake button 
const canvas =  document.querySelector("#etch-a-sketch");
// ctx is context
const ctx = canvas.getContext("2d");

const shakebutton =  document.querySelector(".shake");
// set up canvas for drawing 

const MOVE_AMOUNT = 50;
// MOVE AMOUNT WONT CHANGE HENCE THE UPPERCASE
// make a variable called height and width from the same properties on our canvas

const {width, height} = canvas;

// create a random x and y starting points on the canvas 
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);
ctx.lineJoin = "round";
ctx.lineCap = "round";


// set width to 10px you dont have to specify 10 px
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue},100%, 50%)`;


ctx.beginPath(); // start the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();
// write a draw function

//descrturing key 
function draw({ key } ){

    // increment the hue 
    hue = hue + 10;
    ctx.strokeStyle = `hsl(${Math.random() * 360},100%, 50%)`;
    console.log(key);


// start the path 
ctx.beginPath();
ctx.moveTo(x, y);

// move our x and y values depending on what the user did 
// think of a switch statement as a if statement but you have to have a default and a break after every case
switch (key) {
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    default:
      break;
  }
ctx.lineTo(x, y);
ctx.stroke();
}

// write a handler for the keys 
function handleKey(e){
    if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({key: e.key});
    
}
    }


// clear / shake function 

function clearCanvas(){
    canvas.classList.add("shake");
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener("animationend", function(){
        console.log("DOne the shake");
        canvas.classList.remove("shake");
    }, 
    { once: true}
    
    );
}

// listen for arrow keys 
window.addEventListener("keydown", handleKey);
shakebutton.addEventListener("click", clearCanvas);