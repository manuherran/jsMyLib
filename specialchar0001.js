// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// wA
// wAA
// wY
// wYY
// -----------------------------------------------------------------------
function wA() {
  if (navigator.appName == 'Microsoft Internet Explorer') {
      document.write('&#257;');
  } else {
    if (navigator.appName == 'Netscape') {
      document.write('&#227;'); //226
    } else {
      document.write('&#257;');
    }
  }
}
// -----------------------------------------------------------------------
function wAA() {
  if (navigator.appName == 'Microsoft Internet Explorer') {
      document.write('&#256;');
  } else {
    if (navigator.appName == 'Netscape') {
      document.write('&#195;'); //194
    } else {
      document.write('&#256;');
    }
  }
}
// -----------------------------------------------------------------------
function wY() {
  if (navigator.appName == 'Microsoft Internet Explorer') {
    document.write('&#375;');
  } else {
    if (navigator.appName == 'Netscape') {
      document.write('&#253;');
    } else {
      document.write('&#375;');
    }
  }
}
// -----------------------------------------------------------------------
function wYY() {
  if (navigator.appName == 'Microsoft Internet Explorer') {
    document.write('&#374;');
  } else {
    if (navigator.appName == 'Netscape') {
      document.write('&#221;');
    } else {
      document.write('&#374;');
    }
  }
}
// -----------------------------------------------------------------------
