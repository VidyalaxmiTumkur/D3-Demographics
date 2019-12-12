var number = "",
  total = 0,
  regexp = /[0-9]/,
  mainScreen = document.getElementById("mainScreen");

function InputSymbol(num) {
  var cur = document.getElementById(num).value;
  var prev = number.slice(-1);
  // Do not allow 2 math operators in row
  if (!regexp.test(prev) && !regexp.test(cur)) {
    console.log("Two math operators not allowed after each other ;)");
    return;
  }
  number = number.concat(cur);
  mainScreen.innerHTML = number;
}

function sqrt(){
  total = Math.sqrt(number);
  mainScreen.innerHTML = total;
}

function exp(){
  total = Math.exp(number);
  mainScreen.innerHTML = total;
}

function ln(){
  total = Math.log(number);
  mainScreen.innerHTML = total;
}

function sin(){
  total = Math.sin(number);
  mainScreen.innerHTML = total;
}

function cos(){
  total = Math.cos(number);
  mainScreen.innerHTML = total;
}

function tan(){
  total = Math.tan(number);
  mainScreen.innerHTML = total;
}

function pi(){
  if(number == null || number == "0")
      mainScreen.innerHTML = 3.14159265
  else
      number+=mainScreen.innerHTML = 3.14159265
}

function CalculateTotal() {
  // Time for some EVAL magic
  total = (Math.round(eval(number) * 100) / 100);
  mainScreen.innerHTML = total;
}

function DeleteLastSymbol() {
  if (number) {
    number = number.slice(0, -1);
    mainScreen.innerHTML = number;
  }
  if (number.length === 0) {
    mainScreen.innerHTML = "0";
  }
}

function ClearScreen() {
  number = "";
  mainScreen.innerHTML = 0;
}



























// // function shiftFn(ken) {
// //     var shift = document.getElementById("shiftBtn") ;
// //     var arr = document.getElementsByTagName("td") ;
// //     if (ken == 1) {
// //         shift.setAttribute("onclick", "shiftFn(0)") ;
// //         shift.style.backgroundColor = "orange" ;
// //         arr[2].innerHTML = "sin<sup>-1</sup>" ;
// //         arr[2].setAttribute("onclick", "trigo1('sin')") ;
// //         arr[3].innerHTML = "cos<sup>-1</sup>" ;
// //         arr[3].setAttribute("onclick", "trigo1('cos')") ;
// //         arr[4].innerHTML = "tan<sup>-1</sup>" ;
// //         arr[4].setAttribute("onclick", "trigo1('tan')") ;
// //         arr[10].innerHTML = "ln" ;
// //         arr[10].setAttribute("onclick", "log(0)") ;
// //         arr[28].innerHTML = "\u0065" ;
// //         arr[28].setAttribute("onclick", "piOrE('e')") ;
// //     } else {
// //         shift.setAttribute("onclick", "shiftFn(1)") ;
// //         shift.style.backgroundColor = "yellow" ;
// //         arr[2].innerHTML = "sin" ;
// //         arr[2].setAttribute("onclick", "trigo('sin')") ;
// //         arr[3].innerHTML = "cos" ;
// //         arr[3].setAttribute("onclick", "trigo('cos')") ;
// //         arr[4].innerHTML = "tan" ;
// //         arr[4].setAttribute("onclick", "trigo('tan')") ;
// //         arr[10].innerHTML = "log" ;
// //         arr[10].setAttribute("onclick", "log(1)") ;
// //         arr[28].innerHTML = "\u03C0" ;
// //         arr[28].setAttribute("onclick", "piOrE('pi')") ;
// //     }
// // }

// // function input(sun) {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     x.value += sun ;
// //     y.innerHTML += sun ;
// // }

// // function factorial(shirious) {
// //     if (Number.isInteger(shirious)) {
// //         if (shirious < 2) return 1 ;
// //         return shirious * factorial(shirious - 1) ;
// //     }
// // }

