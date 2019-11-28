let start= new Date().getTime();

appearAfterDelay ();

document.getElementById("shape").onclick = () =>{
    document.getElementById("shape").style.display = "none";
    let end = new Date().getTime();
    let timeTaken = (end - start)/1000;
    document.getElementById("timeTaken").innerHTML = timeTaken + "s";
    appearAfterDelay ();
} 

function makeShepeArrear (){
    let top =  Math.random() * 400;
    let left =  Math.random() * 400;
    let width =  (Math.random() * 200) + 100;
    let height =  Math.random() * 400;
    if ( Math.random() > 0.5 ) {
    document.getElementById("shape").style.borderRadius = "50%";
}else {
    document.getElementById("shape").style.borderRadius = "0%";
}
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.background = randColor();
    document.getElementById("shape").style.display = "block";
    start= new Date().getTime();
}

function appearAfterDelay (){
    setTimeout(makeShepeArrear, Math.random() * 2000);
}

function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}