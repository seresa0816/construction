/**
 * 
 */


var listvalues=[];

function resize() {
    var screenheight = window.innerHeight;
    var offset = document.getElementById('header').offsetHeight;
    total = (Number(screenheight) - Number(offset) );
    document.getElementById("add-new-value").style.height = (total + "px" );
}
resize();
window.onresize = function() {
    resize();
};


var deleteconnectionmarkvalues=[];

function deletedconnectionmarkToJSON(tableID) {
	var tableData = [];
	deleteconnectionmarkvalues=[];
	var table = document.getElementById(tableID);
	var rowCount = document.getElementById(tableID).rows.length;
	for (var i = 1; i < rowCount; i++) {
		if ($(table.rows.item(i).cells[0]).find('input').prop('checked')==true) {
			deleteconnectionmarkvalues.push($(table.rows.item(i).cells[2]).text());
		}
		
	}
	
	return tableData;
}


//length 
function validateLength(feet,inch,fraction,length)
{
	var valid = true;
	if(feet == "0" && inch == "0" && fraction == "0")
	{
		valid = false;
    	$('#alert_model_placeholder').append
        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i> ' + length + ' can not be zero' + 
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
                '</div>')         
         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
             	$("#alertdiv").remove();

         }, 10000);
		}
	
	return valid;
}



$("#edit").click(function(){
	var i=0;
	

	$(".cci-select").each(function(){
    	if($(this).prop('checked')==true){
			i=i+1;
		 $row = $(this).closest("tr");       // Finds the closest row <tr> 
		 }
		
	});
	
	if (i==1) {
	 
	}else{
		showalertInformation('Please Select 1 Row For Edit');
	}
	
});

var checkboxlength="";

//delete
$("#delete").click(function(){	
	checkboxlength=$('[name="selectAll"]:checked').length;
	 deletedconnectionmarkToJSON('table');
	$(".cci-select").each(function(index, Element){
	
		if($(this).prop('checked')==true){
			$("#deleteModal").show();
		}
	
	});
	if (checkboxlength==0) {
		showalertInformation('Select Rows for Delete');
	}
	
});


 function deleteconnectionmarks(pagename){
	
	
		$.ajax({
		   type : 'POST',
	          url: "/bimspring/deleteconnectionmark",	          
	          data : {connectiongrouptype:pagename,connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconnectionmarkvalues)},
	          success : function(data, success) {
	        
	        	connectionmarkvalues=[];
				connectionjson=connectionmarkToJSON('table') ;
				  
				$(".cci-select").each(function(index, Element){
 	    	   	
					if($(this).prop('checked')==true){
 	    	   		var index = listvalues.indexOf($(this).closest("tr").find("td:nth-child(3)").text().replace(/\s/g, "").toLowerCase());
 	    	   			if (index > -1) {
 	    	   			 listvalues.splice(index, 1);
 	    	   			}
 	    	   			   
 	    	   		$(this).closest("tr").remove();
 	    	   	}
					
 	    	   	});
 	    	   	var rowCount = $('#table tr').length;
 	    	   	
 	    	   	  
 	    	   	   $("#deleteModal").hide();	
 	    	   		if (rowCount==1) {
 	    	   			 $("#add-new-value").show();
 	    	   		     $(".memtype-table").hide();
 	    	   		}
 	    	   		
 	    	   		$('#checkAll').prop('checked', false);
 	    	     addorupdate();	 
				
	          },error: function (error) {
				if(error.status == 401){
					window.location.href = 'logout';
				}else{
					alert('Sorry! Your session has expired Please select Project again');
					window.location.href='dashboard';
				}
	          }
	          }); 
	 
	 
	 
 }

$("#btncloseRows").click(function(){	
	 $("#deleteModal").hide();
	
});





	var listvalues = [];
	$(".contxt").each(function(){			
		listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
		
	});
	 $(".allownumericwithoutdecimal").on("keypress keyup blur",function (event) {    
	       $(this).val($(this).val().replace(/[^\d].+/, ""));
	        if ((event.which < 48 || event.which > 57)) {
	            event.preventDefault();
	        }           
	    });  
	

	 
	 $('.allowAlphanumeric').keypress(function (e) {
		    var regex = new RegExp("^[a-zA-Z0-9]+$");
		    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
		    if (regex.test(str)) {
		        return true;
		    }

		    e.preventDefault();
		    return false;
		});
	 
	 
	
	 
	 
   //Screen Resolution
    function resize() {
        var screenheight = window.innerHeight;
        var offset = document.getElementById('header').offsetHeight;
        total = (Number(screenheight) - Number(offset) );
        document.getElementById("add-new-value").style.height = (total + "px" );
    }
    resize();
    window.onresize = function() {
        resize();
    };
  function feetInchFormater(feet, inch, fraction)
  {
  	
  	var Length = "";        	
  	var Feet = feet == 0 ? "" : feet + "'-" ;        	
  	var Inch = inch == 0 ? "0 " : inch + " ";        	
  	var Fraction = fraction == 0 ? '' : fraction;   
  	
  	if(Fraction == 0)
  		Inch = inch == 0 ? "0" : inch; 
  	
  	Length = Feet + Inch + Fraction+'"';     
  	if (Feet == 0 && Inch  == "0 ") {
  		Length = Fraction+'"';   
	}
  
  	return Length;
  }
   
  
  
  
  $(".allownumericwithoutdecimal").on("keypress keyup blur",function (event) {    
      $(this).val($(this).val().replace(/[^\d].+/, ""));
       if ((event.which < 48 || event.which > 57)) {
           event.preventDefault();
       }           
   });  
  
  function getformateforrepresentation(valuesaved){
		 var retval= valuesaved == "" ? "" : valuesaved + '"';
		 return retval;
			
		}

  
  
  function checkconnectioncodeForuniquiness() {
	  
		var text = $('#conmark').val().replace(/\s/g, "").toLowerCase()

		if(jQuery.inArray(text, listvalues) !== -1){
		    	
		     	$('#alert_model_placeholder').append
		        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>   Connection Mark already exists' + 
		                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
		                '</div>')         
		         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
		             	$("#alertdiv").remove();

		         }, 2500);
		    	
		    	return false;
		}
		
		return true;
	}
  
  function showalertInformation(text) { 
      
      $('#alert_placeholder').append
       ('<div class="alert alert-info" id="alertdiv"> <i class="fa fa-exclamation-circle"></i> ' + text + 
               '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
               '</div>')         
       	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
           	$("#alertdiv").remove();

       }, 2000);
      window.scrollTo(0,0);
     
     }

  function showalertSuccess(text) {        	
      $('#alert_placeholder').append
      ('<div class="alert alert-success" id="alertdiv"> <i class="fa fa-check-circle"></i> ' + text + 
              '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
              '</div>')       
       	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
           	$("#alertdiv").remove();

       }, 2000);
      window.scrollTo(0,0);
     }
  