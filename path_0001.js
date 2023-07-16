// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// jsMyLib_path_0001_currentDomainNameWithoutSubdomains
// -----------------------------------------------------------------------
function jsMyLib_path_0001_currentDomainNameWithoutSubdomains() {
  var dominio = window.location.hostname;
  var AR_dominio = dominio.split(".");
  while(AR_dominio.length > 2){
    AR_dominio.shift();
  }
  var ret = AR_dominio.join(".");
  return ret;
}
// -----------------------------------------------------------------------