// // function sqrt() {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     x.value += "sqrt(" ;
// //     y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
// //     " * Math.sqrt(" : "Math.sqrt(" ;
// // }

// // function leftParen() {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     x.value += "(" ;
// //     y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
// //     " * (" : "(" ;
// // }

// // function piOrE(lunar) {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     if (lunar == "pi") {
// //         x.value += "\u03C0" ;
// //         y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
// //         " * Math.PI" : "Math.PI" ;
// //     } else {
// //         x.value += "\u0065" ;
// //         y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
// //         " * Math.E" : "Math.E" ;
// //     }
// // }

// // function log(jafca) {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     if (jafca == 1) {
// //         x.value += "log(" ;
// //         y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
// //         " * Math.log10(" : "Math.log10(" ;
// //     } else {
// //         x.value += "ln(" ;
// //         y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
// //         " * Math.log(" : "Math.log(" ;
// //     }
// // }

// // function trigo(hatsyrei) {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     x.value += hatsyrei + "(" ;
// //     y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
// //     " * Math." + hatsyrei + "(Math.PI / 180 * " : "Math." + hatsyrei + "(Math.PI / 180 * " ;
// // }

// // function trigo1(valentin) {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     x.value += valentin + "\u207B\u00B9("
// //     y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
// //     " * 180 / Math.PI * Math.a" + valentin + "(" : "180 / Math.PI * Math.a" + valentin + "(" ;
// // }

// // function multOrDiv(edward) {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     if (edward == "mult") {
// //         x.value += "\u00D7" ;
// //         y.innerHTML += "*" ;
// //     } else {
// //         x.value += "\u00F7" ;
// //         y.innerHTML += "/"
// //     }
// // }

// // function del() {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     var z = document.getElementById("myAns") ;
// //     if (x.value.slice(-3) == "Ans") {
// //         y.innerHTML = (/[\d)IE]/.test(x.value.slice(-4, -3))) ? 
// //         y.innerHTML.slice(0, -(z.innerHTML.length + 3)) : y.innerHTML.slice(0, -(z.innerHTML.length)) ;
// //         x.value = x.value.slice(0, -3) ;
// //     } else if (x.value == "Error!") {
// //         ac() ;
// //     } else {
// //         switch (y.innerHTML.slice(-2)) {
// //             case "* ": // sin cos tan
// //             y.innerHTML = (/[\d)IE]/.test(x.value.slice(-5, -4))) ? 
// //             y.innerHTML.slice(0, -28) : y.innerHTML.slice(0, -25) ;
// //             x.value = x.value.slice(0, -4) ;
// //             break ;
// //             case "n(":
// //             case "s(": // asin acos atan
// //             y.innerHTML = (/[\d)IE]/.test(x.value.slice(-7, -6))) ? 
// //             y.innerHTML.slice(0, -29) : y.innerHTML.slice(0, -26) ;
// //             x.value = x.value.slice(0, -6) ;
// //             break ;
// //             case "0(": // log
// //             y.innerHTML = (/[\d)IE]/.test(x.value.slice(-5, -4))) ? 
// //             y.innerHTML.slice(0, -14) : y.innerHTML.slice(0, -11) ;
// //             x.value = x.value.slice(0, -4) ;
// //             break ;
// //             case "g(": // ln
// //             y.innerHTML = (/[\d)IE]/.test(x.value.slice(-4, -3))) ? 
// //             y.innerHTML.slice(0, -12) : y.innerHTML.slice(0, -9) ;
// //             x.value = x.value.slice(0, -3) ;
// //             break ;
// //             case "t(": // sqrt
// //             y.innerHTML = (/[\d)IE]/.test(x.value.slice(-6, -5))) ? 
// //             y.innerHTML.slice(0, -13) : y.innerHTML.slice(0, -10) ;
// //             x.value = x.value.slice(0, -5) ;
// //             break ;
// //             case "PI": // pi
// //             y.innerHTML = (/[\d)IE]/.test(x.value.slice(-2, -1))) ? 
// //             y.innerHTML.slice(0, -10) : y.innerHTML.slice(0, -7) ;
// //             x.value = x.value.slice(0, -1) ;
// //             break ;
// //             case ".E": // e
// //             y.innerHTML = (/[\d)IE]/.test(x.value.slice(-2, -1))) ? 
// //             y.innerHTML.slice(0, -9) : y.innerHTML.slice(0, -6) ;
// //             x.value = x.value.slice(0, -1) ;
// //             break ;
// //             default:
// //             y.innerHTML = y.innerHTML.slice(0, -1) ;
// //             x.value = x.value.slice(0, -1) ;
// //         } ;
// //     }
// // }

