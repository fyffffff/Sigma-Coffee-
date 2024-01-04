$(document).ready(function(){
  $("#ProductSearchFilter").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".feature-product-item .product-intro").filter(function() {
      $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});