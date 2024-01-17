
var lastPositionOfX, lastPositionOfY;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    var width = screen.width;
    color = "black";
    widthOfLine = 2;
    newWidth = screen.width - 70;
    newHeigth = screen.height - 300;
    if(width<992){
        document.getElementById('myCanvas').width=newWidth;
        document.getElementById('myCanvas').height=newHeigth;
        document.body.style.overflow="hidden";
    }

    canvas.addEventListener("touchstart",myTouchStart);

    function myTouchStart(e)
    {
        //Início da Atividade Adicional
        console.log("myTouchStart");
        color = document.getElementById("color").value;
        widthOfLine = document.getElementById("widthOfLine").value;
        lastPositionOfX = e.touches[0].clientX-canvas.offsetLeft;
        lastPositionOfY = e.touches[0].clientY-canvas.offsetTop;
        //Fim da Atividade Adicional
    }

    canvas.addEventListener("touchmove", myTouchMove);
    function myTouchMove(e)
    {
        console.log("myTouchMove");
        currentPositionOfTouchX = e.touches[0].clientX-canvas.offsetLeft;
        currentPositionOfTouchY = e.touches[0].clientY-canvas.offsetTop;
        //Mesmo código utilizado para versão web
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;

        console.log("Ultima posição das coordenadas x e y = ");
        console.log("x = " + lastPositionOfX + "y = " + lastPositionOfY);
        ctx.moveTo(lastPositionOfX, lastPositionOfY);

        console.log("Posição atual das coordenadas x e y = ");
        console.log("x  = " + currentPositionOfTouchX + "y = " + currentPositionOfTouchY);
        ctx.lineTo(currentPositionOfTouchX, currentPositionOfTouchY);
        ctx.stroke();

        lastPositionOfX = currentPositionOfTouchX; 
        lastPositionOfY = currentPositionOfTouchY;
        //Fim do mesmo código usado na versão web
    }
//Mesmo código utilizado para versão web
    function ClearArea()
    {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
//Fim do mesmo código usado na versão web
