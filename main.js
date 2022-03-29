sound = "";

function alert(){
    sound = createSound('1985_ring.mp3');
    sound.hide();
}


function draw(){
    image(video, 0, 0, 480, 380);

    if(person >= 0){
  document.getElementById("baby").innerHTML = "Baby Detected";
  alert = false;
}
else{
    document.getElementById("baby").innerHTML = "Baby NOT Detected";
    alert = true;
}

}

