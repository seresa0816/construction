$(document).ready(function(){
    	 $('.box').hide();
    });


function getFinishSurfaceDetails(surfaceprepration,surfacetype)
{

	$.ajax({	   	 	
	 	type: "GET",
   	   	url: "/bimspring/getFinishDetailsForSurfaceArea",
   	    data : {
   	    	surfaceprepration : surfaceprepration,
   	    	surfacetype : surfacetype
	 	 },	
   	   	async: false,
   	 	success: function(data){
   	 		
   	 	},
		error: function (error) {
       	  if(error.status == 401){
       		  window.location.href = 'logout';
       	  }
         }
	});
}

function getFinishDetailsForWeight(surfaceprepration,surfacetype)
{
	$.ajax({	   	 	
	 	type: "GET",
   	   	url: "/bimspring/getFinishDetailsForWieghtDetails",
   	    data : {
   	    	surfaceprepration : surfaceprepration,
   	    	surfacetype : surfacetype
	 	 },	
   	   	async: false,
   	 	success: function(data){
   	 		
   	 	},
		error: function (error) {
       	  if(error.status == 401){
       		  window.location.href = 'logout';
       	  }
         }   		    	 
 });
	
	
}

function getFinishDetailsForSurfaceAreaDetails(surfaceprepration,surfacetype,membertype)
{
	$.ajax({	   	 	
	 	type: "GET",
   	   	url: "/bimspring/getFinishDetailsForWieghtDetails",
   	    data : {
   	    	surfaceprepration : surfaceprepration,
   	    	surfacetype : surfacetype,
   	    	membertype : membertype
	 	 },	
   	   	async: false,
   	 	success: function(data){
   	 		
   	 	},
		error: function (error) {
       	  if(error.status == 401){
       		  window.location.href = 'logout';
       	  }
         }   		    	 
 });
	
}

function getFinishDetailsForWieghtDetails(surfaceprepration,surfacetype,membertype)
{

	 $.ajax({	   	 	
		 	type: "GET",
	   	   	url: "/bimspring/getFinishDetailsForWieghtDetails",
	   	    data : {
	   	    	surfaceprepration : surfaceprepration,
	   	    	surfacetype : surfacetype,
	   	    	membertype : membertype
		 	 },	
	   	   	async: false,
	   	 	success: function(data){
	   	 		
	   	 	},
			error: function (error) {
	        	  if(error.status == 401){
	        		  window.location.href = 'logout';
	        	  }
	          }   		    	 
	 });
}