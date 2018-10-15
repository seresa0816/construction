

 
	    $(".Webdetail").hide();
	    
	    $(".Flangedetail").hide();
	    $(".weld1,.weld2").hide(); 


   $(".select2").select2(); 
    
    var connectionmarkvalues=[];
    var connectionmarkedit="";

	
    
    function connectionmarkToJSON(tableID) {
		var tableData = [];
		connectionmarkvalues=[];
		var table = document.getElementById(tableID);
		var rowCount = document.getElementById(tableID).rows.length;
		for (var i = 1; i < rowCount; i++) {
			connectionmarkvalues.push($(table.rows.item(i).cells[2]).text());
			
		}
		
		return tableData;
	} 
    
   
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
    
    function validateSize(inch,fraction,sizename)
    {
    	var valid = true;
    	if(inch == "0" && fraction == "0")
    	{
    		valid = false;
        	$('#alert_model_placeholder').append
            ('<div class="alert alert-danger" id="alertdiv2"> <i class="fa fa-exclamation-triangle"></i> ' + sizename + ' Size can not be zero' + 
                    '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
                    '</div>')         
             	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
                 	$("#alertdiv2").remove();

             }, 10000);
   		}
    	
    	return valid;        	
    }
          
  
	function validateLength1(){
		var validated = true;
		
		var Lenght = $("#weldlengthH").val();
    	var Inch = $("#inchH").find("option:selected").text();
    	var Fraction = $("#fractionH").find("option:selected").text();
    	
		validated = validateLength(Lenght,Inch,Fraction,"Length");
	
		return validated;
	}
	
function validateLength2(){
		
	var validated = true;
	
	var Lenght = $("#weldlengthV").val();
	var Inch = $("#inchV").find("option:selected").text();
	var Fraction = $("#fractionV").find("option:selected").text();
	
	validated = validateLength(Lenght,Inch,Fraction,"Length");
	
	return validated;
	}
    


var $row ="";
$("#edit").click(function(){
	var i=0;
	
	$("#adddata").hide();
	  $("#update").show();
	$(".cci-select").each(function(){
    	
		if($(this).prop('checked')==true){
			i=i+1;
		 $row = $(this).closest("tr");       // Finds the closest row <tr> 
		   
			}
		
	});
	
	if (i==1) {
		 $(".right").show();
	     $(".left").hide();
	     $(".memtype-rightedit").show();
		 $(".editmemtype .rightFloat").show(); 
		 $("#add").hide();
	     $("#update").show();
	     $(".contxt").each(function(){			
				listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
				
			});
		  listvalues = jQuery.grep(listvalues, function(value) {
			  return value != $row.find("td:nth-child(3)").text().replace(/\s/g, "").toLowerCase();
			});
		  
		  connectionmarkedit=$row.find("td:nth-child(3)").text();
		
	  
		  $("#splice1Beam1").val($row.find("td:nth-child(8)").text()).trigger("change");
		  $("#splice2Beam1").val($row.find("td:nth-child(9)").text()).trigger("change");
			
		  $("#conmark").val($row.find("td:nth-child(3)").text()).trigger("change");
		  $("#LeftsideBP").val($row.find("td:nth-child(4)").text()).trigger("change");
		  $("#RightsideBP").val($row.find("td:nth-child(5)").text()).trigger("change");
		  $("#websplicePT").val($row.find("td:nth-child(6)").find('input').val()).trigger("change");
		  $("#flangesplicePT").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
		  $("#boltgrade").val($row.find("td:nth-child(10)").text());
		  $("#boltdia").val($row.find("td:nth-child(11)").find('input').val()).trigger("change");
		  $("#noofboltrwWEB").val($row.find("td:nth-child(12)").text()).trigger("change");
		  $("#noofboltrwFlange").val($row.find("td:nth-child(13)").text()).trigger("change");
		  $("#boltspcY").val($row.find("td:nth-child(14)").find('input').val()).trigger("change");
		  $("#boltspcY2").val($row.find("td:nth-child(15)").find('input').val()).trigger("change");
		  $("#noofboltcolumnsWEB").val($row.find("td:nth-child(16)").text()).trigger("change");
		  $("#noofboltcolumnsFlange").val($row.find("td:nth-child(17)").text()).trigger("change");
		  $("#boltspcX").val($row.find("td:nth-child(18)").find('input').val()).trigger("change");
		  $("#edgedistance").val($row.find("td:nth-child(19)").find('input').val()).trigger("change");
		  
		  if ($row.find("td:nth-child(23)").text()) {
	 			
			  $("#weldwebcheckboxBoltdetails").prop('checked',true).trigger("change"); 
	 		 $(".weld1").show();
	 		} 
		  
			 if ($row.find("td:nth-child(25)").text()) {
				 $("#weldFlangecheckboxBoltdetails").prop('checked',true).trigger("change"); 
	    		 $(".weld2").show();
	    		 
			} 
		  
			
			  if ($row.find("td:nth-child(12)").text()) {
				 
				  $("#WebcheckboxBoltdetails").prop('checked',true).trigger("change"); 
		 		
		 		} 
			  
				 if ($row.find("td:nth-child(13)").text()) {
					 $("#FlangecheckboxBoltdetails").prop('checked',true).trigger("change"); 
		    		
		    		 
				} 
		  
		  $("#beamgage").val($row.find("td:nth-child(20)").find('input').val()).trigger("change");
		  $("#ddlcjp").val($row.find("td:nth-child(21)").text()).trigger("change");
		  $("#thisdisable").val($row.find("td:nth-child(22)").find('input').val()).trigger("change");
		  $("#weldlengthH").val($row.find("td:nth-child(23)").find('.lengH').val()).trigger("change");
		  $("#inchH").val($row.find("td:nth-child(23)").find('.inchH').val()).trigger("change");   
		  $("#fractionH").val($row.find("td:nth-child(23)").find('.fracH').val()).trigger("change");   
		  $("#weldlengthV").val($row.find("td:nth-child(24)").find('.lengH').val()).trigger("change");
		  $("#inchV").val($row.find("td:nth-child(24)").find('.inchH').val()).trigger("change");   
		  $("#fractionV").val($row.find("td:nth-child(24)").find('.fracH').val()).trigger("change");   
		  $("#flangeweldlengthH").val($row.find("td:nth-child(25)").find('.lengH').val()).trigger("change");
		  $("#flangeinchH").val($row.find("td:nth-child(25)").find('.inchH').val()).trigger("change");   
		  $("#flangefractionH").val($row.find("td:nth-child(25)").find('.fracH').val()).trigger("change");   
		  $("#flangeweldlengthV").val($row.find("td:nth-child(26)").find('.lengH').val()).trigger("change");
		  $("#flangeinchV").val($row.find("td:nth-child(26)").find('.inchH').val()).trigger("change");   
		  $("#flangefractionV").val($row.find("td:nth-child(26)").find('.fracH').val()).trigger("change");   
 	 
	  
	}
	
	
});

