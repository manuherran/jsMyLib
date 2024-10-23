// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// fLongTodayDate
// fEngLongTodayDate
// -----------------------------------------------------------------------
function fLongTodayDate() {
  currentTime = new Date();
  var listaDays = new Array ("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
  var listaMonths = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
  var day = currentTime.getDay();
  var mon = currentTime.getMonth();
  var year = currentTime.getYear()
  if (year > 100 && year < 2000) {
    year = year + 1900;
  }
  return (listaDays[day] + ", " + currentTime.getDate() + " de " + listaMonths[mon] + " de " + year);
}
// -----------------------------------------------------------------------
function fEngLongTodayDate() {
  currentTime = new Date();
  var listaDays = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var listaMonths = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
  var day = currentTime.getDay();
  var mon = currentTime.getMonth();
  var year = currentTime.getYear()
  if (year > 100 && year < 2000) {
    year = year + 1900;
  }
  return (listaDays[day] + ", " + currentTime.getDate() + " " + listaMonths[mon] + " " + year);
}
// -----------------------------------------------------------------------
