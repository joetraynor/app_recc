var array = [];
var cooking = "images/cookingimage.png";
var cookingapp = "images/cookingapp.png";
var fashion = "images/fashionimage.png";
var fashionapp = "images/fashionapp.png";
var sport = "images/sportimage.png";
var sportapp = "images/sportapp.png";
var music = "images/musicimage.png";
var musicapp = "images/musicapp.png";
var game = "images/gamesimage.png";
var gameapp = "images/gamesapp.png";
var gps = "images/gpsimage.png";
var gpsapp = "images/gpsapp.png";
var kids = "images/kidsimage.png";
var kidsapp = "images/kidsapp.png";
var exercise = "images/exerciseimage.png";
var exerciseapp = "images/exerciseapp.png";
var design = "images/designimage.png";
var designapp = "images/designapp.png";
var social = "images/socialimage.png";
var socialapp = "images/socialapp.png";
var streaming = "images/streamingimage.png";
var streamingapp = "images/streamingapp.png";
var travel = "images/travelimage.png";
var travelapp = "images/travelapp.png";
var videocall = "images/videocallimage.png";
var videocallapp = "images/videocallapp.png";
var familyhol = "images/familyholimage.png";
var familyholapp = "images/familyholapp.png";
var lifestyle = "images/lifestyleimage.png";
var lifestyleapp = "images/lifestyleapp.png";
var finance = "images/financeimage.png";
var financeapp = "images/financeapp.png";
var shopping = "images/shoppingimage.png";
var shoppingapp = "images/shoppingapp.png";

function storeImageCooking () {
  // array.push(document.getElementById('image1').src);
  var cookingElement = document.getElementById('cookingImg');
  cookingElement.src = cookingapp;
  array.push(cookingapp);
  cookingElement.style.border="8px solid white";
  cookingElement.src = cooking;
}

function storeImageFashion () {
  var fashionElement = document.getElementById('fashionImg');
  fashionElement.src = fashionapp;
  array.push(fashionapp);
  fashionElement.style.border="8px solid white";
  fashionElement.src = fashion;
}

function storeImageSport () {
  var sportElement = document.getElementById('sportImg');
  sportElement.src = sportapp;
  array.push(sportapp);
  sportElement.style.border="8px solid white";  
  sportElement.src = sport;
}

function storeImageMusic () {
  var musicElement = document.getElementById('musicImg');
  musicElement.src = musicapp;
  array.push(musicapp);
  musicElement.style.border="8px solid white";  
  musicElement.src = music;
}

function storeImageGame () {
  var gameElement = document.getElementById('gameImg');
  gameElement.src = gameapp;
  array.push(gameapp);
  gameElement.style.border="8px solid white";  
  gameElement.src = game;
}

function storeImageGPS () {
  var gpsElement = document.getElementById('gpsImg');
  gpsElement.src = gpsapp;
  array.push(gpsapp);
  gpsElement.style.border="8px solid white";  
  gpsElement.src = gps;
}

function storeImageKids () {
  var kidsElement = document.getElementById('kidsImg');
  kidsElement.src = kidsapp;
  array.push(kidsapp);
  kidsElement.style.border="8px solid white";  
  kidsElement.src = kids;
}

function storeImageExercise () {
  var exerciseElement = document.getElementById('exerciseImg');
  exerciseElement.src = exerciseapp;
  array.push(exerciseapp);
  exerciseElement.style.border="8px solid white";  
  exerciseElement.src = exercise;
}

function storeImageDesign () {
  var designElement = document.getElementById('designImg');
  designElement.src = designapp;
  array.push(designapp);
  designElement.style.border="8px solid white";  
  designElement.src = design;
}

function storeImageSocial () {
  var socialElement = document.getElementById('socialImg');
  socialElement.src = socialapp;
  array.push(socialapp);
  socialElement.style.border="8px solid white";  
  socialElement.src = social;
}

function storeImageStreaming () {
  var streamingElement = document.getElementById('streamingImg');
  streamingElement.src = streamingapp;
  array.push(streamingapp);
  streamingElement.style.border="8px solid white";  
  streamingElement.src = streaming;
}

function storeImageTravel () {
  var travelElement = document.getElementById('travelImg');
  travelElement.src = travelapp;
  array.push(travelapp);
  travelElement.style.border="8px solid white";  
  travelElement.src = travel;
}

function storeImageVideoCall () {
  var videocallElement = document.getElementById('videocallImg');
  videocallElement.src = videocallapp;
  array.push(videocallapp);
  videocallElement.style.border="8px solid white";  
  videocallElement.src = videocall;
}

function storeImageFamilyHol () {
  var familyholElement = document.getElementById('familyholImg');
  familyholElement.src = familyholapp;
  array.push(familyholapp);
  familyholElement.style.border="8px solid white";  
  familyholElement.src = familyhol;
}

function storeImageLifestyle () {
  var lifestyleElement = document.getElementById('lifestyleImg');
  lifestyleElement.src = lifestyleapp;
  array.push(lifestyleapp);
  lifestyleElement.style.border="8px solid white";  
  lifestyleElement.src = lifestyle;
}

function storeImageFinance () {
  var financeElement = document.getElementById('financeImg');
  financeElement.src = financeapp;
  array.push(financeapp);
  financeElement.style.border="8px solid white";  
  financeElement.src = finance;
}

function storeImageShopping () {
  var shoppingElement = document.getElementById('shoppingImg');
  shoppingElement.src = shoppingapp;
  array.push(shoppingapp);
  shoppingElement.style.border="8px solid white";  
  shoppingElement.src = shopping;
}

function changeImage() {
  // document.getElementsByTagName('img').each.style.border="0px solid white";
  document.getElementById('cookingImg').src = array[0];
  document.getElementById('fashionImg').src = array[1];
  document.getElementById('sportImg').src = array[2];
  document.getElementById('musicImg').src = array[3];
  document.getElementById('gameImg').src = array[4];
  document.getElementById('gpsImg').src = array[5];
  document.getElementById('kidsImg').src = array[6];
  document.getElementById('exerciseImg').src = array[7];
  document.getElementById('designImg').src = array[8];
  document.getElementById('socialImg').src = array[10];
  document.getElementById('streamingImg').src = array[11];
  document.getElementById('travelImg').src = array[12];
  document.getElementById('videocallImg').src = array[13];
  document.getElementById('familyholImg').src = array[14];
  document.getElementById('lifestyleImg').src = array[15];
  document.getElementById('financeImg').src = array[16];
  document.getElementById('shoppingImg').src = array[17];

  var images = document.getElementsByTagName('img');  
  for (i=0; i<images.length; i++) {
    images[i].style.border="8px solid black";
  }
}


// console.log('images:'+images);








