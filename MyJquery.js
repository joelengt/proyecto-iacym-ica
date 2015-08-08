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

// Seguimiento en google
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-63286759-1', 'auto');
  ga('send', 'pageview');




