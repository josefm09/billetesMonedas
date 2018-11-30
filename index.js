
var personaje=""

var buscaPersonaje = function() {
	personaje=document.getElementById('txtPersonaje').value;
	var url="https://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="
	fetch(url+personaje)
	.then(datos=>datos.json())
	.then(datos=>{
		var cantidad = datos.data.count
		var foto = ''
		document.getElementById('abajo').innerHTML=''
		for(let i=0;i<cantidad;i++){
			foto = datos.data.results[i].thumbnail.path+"."+
			   datos.data.results[i].thumbnail.extension
		document.getElementById('abajo').innerHTML += `
			<article class="abajoIzquierda">
					<img src="${foto}" class="imgFoto">
			</article>
			<article class="abajoDerecha">
				<div class="txtNombre">${datos.data.results[i].name}</div>
				<button class="btnComics" value="">Comics</button> 
			</article>
			<hr>
			<br>
		`
		}
		
	})
}

var btnBuscar = document.getElementById('btnBuscar')
btnBuscar.addEventListener('click',buscaPersonaje)