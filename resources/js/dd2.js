function dynamicdd(dd) {
$(document).ready(function(){
        $.getJSON("http://localhost:8888/bimws/get/selectUserTypeDetails", function(result){
        	if(result.status == "true") {  
	       $(dd).empty();
	       $(dd).append($('<option></option>').val("NONE").html("--- Select ---"));
  	       $.each(result.rs, function(i, field){
  	        		$(dd).append($('<option></option>').val(field.UserTypeID).html(field.UserTypeName));
	        }); 
        	}
        });
      });
}

