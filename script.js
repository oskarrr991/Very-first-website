var x = document.getElementById('myAudio'); 
var y = true;
var volumeslider;
var visib = true;

function playAudio() { 
  if(y) {
    x.play();
    y = !y;
    document.getElementById('play').src = 'photos/pause.png';
  } else {
    x.pause();
    y = !y;
    document.getElementById('play').src = 'photos/play.png';
  }
}
function volume_(show) {
  if (show) {
    volumeslider = document.getElementById('volumeslider');
    volumeslider.addEventListener('mousemove', setvolume);
    document.getElementById('volumeslider').style.visibility = 'visible';
  } else {
    document.getElementById('volumeslider').style.visibility = 'hidden';
  }
}

function setvolume(){
  myAudio.volume = volumeslider.value / 100;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName('mySlides');
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';  
  }
  x[slideIndex-1].style.display = 'block';  
}
//----------------------------------------------------------------------------
var slideIndex2 = 1;
showDivs2(slideIndex2);

function plusDivs2(m) {
  showDivs2(slideIndex2 += m);
}

function showDivs2(m) {
  var i;
  var x = document.getElementsByClassName('mySlides2');
  if (m > x.length) {
    slideIndex2 = 1
  }
  if (m < 1) {
    slideIndex2 = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';  
  }
  x[slideIndex2-1].style.display = 'block';  
}

function slider2(show1)
{
  console.log("huj");
  if(show1){
    document.getElementsByClassName('img_content').style.visibility = 'visible';
  }
  
  else{
      document.getElementsByClassName('img_content').style.visibility = 'hidden';
    }
}