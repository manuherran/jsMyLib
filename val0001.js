// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// isDomain
// isEmail
// isAlphanumeric
// isNumeric
// isEmpty
// containsChar
// isNumber
// isGT
// isLT
// checkboxAll
// stripHtmlTags
// -----------------------------------------------------------------------
function isDomain(campo) {
  if (/^\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(campo))
    return true;
  else
    return false;
}
// -----------------------------------------------------------------------
function isEmail(campo) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(campo))
    return true;
  else
    return false;
}
// -----------------------------------------------------------------------
function isAlphanumeric(campo) {
  re = new RegExp("[^A-Za-z0-9_]")
  if (re.test(campo))
    return false;
  else
    return true;
}
// -----------------------------------------------------------------------
function isNumeric(campo) {
  re = new RegExp("[^0-9]")
  if (re.test(campo))
    return false;
  else
    return true;
}
// -----------------------------------------------------------------------
function isEmpty(campo) {
  return (campo == '');
}
// -----------------------------------------------------------------------
function containsChar(campo, caracter) {
  var length = campo.length;
  var i = 0;
  while (i < length) {
    if (campo.charAt(i) == caracter) return true;
    i++;
  }
  return false;
}
// -----------------------------------------------------------------------
function isNumber(campo) {
  var length = campo.length;
  var i = 0;
  while (i < length) {
    if (
      (campo.charAt(i) != "0") && 
      (campo.charAt(i) != "1") && 
      (campo.charAt(i) != "2") && 
      (campo.charAt(i) != "3") && 
      (campo.charAt(i) != "4") && 
      (campo.charAt(i) != "5") && 
      (campo.charAt(i) != "6") && 
      (campo.charAt(i) != "7") && 
      (campo.charAt(i) != "8") && 
      (campo.charAt(i) != "9")
      )
      return false; 
    i++;
  }
  return true;
}
// -----------------------------------------------------------------------
function isGT(campo, valor) {
  if (campo > valor)
    return true; 
  else
    return false;
}
// -----------------------------------------------------------------------
function isLT(campo, valor) {
  if (campo < valor)
    return true; 
  else
    return false;
}
// -----------------------------------------------------------------------
function checkboxAll() {
  for (var i=0;i<document.forms[0].elements.length;i++) {
    var myItem = document.forms[0].elements[i];
    if (myItem.name != 'selectall')
      myItem.checked = document.forms[0].selectall.checked;
  }
}
// -----------------------------------------------------------------------
function stripHtmlTags(cadena) {
  var regExp = /<\S[^>]*>/g;
  // preg_replace("/<.+?>/", "", $cadena);
  return cadena.replace(regExp, ""); 
}
// -----------------------------------------------------------------------

