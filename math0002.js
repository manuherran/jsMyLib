// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// sumCirc2
// sumCirc6
// sumCirc12
// -----------------------------------------------------------------------
function sumCirc2(maximo,val1,val2) {
  var ret=val1+val2;
  if (ret < 0) ret = ret + maximo;
  ret=ret % maximo;
  if (ret == 0) ret=maximo;
  if (ret > maximo) alert('Error');
  if (ret <= 0) alert('Error');
  return ret;
}
// -----------------------------------------------------------------------
function sumCirc6(maximo,v1,v2,v3,v4,v5,v6) {
  var ret=0;
  ret=(v1+v2+v3+v4+v5+v6) % maximo;
  if (ret == 0) ret=maximo;
  if (ret > maximo) alert('Error');
  if (ret <= 0) alert('Error');
  return ret;
}
// -----------------------------------------------------------------------
function sumCirc12(maximo,v1,v2,v3,v4,v5,v6,v7,v8,v9,v10,v11,v12) {
  var ret=0;
  ret=(v1+v2+v3+v4+v5+v6+v7+v8+v9+v10+v11+v12) % maximo;
  if (ret == 0) ret=maximo;
  if (ret > maximo) alert('Error');
  if (ret <= 0) alert('Error');
  return ret;
}
// -----------------------------------------------------------------------
