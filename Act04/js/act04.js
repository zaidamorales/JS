var  número_uno  =  10 ;
var  número_dos  =  20 ;
var  número_tres  =  30 ;
var  número_quatro  =  40 ;

// TASCA 1 Comparatiu per totes les variables, em fa la incidència de la majoria de totes:

if ( número_uno  >  número_dos ) {
  document .write ( "El número 20 és el mes gran que el número 10" )
}

if ( número_tres  <  número_quatro ) {
  document .write ( "<br> El número 40 és més gran que el número 30 </br>" )
}

if ( número_dos  <  número_quatro ) {
  document .write ( "El número 40 és el mes gran que el número 20" )
}

if ( número_uno  <  número_tres ) {
  document .write ( "<br>El número 30 és més gran que el número 10 </br>" )
}

// La variable mes gran: var número_quatro = 40

// TASCA 2 Compara totes les variables, em fa la ràpida consulta de totes les petites:

var  primera  =  30 ;
var  segona  =  20 ;
var  tercera  =  10 ;
var  quarta  =  40 ;


if ( quarta  >  primera ) {
  document .write ( "<br>El número 30 és el mes petit que el número 40 </br>" )
}

if ( primera  >  segona ) {
document .write ( "El número 20 és el mes petit que el número 30" )
}

if ( segona  >  tercera ) {
  document .write ( "<br> El número 20 és el mes petit que el número 10 </br>" )
}

if ( quarta  >  tercera ) {
  document .write ( "El número 10 és el mes petit que el número 40" )
}

if ( primera ) {
document .write ( "<br> </br>" )
}
// La variable mes petita: var tercera = 10

// TASCA 3 Comparar totes les variables, i digues quines són iguals (si n’hi ha alguna cosa):

var  uno  =  10 ;
var  dos  =  20 ;
var  tres  =  30 ;
var  quatre  =  40 ;

if  ( primera == segona  )  {
    document .write  ( "El número 10 és igual que 20 </br>" )
  }
    else  {
    document .write  ( "El número 10 no és igual que 20 </br>" )
  }

if  ( primera == tercera  )  {
    document .write  ( "El número 10 és igual que 30" )
  }
    else  {
    document .write  ( "El número 10 no és igual que 30" )
  }

if  ( primera == quarta  )  {
    document .write  ( "<br>El número 10 és igual que 40 </br>" )
  }
    else  {
    document .write  ( "<br>El número 10 no és igual que 40 </br>" )
  }

if  ( segona == primera  )  {
    document .write  ( "El número 20 és igual que 10" )
  }
    else  {
    document .write  ( "El número 20 no és igual que 10" )
  }

// En molts casos no hi ha variable que es pugui igualar.
// Tots son valors diferents.
