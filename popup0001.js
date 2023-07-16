// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// Uses: browser0001 and str0001
// -----------------------------------------------------------------------
// fPopUpInit0001
// showPopup
// closePopup
// fMakeObj
// fWritePopUp
// fPopMouseMove
// -----------------------------------------------------------------------
function fPopUpInit0001() {
  objPopUp = new fMakeObj('divPopUp0001');
  if (brw.ns4) {
    document.captureEvents(Event.MOUSEMOVE);
  }
  document.onmousemove = fPopMouseMove;
  isLoaded = true;
}	
// -----------------------------------------------------------------------
function showPopup(type, msg) {
  var shiftX, shiftY;

  if (isLoaded) {
    if (type == 'img_big') {
      shiftX = 50;
      shiftY = -20;
      freeX = 400;
      freeY = 300;
      //objPopUp.css.width = 1; 
    } else if (type == 'txt_small') {
      shiftX = 5;
      shiftY = -2;
      freeX = 40;
      freeY = 30;
      //objPopUp.css.width = 300;
    } else {
      shiftX = 50;
      shiftY = -20;
      freeX = 40;
      freeY = 30;
      //objPopUp.css.width = 300;
    }
    msg = fReplaceString(msg, '###:::Quote:::###', '"');

    //msg = navigator.appName+'-'+navigator.appVersion+'-'+brw.brw+'-'+brw.ie5+msg;
    //msg = '('+coordX+','+coordY+'_'+document.body.scrollTop+')'+' '+'('+screen.width+','+screen.height+')'+msg;
    //msg = type+' '+freeX+' '+msg;

    if (type == 'img_big') {
     	objPopUp.writeIt('<span class="estiloPopUp0001imgbig">'+msg+'</span>');
    } else if (type == 'txt_small') {
     	objPopUp.writeIt('<span class="estiloPopUp0001txtsmall">'+msg+'</span>');
    } else {
     	objPopUp.writeIt('<span class="estiloPopUp0001imgbig">'+msg+'</span>');
    }
   	coordX = coordX + shiftX;
    coordY = coordY + shiftY;
   	if (brw.ie5 || brw.ieoth) {
      coordY = coordY + document.body.scrollTop;
    }
    if (coordX + freeX > screen.width) {
      coordX = freeX;
    }
    //if (coordY + freeY > screen.height) {
    //  coordY = coordY - freeY;
    //}
   	objPopUp.css.left = coordX;
    objPopUp.css.top = coordY;
   	objPopUp.css.visibility = 'visible';
  }
}
// -----------------------------------------------------------------------
function closePopup() {
 	if (isLoaded) {
    objPopUp.css.visibility = 'hidden';
  }
}
// -----------------------------------------------------------------------
function fMakeObj(obj) {
 	this.css = brw.dom? document.getElementById(obj).style:brw.ie4?document.all[obj].style:brw.ns4?document.layers[obj]:0;	
 	this.wref = brw.dom? document.getElementById(obj):brw.ie4?document.all[obj]:brw.ns4?document.layers[obj].document:0;		
 	this.writeIt = fWritePopUp;																
 	return this;
}
// -----------------------------------------------------------------------
function fWritePopUp(text) {
  if (brw.ns4) {
    this.wref.write(text);
    this.wref.close();
  } else {
    this.wref.innerHTML = text;
  }
}
// -----------------------------------------------------------------------
function fPopMouseMove(e) {
  coordX = brw.ns4?e.pageX:event.x; 
  coordY = brw.ns4?e.pageY:event.y;
}
// -----------------------------------------------------------------------
