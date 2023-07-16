// javascript:
// -----------------------------------------------------------------------
// jsMyLib Version: 0.1.2 Release Date: 20140227
// © Copyright 1999-2023 Manu Herrán
// Free download source code:
// https://manuherran.com/
// -----------------------------------------------------------------------
// jsMyLib_cookies_0001_setCookie
// jsMyLib_cookies_0001_getCookie
// jsMyLib_cookies_0001_showCookiesWarningMessage
// -----------------------------------------------------------------------
function jsMyLib_cookies_0001_setCookie(nombre, valor, tiempo) {
  domainName = jsMyLib_path_0001_currentDomainNameWithoutSubdomains();
  var expiration = (new Date(2037, 12, 31)).toGMTString();
  var thecookie = nombre + " = " + escape(valor) + "; expires=" + expiration+"; path=/; domain=."+domainName;
  document.cookie = thecookie;
}
// -----------------------------------------------------------------------
function jsMyLib_cookies_0001_getCookie(nombre) {
  var nombreCookie, valorCookie, cookie = null, cookies = document.cookie.split(';');
  for (i=0; i<cookies.length; i++){
    valorCookie = cookies[i].substr(cookies[i].indexOf('=') + 1);
    nombreCookie = cookies[i].substr(0,cookies[i].indexOf('=')).replace(/^\s+|\s+$/g, '');
    if (nombreCookie == nombre)
      cookie = unescape(valorCookie);
  }
  return cookie;
}
// -----------------------------------------------------------------------
function jsMyLib_cookies_0001_showCookiesWarningMessage() {
  jQuery(document).ready(function(){
    var msghtml='';
    if( navigator.userAgent.indexOf( "AdobeAIR" ) < 0 ) {
      if(!jsMyLib_cookies_0001_getCookie('CookiesWarningMessageShownAndAccepted')){
        if(jQuery('body').hasClass('ca')){
          msghtml = msghtml + '<div class="cssMyLib_CookiesWarningMessage-all" id="cssMyLib_CookiesWarningMessage-all">';
          msghtml = msghtml + '<div class="cssMyLib_CookiesWarningMessage-table">';
          msghtml = msghtml + '<p>Aquesta web utilitza "cookies" pr&ograve;pies i de tercers per oferir-te una millor experi&egrave;ncia i servei. Al navegar o utilitzar els nostres serveis, acceptes l\'&uacute;s que fem de les "cookies". De tota manera, pots canviar la configuraci&oacute; de "cookies" en qualsevol moment.</p>';
          msghtml = msghtml + '<ul>';
          msghtml = msghtml + '<li><a class="a1" id="hide-cssMyLib_CookiesWarningMessage-all" href="#">Accepto</a></li>';
          //msghtml = msghtml + '<li><a class="a2" href="/ca-politica-cookies.php" target="_blank">M&eacute;s informaci&oacute;</a></li>';
          msghtml = msghtml + '</ul>';
          msghtml = msghtml + '</div>';
          msghtml = msghtml + '</div>';     
        } else {
          msghtml = msghtml + '<div class="cssMyLib_CookiesWarningMessage-all" id="cssMyLib_CookiesWarningMessage-all">';
          msghtml = msghtml + '<div class="cssMyLib_CookiesWarningMessage-table">';
          msghtml = msghtml + '<p>El sitio web ' + jsMyLib_path_0001_currentDomainNameWithoutSubdomains() + ' utiliza "cookies" propias y de terceros para ofrecerte una mejor experiencia y servicio. Al navegar o utilizar nuestros servicios, aceptas el uso que hacemos de las "cookies". Sin embargo, puedes cambiar la configuraci&oacute;n de "cookies" en cualquier momento.</p>';
          msghtml = msghtml + '<ul>';
          msghtml = msghtml + '<li><a class="a1" id="hide-cssMyLib_CookiesWarningMessage-all" href="#">Acepto</a></li>';
          //msghtml = msghtml + '<li><a class="a2" href="/es-politica-cookies.php" target="_blank">M&aacute;s informaci&oacute;n</a></li>';
          msghtml = msghtml + '</ul>';
          msghtml = msghtml + '</div>';
          msghtml = msghtml + '</div>';
        }
        jQuery("body").prepend(msghtml);
      }
    }
    jQuery("#hide-cssMyLib_CookiesWarningMessage-all").click(function(){
      jQuery("#cssMyLib_CookiesWarningMessage-all").hide();
      jsMyLib_cookies_0001_setCookie('CookiesWarningMessageShownAndAccepted', 'hide', 'null');
    });
  }); 
}
// -----------------------------------------------------------------------
