var canvas = document.getElementById('myCanvas'),
  c = canvas.getContext('2d'),
  n = 100, // no. of line segments

  // define the math window
  xMin = -10,
  xMax = 10,
  yMin = -10,
  yMax = 10,
  //mathX = perX * (xMax - xMin) + xMin;
  //cdnjs manth.js 
  math = mathjs(),

  expr = '',
  scope = {x: 0,y:0},//object for x and y
  tree = math.parse(expr, scope);



//drawCurve();
// initTextField();

initTextField('#inputField');
initTextField('#inputField1');
initTextField('#inputField2');
initTextField('#inputField3');


openNav();

//console.log("Hello");
//=======functions=========
function drawCurve() {
  var i, x, y, 
    perX, perY, // vary between 0 and 1
    mathX, mathY; // our math coordinates

    //context.clearRect(x,y,width,height);

  // clear canvas before each redraw
  //c.clearRect(0, 0, canvas.width, canvas.height);

  // draw border
  c.strokeRect(0, 0, canvas.width, canvas.height);

  // document.getElementById("inputField1").strokeColor = "blue";
  // draw curve
  c.beginPath();
  for (i = 0; i < n; i += 1) {
    perX = i / (n -1);
    mathX = perX * (xMax - xMin) + xMin;

    //c.clearRect(0, 0, canvas.width, canvas.height);

    mathY = evaluateMathExpr(mathX);

    //console.log(perX);
    perY = (mathY - yMin) / (yMax - yMin);

    console.log(yMax);

    // flip y coordinates
    perY = 1 - perY;
    //console.log(perY);

    x = perX * canvas.width;
    y = perY * canvas.height;
    c.lineTo(x, y);
    // console.log(x);
    // console.log("==================");
    //console.log(y);

  }
  c.stroke();
}



function evaluateMathExpr(mathX) {
  scope.x = mathX; //#change object
  console.log(tree.eval());
  return tree.eval();

}

//JQuery user input===============

function initTextField(InputEquation) {

  var input = $(InputEquation);

  

  // set initial text value programmatically using jQuery
  //input.val(expr);

  // changes using jQuery
  input.keyup(function(event) {
    expr = input.val();

    tree = math.parse(expr, scope);

    //press enter for input
    $(InputEquation).on('keyup', function (event) {
      if (event.keyCode === 13) {

        drawCurve();
      }
   });
    
  });

  
}


function button(){
  //canvas clear befor re dreaw
    onclick=c.clearRect(0, 0, canvas.width, canvas.height);

}


//input collapse bar
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

