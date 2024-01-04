//View more button  - Blog page
$(document).ready(function(){
    $(".blog-item-WP .blog-item").slice(0, 4).show(); 
    $("#load-more-btn").on("click", function(e){
      e.preventDefault();
      $(".blog-item-WP .blog-item:hidden").slice(0, 4).slideDown();
      if($(".blog-item-WP .blog-item:hidden").length == 0) {
        $("#load-more-btn").text("No More Posts");
      }
    });
  })