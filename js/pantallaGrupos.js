var mostrador = localStorage.getItem('mostrador')

var buscaGrupos = function() {
	var url="http://museobillete.azurewebsites.net/api/Expo/"
	fetch(url+mostrador)
	.then(datos=>datos.json())
	.then(datos=>{
		var foto = ''
		document.getElementById('abajo').innerHTML=''
		for(let dato in datos.mostradores){
			foto = datos.mostradores[dato].imagenFondoUrl
		document.getElementById('abajo').innerHTML += `
			<article class="abajoIzquierda">
					<img src="${foto}" class="imgFoto">
			</article>
			<article class="abajoDerecha">
				<div class="txtNombre">${datos.mostradores[dato].titulo}</div>
				<button class="btnMostrador" value="${datos.mostradores[dato].id}">Mostradores</button> 
			</article>
			<hr>
			<br>
		`
		}
		for(let i=0;i<btnMostrador.length;i++){
			btnMostrador[i].addEventListener('click', buscaMostrador)
		}
		
	})
}

buscaGrupos();