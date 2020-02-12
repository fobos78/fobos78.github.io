var el1 = document.getElementById("y1");
var element1 = document.getElementById("x1");
var element2 = document.getElementById("x2");
var element3 = document.getElementById("x3");
var el2 = document.getElementById("y2");
var el3 = document.getElementById("y3");
var el4 = document.getElementById("y4");
var el5 = document.getElementById("y5");
//let box = document.getElementsByClassName("box4");
//let box4 = box[0];
//box4.setAttribute("style", `width: 100%`);

 el2.onclick = right;
 el1.onclick = left;
 el3.onclick = left;
 el5.onclick = right;
 el4.onclick = right2;

  function right() {
    element2.classList.remove("box4");
    element3.classList.remove("box4");
    element1.classList.add("box4");
     el2.onclick = right1;
     el1.onclick = left;
  }
  function right1() {
    element3.classList.add("box4");
    element1.classList.remove("box4");
    element2.classList.remove("box4");
    el2.onclick = right2;
    el1.onclick = left2;
  }
  function right2() {
    element2.classList.add("box4");
    element3.classList.remove("box4");
    element1.classList.remove("box4");
    el2.onclick = right;
    el1.onclick = left1;
  }
  function left() {
    element2.classList.remove("box4");
    element1.classList.remove("box4");
    element3.classList.add("box4");
     el1.onclick = left1;
     el2.onclick = right;
  }
  function left1() {
    element1.classList.add("box4");
    element3.classList.remove("box4");
    element2.classList.remove("box4");
     el1.onclick = left2;
     el2.onclick = right2;
  }
  function left2() {
    element2.classList.add("box4");
    element1.classList.remove("box4");
    element3.classList.remove("box4");
    el1.onclick = left;
    el2.onclick = right1;
  }
  