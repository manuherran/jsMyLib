// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// randDistContUnif01
// randDistDiscUnif1Ub1
// randomNumberString
// -----------------------------------------------------------------------
function randDistContUnif01() {
//Devuelve un valor entre cero (incusive) y uno (exclusive) (por confirmar)
//La probabilidad es igual para todos los números
  return Math.random();
}
// -----------------------------------------------------------------------
function randDistDiscUnif1Ub1(Ub) {
//Devuleve un número al azar entero
//entre 1 y fin, inclusive ambos
//La probabilidad es igual para todos los números
  return Math.ceil(Ub*randDistContUnif01());
}
// -----------------------------------------------------------------------
function randomNumberString(size) {
  ret = '';
  for (i=1; i<=size; i++) {
    azar=Math.ceil(9*Math.random());
    azar.toString();
    ret = ret + azar;
  }
  return ret
}
// -----------------------------------------------------------------------
