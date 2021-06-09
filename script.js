canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(100,100,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").value;
    console.log(color);
    
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;

console.log("x= "+mouse_x+",y= "+mouse_y);

circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
color=document.getElementById("color").value;
console.log(color);

    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.fillArc(mouse_x,mouse_y,50,0,2*Math.PI);
ctx.fillStyle=color;
ctx.stroke();
}

function clear_canvas(){
    ctx.clearArc(0,0, canvas.width, canvas.height);
}