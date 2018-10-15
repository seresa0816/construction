/**
 * 
 */


   function getProfiles(shape)
	 	        {
	 			  var dataObj = "";   
	 			  if (shape) {
				   
	 	          $.ajax({
	 	        	
	 	             type: "GET",
	 	             url: "/bimspring/getProfileForGivenShapes", 
	 	        	 data: "profile=" + shape,
	 	             async: false,
	 	             success: function(data)
	 	             {
	 	                dataObj = jQuery.parseJSON(data); 
	 	                       	
					  },
					  error: function(error){
						if(error.status == 401){
							window.location.href = 'logout';
						}else{
							alert('Sorry! Your session has expired Please select Project again');
							window.location.href='dashboard';
						}

					  }
	 	          });
	 			  }
	 	          return dataObj;
	 	        	
	 	       }
		 		    
	 		  function resetDrodown(dropdownid)
	 		 {
	 			 $("#"+dropdownid).empty();	        	
	 	        	
	 	 	       	$("#"+dropdownid).append($('<option/>', {
	 	 	     		value: "",
	 	 	     		text: "Select"
	 	 	     	})); 
	 			 
	 		 }
	         function fillProfileDropdownList(dropdownid, dropdownList)
	         {
	         	 var len = dropdownList.length;
	         	 for (var i = 0; i < len; i++)
	        	     {
	        	    	var value = dropdownList[i]['Profile'];				
	        	    	var option = dropdownList[i]['Profile'];				
	        				
	        	    	$("#"+dropdownid).append($('<option/>', {
	        				value: value,
	        				text: option
	        			}));
	        	     } 
	        }
	         
	         
	         function fillConnectionMethodDropdownList(dropdownid, dropdownList)
	         {
	         	 var len = dropdownList.length;
	         	 for (var i = 0; i < len; i++)
	        	     {
	        	    	var value = dropdownList[i]['ConnectionMethode'];				
	        	    	var option = dropdownList[i]['ConnectionMethode'];				
	        				
	        	    	$("#"+dropdownid).append($('<option/>', {
	        				value: value,
	        				text: option
	        			}));
	        	     } 
	        }
	         
	         
	         
	         