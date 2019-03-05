window.onload = function (){
    let c = document.getElementById("myCanvas");
    let setka = this.document.getElementById('sitka');
    let detal = this.document.getElementById('detal');
    let myDetal = this.document.getElementById('myDetail');
    setka.addEventListener('change',function(e){
        if(setka.checked){
            //c.style.backgroundImage = "url('image/setka.jpg')";
            main(true);
        }else{
           // c.style.backgroundImage = "none";
           main(false);
        }
    });
    detal.addEventListener('change', function(e){
        if(detal.checked){
            myDetal.style.backgroundImage = "url('img/lab0.jpg')";
        }else{
            myDetal.style.backgroundImage = "none";
        }
    });
    let button = this.document.getElementById('button');
    button.addEventListener('click', main);
}

function drawSitka(){
    let c = document.getElementById("myCanvas");
    let ctx=c.getContext('2d');
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.strokeStyle="#000000"
    for(let i=0; i<1000; i+=50){
        ctx.moveTo(i,0);
        ctx.fillText(i, i+1, 13);
        ctx.lineTo(i,600); }
    for(let i=0; i<600; i+=50){
        ctx.moveTo(0,i);
        ctx.fillText(i, 1, i+13);
        ctx.lineTo(1000,i); }
    ctx.moveTo(50,50);
    ctx.fillText('X', 988, 13);
    ctx.fillText('Y', 1, 598);
    ctx.stroke();      
}

function drawDetail(){
    var c = document.getElementById("myCanvas");
    var ctx=c.getContext('2d');
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.strokeStyle="#000000"
    let x0 = 500;
    let y0 = 300;
    let x,y,A1;

    const R1 = parseInt(document.getElementById('R1').value);
    const R2 = parseInt(document.getElementById('R2').value);
    const A = parseInt(document.getElementById('A').value);
    const B = parseInt(document.getElementById('B').value);

    console.log(typeof(R1));
    A1=(A-R2)/2;

    
    var xn, yn, angle;  //R1
    for (let i = 0; i < 360 ; i += 0.1) {
        angle = i;
        xn = R1 * Math.cos(angle * Math.PI/180);
        yn = R1 * Math.sin(angle * Math.PI/180);
        ctx.lineTo(x0 + xn,y0 + yn);
    }

    x = x0 - B/2;
    y = y0 - Math.sqrt(R2*R2 - B*B/4);
    ctx.moveTo(x, y);
    ctx.lineTo(x, y-A1);
    ctx.lineTo(x + B, y-A1);
    ctx.lineTo(x + B, y);

    
    let myAngle = Math.acos(B/(2*R2)) * 180 / Math.PI;
    for(let i= -myAngle; i < myAngle; i += 0.1) {
        angle = i;
        xn = R2 * Math.cos(angle * Math.PI/180);
        yn = R2 * Math.sin(angle * Math.PI/180);
        ctx.lineTo(x0 + xn,y0 + yn);
    }
    ctx.lineTo(x0 + xn, y0 + yn+A1);
    ctx.lineTo(x0 - xn, y0 + yn+A1);
    ctx.lineTo(x0 - xn, y0 + yn);


    for(let i= -myAngle; i < myAngle; i += 0.1) {
        angle = i;
        xn = -R2 * Math.cos(angle * Math.PI/180);
        yn = -R2 * Math.sin(angle * Math.PI/180);
        ctx.lineTo(x0 + xn, y0 + yn);
    }

    
    ctx.stroke();  

    ctx.beginPath();
    ctx.setLineDash([15, 5, 5]);
    ctx.moveTo(x0 - A-50, y0);
    ctx.lineTo(x0 + A+50, y0);
    ctx.moveTo(x0, y0 - A-50);
    ctx.lineTo(x0, y0 + A+50);
    ctx.stroke();            
        
}

function main(sitka){
    let c = document.getElementById("myCanvas");
    let ctx  =c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
    drawDetail();
    if(sitka) drawSitka();
}