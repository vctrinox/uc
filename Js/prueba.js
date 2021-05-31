var burguer = document.querySelector("#nav-icon2");
var coll = document.querySelector(".content-device");

burguer.onclick = function () {
  open();
};
function open() {
  burguer.classList.toggle("open");
  coll.classList.toggle("open");
}

function actionToggle() {
  var myElement = document.querySelector(".action");
  myElement.classList.toggle("active");
}

function myFunction() {
  var hola = document.querySelector(".device");
  hola.classList.toggle("activated");
}

function myFunction2() {
  var hola = document.querySelector(".device2");
  hola.classList.toggle("activated");
}

function myFunction3() {
  var hola = document.querySelector(".device3");
  hola.classList.toggle("activated");
}
/******************************************************* */
var hasClass = document.querySelectorAll(".icon-arrow-down");
var index = [];

function myGeneralFunction(e) {
  var ai = e.target;
  ai.classList.toggle("activated");

  for (i = 0; i < conceptShow.length; i++) {
    index.push("ai" + i);

    if (
      hasClass[i].classList.contains(index[i]) ==
      ai.classList.contains("ai" + i)
    ) {
      conceptShow[i].classList.toggle("activated");
    }
  }
}

for (i = 0; i < concept.length; i++) {
  concept[i].onclick = myGeneralFunction;
}


/************************* copy to clipboard *************************/
function CopyToClipboard(containerid) {
  if (window.getSelection) {
    if (window.getSelection().empty) {
      // Chrome
      window.getSelection().empty();
    } else if (window.getSelection().removeAllRanges) {
      // Firefox
      window.getSelection().removeAllRanges();
    }
  } else if (document.selection) {
    // IE?
    document.selection.empty();
  }

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    alert("Código copiado");
  }
}
/***********************************************************************/
var slideIndex = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var slideId = [
  "mySlides1",
  "mySlides2",
  "mySlides3",
  "mySlides4",
  "mySlides5",
  "mySlides6",
  "mySlides7",
  "mySlides8",
  "mySlides9",
  "mySlides10",
  "mySlides11",
  "mySlides12",
  "mySlides13",
  "mySlides14",
  "mySlides15",
  "mySlides16",
  "mySlides17",
];
var dotId = [
  "dot1",
  "dot2",
  "dot3",
  "dot4",
  "dot5",
  "dot6",
  "dot7",
  "dot8",
  "dot9",
  "dot10",
  "dot11",
  "dot12",
  "dot13",
  "dot14",
  "dot15",
  "dot16",
  "dot17",
];

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);
showSlides(1, 10);
showSlides(1, 11);
showSlides(1, 12);
showSlides(1, 13);
showSlides(1, 14);
showSlides(1, 15);
/**showSlides(1, 16);
 */
function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function currentSlide(n, no) {
  showSlides((slideIndex[no] = n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName(dotId[no]);

  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actived", "");
  }
  x[slideIndex[no] - 1].style.display = "block";
  dots[slideIndex[no] - 1].className += " actived";
}
/**********************************************************************
var slideIndex = 1;
var slideIndex2 = 1;

function plusSlides(n) {
  slideIndex += n;
  showSlides("mySlides");
  console.log("this is n plusSlides: ", n);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides("mySlides");
}

function showSlides(mySlideNumber) {
  var i;
  var slides = document.getElementsByClassName(`${mySlideNumber}`);
  var dots = document.getElementsByClassName("dot");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex2 < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actived", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " actived";

  console.log("slideIndex: ", slideIndex);
  console.log("slideIndex2: ", slideIndex2);
}

showSlides("mySlides");*/

/** ********************************* */

/*showSlides(slideIndex2, "mySlides2");

function plusSlides(n) {
  showSlides(slideIndex2 += n, "mySlides2");
}

function currentSlide(n) {
  showSlides(slideIndex2 = n, "mySlides2");
}






myElement.onclick = function(x){
  x.classList.toggle('active');
};

device.onclick = function(){};

function actionToggle(){
  x.classList.toggle('active')
}*/

/*

var BOOK = document.getElementsByClassName(".book");
var MICROCHIP = document.getElementsByClassName(".microchip");
var FILE = document.getElementsByClassName(".file")

BOOK.innerHTML      = `<i class= "fas fa-book"></i>`;
MICROCHIP.innerHTML = `<i class= "fas fa-microchip"></i>`;
FILE.innerHTML      = `<i class="far fa-file-archive"></i>`;
* 

var textEditOver = function (typeIcon, fontSize, nameText) {
    typeIcon.onmouseover= () => typeIcon.innerHTML = `<i style="font-size: ${fontSize};">${nameText}</i>`;
}

var textEditOut = function (typeIcon, icon){
    typeIcon.onmouseout = () => typeIcon.innerHTML = `<i class="${icon}"></i>`;
}

textEditOver(BOOK, "30px", "Teoria")
textEditOut(BOOK, "fas fa-book")
*/
/*textEditOver(MICROCHIP, "30px", "Laboratorio")
textEditOut(MICROCHIP, "fas fa-microchip")

textEditOver(FILE, "30px", "Descargas")
textEditOut(FILE, "far fa-file-archive")

*
 * Drop-right menu
 */

/**
   function myFunction() {
  var para = document.createElement("a");
  para.innerHTML = " This is a paragraph.";
  document.getElementsByClassName(".another").appendChild(para).setAttribute("href", "#");
   }
  * 
  */
