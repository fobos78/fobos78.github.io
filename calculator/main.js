let arr_elemens = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "C", "0", "/", "=",];
let buttons = document.querySelector(".buttons");
let el_arr = buttons.querySelectorAll(".elements");
let a=0;
let b=0;
let c;
//console.log(el_arr[1]);
el_arr.forEach(el => {
    el.addEventListener("click", draw, true);
});


document.getElementById('tb').innerHTML = "";
for (let i = 0; i < el_arr.length; i++) {
    document.getElementById('tb').innerHTML = "";
    el_arr[i].onclick = () => {
        document.getElementById('tb').innerHTML = document.getElementById('tb').innerHTML + arr_elemens[i];
        if ( arr_elemens[i] == "C") { 
            document.getElementById('tb').innerHTML = "";
        }
        if ( arr_elemens[i] == "=" && c == "+") { 
            b = +(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            console.log(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            console.log(b);
            console.log(typeof(b));
            document.getElementById('tb').innerHTML = "";
            document.getElementById('tb').innerHTML = String (sum(a,b));
        }
        if ( arr_elemens[i] == "=" && c == "-") { 
            b = +(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            console.log(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            console.log(b);
            console.log(typeof(b));
            document.getElementById('tb').innerHTML = "";
            document.getElementById('tb').innerHTML = String (diff(a,b));
        }
        if ( arr_elemens[i] == "=" && c == "*") { 
            b = +(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            console.log(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            console.log(b);
            console.log(typeof(b));
            document.getElementById('tb').innerHTML = "";
            document.getElementById('tb').innerHTML = String (mult(a,b));
        }
        if ( arr_elemens[i] == "=" && c == "/") { 
            b = +(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            console.log(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            console.log(b);
            console.log(typeof(b));
            document.getElementById('tb').innerHTML = "";
            document.getElementById('tb').innerHTML = String (div(a,b));
        }
        if ( arr_elemens[i] == "+" ) { 
            a = +(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            console.log(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            console.log(a);
            console.log(typeof(a));
            c = "+";
            document.getElementById('tb').innerHTML = ""
        } 
        if ( arr_elemens[i] == "-" ) { 
            a = +(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            c = "-";
            document.getElementById('tb').innerHTML = ""
        } 
        if ( arr_elemens[i] == "*" ) { 
            a = +(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            c = "*";
            document.getElementById('tb').innerHTML = ""
        } 
        if ( arr_elemens[i] == "/" ) { 
            a = +(document.getElementById('tb').innerHTML.slice(0, (document.getElementById('tb').innerHTML.length - 1)));
            c = "/";
            document.getElementById('tb').innerHTML = ""
        } 
    }
}

function sum( a, b) {
    return a+b;
}
function diff( a, b) {
    return a-b;
}
function mult( a, b) {
    return a*b;
}
function div( a, b) {
    return a/b;
}

function draw() {
    this.style.background = "yellow";
    setTimeout(() => {
        this.style.background = "#4ebbb9";
    }, 300);
    //console.log(this);
    //this.style.background = "blue";
    //console.log(document.querySelector(".el2").innerHTML)
    //document.getElementById('tb').innerHTML = "1";
    //this.innerHTML = "*****";
}