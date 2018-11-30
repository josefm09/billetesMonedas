var {BrowserWindow}=require('electron').remote
const app = require('electron').app
const path = require('path')
const url = require('url')

var btnMostrador = document.getElementsByClassName('btnMostrador')

var buscaMostrador = function(){
	localStorage.setItem("vitrina", this.value)
	PantallaMostrador= new BrowserWindow({width:1200,heigth:900});
	PantallaMostrador.loadURL(url.format({
		pathname: path.join(__dirname, '../vista/pantallaMostrador.html'),
		protocol: 'file',
		slashes: true
	}))
	PantallaMostrador.show()
}

var buscaVitrina = function() {
	//personaje=document.getElementById('txtPersonaje').value;
	var url="http://museobillete.azurewebsites.net/api/Expo"
	fetch(url)
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
		for(let i=0;i<btnMostrador.length;i++){
			btnMostrador[i].addEventListener('click', buscaMostrador)
		}
		
	})
}

var btnBuscar = document.getElementById('btnBuscar')
btnBuscar.addEventListener('click',buscaVitrina)