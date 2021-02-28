/*function handleKeyPress(e) {
  var goButton = document.querySelector("#go");
     if (e.keyCode === 13) {
         goButton.click();
         return false;
     }
}
*/


var burguer = document.querySelector("#nav-icon2");
var coll = document.querySelector(".content-device");

burguer.onclick = function(){open()};
function open() {
  burguer.classList.toggle('open');
  coll.classList.toggle('open');
};

function actionToggle(){
  var myElement = document.querySelector(".action");
  myElement.classList.toggle('active');
  
};

function myFunction() {
  var hola = document.querySelector(".device");
  hola.classList.toggle('activated');
};

function myFunction2() {
  var hola = document.querySelector(".device2");
  hola.classList.toggle('activated');
}

function myFunction3() {
  var hola = document.querySelector(".device3");
  hola.classList.toggle('activated');
}


/************************* copy to clipboard *************************/
function CopyToClipboard(containerid) {
  if (window.getSelection) {
      if (window.getSelection().empty) { // Chrome
          window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges) { // Firefox
          window.getSelection().removeAllRanges();
      }
  } else if (document.selection) { // IE?
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
      alert("Código copiado")
  }
}
/***********************************************************************/

/*


myElement.onclick = function(x){
  x.classList.toggle('active');
};

device.onclick = function(){};

function actionToggle(){
  x.classList.toggle('active')
}*/


/*

var BOOK = document.querySelector(".book");
var MICROCHIP = document.querySelector(".microchip");
var FILE = document.querySelector(".file")

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
  document.querySelector(".another").appendChild(para).setAttribute("href", "#");
   }
  * 
  */
