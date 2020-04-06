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
if( unicorn == 10){
document.write ("</br>");
}
}

//TASCA 3
//Imprimeix totes les taules de multiplicar, utilitzant dos o més bucles.

function generarTaules()
{
 var numTaules=document.getElementById('genera').value;
 document.write('<table>');
 for (var i=1; i<=10; i++)
 {
 document.write('</tr>');
  for (var j=1; j<=numTaules; j++)
 {
 document.write('<td>');
 document.write(j + " x " + i + " = "+i*j);
 document.write('</td>');
 document.write('<td>     </td>');
 }
 document.write('</tr>');
 }
 document.write('</table>');
 }
 document.write('¿Fins quina taula vols generar?');
 document.write('<input type="text" name="genera", id="genera" />');
 document.write('<input type="button" value="Genera" onclick="generarTaules()"/>');