function alertMessage(){
	 $('#alert_model_placeholder').append
	        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>  Select atleast a Splice Plate Details ' + 
	                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
	                '</div>')         
	         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
	             	$("#alertdiv").remove();

			 }, 2500);
}

function validatCheckBox(){
	 var validated = true;	

if(($('#splice1Beam1').val()=='Shop Bolted' && $('#splice2Beam1').val()=='Shop Bolted')||($('#splice1Beam1').val()=='Field Bolted' && $('#splice2Beam1').val()=='Shop Bolted')||($('#splice1Beam1').val()=='Shop Bolted' && $('#splice2Beam1').val()=='Field Bolted')||($('#splice1Beam1').val()=='Field Bolted' && $('#splice2Beam1').val()=='Field Bolted')) { 
	 if ($("#FlangecheckboxBoltdetails").prop('checked')==true||$("#WebcheckboxBoltdetails").prop('checked')==true) {
    	  validated = true;	
	}else{  
		  alertMessage();
	 validated = false;	
	 }
     
}
else if(($('#splice1Beam1').val()=='Shop Bolted' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Field Bolted' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Shop Bolted' && $('#splice2Beam1').val()=='Field Welded')||($('#splice1Beam1').val()=='Field Bolted' && $('#splice2Beam1').val()=='Field Welded')) { 
	 if ($("#FlangecheckboxBoltdetails").prop('checked')==true||$("#WebcheckboxBoltdetails").prop('checked')==true) {
    	  validated = true;	
	}  
   else{  
	    alertMessage();
	  validated = false;	
		 }
      
      
}
else if(($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Shop Bolted')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Shop Bolted')||($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Field Bolted')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Field Bolted')) { 
	 if ($("#FlangecheckboxBoltdetails").prop('checked')==true||$("#WebcheckboxBoltdetails").prop('checked')==true) {
   	  validated = true;	
	} 
	 else{  
		     alertMessage();
			 validated = false;	
			 }
      
}
else if(($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Field Welded')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Field Welded')) { 
	 if ($("#weldFlangecheckboxBoltdetails").prop('checked')==true||$("#weldwebcheckboxBoltdetails").prop('checked')==true) {
      	  validated = true;	
      } 
	 else{  
		     alertMessage();
			 validated = false;	
			 }
    
}else{
	  alertMessage();
	 validated = false;	
}
return validated;
	
}