// // function ac() {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     x.value = y.innerHTML = "" ;
// // }

// // function ans() {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     var z = document.getElementById("myAns") ;
// //     x.value += "Ans" ;
// //     y.innerHTML += (/[\d)IE]/.test(y.innerHTML.slice(-1))) ? 
// //     " * " + z.innerHTML : z.innerHTML ;
// // }

// // function equal() {
// //     var x = document.getElementById("result") ;
// //     var y = document.getElementById("myPara") ;
// //     var z = document.getElementById("myAns") ;
// //     for (var i = 0; i < x.value.split("(").length - x.value.split(")").length; i++) {
// //         y.innerHTML += ")" ;
// //     }
// //     if (y.innerHTML != "") {
// //         x.value = y.innerHTML = z.innerHTML = eval(y.innerHTML
// //         .replace(/(\d+\.?\d*)\!/g, "factorial($1)")
// //         .replace(/(\(?[^(]*\)?)\^(\(?.*\)?)/, "Math.pow($1, $2)")
// //         ) ;
// //     }
// //     if (!isFinite(x.value)) x.value = "Error!" ;
// // }



// var value, enable , disable

// function disable()
// {
// document.getElementById("form1").disabled=true;
// }
// function enable()
// {
// document.getElementById("form1").disabled=false;
// }

// document.formname.textnameseven.disabled=false;
// document.formname.textnameeight.disabled=false;
// document.formname.textnamenine.disabled=false;
// document.formname.textnamefour.disabled=false;
// document.formname.textnamefive.disabled=false;
// document.formname.textnamesix.disabled=false;
// document.formname.textnameone.disabled=false;
// document.formname.textnametwo.disabled=false;
// document.formname.textnamethree.disabled=false;
// document.formname.textnamezero.disabled=false;
// document.formname.textnamedot.disabled=false;
// document.formname.textnameplus.disabled=false;
// document.formname.textnameminus.disabled=false;
// document.formname.textnametimes.disabled=false;
// document.formname.textnamedivide.disabled=false;
// document.formname.textnamemodulus.disabled=false;

// document.formname.textnamesin.disabled=false;
// document.formname.textnamecos.disabled=false;
// document.formname.textnametan.disabled=false;
// document.formname.textnamesqrt.disabled=false;
// document.formname.textnamepi.disabled=false;

// document.formname.textnameclear.disabled=false;
// document.formname.textnameequal.disabled=false; <!-- change later -->
// document.formname.textnameoff.disabled=false;

// function number(value){
// document.form1.tb1.value=document.form1.tb1.value+value
// document.form1.plus.disabled=false
// document.form1.minus.disabled=false
// document.form1.times.disabled=false
// document.form1.divide.disabled=false
// document.form1.modulus.disabled=false
// }

// function showoperator(value){
// document.form1.tb1.value=document.form1.tb1.value+value
// document.form1.plus.disabled=true
// document.form1.minus.disabled=true
// document.form1.times.disabled=true
// document.form1.divide.disabled=true
// document.form1.modulus.disabled=true
// }
// function evalit(){
// document.form1.tb1.value=eval(document.form1.tb1.value)
// }