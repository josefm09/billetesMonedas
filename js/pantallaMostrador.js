var vitrina = localStorage.getItem('vitrina')

var {BrowserWindow}=require('electron').remote
const app = require('electron').app
const path = require('path')
const url = require('url')

var btnGrupo = document.getElementsByClassName('btnGrupo')

var buscaGrupos = function(){
	localStorage.setItem("mostrador", this.value)
	PantallaGrupo= new BrowserWindow({width:1200,heigth:900});
	PantallaGrupo.loadURL(url.format({
		pathname: path.join(__dirname, '../vista/pantallaGrupos.html'),
		protocol: 'file',
		slashes: true
	}))
	PantallaGrupo.show()
}

var buscaVitrina = function() {
    console.log(vitrina)
	var url="http://museobillete.azurewebsites.net/api/Expo/"
	fetch(url+vitrina)
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
				<button class="btnGrupo" value="${datos.mostradores[dato].id}">Grupos</button> 
			</article>
			<hr>
			<br>
		`
		}
		for(let i=0;i<btnGrupo.length;i++){
			btnGrupo[i].addEventListener('click', buscaGrupos)
		}
		
	})
}

buscaVitrina();