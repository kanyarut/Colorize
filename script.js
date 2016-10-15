javascript: (function () { 
  var elem = document.querySelectorAll(["body","html","div","section","header","footer","img"]); 
  for( index=0; index < elem.length; index++ ) {
       removeGrayscale(elem[index]);
  }
  function removeGrayscale( element ){  
	  var filter = window.getComputedStyle(element,null).getPropertyValue("filter");
	  if(filter.startsWith('grayscale')){
		element.style.setProperty("filter", "none", "important")
	  }
  }
}());
