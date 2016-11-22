$( document ).ready(function() {
    var title = $('input').val();
    $("#search-button").click(function(){
   		
    	var title = $('input').val();
    	var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&'
    			  +'generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&'
    			  +'pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
    
    	$.ajax(
    		{
    		dataType: "jsonp",
    		url: api+title,
    		jsonpCallback: 'jsonp_callback' 
    	});


    });
  
    
});

function jsonp_callback(result){
    		var pages = result["query"]["pages"];
    		var htmlChunk = "";
    		var pageLink = 'https://en.wikipedia.org/?curid=';
    
    		$.each(pages, function (key, data) {
   	 			console.log(key);
   	 			htmlChunk +='<div class ="col-lg-6 col-centered article-link"><a target="_blank" href='+pageLink+key+'>'+ data["extract"] + '</a> </div>';
    		
    		});
    		$("#results-table").html(htmlChunk);	
    		
    		
    	}