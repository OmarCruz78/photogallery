/* body onload*/
/* body onload*/
function tabindex(){
    const currentImages = document.querySelectorAll(".carrousel img");
    for (let i = 0; i < currentImages.length; i++){
        currentImages[i].setAttribute("tabindex","0");
    }
}

function upDate(previewPic){
    const imagen = document.getElementById('image');
    imagen.style.backgroundImage = "url('" + previewPic.src + "')";
    imagen.innerHTML = previewPic.alt;
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
}

function unblur(){
    // Add code here to unblur images if needed
}

function unDo(){
    const imagen = document.getElementById('image');
    imagen.innerHTML = 'Hover over an image below to display here.';
    imagen.style.backgroundImage = "url('https://i.ibb.co/RKYDgT2/collage-naupa-iglesia.jpg')";
}
