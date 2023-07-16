// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// fTrim
// fRightTrim
// fLeftTrim
// fReplaceChar
// -----------------------------------------------------------------------
function fTrim(cadena) {
  cadena = fLeftTrim(cadena);
  cadena = fRightTrim(cadena);
  return cadena;
}
// -----------------------------------------------------------------------
function fRightTrim(cadena) {
  var ptr = cadena.length-1;
  while((cadena.charAt(ptr) == " ") && (ptr > 0))
    ptr--;
  return cadena.substring(0, ptr+1);
}
// -----------------------------------------------------------------------
function fLeftTrim(cadena) {
  var ptr = 0;
  var longitudCadena = cadena.length;
  while((cadena.charAt(ptr) == " ") && (ptr < longitudCadena))
    ptr++;
  return cadena.substring(ptr, longitudCadena);
}
// -----------------------------------------------------------------------
function fReplaceChar(cadena, carBuscar, carReemplazar) {
  var ptr = 0;
  var ret = "";
  var car = "";
  var longitudCadena = cadena.length;
  car = cadena.charAt(ptr);
  while(ptr < longitudCadena) {
    if (car == carBuscar) {
      car = carReemplazar;
    }
    ret = ret + car;
    ptr++;
    car = cadena.charAt(ptr);
  }
  return ret;
}
// -----------------------------------------------------------------------
