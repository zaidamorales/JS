//Tasca 1
//Imprimeix la taula de multiplicar del 9, utilitzant un bucle.

var z = 9;

for (var x = 0; x <= 10; x++){
y = z*x;
document.write(z + " x " + x + " = " + y + "</br>" );
}

//Tasca 2
//Imprimeix la taula de multiplicar del 5 a la inversa, utilitzant un bucle.

var o = 5;
var y1 = 1;

for (unicorn = 10; y1 <= 11; unicorn--) {
document.write(o + " x " +unicorn+ " = " +o*unicorn+ "</br>");
y1++;
}

//TASCA 3
//Imprimeix totes les taules de multiplicar, utilitzant dos o més bucles.
var m= 1;
var b =1;

for (n =0; b <= 101; n++) {
  document.write(m + " x " +n+ " = " +m*n);
  b++
  document.write("</br>")

  if (n == 10) {
    document.write("</br>");
    n = 0;
    m++;
  }
}
