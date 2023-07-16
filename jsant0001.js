// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
function sumCirc2(maximo,val1,val2) {
  var ret=val1+val2;
  if (ret < 0) ret = ret + maximo;
  ret=ret % maximo;
  if (ret == 0) ret=maximo;
  return ret;
}
// --------------------------------------------------------------
function randDistContUnif01() {
//Devuelve un valor entre cero (incusive) y uno (exclusive) (esto esta por confirmar)
//La probabilidad es igual para todos los números
  return Math.random();
}
// --------------------------------------------------------------
function randDistDiscUnif1Ub1(Ub) {
//Devuleve un número al azar entero
//entre 1 y fin, inclusive ambos
//La probabilidad es igual para todos los números
  return Math.ceil(Ub*randDistContUnif01());
}
// --------------------------------------------------------------
function step() {
  var newDirection;
  var newImage;
  if (randDistDiscUnif1Ub1(5) == 1)
    newDirection=randDistDiscUnif1Ub1(numberOfDirections);
  else {
    if (firstTime) newDirection=7;
    else {
      if (IE4 == true) newDirection=document.all.objAnt.style.D;
      if (NS4 == true) newDirection=document.objAnt.D;
      }
    }
  steps++;
  firstTime=false;
  // Detecto la nueva posición
  switch (newDirection){
  case 1 : // Norte
    antR=sumCirc2(totalRows,antR,-ume);
    antC=antC;
    newImage="/inc/img/ant/hv_n_t.gif";
    break;
  case 2 : // NorEste
    antR=sumCirc2(totalRows,antR,-ume);
    antC=sumCirc2(totalCols,antC,ume);
    newImage="/inc/img/ant/hv_ne_t.gif";
    break;
  case 3 : // Este
    antR=antR;
    antC=sumCirc2(totalCols,antC,ume);
    newImage="/inc/img/ant/hv_e_t.gif";
    break;
  case 4 : // SurEste
    antR=sumCirc2(totalRows,antR,ume);
    antC=sumCirc2(totalCols,antC,ume);
    newImage="/inc/img/ant/hv_se_t.gif";
    break;
  case 5 : // Sur
    antR=sumCirc2(totalRows,antR,ume);
    antC=antC;
    newImage="/inc/img/ant/hv_s_t.gif";
    break;
  case 6 : // SurOeste
    antR=sumCirc2(totalRows,antR,ume);
    antC=sumCirc2(totalCols,antC,-ume);
    newImage="/inc/img/ant/hv_so_t.gif";
    break;
  case 7 : // Oeste
    antR=antR;
    antC=sumCirc2(totalCols,antC,-ume);
    newImage="/inc/img/ant/hv_o_t.gif";
    break;
  case 8 : // NorOeste
    antR=sumCirc2(totalRows,antR,-ume);
    antC=sumCirc2(totalCols,antC,-ume);
    newImage="/inc/img/ant/hv_no_t.gif";
    break;
  default : 
    alert('Error en switch (newDirection) '+newDirection);
  }
  if (IE4 == true) {
    document.all.objAnt.style.D=newDirection;
    document.all.objAnt.style.top=antR; 
    document.all.objAnt.style.left=antC;
  }
  if (NS4 == true) {
    document.objAnt.src=newImage;
    document.objAnt.D=newDirection;
    document.objAnt.top=antR; 
    document.objAnt.left=antC;
  }
  if (steps > 40) {
    if (IE4 == true) clearTimeout(document.all.objAnt);
    if (NS4 == true) clearTimeout(document.objAnt);
  } else
    setTimeout('step()', 400);
}
// --------------------------------------------------------------
// --- begin of main code ---
// --------------------------------------------------------------
var steps = 0;
var firstTime = true;
var ume = 14;
var numberOfDirections = 8;
var totalRows = 25*ume;
var totalCols = 32*ume;
var antR=50;
var antC=360;
var NS4=((parseInt(navigator.appVersion)>=4)&&(navigator.appName.indexOf("Netscape")!=-1));
var IE4=((parseInt(navigator.appVersion)>=4)&&(navigator.appName.indexOf("Explorer")!=-1));
if (IE4 == true) {
  document.all.objAnt.style.top=antR;
  document.all.objAnt.style.left=antC;
  }
if (NS4 == true) {
  document.objAnt.top=antR;
  document.objAnt.left=antC;
  }
step();
// --------------------------------------------------------------
// --- end of main code ---
// --------------------------------------------------------------


