     $(window).load(function(){
	   $(document).ready(function(){
        $.getJSON("http://localhost:8888/bimws/get/selectUserTypeDetails", function(result){
        	if(result.status == "true") {  
	       $('#drp').empty();
	       $('#drp').append($('<option></option>').val("NONE").html("--- Select ---"));
  	       $.each(result.rs, function(i, field){
  	        		$('#drp').append($('<option></option>').val(field.UserTypeID).html(field.UserTypeName));
	        }); 
        	}
        });
      });
     });
