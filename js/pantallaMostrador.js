//var vitrina = "V" + localStorage.getItem('vitrina')
var vitrina = localStorage.getItem('vitrina')

var buscaVitrina = function() {
    //personaje=document.getElementById('txtPersonaje').value;
    console.log(vitrina)
	var url="http://museobillete.azurewebsites.net/api/Expo/"
	fetch(url+vitrina)
	.then(datos=>datos.json())
	.then(datos=>{
		var foto = ''
		document.getElementById('abajo').innerHTML=''
		for(let dato in datos){
			foto = datos[dato].imagenFondoUrl
		document.getElementById('abajo').innerHTML += `
			<article class="abajoIzquierda">
					<img src="${foto}" class="imgFoto">
			</article>
			<article class="abajoDerecha">
				<div class="txtNombre">${datos[dato].titulo}</div>
				<button class="btnMostrador" value="${datos[dato].id}">Mostradores</button> 
			</article>
			<hr>
			<br>
		`
		}
		/*for(let i=0;i<btnMostrador.length;i++){
			btnMostrador[i].addEventListener('click', buscaMostrador)
		}*/
		
	})
}

buscaVitrina();