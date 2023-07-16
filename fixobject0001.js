// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// oReplaceCharInObject
// oRemoveSpacesInObject
// oFixEmailInObject
// -----------------------------------------------------------------------
function oReplaceCharInObject(object, carBuscar, carReemplazar) {
  object.value = fReplaceChar(object.value, carBuscar, carReemplazar);
  object.focus();
}
// -----------------------------------------------------------------------
function oRemoveSpacesInObject(object) {
  object.value = fTrim(object.value);
  object.focus();
}
// -----------------------------------------------------------------------
function oFixEmailInObject(object) {
  oReplaceCharInObject(object, "(", "")
  oReplaceCharInObject(object, ")", "")
  oReplaceCharInObject(object, "<", "")
  oReplaceCharInObject(object, ">", "")
  oReplaceCharInObject(object, "$", "")
  oReplaceCharInObject(object, "%", "")
  oReplaceCharInObject(object, ",", ".")
  oReplaceCharInObject(object, ";", ".")
  oReplaceCharInObject(object, ":", ".")
  oRemoveSpacesInObject(object);
  object.focus();
}
// -----------------------------------------------------------------------



