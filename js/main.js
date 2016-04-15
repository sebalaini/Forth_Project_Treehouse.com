/*************
LIVE SEARCH
*************/

//Problem: when the user write in the input form he want to find a photo 
//Solution: Create a live search

//targets search bar and initiates function
$("#search").keyup(function() {
  var search = $(this).val();
$(".gallery img").each(function() {
    
  //use alt attribute to filter through alt attribute 
  var searchAttr = $(this).attr("alt");
        
  if(searchAttr.toLowerCase().search(search.toLowerCase()) > -1 ) {
    $(this).fadeIn(); 
    } 
  else {
    $(this).fadeOut();
    }
  });
});


/*************
HIDE PLACEHOLDER ON CLICK
*************/

$("input").each(function() {
    $(this).data('holder',$(this).attr('placeholder'));
    $(this).focusin(function(){
    $(this).attr('placeholder','');
  });

$(this).focusout(function(){
    $(this).attr('placeholder',$(this).data('holder'));
  });
});



/*************
OVERLAY VAR
*************/

//Problem: when the user click on an image goes to a dead end
//Solution: Create an overlay with the large image

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $videos = $("<iframe frameborder='0' allowfullscreen> </iframe>");
var $caption = $("<p></p>");
var $index;
var overlayActive = false;



/*************
BUTTONS TO OVERLAY
*************/

//add a buttons
$overlay.add().append("<button id='btnPrev'> < </button>");
$overlay.add().append("<button id='btnClose'> X </button>");
$overlay.add().append("<button id='btnNext'> > </button>");



/*************
OVERLAY
*************/

//Add overlay
$(".gallery").append($overlay);

//Capture the click on a image link 
$(".gallery a").click(function(event){
  event.preventDefault();
  
  loadInfo($(this));

  //Get the index of the item
  $index = $(this).index();
  
  //Show the overlay.
  $overlay.fadeIn();
    overlayActive = true;
});

  //.append a img or iframe to a overlay
function loadInfo(item){

if (item.hasClass("video")) {
  $overlay.append($videos);
    $image.detach();} 
  else {
$overlay.append($image);
  $videos.detach();
}


//A caption to overlay
$overlay.append($caption);

// Get item video path
  var videoLocation = item.attr("href");
  //Set overlay image src
  $videos.attr("src", videoLocation);

  // Get item image path
  var imageLocation = item.attr("href");
  //Set overlay image src
  $image.attr("src", imageLocation);
    
  //Get item child's span text
  var captionText = item.find('span').text();
  //Set overlay caption text
  $caption.text(captionText);
}



/*************
BUTTONS
*************/

//Problem: when the user open an image can't change it 
//Solution: Create a next and previous button

//prev next button function
var PrevNextBtns = function(prev) {

  //Set the condition
  if(!prev) { $index++; }
    else { $index--; }
  
  //Set the lenght of the gallery
  $galleryLength = $('.gallery a').length;

  //If the image is out of index, reset
  if ($index < 0) { $index = $galleryLength-1;}
    else if ($index == $galleryLength) { $index = 0; }
 
  //UpdateImage (imageLocation, imageCaption);
  indext2nthchild = parseInt($index)+1;
  loadInfo($('.gallery a:nth-child('+indext2nthchild+')'));
};



/*************
BUTTONS EVENT CLICK
*************/

$("#btnPrev").click(function(event){
  PrevNextBtns(true);
});

$("#btnNext").click(function(event){
  PrevNextBtns();
});

//Keyboard events
//Left : 37
//Right : 39
$( window ).keyup(function(e) {
  KeyboardKey = e.which;
  
  if(overlayActive){
    if (KeyboardKey == '37'){
      PrevNextBtns(true);} 
    else if (KeyboardKey == '39'){
      PrevNextBtns();}
  }
});

// Exit button
$("#btnClose").click(function(){
  $overlay.fadeOut();
    $videos.detach();
      overlayActive = false;
});



