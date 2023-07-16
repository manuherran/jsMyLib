// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// fReplaceString
// -----------------------------------------------------------------------
function fReplaceString(strAll, strBuscar, strReemplazar) {
  var ret = strAll;
  var ptr = 0;
  while (ret.indexOf(strBuscar) > -1) {
    ptr = ret.indexOf(strBuscar);
    ret = ret.substring(0, ptr) + strReemplazar + ret.substring(ptr + strBuscar.length, ret.length);
  } 
  return ret;
}
// -----------------------------------------------------------------------
