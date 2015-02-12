# Social share links 

Pequeño conjunto de enlaces a redes sociales (Twitter, Facebook, Tumblr, Linkedin, Google+) para compartir contenido sin usar los botones por defecto.

La razón de ser de este proyecto la pueden encontrar en [Enlaces para compartir contenido sobre botones sociales](http://manuelitox.com/notas/9-enlaces-para-compartir-contenido-sobre-botones-sociales).

## Instalación: 

* Clonar el repositorio: 
		
<code>
	$ git clone https://github.com/manuelitox/social-share-links.git
</code>	
	
## Cómo usarlo: 


El proyecto consta de tres archivos fundamentales
	
* hoja de estilo **(No es Requerido)**. 

*Sí deseas utilizar los estilos por defecto debes agregarla.*

<pre>
<code>
	&lt;link rel="stylesheet" type="text/css" href="assets/css/social-share-links.css"&gt;	
</code>
</pre>

* componente HTML **(Es Requerido)**.

<pre>
<code>
	&lt;div class='social-share-links'&gt;
		&lt;!-- stuff --&gt;	
	&lt;/div&gt;		
</code>
</pre>

* Librería JS **(No es Requerido)**.

<pre>
<code>
	&lt;script src="assets/js/build/social-share-links.min.js"&gt;&lt;/script&gt;
	&lt;script&gt;
		var socialLinks = new PopUp();
		socialLinks.generate();		
	&lt;/script&gt;	
</code>
</pre>

### Con ventanas emergentes:

Para que las opciones de compartir se abran en una ventana emergente, debes agregar y activar la Libería JS.

### Sin ventanas emergentes: 

Tan solo debes borrar la llamada y activación de la Librería JS.

