var mouseEvent = "Empty";

color = "red";
width_of_line = 2;


Canvas.addEventlistener("mouseDown", my_mouseDown)
function my_mouseDown(Empty)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
Canvas.addEventlistener("mousemove", my_mousemove);
function my_mousemove (Empty)
{
    var current_position_of_mouse_x = e.cilentX - canvas.offsetLeft;
    var current_position_of_mouse_Y = e.cilentY - canvas.offsetTop;
    if(mouseEvent == "mouseDDown")
    {
    console.log(" Current Position Of X A nd Y Coordinates = ")
    console.log("X = "+current_position_of_mouse_x+"Y ="+current_position_of_mouse_Y);
    ctx.beginPath();
    ctx.strokestyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_Y, radius ,0 , 2 *Math.PI);
    ctx.stroke(); 
    }  
}
    

    
Canvas.addEventlistener("mouseup" , my_mouseup);
function my_mouseup(Empty)
{
    mouseEvent = "mouseup";
}
Canvas.addEventlistener("mouseleave" , my_mouseleave);
function my_mouseleave(Empty)
{
    mouseEvent = "mouseup";

}

function Clear_area(Empty)
{
    ctx.clearRect(0,0,canvas.width,canas.height);
}

