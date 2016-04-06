//Problem: when the user write in the input form he want to find a photo 
//Solution: Create a live search

//targets search bar and initiates function
$("#search").keyup(function() {
    var search = $(this).val();
    console.log(search);
    $(".gallery img").each(function() {
    
    //use alt attribute to filter through alt attribute
    console.log($(this).attr("alt").search); 
        var searchAttr = $(this).attr("alt");
        
    if(searchAttr.toLowerCase().search(search.toLowerCase()) > -1 ) {
        $(this).show();
        } 
    else {
        $(this).fadeOut();
        }
  });
});



//Problem: when the user click on an image goes to a dead end
//Solution: Create an overlay with the large image

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var selected;

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$(".gallery").append($overlay);

//Capture the click on a image link 
$(".gallery a").click(function(event){
  event.preventDefault();
  
  loadInfo($(this));
  
  //Show the overlay.
  $overlay.show();
});


function loadInfo(item){
    var imageLocation = item.attr("href");
    //Update overlay with the image linked in the link
    $image.attr("src", imageLocation);
    
    //Get child's span element text and set caption
    var captionText = item.find('span').text();
    $caption.text(captionText);
    
    //Guardamos el index de esta imagen como la seleccionada
    selected = item.index();
    
}

//When overlay is clicked hide it
$overlay.click(function(){
  $overlay.hide();
});





