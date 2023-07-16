// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// edadEnAnios
// esMenorDeEdad
// -----------------------------------------------------------------------
function edadEnAnios(anioNac, mesNac, diaNac) {
  hoy=new Date();
  anioHoy = hoy.getYear();
  mesHoy = hoy.getMonth();
  diaHoy = hoy.getUTCDate();
  edadAnios = anioHoy - anioNac - 1;
  if (mesHoy + 1 - mesNac < 0) //+1 porque los meses empiezan en 0 
     return edadAnios;
  if (mesHoy + 1 - mesNac > 0) 
     return edadAnios + 1;
  if (diaHoy - diaNac >= 0) 
     return edadAnios + 1;
}
// -----------------------------------------------------------------------
function esMenorDeEdad(anioNac, mesNac, diaNac, limiteAnios) {
  edad = edadEnAnios(anioNac, mesNac, diaNac);
  if (edad < limiteAnios)
    return true; 
  else
    return false;
}
// -----------------------------------------------------------------------




