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
        
    if(searchAttr.toLowerCase().search(search.toLowerCase()) > 0 ) {
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

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$(".gallery").append($overlay);

//Capture the click on a image link 
$(".gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  
  //Show the overlay.
  $overlay.show();
  
  //Get child's alt attribute and set caption
  var captionText = $(this).find('span').text();
  $caption.text(captionText);
});

//When overlay is clicked hide it
$overlay.click(function(){
  $overlay.hide();
});



//Problem: Miss the next and prev. buttons
//Solution: Create a buttons





