  $(window).load(function() {
  $('#loadi').hide();  
  $('.flexslider').flexslider({
      controlsContainer: '.flex-container'
  });
});
var $form= $('#formulario'),
	$button= $('#mostrar-form'),
	$post =$('.item').first();
function mostrarFormulario()
{
	$form.slideToggle();
	return false;
	// Al retornarlo false evita el scroll de la pagina
	// del link original
	// SlideToggles es que lo hace oculto o muestra
}
// EVENTOS
$button.click(mostrarFormulario);
//Zopim Live Chat Script
window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set._.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="//v2.zopim.com/?35Nri9XIODASZnic2rYZiJVNL6Kqypi6";z.t=+new Date;$.type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
// Seguimiento en google
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-63286759-1', 'auto');
  ga('send', 'pageview');




