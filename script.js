/* body onload*/
function tabindex(){
currentImages = document.querySelectorAll(".carrousel img")
  for ( var i=0; i < currentImages.length; i++){
    currentImages[i].setAttribute("tabindex","0");
  }
}

function upDate(previewPic){
imagen = document.getElementById('image');
main = document.getElementById('main');
imagen.style.backgroundImage = "url('" + previewPic.src + "')";               
imagen.innerHTML=previewPic.alt;
}

function upDate2(previewPic){
  imagen = document.getElementById('image');
  imagen.style.display = "block";
  imagen.style.z-index = "999";
imagen.style.position = "absolute";               
imagen.style.top = "0";
imagen.style.left = "0";
  imagen.style.right = "0";
   imagen.style.leftt = "0";
  imagen.style.margin = "auto";
main.style.margin = "auto";  
  top: 0;
left: 0;
right: 0;
bottom: 0;
margin: auto;
}


function unblur(){
           /* currentImages = document.querySelectorAll(".carrousel img")
  for ( var i = 0; i < currentImages.length; i++){
    currentImages[i].style.height = "50px";*/
	}

function unDo(){
imagen = document.getElementById('image');
imagen.innerHTML='Hover over an image below to display here.';
imagen.style.backgroundImage = "url('https://i.ibb.co/RKYDgT2/collage-naupa-iglesia.jpg')";
	}

		
function showImagen(){
  imagen = document.getElementById('image');
    imagen.style.display = "block";
  imagen.style.z-index = "999";
imagen.style.position = "absolute";               
imagen.style.top = "0";
imagen.style.left = "0";
  imagen.style.right = "0";
   imagen.style.leftt = "0";
  imagen.style.margin = "auto";
main.style.margin = "auto";  
  
}	
