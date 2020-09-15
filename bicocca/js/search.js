var source = null;
var result = null;

const inputHandler = function(e) {
inputHandlerMethod(e);
}

function inputHandlerMethod(e) {
	
   if (e == null || e.target.value == null || e.target.value.length == 0)
  {
	  result.innerHTML = "";  
	  result.style.display = 'none';  
	  return;
  }
  
  	  result.style.display = 'block';  
    var inputtext = e.target.value;
  var inputtext_words = inputtext.trim().split(" ");


	result.innerHTML = inputtext_words.length;  
}

$(document).ready(function() {

	result = document.getElementById('result_search');
	source = document.getElementById('input_search');
	source.addEventListener('input', inputHandler);
	source.addEventListener('propertychange', inputHandler); // for IE8
	inputHandlerMethod(null);
});

