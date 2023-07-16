// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// fCheckBrowser
// thisNavigator: navegador actual
// fOpenTextareaNav
// fPrintIfNav
// -----------------------------------------------------------------------
function fCheckBrowser() {
 	this.ver = navigator.appVersion;
 	this.dom = document.getElementById?1:0;
 	this.ie5 = (this.ver.indexOf("MSIE 5")>-1 && this.dom)?1:0;
 	this.ie4 = (document.all && !this.dom)?1:0;
 	this.ns5 = (this.dom && parseInt(this.ver) >= 5) ?1:0;
 	this.ns4 = (document.layers && !this.dom)?1:0;
 	this.brw = (this.ie5 || this.ie4 || this.ns4 || this.ns5);
 	this.ieoth = (!this.ie4 && !this.ie5 && navigator.appName.indexOf("Microsoft")>-1 && navigator.appName.indexOf("Internet")>-1 && navigator.appName.indexOf("Explorer")>-1)?1:0;
 	return this;
}
// -----------------------------------------------------------------------
function thisNavigator() {
  if (navigator.appName == 'Microsoft Internet Explorer') {
    return('<a href="http://www.microsoft.com/"><img border="0" src="/profesores/mherran/inc/img/explorer.gif"><font color="#FF0000">' + navigator.appName + '</font></a>');
  } else {
    if (navigator.appName == 'Netscape') {
      return('<a href="http://www.netscape.com/"><img border="0" src="/profesores/mherran/inc/img/netscape.gif"><font color="#FF0000">' + navigator.appName + '</font></a>');
    } else {
      return('<font color="#FF0000">' + navigator.appName + '</font>');
    }
  }
}
// -----------------------------------------------------------------------
function fOpenTextareaNav(textarea_name, class_name, cols_ie, cols_ns, rows_ie, rows_ns) {
  // Ej: script document.write(fOpenTextareaNav('textarea_comentarios', 'textDefault', 56, 26, 5, 5)) / script
  if (navigator.appName == 'Microsoft Internet Explorer') {
    cols = cols_ie;
    rows = rows_ie;
  } else {
    if (navigator.appName == 'Netscape') {
      cols = cols_ns;
      rows = rows_ns;
    } else {
      cols = cols_ie;
      rows = rows_ie;
    }
  }
  return ('<TEXTAREA name="')+textarea_name+('" cols="')+cols+('" rows="')+rows+('" class="')+class_name+('">');
}
// -----------------------------------------------------------------------
function fPrintIfNav(print_ie, print_ns) {
  if (navigator.appName == 'Microsoft Internet Explorer') {
    ret = print_ie;
  } else {
    if (navigator.appName == 'Netscape') {
      ret = print_ns;
    } else {
      ret = print_ie;
    }
  }
  return (ret);
}
// -----------------------------------------------------------------------
