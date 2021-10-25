var canvas1 = document.getElementById('myCanvas1'),
  ctx = canvas1.getContext('2d');

ctx.beginPath();



xaxis();
yaxis();


//y-axis
function yaxis(){
    ctx.moveTo( (canvas1.width/2),0);
    ctx.lineTo((canvas1.width/2), canvas1.height);

}
//x-axis
function xaxis(){
    ctx.moveTo( 0,(canvas1.height/2));
    ctx.lineTo(canvas1.width,(canvas1.height/2));
}

ctx.stroke();
//console.log(canvas1.height);
//console.log(canvas1.width);
