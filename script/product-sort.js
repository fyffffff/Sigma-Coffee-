

//Price sort hight->low
  getHigherPriceSorted = function(selector, attrName) {
      return $(
        $(selector).toArray().sort(function(hb, ha){
            var haVal = parseInt(ha.getAttribute(attrName)),
                hbVal = parseInt(hb.getAttribute(attrName));
            return haVal - hbVal;
        })
      );
  };

//Price sort Low->High
  getLowerPriceSorted = function(selector, attrName) {
      return $(
        $(selector).toArray().sort(function(la, lb){
            var laVal = parseInt(la.getAttribute(attrName)),
                lbVal = parseInt(lb.getAttribute(attrName));
            return laVal - lbVal;
        })
      );
  };


var sorted_items_default = $('.shop-item-WP').clone();

function ProductSortFunc(){

	 var orderValue = $('#myselect option:selected').val();

	 if (orderValue=="HigherPrice"){
		$sorted_items_HigherPrice = getHigherPriceSorted('.shop-item-WP .feature-product-item', 'data-price').clone();
		$('.shop-item-WP').empty();
		$('.shop-item-WP').html( $sorted_items_HigherPrice );
	}


	 if (orderValue=="LowerPrice"){
		$sorted_items_LowerPrice = getLowerPriceSorted('.shop-item-WP .feature-product-item', 'data-price').clone();
		$('.shop-item-WP').empty();
		$('.shop-item-WP').html($sorted_items_LowerPrice);
	}

	 if (orderValue=="DefaultList"){
		window.location.replace("shop.html")
	}
	
}//ProductSortFunc END