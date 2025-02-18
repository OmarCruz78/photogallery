/* hoja script*/
/*Body onload*/ 
/* body onload*/
function tabindex(){
    const currentImages = document.querySelectorAll(".carrousel img");
    for (let i = 0; i < currentImages.length; i++){
        currentImages[i].setAttribute("tabindex","0");
      console.log(i)
    }
}

function upDate(previewPic){
    const imagen = document.getElementById('image');
    imagen.style.backgroundImage = "url('" + previewPic.src + "')";
    imagen.innerHTML = previewPic.alt;
    imagen.style.display = "block";
    imagen.style.zIndex = "999";
    imagen.style.position = "absolute";
    imagen.style.top = "0";
    imagen.style.left = "0";
    imagen.style.right = "0";
    imagen.style.bottom = "0";
    imagen.style.margin = "auto";
    imagen.style.width = "650px";
    imagen.style.height = "500px";

  
}

function upDate2(previewPic){ // Corrected and improved
    const imagen = document.getElementById('image');
    imagen.style.backgroundImage = "url('" + previewPic.src + "')";
    imagen.style.display = "block";
    imagen.style.zIndex = "999";
    imagen.style.position = "absolute";
    imagen.style.top = "0";
    imagen.style.left = "0";
    imagen.style.right = "0";
    imagen.style.bottom = "0";
    imagen.style.margin = "auto";
  imagen.style.width = "650px";
    imagen.style.height = "500px";
  console.log(imagen.src);
}

function unblur(){
    // Add code here to unblur images if needed
}

function unDo(){
    const imagen = document.getElementById('image');
    imagen.innerHTML = 'Hover over an image below to display here.';
    imagen.style.backgroundImage = "url('https://i.ibb.co/RKYDgT2/collage-naupa-iglesia.jpg')";
}

function unDo2(){
  header = document.getElementById('header');
  imagen = document.getElementById('image');
  imagen.style.width = "550px";
  imagen.style.height = "50px";
  imagen.style.display ="block";
  imagen.style.position = "relative";
  imagen.style.margin = "2em auto"; 
  imagen.style.backgroundImage = "url('https://i.ibb.co/RKYDgT2/collage-naupa-iglesia.jpg')";
    imagen.innerHTML = "Hover over an image below to display here.";
imagen.style.fontWeight="bold";
}
