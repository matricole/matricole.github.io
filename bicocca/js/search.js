var source = null;
var result = null;
var json_global = null;

function loadJson(){
	json_global = [];
	json_global.push(
		{id: "7", name: "Tizio Caio", type: "tg"},
		{id: "8", name: "Mario Caio", type: "tg"},
	);
	console.log(json_global);
}

const inputHandler = function(e) {
inputHandlerMethod(e);
}

function calculateResults(inputtext_words, searchInto){
	if (inputtext_words == null || searchInto == null)
		return null;
	
	if (searchInto.length == 0)
		return null;
	
	if (inputtext_words.length == 0)
		return searchInto;
	
	var results = [];
	
	var input_single = inputtext_words[0].toLowerCase();
	var i;
	for (i = 0; i < searchInto.length; i++) {
	  var valueToSearch = searchInto[i];
	  var name = valueToSearch["name"].toLowerCase();
	  if (name.includes(input_single))
	  {
		  results.push(valueToSearch);
	  }
	} 
		
	inputtext_words.shift();
	return calculateResults(inputtext_words, results);
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

	var results_calculated = calculateResults(inputtext_words, json_global);
	if (results_calculated == null || results_calculated.length == 0)
	{	
		result.innerHTML = "Nessun risultato! " + inputtext_words.length;  
		return;
	}
	
	var i;
	var stringResult = "<ul style='margin-bottom:0px;'>"
	for (i = 0; i < results_calculated.length; i++) {
			stringResult += "<li>";
		stringResult += results_calculated[i]["name"];
			stringResult += "</li>";
	}
	stringResult += "</ul>";
	result.innerHTML = stringResult;  
}

$(document).ready(function() {


	result = document.getElementById('result_search');
	source = document.getElementById('input_search');
	source.addEventListener('input', inputHandler);
	source.addEventListener('propertychange', inputHandler); // for IE8
	inputHandlerMethod(null);
	loadJson();

});