function validateSelect2Fields(){
	
	
	if (!$('#LeftsideBP').val()) {
		$('#LeftsideBPDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	if (!$('#RightsideBP').val()) {
		$('#RightsideBPDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	if (!$('#boltgrade').val()) {
		$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	
	

	if (!$('#boltdia').val()) {
		$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	if (!$('#edgedistance').val()) {
		$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	if (!$('#noofboltrwWEB').val()) {
		$('#noofboltrwWEBDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	
	if (!$('#boltspcX').val()) {
		$('#boltspcXDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	if (!$('#boltspcY').val()) {
		$('#boltspcYDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	if (!$('#noofboltrwFlange').val()) {
		$('#noofboltrwFlangeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	
	if (!$('#beamgage').val()) {
		$('#beamgageDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	if (!$('#boltspcY2').val()) {
		$('#boltspcY2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	if (!$('#ddlcjp').val()) {
		$('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	if (!$('#thisdisable').val()) {
		$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	if (!$('#websplicePT').val()) {
		$('#websplicePTDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	if (!$('#flangesplicePT').val()) {
		$('#flangesplicePTDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	}
	
	
}


$("#LeftsideBP").change( function(){
	if (!$('#LeftsideBP').val()) {
		$('#LeftsideBPDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#LeftsideBPDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#RightsideBP").change( function(){
	if (!$('#RightsideBP').val()) {
		$('#RightsideBPDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#RightsideBPDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});

$("#boltgrade").change( function(){
	if (!$('#boltgrade').val()) {
		$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});


$("#boltdia").change( function(){
	if (!$('#boltdia').val()) {
		$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});
$("#edgedistance").change( function(){
	if (!$('#edgedistance').val()) {
		$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
}); 
$("#noofboltrwWEB").change( function(){
	if (!$('#noofboltrwWEB').val()) {
		$('#noofboltrwWEBDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#noofboltrwWEBDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
}); 
$("#boltspcX").change( function(){
	if (!$('#boltspcX').val()) {
		$('#boltspcXDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltspcXDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
}); 
$("#boltspcY").change( function(){
	if (!$('#boltspcY').val()) {
		$('#boltspcYDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltspcYDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
}); 

$("#noofboltrwFlange").change( function(){
	if (!$('#noofboltrwFlange').val()) {
		$('#noofboltrwFlangeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#noofboltrwFlangeDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
}); 


$("#beamgage").change( function(){
	if (!$('#beamgage').val()) {
		$('#beamgageDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#beamgageDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
}); 


$("#boltspcY2").change( function(){
	if (!$('#boltspcY2').val()) {
		$('#boltspcY2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltspcY2DIV .select2-container--default .select2-selection--single').css("border-color","");
	}
}); 

$("#ddlcjp").change( function(){
	if (!$('#ddlcjp').val()) {
		$('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});        
	
$("#thisdisable").change( function(){
	if (!$('#thisdisable').val()) {
		$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});        
	

$("#websplicePT").change( function(){
	if (!$('#websplicePT').val()) {
		$('#websplicePTDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#websplicePTDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});        
	

$("#flangesplicePT").change( function(){
	
	if (!$('#flangesplicePT').val()) {
		$('#flangesplicePTDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#flangesplicePTDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
});        
	


	function validateForm() {

		var validated = true;
	
			validateSelect2Fields();
			$('#formContractSCBSplicePlate').addClass('submitted');
			/* checking for required filed */
			$('#formContractSCBSplicePlate').find(':input').each(function(){   
				
		   		var id  = $(this).prop('id');
		   		if(id!="")
		   		{
		       		var Value =  $('#' + id).val();   		
		       		var requ = $(this).prop('required');	
		       	 var elemetvisible = $('#' + id).is(':visible');
		       		   		
		       	 if(Value == "" && requ == true && elemetvisible)     
		             validated = false;	
		       			
		   		}
		   		
		   	});
		
	
		
     return validated;

	}
    
    
	 $(".action-icons .add").on('click', function(){
	        $(".right").show();
	        $(".left").hide();
	        $("#adddata").show();
	        $("#update").hide();
	        $(".memtype-rightedit").show();
	        $(".editmemtype .rightFloat").show();  
	        $(".BoltDetails,.ClipAngleLength,#conmark,#beamprofile,#clipanglesz,#btocClip1,#btocClip2,.WeldDetails").val('').trigger("change");  
         
     
	    });
	 
	 
	 /* checking for required filed */
		$("#adddata").on('click', function(){
			
			
			if(validateForm() && validateLength1() && validateLength2() && checkconnectioncodeForuniquiness() &&validatCheckBox()) {
				addconnectionmark();
			
			}    	            	 
		
	    });
	  
	  $("#update").on('click', function(){
		  
		  
			
			
			if(validateForm() && validateLength1() && validateLength2() && checkconnectioncodeForuniquiness() &&validatCheckBox()) {
				  if (connectionmarkedit==$("#conmark").val()) {
					  finalupdate();
					     
					} else {
						 updateconnectionmark();
					}
			}
	    });
	  
	  
	  
	  
	  
	  // Splice Connection Beam
	    $("#showonweld").hide();
	    $("#spliceBeam1WeldDetails").hide();
	 
	        $("#splice1Beam1, #splice2Beam1").change( function(){
	       	 $("#ddlcjp").val('');  
	        $("#weldwebcheckboxBoltdetails,#weldFlangecheckboxBoltdetails,#WebcheckboxBoltdetails,#FlangecheckboxBoltdetails").prop('checked',false).trigger("change"); 
	           
	       	 if(($('#splice1Beam1').val()=='Shop Bolted' && $('#splice2Beam1').val()=='Shop Bolted')||($('#splice1Beam1').val()=='Field Bolted' && $('#splice2Beam1').val()=='Shop Bolted')||($('#splice1Beam1').val()=='Shop Bolted' && $('#splice2Beam1').val()=='Field Bolted')||($('#splice1Beam1').val()=='Field Bolted' && $('#splice2Beam1').val()=='Field Bolted')) { 
                 $("#spliceBeam1WeldDetails").hide();
                 $(".spliceBeam1WeldDetails").val('').trigger("change");   
                  $("#spliceBeam1BoltDetails").show();
                  getboltdetails();
                  $("#showonweld").hide();
                  $(".showonweld").val('').trigger("change");   
                  $("#Flangecheckboxdetail,#Webcheckboxdetail").show();
            }
            else if(($('#splice1Beam1').val()=='Shop Bolted' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Field Bolted' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Shop Bolted' && $('#splice2Beam1').val()=='Field Welded')||($('#splice1Beam1').val()=='Field Bolted' && $('#splice2Beam1').val()=='Field Welded')) { 
                 $("#spliceBeam1WeldDetails").show();
                  $("#spliceBeam1BoltDetails").show();
                  getWelddetails();
                  getboltdetails();
                  $("#showonweld").hide();
                  $(".showonweld").val('').trigger("change"); 
                  $("#Flangecheckboxdetail,#Webcheckboxdetail").show();
                  
            }
            else if(($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Shop Bolted')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Shop Bolted')||($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Field Bolted')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Field Bolted')) { 
            	 $("#spliceBeam1WeldDetails").show();
                  $("#spliceBeam1BoltDetails").show();
                  getboltdetails();
                  getWelddetails();
                  $("#showonweld").hide();
                  $(".showonweld").val('').trigger("change");   
                  $("#Flangecheckboxdetail,#Webcheckboxdetail").show();
            }
            else if(($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Field Welded')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Field Welded')) { 
            	 $("#spliceBeam1WeldDetails").show();
                  $("#spliceBeam1BoltDetails").hide();
                  $("#showonweld").show();
                  $("#inchV,#fractionV,#inchH,#fractionH").val("0").trigger("change"); 
                  getWelddetails();
                  $(".spliceBeam1BoltDetails").val('').trigger("change");   
                  $("#Flangecheckboxdetail,#Webcheckboxdetail").hide();
                  $(".Webdetail").hide();
          	      $(".Flangedetail").hide();
          	      
            }  
            else{
            	 $("#spliceBeam1BoltDetails,#spliceBeam1WeldDetails,#showonweld").hide();
            }
	     	removeRedBoarder();
	        });
	   
	    function addorupdate() {
	  	  
	  	  
	  	  var connectionjson=	tableToJSON('table') ;
	  		$.ajax({
	   		   type : 'POST',
	   	          url: "/bimspring/saveConnectionsDetails",	          
	   	          data : {connectiongrouptype:"SpliceColumnusingSplicePlate",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
	   	       success : function(data, success) {  	
	   	    	 if (data=="error") {
	            	  showalertsession("Select Project Again")
						
	            	  window.location='projectlist';
					}
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
	    
	

			  
		    
		     
		      
		      
		      
		   
		    	    if (Page && Page.length !== 0) {
		    	     	 $("#add-new-value").hide();
		    	         $(".memtype-table").show();
		    	     	  
		    	     	  
		    	     	  $.each(Page, function(key,value) {
		    	     		  
		    	     		  var BeamGagers=value['BeamGage'];	

				    		  var BprofileLeft=value[LeftSideBeamProfileInOuter];	
				    		  var BprofileRight=value[RightSideBeamProfileInOuter];	
				    		  var BprofileLeft=value[LeftSideBeamProfileInOuter];	
				    	
				    		  var webPT=value[WebSplicePlateThicknessInOuter];	
				    		  var FlangePT=value[FlangeSplicePlateThicknessOuter];
				    		  
				    		  var WebBoltRows=value[NoofBoltRowsinWebInOuter];
				    		  var FlangeBoltRows=value[NoofBoltRowsinFlangeInOuter];
				    		  
				    		  var BSY=value[BoltSpacingYInOuter];
				    		  var BSX=value[BoltSpacingXInOuter];
				    		  
				    		  var WebBoltRows=value[NoofBoltRowsinWebInOuter];
				    		  var FlangeBoltRows=value[NoofBoltRowsinFlangeInOuter];
				    		
				    		 
				    		  var WebBoltColumn=value[NoofBoltColumnsinWebInOuter];
				    		  var FlangeBoltColumn=value[NoofBoltColumnsinFlangeInOuter];
				    		  
				    		  
				    		  var webdeatils=value['web'];
				    		  
				    		  var WLVertical=webdeatils[WeldLengthVerticalInOuter];
				    		  var WLHorizontal=webdeatils[WeldLengthHorizontalInOuter];
				    		  
				    		  var FlangeBoltspace=value['FlangeBoltspace'];
				    		  
				    		  
				    	        var WLHorizontalDD=feetInchFormater(WLHorizontal[Length],WLHorizontal[Length_in],WLHorizontal[Length_fr_fra]);
				    	        var WLVerticalDD=feetInchFormater(WLVertical[Length],WLVertical[Length_in],WLVertical[Length_fr_fra]);
					    	      
				    			  if (!WLHorizontal[Length]) {
				    				  WLHorizontalDD="";

				    				}
				    			  if (!WLVertical[Length]) {
				    				  WLVerticalDD="";

				    				}	
				    			  
				    			  
				    			  
				    			  
				    			  var flangedeatils=value['flange'];
					    		  
					    		  var flangeWLVertical=flangedeatils[WeldLengthVerticalInOuter];
					    		  var flangeWLHorizontal=flangedeatils[WeldLengthHorizontalInOuter];
					    		  
					    		 
					    		  
					    	        var flangeWLHorizontalDD=feetInchFormater(flangeWLHorizontal[Length],flangeWLHorizontal[Length_in],flangeWLHorizontal[Length_fr_fra]);
					    	        var flangeWLVerticalDD=feetInchFormater(flangeWLVertical[Length],flangeWLVertical[Length_in],flangeWLVertical[Length_fr_fra]);
						    	      
					    			  if (!flangeWLHorizontal[Length]) {
					    				  flangeWLHorizontalDD="";

					    				}
					    			  if (!flangeWLVertical[Length]) {
					    				  flangeWLVerticalDD="";

					    				}	
				    			  
				    			  
				    			  
				    			  $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+value[ConnectionMark]+'</td> <td>'+BprofileLeft[BeamProfile]+'</td><td>'+BprofileRight[BeamProfile]+'</td><td>'+getformateforrepresentation(webPT[PlateThickness_fra])+'<input type="hidden" value='+webPT[PlateThickness]+'></td><td>'+getformateforrepresentation(FlangePT[PlateThickness_fra])+'<input type="hidden" value='+FlangePT[PlateThickness]+'></td><td>'+value[ConnectionMethodLeftSideBeam]+'</td><td>'+value[ConnectionMethodRightSideBeam]+'</td><td>'+value[BoltGrade]+'</td><td>'+getformateforrepresentation(value[BoltDia_fra])+'<input type="hidden" value='+value[BoltDia]+'></td><td>'+WebBoltRows[BoltRows]+'</td><td>'+FlangeBoltRows[BoltRows]+'</td><td>'+getformateforrepresentation(BSY[BoltSpacing_fra])+'<input type="hidden" value='+BSY[BoltSpacing]+'></td><td>'+getformateforrepresentation(FlangeBoltspace[BoltSpacing_fra])+'<input type="hidden" value='+FlangeBoltspace[BoltSpacing]+'></td><td>'+WebBoltColumn[BoltColumns]+'</td><td>'+FlangeBoltColumn[BoltColumns]+'</td><td>'+getformateforrepresentation(BSX[BoltSpacing_fra])+'<input type="hidden" value='+BSX[BoltSpacing]+'></td><td>'+getformateforrepresentation(value[EdgeDistance_fra])+'<input type="hidden" value='+value[EdgeDistance]+'></td><td>'+getformateforrepresentation( BeamGagers[BoltGagefraction])+'<input type="hidden" value='+BeamGagers[BoltGagedecimal]+'></td><td>'+value[WeldType]+'</td><td>'+getformateforrepresentation(value[WeldSize_fra])+'<input type="hidden" value='+value[WeldSize]+'></td><td>'+WLHorizontalDD+'<input type="hidden" class="inchH"  value='+WLHorizontal[Length_in]+'><input type="hidden" class="lengH"  value='+WLHorizontal[Length]+'><input type="hidden" class="fracH"  value='+WLHorizontal[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+WLHorizontal[Length_fr_fra]+'" /></td><td>'+WLVerticalDD+'<input type="hidden" class="inchH"  value='+WLVertical[Length_in]+'><input type="hidden" class="lengH"  value='+WLVertical[Length]+'><input type="hidden" class="fracH"  value='+WLVertical[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+WLVertical[Length_fr_fra]+'" /></td><td>'+flangeWLHorizontalDD+'<input type="hidden" class="inchH"  value='+flangeWLHorizontal[Length_in]+'><input type="hidden" class="lengH"  value='+flangeWLHorizontal[Length]+'><input type="hidden" class="fracH"  value='+flangeWLHorizontal[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+flangeWLHorizontal[Length_fr_fra]+'" /></td><td>'+flangeWLVerticalDD+'<input type="hidden" class="inchH"  value='+flangeWLVertical[Length_in]+'><input type="hidden" class="lengH"  value='+flangeWLVertical[Length]+'><input type="hidden" class="fracH"  value='+flangeWLVertical[Length_fr]+'><input type="hidden" class="fracHFrac"  value="'+flangeWLVertical[Length_fr_fra]+'" /></td></tr>');
						    		
		    	     	  
		    	     	  });
		    	     }
		    		
		    	

		    	
		    	


		        $("#recall").click(function(){

		        	var rowCount = $('#table tr').length;
		        	
		        	if (rowCount > 1) {
		        	$row=$('#table tr:last');
		        	
		        	
		            $(".right").show();
		            $(".left").hide();
		            $(".memtype-rightedit").show();
		        	$(".editmemtype .rightFloat").show(); 
		        	


		  		  $("#splice1Beam1").val($row.find("td:nth-child(8)").text()).trigger("change");
		  		  $("#splice2Beam1").val($row.find("td:nth-child(9)").text()).trigger("change");
		  			
		  		  $("#conmark").val('').trigger("change");
		  		  $("#LeftsideBP").val($row.find("td:nth-child(4)").text()).trigger("change");
		  		  $("#RightsideBP").val($row.find("td:nth-child(5)").text()).trigger("change");
		  		  $("#websplicePT").val($row.find("td:nth-child(6)").find('input').val()).trigger("change");
		  		  $("#flangesplicePT").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
		  		  $("#boltgrade").val($row.find("td:nth-child(10)").text());
		  		  $("#boltdia").val($row.find("td:nth-child(11)").find('input').val()).trigger("change");
		  		  $("#noofboltrwWEB").val($row.find("td:nth-child(12)").text()).trigger("change");
		  		  $("#noofboltrwFlange").val($row.find("td:nth-child(13)").text()).trigger("change");
		  		  $("#boltspcY").val($row.find("td:nth-child(14)").find('input').val()).trigger("change");
		  		  $("#boltspcY2").val($row.find("td:nth-child(15)").find('input').val()).trigger("change");
		  		  $("#noofboltcolumnsWEB").val($row.find("td:nth-child(16)").text()).trigger("change");
		  		  $("#noofboltcolumnsFlange").val($row.find("td:nth-child(17)").text()).trigger("change");
		  		  $("#boltspcX").val($row.find("td:nth-child(18)").find('input').val()).trigger("change");
		  		  $("#edgedistance").val($row.find("td:nth-child(19)").find('input').val()).trigger("change");
		  		 if ($row.find("td:nth-child(23)").text()) {
			 			
					  $("#weldwebcheckboxBoltdetails").prop('checked',true).trigger("change"); 
			 		 $(".weld1").show();
			 		} 
				  
					 if ($row.find("td:nth-child(25)").text()) {
						 $("#weldFlangecheckboxBoltdetails").prop('checked',true).trigger("change"); 
			    		 $(".weld2").show();
			    		 
					} 
			  	  
			  		
			  		  if ($row.find("td:nth-child(12)").text()) {
			  			 
			  			  $("#WebcheckboxBoltdetails").prop('checked',true).trigger("change"); 
			  	 		
			  	 		} 
			  		  
			  			 if ($row.find("td:nth-child(13)").text()) {
			  				 $("#FlangecheckboxBoltdetails").prop('checked',true).trigger("change"); 
			  	    		
			  	    		 
			  			} 
			      	  
		  		  
		  		  $("#beamgage").val($row.find("td:nth-child(20)").find('input').val()).trigger("change");
		  		  $("#ddlcjp").val($row.find("td:nth-child(21)").text()).trigger("change");
		  		  $("#thisdisable").val($row.find("td:nth-child(22)").find('input').val()).trigger("change");
		  		  $("#weldlengthH").val($row.find("td:nth-child(23)").find('.lengH').val()).trigger("change");
		  		  $("#inchH").val($row.find("td:nth-child(23)").find('.inchH').val()).trigger("change");   
		  		  $("#fractionH").val($row.find("td:nth-child(23)").find('.fracH').val()).trigger("change");   
		  		  $("#weldlengthV").val($row.find("td:nth-child(24)").find('.lengH').val()).trigger("change");
		  		  $("#inchV").val($row.find("td:nth-child(24)").find('.inchH').val()).trigger("change");   
		  		  $("#fractionV").val($row.find("td:nth-child(24)").find('.fracH').val()).trigger("change");   
		  		  $("#flangeweldlengthH").val($row.find("td:nth-child(25)").find('.lengH').val()).trigger("change");
		  		  $("#flangeinchH").val($row.find("td:nth-child(25)").find('.inchH').val()).trigger("change");   
		  		  $("#flangefractionH").val($row.find("td:nth-child(25)").find('.fracH').val()).trigger("change");   
		  		  $("#flangeweldlengthV").val($row.find("td:nth-child(26)").find('.lengH').val()).trigger("change");
		  		  $("#flangeinchV").val($row.find("td:nth-child(26)").find('.inchH').val()).trigger("change");   
		  		  $("#flangefractionV").val($row.find("td:nth-child(26)").find('.fracH').val()).trigger("change");   
		   	 
		  	  
		  	 
		      	  
		      	  
		      	  
		      	  
		      	  
		       	 
		        	}  
		        	
		        	});
		        
		        
		        
		        
		        

		        function  getboltdetails(){
		        	   $("#boltgrade").val(BoGrGp).trigger("change");  
		        	   $("#boltdia").val(BoltDiaGP).trigger("change");  
		        	   $("#boltspcY,#boltspcX").val(BspacingGP).trigger("change");  
		        	   $("#edgedistance").val(EDistandanceGP).trigger("change"); 
		        	   $("#noofboltrwWEB,#noofboltrwFlange,#noofboltcolumnsWEB,#noofboltcolumnsFlange").val("").trigger("change"); 
		         }

		        function  getWelddetails(){
		        	
		           $("#ddlcjp").val(WeldTypeDefaultValue).trigger("change");  
		       	   $("#thisdisable").val(weldSizeGP).trigger("change"); 
		        	   if ( $("#ddlcjp").val()=="CJP") {
		        		   $("#thisdisable").val("").trigger("change"); 
		        		   $("#thisdisable").attr("disabled", true);
		        		   $("#thisdisable").prop('required',false);
		        		   $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
		       	 		
		        		}else {
		        			  $("#thisdisable").attr("disabled", false);
		        			  $("#thisdisable").prop('required',true);
		        		}		   
		         }

		        	$("#ddlcjp").change(function() {  
		        if ( $("#ddlcjp").val()=="CJP") {
		        	   $("#thisdisable").val("").trigger("change"); 
		        	   $("#thisdisable").attr("disabled", true);
		        	   $("#thisdisable").prop('required',false);
		        	   $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
		   	 		
		        	}else {
		        		  $("#thisdisable").attr("disabled", false);
		        		  $("#thisdisable").prop('required',true);
		        	}

		        	});
		        
		        

		            $(".add,.add-new-value").on('click', function(){
		        		   $(".form-control,.select2").val("").trigger("change"); 
		        		   $("#spliceBeam1BoltDetails,#spliceBeam1WeldDetails,#showonweld").hide();
                            $(".Webdetail,#Webcheckboxdetail,#Flangecheckboxdetail").hide();
		        		    $(".Flangedetail").hide();
		        		    $("#WebcheckboxBoltdetails,#FlangecheckboxBoltdetails").prop('checked',false);

		        		   $("#weldFlangecheckboxBoltdetails,#weldwebcheckboxBoltdetails").prop('checked',false);
		        		   
		        		   listvalues = [];
		        	      $(".contxt").each(function(){			
				  				listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
				  				
				  			}); 
		        	      $('#formContractSCBSplicePlate').removeClass('submitted');
		        	   });
		        	   		
		            
		        	
  	    	 	  function addconnectionmark() {
  	    				
  	    			  connectionmarkvalues=[];
  	    			  connectionjson=connectionmarkToJSON('table') ;
  	    			  
  	    			  connectionmarkvalues.push($('#conmark').val());
  	    			 
  	    				$.ajax({
  	    		 		   type : 'POST',
  	    		 	          url: "/bimspring/saveConnectionMarks",	          
  	    		 	          data : {connectiongrouptype:"SpliceColumnusingSplicePlate",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
  	    		 	          success : function(data, success) {
  	    		 	        	var status=data;
  	    		 	        	
  	    		 	        	  if (status=="false") {
  	    		 	        		
  	    			 	       		 $('#alert_model_placeholder').append
  	    			 		        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>   Connection Mark already exists' + 
  	    			 		                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
  	    			 		                '</div>')         
  	    			 		         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
  	    			 		             	$("#alertdiv").remove();
  	    			
  	    			 		         }, 2500);
  	    			 	      
  	    			 	       		
  	    						}
  	    		 	        	  else{

  	    		 	  			 $(".add-new-value").hide();
  	    		 	  	         $(".memtype-table").show();
  	    		 	  	         $(".left").show();
  	    		 	  	         $(".editmemtype .rightFloat").hide();
  	    		 	  	         
  	    		 	  	         listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
  	    		 	  	         
  	    		 	  	         var boltdia= $("#boltdia option:selected").text()+ '"';       
  	    		 	  	         var weldsize= $("#thisdisable option:selected").text()+ '"';
  	    		 	  	       
  	    		 	  	         var edgedistance=$("#edgedistance option:selected").text()+ '"';
  	    		 	  	         var boltspcX=$("#boltspcX option:selected").text()+ '"';
  	    		 	  	         var boltspcY=$("#boltspcY option:selected").text()+ '"';
  	    		 	  	         var weldlengthHor=feetInchFormater($('#weldlengthH').val(),$('#inchH').val(),$("#fractionH option:selected").text());
  	    		 	  	         var weldlengthVer=feetInchFormater($('#weldlengthV').val(),$('#inchV').val(),$("#fractionV option:selected").text());

  	    		 	  	         
  	    		 	  	        var flangeweldlengthHor=feetInchFormater($('#flangeweldlengthH').val(),$('#flangeinchH').val(),$("#flangefractionH option:selected").text());
	    		 	  	        var flangeweldlengthVer=feetInchFormater($('#flangeweldlengthV').val(),$('#flangeinchV').val(),$("#flangefractionV option:selected").text());

  	    		 	  	         
	    		 	  	        
	    		 	  	     if (!$("#flangeweldlengthH").val()) {
	    		 	  	    	flangeweldlengthHor="";
	    		 	              }
	    		 	  	         if (!$("#flangeweldlengthV").val()) {
	    		 	  	        	flangeweldlengthVer="";
	    		 	              }
	    		 	  	        
	    		 	  	        
  	    		 	  	         
								  	    		 	  		        
		  	    		 	   var beamgage = $("#beamgage option:selected").text()
										+ '"';
								if (!$("#beamgage").val()) {
									beamgage = "";
								}
  	    		 	  	         
  	    		 	  	         var WebSplicePlateThickness=  $("#websplicePT option:selected").text()+ '"';
  	    		 	  	      
  	    		 	  	         if (!$("#weldlengthH").val()) {
  	    		 	  	        	 weldlengthHor="";
  	    		 	              }
  	    		 	  	         if (!$("#weldlengthV").val()) {
  	    		 	  	        	 weldlengthVer="";
  	    		 	              }
  	    		 	  	         if (!$("#websplicePT").val()) {
  	    		 	  	        	 WebSplicePlateThickness="";
  	    		 	              }
  	    		 	  	         var FlangeSplicePlateThickness=  $("#flangesplicePT option:selected").text()+ '"';
  	    		 	  	         if (!$("#flangesplicePT").val()) {
  	    		 	  	        	 FlangeSplicePlateThickness="";
  	    		 	              }
  	    		 	  	         
  	    		 	  	         if (!$("#boltspcX").val()) {
  	    		 	  	        	 boltspcX="";
  	    		 	  			}if (!$("#boltspcY").val()) {
  	    		 	  	        	 boltspcY="";
  	    		 	  			}
  	    		 	  			 if (!$("#boltdia").val()) {
  	    		 	  	        	 boltdia="";
  	    		 	  			}
  	    		 	  	         
  	    		 	  			 if (!$("#thisdisable").val()) {
  	    		 	  	        	 weldsize="";
  	    		 	  			}
  	    		 	  	         if (!$("#edgedistance").val()) {
  	    		 	  	        	 edgedistance="";
  	    		 	  			}
  	    		 	  	 
  	    		 	  	      
  	    		 	  	    if(($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Field Welded')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Field Welded')) { 
  	  	    		 	       
   	    		 	       } else{
   	    		 	     
   	    		 	         
   	    		 	     	  
   	    		 	       }
  	    		 	     var boltspcY2=$("#boltspcY2 option:selected").text()+ '"';
  	    		 	  	
  	    		 	  if (!$("#boltspcY2").val()) {
  	    		 		boltspcY2="";
		 	  			}
  	    		 	  	         

  	    		 	  	         $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td >'+$('#LeftsideBP').val()+'</td><td>'+$('#RightsideBP').val()+'</td><td>'+WebSplicePlateThickness+'<input type="hidden" value='+$('#websplicePT').val()+'></td><td>'+FlangeSplicePlateThickness+'<input type="hidden" value='+$('#flangesplicePT').val()+'></td><td>'+$('#splice1Beam1').val()+'</td><td>'+$('#splice2Beam1').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrwWEB').val()+'</td><td>'+$('#noofboltrwFlange').val()+'</td><td>'+boltspcY+'<input type="hidden" value='+$('#boltspcY').val()+'></td><td>'+boltspcY2+'<input type="hidden" value='+$('#boltspcY2').val()+'></td><td>'+$('#noofboltcolumnsWEB').val()+'</td><td>'+$('#noofboltcolumnsFlange').val()+'</td><td>'+boltspcX+'<input type="hidden" value='+$('#boltspcX').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+beamgage+'<input type="hidden" value='+$('#beamgage').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+weldlengthHor+'<input type="hidden" class="inchH"  value='+$('#inchH').val()+'><input type="hidden" class="lengH"  value='+$('#weldlengthH').val()+'><input type="hidden" class="fracH"  value='+$('#fractionH').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fractionH option:selected').text()+ '" /></td> <td>'+weldlengthVer+'<input type="hidden" class="inchH"  value='+$('#inchV').val()+'><input type="hidden" class="lengH"  value='+$('#weldlengthV').val()+'><input type="hidden" class="fracH"  value='+$('#fractionV').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fractionV option:selected').text()+ '"  /></td><td>'+flangeweldlengthHor+'<input type="hidden" class="inchH"  value='+$('#flangeinchH').val()+'><input type="hidden" class="lengH"  value='+$('#flangeweldlengthH').val()+'><input type="hidden" class="fracH"  value='+$('#flangefractionH').val()+'><input type="hidden" class="fracHFrac" value="'+$('#flangefractionH option:selected').text()+ '" /></td> <td>'+flangeweldlengthVer+'<input type="hidden" class="inchH"  value='+$('#flangeinchV').val()+'><input type="hidden" class="lengH"  value='+$('#flangeweldlengthV').val()+'><input type="hidden" class="fracH"  value='+$('#flangefractionV').val()+'><input type="hidden" class="fracHFrac" value="'+$('#flangefractionV option:selected').text()+ '"  /></td></tr>');
  	    		 	  	
  	    		 	  	         
  	    		 	  	         
  	    		 	  	         addorupdate();
  	    		 	  	         showalertSuccess('Added successfully');
  	    		 	        		  
  	    		 	        	  }
  	    		 	        	  
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
  	    	   
  	    	   
  	    	 	 
  	 		   function updateconnectionmark() {
  	 			  connectionmarkvalues=[];
  	 			 var deleteconmarkval=[];
  	 			  connectionmarkvalues.push($('#conmark').val());
  	 			  deleteconmarkval.push(connectionmarkedit);
  	 			  
  	 				$.ajax({
  	 					 type : 'POST',
  	 		 	          url: "/bimspring/saveConnectionMarks",	          
  	 		 	          data : {connectiongrouptype:"SpliceColumnusingSplicePlate",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
  	 		 	          success : function(data, success) {
  	 		 	        	var status=data;
  	 		 	        	
  	 		 	        	  if (status=="false") {
  	 				 	        		
  	 					 	       		 $('#alert_model_placeholder').append
  	 					 		        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>   Connection Mark already exists' + 
  	 					 		                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
  	 					 		                '</div>')         
  	 					 		         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
  	 					 		             	$("#alertdiv").remove();
  	 					
  	 					 		         }, 2500);
  	 					 	      
  	 					 	       		
  	 								}else{
  	 				        	  $.ajax({
  	 								   type : 'POST',
  	 							          url: "/bimspring/deleteconnectionmark",	          
  	 							           data : {connectiongrouptype:"SpliceColumnusingSplicePlate",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
  	 								       
  	 							          success : function(data, success) {
  	 							        	  
  	 							        	  finalupdate();
  	 							         },error: function (error) {

											if(error.status == 401){
												window.location.href = 'logout';
											}else{
												
											
  	 							        	 $('#alert_model_placeholder').append
  	 							 		        ('<div class="alert alert-danger" id="alertdiv"> <i class="fa fa-exclamation-triangle"></i>   Connection Mark already exists' + 
  	 							 		                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
  	 							 		                '</div>')         
  	 							 		         	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
  	 							 		             	$("#alertdiv").remove();
  	 							
													 }, 2500);
													}
  	 							          }
  	 							          }); 
  	 				        	  
  	 								}
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
  	    	      	    	 	
	    	 	
$("#btnDeleteRows").click(function(){	
	  connectionmarkvalues=[];
	  connectionmarkToJSON('table') ;
	  deleteconnectionmarks("SpliceColumnusingSplicePlate")
	
  	    	   	
  	    	   	
});    	   	 	 	
  	    	 	
  	    	 	
  	    	 	
  	    	 	
  function finalupdate(){
					  $row.find("td:nth-child(26)").remove();
				 	  $row.find("td:nth-child(25)").remove();
					  $row.find("td:nth-child(24)").remove();
					  $row.find("td:nth-child(23)").remove();
	 	        	  $row.find("td:nth-child(22)").remove();
	 	       	      $row.find("td:nth-child(21)").remove();
	 	       	      $row.find("td:nth-child(20)").remove();
	 	       	      $row.find("td:nth-child(19)").remove();
	 	       	      $row.find("td:nth-child(18)").remove();
	 	       	      $row.find("td:nth-child(17)").remove();
	 	       	      $row.find("td:nth-child(16)").remove();
	 	       		  $row.find("td:nth-child(15)").remove();
	 	           	  $row.find("td:nth-child(14)").remove();
	 	           	  $row.find("td:nth-child(13)").remove();
	 	           	  $row.find("td:nth-child(12)").remove();
	 	           	  $row.find("td:nth-child(11)").remove();
	 	           	  $row.find("td:nth-child(10)").remove();
	 	           	  $row.find("td:nth-child(9)").remove();
	 	           	  $row.find("td:nth-child(8)").remove();
	 	           	  $row.find("td:nth-child(7)").remove();
	 	           	  $row.find("td:nth-child(6)").remove();
	 	           	  $row.find("td:nth-child(5)").remove();
	 	           	  $row.find("td:nth-child(4)").remove();
	 	           	  $row.find("td:nth-child(3)").remove();
	 	           	  $row.find("td:nth-child(2)").remove();
	 	           	  $row.find("td:nth-child(1)").remove();
	 	       			

	 	         	         $(".add-new-value").hide();
	 	         	         $(".memtype-table").show();
	 	         	         $(".left").show();
	 	         	         $(".editmemtype .rightFloat").hide();
	 	         	       listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
	 	         	       
	 	         	     
    		 	  	         var boltdia= $("#boltdia option:selected").text()+ '"';       
    		 	  	         var weldsize= $("#thisdisable option:selected").text()+ '"';
    		 	  	       
    		 	  	         var edgedistance=$("#edgedistance option:selected").text()+ '"';
    		 	  	         var boltspcX=$("#boltspcX option:selected").text()+ '"';
    		 	  	         var boltspcY=$("#boltspcY option:selected").text()+ '"';
    		 	  	         var weldlengthHor=feetInchFormater($('#weldlengthH').val(),$('#inchH').val(),$("#fractionH option:selected").text());
    		 	  	         var weldlengthVer=feetInchFormater($('#weldlengthV').val(),$('#inchV').val(),$("#fractionV option:selected").text());

    		 	  	         
    		 	  	        var flangeweldlengthHor=feetInchFormater($('#flangeweldlengthH').val(),$('#flangeinchH').val(),$("#flangefractionH option:selected").text());
  		 	  	            var flangeweldlengthVer=feetInchFormater($('#flangeweldlengthV').val(),$('#flangeinchV').val(),$("#flangefractionV option:selected").text());

    		 	  	         
  		 	  	        
  		 	  	     if (!$("#flangeweldlengthH").val()) {
  		 	  	    	flangeweldlengthHor="";
  		 	              }
  		 	  	         if (!$("#flangeweldlengthV").val()) {
  		 	  	        	flangeweldlengthVer="";
  		 	              }
  		 	  	        
  		 	  	        
    		 	  	         
							  	    		 	  		        
	  	    		 	   var beamgage = $("#beamgage option:selected").text()
									+ '"';
							if (!$("#beamgage").val()) {
								beamgage = "";
							}
    		 	  	         
    		 	  	         var WebSplicePlateThickness=  $("#websplicePT option:selected").text()+ '"';
    		 	  	      
    		 	  	         if (!$("#weldlengthH").val()) {
    		 	  	        	 weldlengthHor="";
    		 	              }
    		 	  	         if (!$("#weldlengthV").val()) {
    		 	  	        	 weldlengthVer="";
    		 	              }
    		 	  	         if (!$("#websplicePT").val()) {
    		 	  	        	 WebSplicePlateThickness="";
    		 	              }
    		 	  	         var FlangeSplicePlateThickness=  $("#flangesplicePT option:selected").text()+ '"';
    		 	  	         if (!$("#flangesplicePT").val()) {
    		 	  	        	 FlangeSplicePlateThickness="";
    		 	              }
    		 	  	         
    		 	  	         if (!$("#boltspcX").val()) {
    		 	  	        	 boltspcX="";
    		 	  			}if (!$("#boltspcY").val()) {
    		 	  	        	 boltspcY="";
    		 	  			}
    		 	  			 if (!$("#boltdia").val()) {
    		 	  	        	 boltdia="";
    		 	  			}
    		 	  	         
    		 	  			 if (!$("#thisdisable").val()) {
    		 	  	        	 weldsize="";
    		 	  			}
    		 	  	         if (!$("#edgedistance").val()) {
    		 	  	        	 edgedistance="";
    		 	  			}
    		 	  	 
    		 	  	      
    		 	  	    if(($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Shop Welded')||($('#splice1Beam1').val()=='Shop Welded' && $('#splice2Beam1').val()=='Field Welded')||($('#splice1Beam1').val()=='Field Welded' && $('#splice2Beam1').val()=='Field Welded')) { 
  	    		 	       
	    		 	       } else{
	    		 	     
	    		 	         
	    		 	     	  
	    		 	       }
    		 	     var boltspcY2=$("#boltspcY2 option:selected").text()+ '"';
    		 	  	
    		 	  if (!$("#boltspcY2").val()) {
    		 		boltspcY2="";
	 	  			}
    		 	  	         

    		 	 $row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input id="" checked type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td class="contxt">'+$('#conmark').val()+'</td> <td >'+$('#LeftsideBP').val()+'</td><td>'+$('#RightsideBP').val()+'</td><td>'+WebSplicePlateThickness+'<input type="hidden" value='+$('#websplicePT').val()+'></td><td>'+FlangeSplicePlateThickness+'<input type="hidden" value='+$('#flangesplicePT').val()+'></td><td>'+$('#splice1Beam1').val()+'</td><td>'+$('#splice2Beam1').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrwWEB').val()+'</td><td>'+$('#noofboltrwFlange').val()+'</td><td>'+boltspcY+'<input type="hidden" value='+$('#boltspcY').val()+'></td><td>'+boltspcY2+'<input type="hidden" value='+$('#boltspcY2').val()+'></td><td>'+$('#noofboltcolumnsWEB').val()+'</td><td>'+$('#noofboltcolumnsFlange').val()+'</td><td>'+boltspcX+'<input type="hidden" value='+$('#boltspcX').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+beamgage+'<input type="hidden" value='+$('#beamgage').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+weldlengthHor+'<input type="hidden" class="inchH"  value='+$('#inchH').val()+'><input type="hidden" class="lengH"  value='+$('#weldlengthH').val()+'><input type="hidden" class="fracH"  value='+$('#fractionH').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fractionH option:selected').text()+ '" /></td> <td>'+weldlengthVer+'<input type="hidden" class="inchH"  value='+$('#inchV').val()+'><input type="hidden" class="lengH"  value='+$('#weldlengthV').val()+'><input type="hidden" class="fracH"  value='+$('#fractionV').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fractionV option:selected').text()+ '"  /></td><td>'+flangeweldlengthHor+'<input type="hidden" class="inchH"  value='+$('#flangeinchH').val()+'><input type="hidden" class="lengH"  value='+$('#flangeweldlengthH').val()+'><input type="hidden" class="fracH"  value='+$('#flangefractionH').val()+'><input type="hidden" class="fracHFrac" value="'+$('#flangefractionH option:selected').text()+ '" /></td> <td>'+flangeweldlengthVer+'<input type="hidden" class="inchH"  value='+$('#flangeinchV').val()+'><input type="hidden" class="lengH"  value='+$('#flangeweldlengthV').val()+'><input type="hidden" class="fracH"  value='+$('#flangefractionV').val()+'><input type="hidden" class="fracHFrac" value="'+$('#flangefractionV option:selected').text()+ '"  /></td>');
    		 	  	
    		 	 	
  		 	  	     
	 	       	      addorupdate();
	 	       	     showalertSuccess('Updated successfully');
	 	        	 
  }	
		            
		            
		            
		            
		            
  function showalertsession(text) {        	
      $('#alert_placeholder').append
      ('<div class="alert alert-success" id="alertdiv"> <i class="fa fa-check-circle"></i> ' + text + 
              '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
              '</div>')       
       	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
           	$("#alertdiv").remove();

       }, 1000);
     
     }
      
		            
  
	function removeRedBoarder() {
		

				  $('#LeftsideBPDIV .select2-container--default .select2-selection--single').css("border-color","");
		
				  $('#RightsideBPDIV .select2-container--default .select2-selection--single').css("border-color","");
			
				  $('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
	
				  $('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
		
				  $('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
	
				  $('#noofboltrwWEBDIV .select2-container--default .select2-selection--single').css("border-color","");
			
				  $('#boltspcXDIV .select2-container--default .select2-selection--single').css("border-color","");
		
				  $('#boltspcYDIV .select2-container--default .select2-selection--single').css("border-color","");
		
				  $('#noofboltrwFlangeDIV .select2-container--default .select2-selection--single').css("border-color","");
		
				  $('#beamgageDIV .select2-container--default .select2-selection--single').css("border-color","");
		
				  $('#boltspcY2DIV .select2-container--default .select2-selection--single').css("border-color","");
		
				  $('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","");
		
				  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
			
				  $('#websplicePTDIV .select2-container--default .select2-selection--single').css("border-color","");
		
				  $('#flangesplicePTDIV .select2-container--default .select2-selection--single').css("border-color","");
		
	}            
	     	            
		            
		            
		            