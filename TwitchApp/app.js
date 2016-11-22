var channels = ["ESL_SC2","OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", 
				"noobs2ninjas"];
var responses = [];
$(document).ready(function(){
	
	var requests = [];

	for(var i = 0;i<channels.length;i++){
		requests.push(
			$.getJSON('https://wind-bow.hyperdev.space/twitch-api/streams/'+channels[i]+'?callback=?', 
				function(data){
				responses.push(data);
				})
		);
	}

	$.when.apply($, requests).done(function () {
    	console.log(arguments); //it is an array like object which can be looped
    	$.each(arguments, function (i, data) {
        	console.log(data); //data is the value returned by each of the ajax requests
        	
    	});

    	console.log(responses);

    	var htmlChunk='';
    	for(var i = 0;i<responses.length;i++){
    		channel = responses[i]["_links"]["channel"];
    		htmlChunk+='<a class="col-md-6" href="' + channel + '">'+channel.split("/")[5]+'</a>';
    		if(responses[i]["stream"] === null){
    			htmlChunk+='<i class="col-md-6">Offline</i>';	
    		}
    		else{
    			htmlChunk+='<i class="col-md-6">Online</i>';
    		}
    	}

    	$('#streams-container ul').append(htmlChunk);



    });

});
