/**
 * 
 */




   $(".select2").select2(); 
    
    var connectionmarkvalues=[];
    
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
    

    function validateSelect2Fields(){
  	  
  	  
  	  if (!$('#Profile').val()) {
  			$('#ProfileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  			
  		}
  	 if (!$('#clipangle').val()) {
			$('#clipanglediv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
  	  
  	 if (!$('#shearplatethickness').val()) {
			$('#shearplatethicknessdiv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}

  	if (!$('#boltgrade').val()) {
		$('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}
  
  if (!$('#boltdia').val()) {
		$('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}
  	
  	if (!$('#noofboltrw').val()) {
		$('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}
  	if (!$('#boltspc').val()) {
		$('#clipBolt .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}

  	
  	if (!$('#boltspcY').val()) {
		$('#boltspcYDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}

  	if (!$('#noofboltcol').val()) {
		$('#noofboltcolDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}
  	
  	if (!$('#boltspcX').val()) {
		$('#boltspcXDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}
 
  	if (!$('#edgedistance').val()) {
		$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}

	if (!$('#ddlcjp').val()) {
		$('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}

	if (!$('#thisdisable').val()) {
		$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		
	}

  	  
  	  
    }

function validateForm() {
	validateSelect2Fields();
	
	$('#formBeamToColumnClipAngle').addClass('submitted');
	
	var validated = true;
	
	
	/* checking for required filed */
	$('#formBeamToColumnClipAngle').find(':input').each(function(){   
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
	

	if(validated == true)
	{

		var Lenght = $("#cpanglelen").val();
    	var Inch = $("#inch").find("option:selected").text();
    	var Fraction = $("#fraction").find("option:selected").text();
	
		validated = validateLength(Lenght,Inch,Fraction,"Length");
	}
		 return validated;

}






/* checking for required filed */
$("#adddata").on('click', function(){
	if (validateForm() && checkconnectioncodeForuniquiness()) {

		addconnectionmark();
    	
	}

});


  
  $(".action-icons .add").on('click', function(){
        $(".right").show();
        $(".left").hide();
        $("#adddata").show();
        $("#update").hide();
        $(".memtype-rightedit").show();
        $(".editmemtype .rightFloat").show();  
        $(".BoltDetails,.ClipAngleLength,#conmark,#beamprofile,#clipanglesz,#btocClip1,#btocClip2,.WeldDetails").val('').trigger("change");  
        $('#formBeamToColumnClipAngle').removeClass('submitted');
 
    });
  
  $("#update").on('click', function(){
	  if (validateForm() && checkconnectioncodeForuniquiness()) {
		  if (connectionmarkedit==$("#conmark").val()) {
	  		  finalupdate();
	  		     
			} else {
				 updateconnectionmark();
			}
	  }
 	 

    });
  
  
  function addorupdate() {
	  
	  
	  var connectionjson=	tableToJSON('table') ;
		$.ajax({
 		   type : 'POST',
 	          url: "/bimspring/saveConnectionsDetails",	          
 	          data : {connectiongrouptype:"TrussEnd",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
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
		     var Cprofile=value["ChordProfile"];
		     var endcontype=value[ConnectingMemberProfile_fra];
		     
		     var BoltSpacingYDD=value[BoltSpacingY];
		     var BoltSpacingXDD=value[BoltSpacingX];
		     
		     var WeldPlateLengthDD= value[WeldPlateLength]; 
		     var ClipPlateLengthDD= value[ClipPlateLength]; 
		     var ShearPlateLengthDD= value[ShearPlateLength];
		    
		     
			 var WeldPlateLengthformat=feetInchFormater(WeldPlateLengthDD[Length],WeldPlateLengthDD[InchKeyN],WeldPlateLengthDD[Fractionfraction]);
			 var ClipPlateLengthformat=feetInchFormater(ClipPlateLengthDD[Length],ClipPlateLengthDD[InchKeyN],ClipPlateLengthDD[Fractionfraction]);
	         var ShearPlateLengthformat=feetInchFormater(ShearPlateLengthDD[Length],ShearPlateLengthDD[InchKeyN],ShearPlateLengthDD[Fractionfraction]);
	       
			  if (!WeldPlateLengthDD[Length]) {
				  WeldPlateLengthformat="";

				}
		
			  if (!ClipPlateLengthDD[Length]) {
				  ClipPlateLengthformat="";

				}
			  if (!ShearPlateLengthDD[Length]) {
				  ShearPlateLengthformat="";

				}
			  if (value[EndConnectionDD]=="Shear Plate" || value[EndConnectionDD]=="End Plate") {
				  endcontype=value[ConnectingMemberProfile_fra]+'"';
				
			}
			  try {
				  var ClipOSLValue=value["ClipAngleOSL"];
			} catch (e) {
				
			}
		  
			 
			  
			  $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td  class="contxt">'+value[ConnectionMark]+'</td><td>'+value[ChordProfileTypeDD]+'</td><td>'+Cprofile[BeamProfile]+'</td><td>'+value[EndConnectionDD]+'</td><td>'+endcontype+'<input type="hidden" value='+value[ConnectingMemberProfile]+'></td><td>'+value[ConnectionMethodDD]+'</td><td>'+ClipOSLValue+'</td><td>'+value[BoltGrade]+'</td><td>'+getformateforrepresentation(value[BoltDia_fra])+'<input type="hidden" value='+value[BoltDia]+'></td><td>'+value[BoltRows]+'</td><td>'+getformateforrepresentation(BoltSpacingYDD[BoltSpacing_fra])+'<input type="hidden" value='+BoltSpacingYDD[BoltSpacing]+'></td><td>'+value[NoOfBoltColumnsKeyN]+'</td><td>'+getformateforrepresentation(BoltSpacingXDD[BoltSpacing_fra])+'<input type="hidden" value='+BoltSpacingXDD[BoltSpacing]+'></td><td>'+getformateforrepresentation(value[EdgeDistance_fra])+'<input type="hidden" value='+value[EdgeDistance]+'></td><td>'+value[WeldType]+'</td><td>'+getformateforrepresentation(value[WeldSize_fra])+'<input type="hidden" value='+value[WeldSize]+'></td><td>'+WeldPlateLengthformat+'<input type="hidden" class="inchH"  value='+WeldPlateLengthDD[InchKeyN]+'><input type="hidden" class="lengH"  value='+WeldPlateLengthDD[Length]+'><input type="hidden" class="fracH"  value='+WeldPlateLengthDD[Fractiondecimal]+'> <input type="hidden" class="fracHFrac"  value="'+WeldPlateLengthDD[Fractionfraction]+'"></td><td>'+ClipPlateLengthformat+'<input type="hidden" class="inchH"  value='+ClipPlateLengthDD[InchKeyN]+'><input type="hidden" class="lengH"  value='+ClipPlateLengthDD[Length]+'><input type="hidden" class="fracH"  value='+ClipPlateLengthDD[Fractiondecimal]+'> <input type="hidden" class="fracHFrac"  value="'+ClipPlateLengthDD[Fractionfraction]+'"></td><td>'+ShearPlateLengthformat+'<input type="hidden" class="inchH"  value='+ShearPlateLengthDD[InchKeyN]+'><input type="hidden" class="lengH"  value='+ShearPlateLengthDD[Length]+'><input type="hidden" class="fracH"  value='+ShearPlateLengthDD[Fractiondecimal]+'> <input type="hidden" class="fracHFrac"  value="'+ShearPlateLengthDD[Fractionfraction]+'"></td></tr>');
 
	
	  
	  });
}




var $row ="";
$("#edit").click(function(){
	var i=0;
	
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
		 $("#adddata").hide();
	     $("#update").show();
	
	  $(".contxt").each(function(){			
			listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
			
		});
	  listvalues = jQuery.grep(listvalues, function(value) {
		  return value != $row.find("td:nth-child(3)").text().replace(/\s/g, "").toLowerCase();
		});
	  
	  connectionmarkedit=$row.find("td:nth-child(3)").text();
	  $("#conmark").val($row.find("td:nth-child(3)").text());
	  $("#chordprofiletype").val($row.find("td:nth-child(4)").text()).trigger("change");
	  $("#Profile").val($row.find("td:nth-child(5)").text()).trigger("change");
	  $("#btocClip1").val($row.find("td:nth-child(6)").text()).trigger("change");
	  $("#connectionmethod").val($row.find("td:nth-child(8)").text()).trigger("change");
	
	  
	  
	  if ($row.find("td:nth-child(6)").text()=="Clip Angle") {
		  $("#boltspc").val($row.find("td:nth-child(15)").find('input').val()).trigger("change");
		  $("#boltspcX").val("").trigger("change");
	 	   $("#clipangle").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
	 	   $("#cpanglelen").val($row.find("td:nth-child(20)").find('.lengH').val()).trigger("change");
	 	   $("#inch").val($row.find("td:nth-child(20)").find('.inchH').val()).trigger("change");   
	 	   $("#fraction").val($row.find("td:nth-child(20)").find('.fracH').val()).trigger("change");
	 	  $("#LabelID").text("Clip Angle Length");
	 	  }
   else if ($row.find("td:nth-child(6)").text()=="Shear Plate") {
	     $("#boltspc").val("").trigger("change");
	     $("#boltspcX").val($row.find("td:nth-child(15)").find('input').val()).trigger("change");
	 	 $("#shearplatethickness").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
	 	 $("#clipangle").val($row.find("td:nth-child(21)").find('.lengH').val()).trigger("change");
	 	 $("#cpanglelen").val($row.find("td:nth-child(21)").find('.lengH').val()).trigger("change");
	 	 $("#inch").val($row.find("td:nth-child(21)").find('.inchH').val()).trigger("change");   
	 	 $("#fraction").val($row.find("td:nth-child(21)").find('.fracH').val()).trigger("change");
	 	  $("#LabelID").text("Shear Plate Length");
	 	 $("#pltThickness").text("Shear Plate Thickness");
	 
        }
	 else if ($row.find("td:nth-child(6)").text()=="End Plate") {
		 $("#shearplatethickness").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
	 	 $("#clipangle").val($row.find("td:nth-child(19)").find('.lengH').val()).trigger("change");
	 	 $("#cpanglelen").val($row.find("td:nth-child(19)").find('.lengH').val()).trigger("change");
	 	 $("#inch").val($row.find("td:nth-child(19)").find('.inchH').val()).trigger("change");   
	 	 $("#fraction").val($row.find("td:nth-child(19)").find('.fracH').val()).trigger("change");
	 	 $("#pltThickness").text("End Plate Thickness");
		}
	 else if ($row.find("td:nth-child(6)").text()=="Directly Welded") {
		
	 	  $("#LabelID").text("Weld Length");
		}
	  
	  
	  $("#clipangelOSl").val($row.find("td:nth-child(9)").text()).trigger("change");
	  $("#boltgrade").val($row.find("td:nth-child(10)").text()).trigger("change");
	  $("#boltdia").val($row.find("td:nth-child(11)").find('input').val()).trigger("change");
	  $("#noofboltrw").val($row.find("td:nth-child(12)").text()).trigger("change");
	  $("#boltspcY").val($row.find("td:nth-child(13)").find('input').val()).trigger("change");
	  $("#noofboltcol").val($row.find("td:nth-child(14)").text()).trigger("change"); 
	  $("#edgedistance").val($row.find("td:nth-child(16)").find('input').val()).trigger("change");	
	  $("#ddlcjp").val($row.find("td:nth-child(17)").text()).trigger("change");
	  $("#thisdisable").val($row.find("td:nth-child(18)").find('input').val()).trigger("change");   
	  
			
	 
	}
	
	
});


$("#recall").click(function(){

	
	var $row=$('#table tr:last');
	
	  $(".contxt").each(function(){			
			listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
			
		});
	  listvalues = jQuery.grep(listvalues, function(value) {
		  return value != $row.find("td:nth-child(3)").text().replace(/\s/g, "").toLowerCase();
		});
	  
	  connectionmarkedit=$row.find("td:nth-child(3)").text();
	  
	  $("#conmark").val("");
	  $("#chordprofiletype").val($row.find("td:nth-child(4)").text()).trigger("change");
	  $("#Profile").val($row.find("td:nth-child(5)").text()).trigger("change");
	  $("#btocClip1").val($row.find("td:nth-child(6)").text()).trigger("change");
	  $("#connectionmethod").val($row.find("td:nth-child(8)").text()).trigger("change");
	
	  
	  
	  if ($row.find("td:nth-child(6)").text()=="Clip Angle") {
		  $("#boltspc").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
		  $("#boltspcX").val("").trigger("change");
	 	   $("#clipangle").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
	 	   $("#cpanglelen").val($row.find("td:nth-child(20)").find('.lengH').val()).trigger("change");
	 	   $("#inch").val($row.find("td:nth-child(20)").find('.inchH').val()).trigger("change");   
	 	   $("#fraction").val($row.find("td:nth-child(20)").find('.fracH').val()).trigger("change");
	 	  $("#LabelID").text("Clip Angle Length");
	 	  }
   else if ($row.find("td:nth-child(6)").text()=="Shear Plate") {
	   $("#boltspc").val("").trigger("change");
	   $("#boltspcX").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
	 	 $("#shearplatethickness").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
	 	 $("#clipangle").val($row.find("td:nth-child(21)").find('.lengH').val()).trigger("change");
	 	 $("#cpanglelen").val($row.find("td:nth-child(21)").find('.lengH').val()).trigger("change");
	 	 $("#inch").val($row.find("td:nth-child(21)").find('.inchH').val()).trigger("change");   
	 	 $("#fraction").val($row.find("td:nth-child(21)").find('.fracH').val()).trigger("change");
	 	  $("#LabelID").text("Shear Plate Length");
	 	 $("#pltThickness").text("Shear Plate Thickness");
	 
        }
	 else if ($row.find("td:nth-child(6)").text()=="End Plate") {
		 $("#shearplatethickness").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
	 	 $("#clipangle").val($row.find("td:nth-child(19)").find('.lengH').val()).trigger("change");
	 	 $("#cpanglelen").val($row.find("td:nth-child(19)").find('.lengH').val()).trigger("change");
	 	 $("#inch").val($row.find("td:nth-child(19)").find('.inchH').val()).trigger("change");   
	 	 $("#fraction").val($row.find("td:nth-child(19)").find('.fracH').val()).trigger("change");
	 	 $("#pltThickness").text("End Plate Thickness");
		}
	 else if ($row.find("td:nth-child(6)").text()=="Directly Welded") {
		
	 	  $("#LabelID").text("Weld Length");
		}
	  
	  $("#clipangelOSl").val($row.find("td:nth-child(9)").text()).trigger("change");
	  $("#boltgrade").val($row.find("td:nth-child(10)").text()).trigger("change");
	  $("#boltdia").val($row.find("td:nth-child(11)").find('input').val()).trigger("change");
	  $("#noofboltrw").val($row.find("td:nth-child(12)").text()).trigger("change");
	  $("#boltspcY").val($row.find("td:nth-child(13)").find('input').val()).trigger("change");
	  $("#noofboltcol").val($row.find("td:nth-child(14)").text()).trigger("change"); 
	  $("#edgedistance").val($row.find("td:nth-child(16)").find('input').val()).trigger("change");	
	  $("#ddlcjp").val($row.find("td:nth-child(17)").text()).trigger("change");
	  $("#thisdisable").val($row.find("td:nth-child(18)").find('input').val()).trigger("change");   
	  

});











$("#btocClipAngleLength").hide();   

$("#connectionmethod").change( function(){
    $("#ddlcjp").val(''); 
	$("#clipBolt").show();
	$(".sherBolt").hide();
	$("#shearplatethickness").val('').trigger("change");  
	$("#clipangle").val('').trigger("change");  
	if($('#btocClip1').val()=='Clip Angle' ){ 
		 $("#clipangle").val(ClipAngleSizeGp).trigger("change");  
		 $("#clipangelOSlDIV,#clipanglediv,#connectionmethoddv").show();
		 if ( $('#connectionmethod').val()=='Field Bolted') {
       		
           	  $("#btocBoltDetails").show();
                 getboltdetails()
                 $("#btocWeldDetails").show();
                 getWelddetails();
                 $("#btocClipAngleLength").hide();	
            	 $(".ClipAngleLength").val('').trigger("change");  
			}
       	 else   if($('#connectionmethod').val()=='Field Welded' ){ 
                $("#btocBoltDetails").hide();
                getboltdetails()
                $("#btocWeldDetails").show();
                getWelddetails();
                $("#btocClipAngleLength").show();
                $(".BoltDetails").val('').trigger("change");
                $("#inch,#fraction").val("0").trigger("change");
                $("#LabelID").text("Clip Angle Length");
            }
       	 else{
       		 $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength").hide();
       
       	 }
      
    }
	 else   if($('#btocClip1').val()=='Directly Welded'){ 
        $("#btocBoltDetails").hide();
        getboltdetails()
        $("#btocWeldDetails").show();
        getWelddetails();
        $("#btocClipAngleLength").show();
        $(".BoltDetails").val('').trigger("change");
        $("#inch,#fraction").val("0").trigger("change");
        $("#LabelID").text("Shear Plate Length");
       
        
    }
	 else   if($('#btocClip1').val()=='Shear Plate'){ 
		 $("#shearplatethickness").val(MinPTFromGP).trigger("change");  
		 $("#pltThickness").text("");
		 $("#pltThickness").text("Shear Plate Thickness");
		
		 $("#shearplatethicknessdiv,#connectionmethoddv").show();
		 if ( $('#connectionmethod').val()=='Field Bolted') {
			 $("#clipBolt").hide();
			 $(".sherBolt").show();
       		
           	  $("#btocBoltDetails").show();
                 getboltdetails();
                 $("#btocWeldDetails").show();
                 getWelddetails();
                 $("#btocClipAngleLength").hide();	
            	 $(".ClipAngleLength").val('').trigger("change");  
			}
       	 else   if($('#connectionmethod').val()=='Field Welded' ){ 
                $("#btocBoltDetails").hide();
                getboltdetails()
                $("#btocWeldDetails").show();
                getWelddetails();
                $("#btocClipAngleLength").show();
                $(".BoltDetails").val('').trigger("change");
                $("#inch,#fraction").val("0").trigger("change");
                $("#LabelID").text("Shear Plate Length");
                 
            }
       	 else{
          	  $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength").hide();
          
          	 }
    }
	 else   if($('#btocClip1').val()=='End Plate'){ 
		 $("#shearplatethickness").val(MinPTFromGP).trigger("change");  
		 $("#pltThickness").text("End Plate Thickness");
		
		 $("#shearplatethicknessdiv,#connectionmethoddv").show();
		 if ( $('#connectionmethod').val()=='Field Bolted') {
       		
           	  $("#btocBoltDetails").show();
                 getboltdetails()
                 $("#btocWeldDetails").show();
                 getWelddetails();
                 $("#btocClipAngleLength").hide();	
            	 $(".ClipAngleLength").val('').trigger("change");  
			}else{
				 $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength").hide();
			}
       
    }
	 else   if($('#btocClip1').val()=='Directly Bolted'){ 
        $("#btocBoltDetails").show();
        getboltdetails();
        $("#btocWeldDetails").hide();	
        $("#btocClipAngleLength").hide();
        $(".WeldDetails,.ClipAngleLength").val('').trigger("change");
    }
	 
	 
	 else{
   	 $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength").hide();
    }
	removeRedBoarder();
});


    $("#btocClip1").change( function(){
    	 $("#ddlcjp").val(''); 
    	 resetDrodown("connectionmethod");
    	 $("#clipBolt").show();
    	 $(".sherBolt").hide();
    	 $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength,#connectionmethoddv,#clipanglediv,#clipangelOSlDIV,#shearplatethicknessdiv,#btocClipAngleLength").hide();
    	 $("#shearplatethickness").val('').trigger("change");  
    	 $("#clipangle").val('').trigger("change");  
    	 if ($("#btocClip1").val()) {
    		 if($('#btocClip1').val()=='Clip Angle' ){ 
        		 $("#clipanglediv,#connectionmethoddv,#clipangelOSlDIV").show();
        		var listval= [{"ConnectionMethode": "Field Welded"}, {"ConnectionMethode": "Field Bolted"}];
        		fillConnectionMethodDropdownList("connectionmethod", listval);
        		 if ( $('#connectionmethod').val()=='Field Bolted') {
                		
                    	  $("#btocBoltDetails").show();
                          getboltdetails()
                          $("#btocWeldDetails").show();
                          getWelddetails();
                          $("#btocClipAngleLength").hide();	
                     	 $(".ClipAngleLength").val('').trigger("change");  
        			}
                	 else   if($('#connectionmethod').val()=='Field Welded' ){ 
                         $("#btocBoltDetails").hide();
                         getboltdetails()
                         $("#btocWeldDetails").show();
                         getWelddetails();
                         $("#btocClipAngleLength").show();
                         $(".BoltDetails").val('').trigger("change");
                         $("#inch,#fraction").val("0").trigger("change");
                         $("#LabelID").text("Clip Angle Length");
                       
                     }
        		 $("#clipangle").val(ClipAngleSizeGp).trigger("change");  
               
             }
        	 else   if($('#btocClip1').val()=='Directly Welded'){ 
                 $("#btocBoltDetails").hide();
                 getboltdetails()
                 $("#btocWeldDetails").show();
                 getWelddetails();
                 $("#btocClipAngleLength").show();
                 $(".BoltDetails").val('').trigger("change");
                 $("#inch,#fraction").val("0").trigger("change");
                 $("#LabelID").text("Weld Length");
                
             }
        	 else   if($('#btocClip1').val()=='Shear Plate'){ 
        		 $("#clipBolt").hide();
    			 $(".sherBolt").show();
    			 $("#shearplatethickness").val(MinPTFromGP).trigger("change");  
        		
    			 $("#pltThickness").text("");
    			 $("#pltThickness").text("Shear Plate Thickness");
        		 var listval= [{"ConnectionMethode": "Field Welded"}, {"ConnectionMethode": "Field Bolted"}];
         		fillConnectionMethodDropdownList("connectionmethod", listval);
        		 $("#shearplatethicknessdiv,#connectionmethoddv").show();
        		 if ( $('#connectionmethod').val()=='Field Bolted') {
                		
                    	  $("#btocBoltDetails").show();
                          getboltdetails()
                          $("#btocWeldDetails").show();
                          getWelddetails();
                          $("#btocClipAngleLength").hide();	
                     	 $(".ClipAngleLength").val('').trigger("change");  
        			}
                	 else   if($('#connectionmethod').val()=='Field Welded' ){ 
                         $("#btocBoltDetails").hide();
                         getboltdetails()
                         $("#btocWeldDetails").show();
                         getWelddetails();
                         $("#btocClipAngleLength").show();
                         $(".BoltDetails").val('').trigger("change");
                         $("#inch,#fraction").val("0").trigger("change");
                         $("#LabelID").text("Shear Plate Length");
                     }
             }
        	 else   if($('#btocClip1').val()=='End Plate'){ 
        		 $("#shearplatethickness").val(MinPTFromGP).trigger("change");  
        		 
        		 $("#pltThickness").text("End Plate Thickness");
        		 var listval= [{"ConnectionMethode": "Field Bolted"}];
         		fillConnectionMethodDropdownList("connectionmethod", listval);
        		 $("#shearplatethicknessdiv,#connectionmethoddv").show();
        		 if ( $('#connectionmethod').val()=='Field Bolted') {
                		
                    	  $("#btocBoltDetails").show();
                          getboltdetails()
                          $("#btocWeldDetails").show();
                          getWelddetails();
                          $("#btocClipAngleLength").hide();	
                     	 $(".ClipAngleLength").val('').trigger("change");  
        			}
                
             }
        	 else   if($('#btocClip1').val()=='Directly Bolted'){ 
                 $("#btocBoltDetails").show();
                 getboltdetails();
                 $("#btocWeldDetails").hide();	
                 $("#btocClipAngleLength").hide();
                 $(".WeldDetails,.ClipAngleLength").val('').trigger("change");
             }
        	 
        	 
        	 else{
            	 $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength").hide();
             }
    		 removeRedBoarder();
    		}
    	 
    });


   

    function  getboltdetails(){
 	   
 	   $("#boltgrade").val(BoGrGp).trigger("change");  
 	   $("#boltdia").val(BoltDiaGP).trigger("change");  
 	   $("#boltspc").val(BspacingGP).trigger("change");  
 	   $("#edgedistance").val(EDistandanceGP).trigger("change");  
 	
 	   
     }
    
    function  getWelddetails(){
 	  
       $("#ddlcjp,#ddlcjp2,#ddlcjp3").val(WeldTypeDefaultValue).trigger("change"); 
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
        $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength").hide();
        $("#clipanglesz").val(MinPTFromGP).trigger("change");
        listvalues = [];
        $(".contxt").each(function(){			
 			listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
 			
 		});
        $('#ProfileDIV .select2-container--default .select2-selection--single').css("border-color","");   
     });
     
     $(".contxt").each(function(){			
 		listvalues.push($(this).text().replace(/\s/g, "").toLowerCase());
 		
 	});
     
     
     
     
     
	 	
	  function addconnectionmark() {
			
		  connectionmarkvalues=[];
		  connectionjson=connectionmarkToJSON('table') ;
		  
		  connectionmarkvalues.push($('#conmark').val());
		 
			$.ajax({
	 		   type : 'POST',
	 	          url: "/bimspring/saveConnectionMarks",	          
	 	          data : {connectiongrouptype:"TrussEnd",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
	 	                
	 	                var boltdia= $("#boltdia option:selected").text()+'"';
	 	                var weldsize= $("#thisdisable option:selected").text()+'"';
	 	                var edgedistance=$("#edgedistance option:selected").text()+'"';
	 	                var boltspcF="";
	 	                var boltspcF_fra="";
	 	              	listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
	 	            	
	 	                if (!$("#boltdia").val()) {
	 	               	 boltdia="";
	 	       		}
	 	                
	 	                if (!$("#thisdisable").val()) {
	 	               	 weldsize="";
	 	       		}
	 	             
	 	                
	 	                if (!$("#edgedistance").val()) {
	 	               	 edgedistance="";
	 	       		}
	 	                if (!$("#cpanglelen").val()) {
	 	               	 cpanglelen="";

	 	       		}
	 	                

	 	               var boltspcY=$("#boltspcY option:selected").text()+ '"';
	 	              
	 	               if (!$("#boltspcY").val()) {
	 	            	 boltspcY="";
                        }
	 	              
		 	             
	 	               var connectingmemberprofile="";
	 	               var connectingmemberprofile_fra="";
	 	             
	 	               var fulllengthsavedw="";
	 	               var lengthsavedw="";
	 	               var inchsavedw="";
	 	               var fracsavedw="";
	 	               var frac_frasavedw="";
	 	            
	 	               var fulllengthsavedc="";
	 	               var lengthsavedc="";
	 	               var inchsavedc="";
	 	               var fracsavedc="";
	 	               var frac_frasavedc="";
	 	               
	 	                var fulllengthsaveds="";
	 	                var lengthsaveds="";
	 	                var inchsaveds="";
	 	                var fracsaveds="";
	 	                var frac_frasaveds="";

	 	                if ($("#btocClip1").val()=="Clip Angle") {
	 	             	 	     connectingmemberprofile= $("#clipangle").val()
	 	             	 	     connectingmemberprofile_fra= $("#clipangle option:selected").text();
	 	             			 fulllengthsavedc=feetInchFormater($('#cpanglelen').val(),$('#inch').val(),$("#fraction option:selected").text());
	 	             			 lengthsavedc=$('#cpanglelen').val();
	 	                         inchsavedc=$('#inch').val();
	 	                         fracsavedc=$('#fraction').val();
	 	                         frac_frasavedc=$("#fraction option:selected").text();
	 	                         boltspcF_fra=$("#boltspc option:selected").text()+ '"';
		 	             	 	 boltspcF=$("#boltspc").val();
		 	             	   if (!$("#cpanglelen").val()) {
		 	             		 fulllengthsavedc="";
		 		                        }
	 	                     }
	 	                else if ($("#btocClip1").val()=="Shear Plate") {
	 	             	 	 connectingmemberprofile=$("#shearplatethickness").val();
	 	             	 	 connectingmemberprofile_fra= $("#shearplatethickness option:selected").text()+ '"';
	 	             	 	 boltspcF_fra=$("#boltspcX option:selected").text()+ '"';
	 	             	 	 boltspcF=$("#boltspcX").val();
	 	             			   fulllengthsaveds=feetInchFormater($('#cpanglelen').val(),$('#inch').val(),$("#fraction option:selected").text());
		 	             		   lengthsaveds=$('#cpanglelen').val();
	 	                           inchsaveds=$('#inch').val();
	 	                           fracsaveds=$('#fraction').val();
	 	                           frac_frasaveds=$("#fraction option:selected").text();
	 	                          if (!$("#cpanglelen").val()) {
	 	                        	 fulllengthsaveds="";
	 		 		                        }
	 	                     }
	 	             	 else if ($("#btocClip1").val()=="End Plate") {
	 	             	 	  connectingmemberprofile=$("#shearplatethickness").val();
	 	                      connectingmemberprofile_fra= $("#shearplatethickness option:selected").text()+ '"';
	 	             		
	 	             		}
	 	             	 else if ($("#btocClip1").val()=="Directly Welded") {
	 	             	 	  fulllengthsavedw=feetInchFormater($('#cpanglelen').val(),$('#inch').val(),$("#fraction option:selected").text());
	 	             		  lengthsavedw=$('#cpanglelen').val();
	 	                      inchsavedw=$('#inch').val();
	 	                      fracsavedw=$('#fraction').val();
	 	                      frac_frasavedw=$("#fraction option:selected").text();
	 	                     if (!$("#cpanglelen").val()) {
	 	                    	fulllengthsavedw="";
		 		                        }
	 	             		}
	 	                if (boltspcF_fra=='-select-"') {
	 	                	boltspcF_fra="";
						}
	 	              
	 	             		
	
	 	        $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td  class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#chordprofiletype').val()+'</td><td>'+$('#Profile').val()+'</td><td>'+$('#btocClip1').val()+'</td> <td>'+connectingmemberprofile_fra+'<input type="hidden" value='+connectingmemberprofile+'></td><td>'+$('#connectionmethod').val()+'</td><td>'+$('#clipangelOSl').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td>'+boltspcY+'<input type="hidden" value='+$('#boltspcY').val()+'></td><td>'+$('#noofboltcol').val()+'</td><td>'+boltspcF_fra+'<input type="hidden" value='+boltspcF+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+fulllengthsavedw+'<input type="hidden" class="inchH"  value='+inchsavedw+'><input type="hidden" class="lengH"  value='+lengthsavedw+'><input type="hidden" class="fracH"  value='+fracsavedw+'> <input type="hidden" class="fracHFrac" value="'+frac_frasavedw+'"  /></td><td>'+fulllengthsavedc+'<input type="hidden" class="inchH"  value='+inchsavedc+'><input type="hidden" class="lengH"  value='+lengthsavedc+'><input type="hidden" class="fracH"  value='+fracsavedc+'> <input type="hidden" class="fracHFrac" value="'+frac_frasavedc+'"  /></td><td>'+fulllengthsaveds+'<input type="hidden" class="inchH"  value='+inchsaveds+'><input type="hidden" class="lengH"  value='+lengthsaveds+'><input type="hidden" class="fracH"  value='+fracsaveds+'> <input type="hidden" class="fracHFrac" value="'+frac_frasaveds+'" /></td></tr>');
	 	             	 	                	 	        
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
	 	          data : {connectiongrouptype:"TrussEnd",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
						           data : {connectiongrouptype:"TrussEnd",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
							       
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
deleteconnectionmarks("TrussEnd")
 	
});    	   	 	 	
	
	
	
	
function finalupdate(){
	   
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
		         var boltdia= $("#boltdia option:selected").text()+'"';
	                var weldsize= $("#thisdisable option:selected").text()+'"';
	                var edgedistance=$("#edgedistance option:selected").text()+'"';
	                var boltspcF="";
	                var boltspcF_fra="";
	              	listvalues.push($('#conmark').val().replace(/\s/g, "").toLowerCase());
	            	
	                if (!$("#boltdia").val()) {
	               	 boltdia="";
	       		}
	                
	                if (!$("#thisdisable").val()) {
	               	 weldsize="";
	       		}
	             
	                
	                if (!$("#edgedistance").val()) {
	               	 edgedistance="";
	       		}
	                if (!$("#cpanglelen").val()) {
	               	 cpanglelen="";

	       		}
	                

	               var boltspcY=$("#boltspcY option:selected").text()+ '"';
	              
	               if (!$("#boltspcY").val()) {
	            	 boltspcY="";
                 }
	              
	 	             
	               var connectingmemberprofile="";
	               var connectingmemberprofile_fra="";
	               
	               var fulllengthsavedw="";
	               var lengthsavedw="";
	               var inchsavedw="";
	               var fracsavedw="";
	               var frac_frasavedw="";
	           
	 	              
	               
	               var fulllengthsavedc="";
	               var lengthsavedc="";
	               var inchsavedc="";
	               var fracsavedc="";
	               var frac_frasavedc="";
	               
	                var fulllengthsaveds="";
	                var lengthsaveds="";
	                var inchsaveds="";
	                var fracsaveds="";
	                var frac_frasaveds="";

	                if ($("#btocClip1").val()=="Clip Angle") {
	             	 	     connectingmemberprofile= $("#clipangle").val()
	             	 	     connectingmemberprofile_fra= $("#clipangle option:selected").text();
	             			 fulllengthsavedc=feetInchFormater($('#cpanglelen').val(),$('#inch').val(),$("#fraction option:selected").text());
	             			 lengthsavedc=$('#cpanglelen').val();
	                         inchsavedc=$('#inch').val();
	                         fracsavedc=$('#fraction').val();
	                         frac_frasavedc=$("#fraction option:selected").text();
	                         boltspcF_fra=$("#boltspc option:selected").text()+ '"';
	 	             	 	 boltspcF=$("#boltspc").val();
	 	             	   if (!$("#cpanglelen").val()) {
	 	             		 fulllengthsavedc="";
	 		                        }
	                     }
	                else if ($("#btocClip1").val()=="Shear Plate") {
	             	 	 connectingmemberprofile=$("#shearplatethickness").val();
	             	 	 connectingmemberprofile_fra= $("#shearplatethickness option:selected").text()+ '"';
	             	 	 boltspcF_fra=$("#boltspcX option:selected").text()+ '"';
	             	 	 boltspcF=$("#boltspcX").val();
	             			   fulllengthsaveds=feetInchFormater($('#cpanglelen').val(),$('#inch').val(),$("#fraction option:selected").text());
	 	             		   lengthsaveds=$('#cpanglelen').val();
	                           inchsaveds=$('#inch').val();
	                           fracsaveds=$('#fraction').val();
	                           frac_frasaveds=$("#fraction option:selected").text();
	                          if (!$("#cpanglelen").val()) {
	                        	 fulllengthsaveds="";
		 		                        }
	                     }
	             	 else if ($("#btocClip1").val()=="End Plate") {
	             	 	  connectingmemberprofile=$("#shearplatethickness").val();
	                      connectingmemberprofile_fra= $("#shearplatethickness option:selected").text()+ '"';
	             		
	             		}
	             	 else if ($("#btocClip1").val()=="Directly Welded") {
	             	 	  fulllengthsavedw=feetInchFormater($('#cpanglelen').val(),$('#inch').val(),$("#fraction option:selected").text());
	             		  lengthsavedw=$('#cpanglelen').val();
	                      inchsavedw=$('#inch').val();
	                      fracsavedw=$('#fraction').val();
	                      frac_frasavedw=$("#fraction option:selected").text();
	                     if (!$("#cpanglelen").val()) {
	                    	fulllengthsavedw="";
	 		                        }
	             		}
	                if (boltspcF_fra=='-select-"') {
	                	boltspcF_fra="";
					}
	 $row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" checked name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td  class="contxt">'+$('#conmark').val()+'</td> <td>'+$('#chordprofiletype').val()+'</td><td>'+$('#Profile').val()+'</td><td>'+$('#btocClip1').val()+'</td> <td>'+connectingmemberprofile_fra+'<input type="hidden" value='+connectingmemberprofile+'></td><td>'+$('#connectionmethod').val()+'</td><td>'+$('#clipangelOSl').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td>'+boltspcY+'<input type="hidden" value='+$('#boltspcY').val()+'></td><td>'+$('#noofboltcol').val()+'</td><td>'+boltspcF_fra+'<input type="hidden" value='+boltspcF+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+fulllengthsavedw+'<input type="hidden" class="inchH"  value='+inchsavedw+'><input type="hidden" class="lengH"  value='+lengthsavedw+'><input type="hidden" class="fracH"  value='+fracsavedw+'> <input type="hidden" class="fracHFrac" value="'+frac_frasavedw+'"  /></td><td>'+fulllengthsavedc+'<input type="hidden" class="inchH"  value='+inchsavedc+'><input type="hidden" class="lengH"  value='+lengthsavedc+'><input type="hidden" class="fracH"  value='+fracsavedc+'> <input type="hidden" class="fracHFrac" value="'+frac_frasavedc+'"  /></td><td>'+fulllengthsaveds+'<input type="hidden" class="inchH"  value='+inchsaveds+'><input type="hidden" class="lengH"  value='+lengthsaveds+'><input type="hidden" class="fracH"  value='+fracsaveds+'> <input type="hidden" class="fracHFrac" value="'+frac_frasaveds+'" /></td>');
	              
		     addorupdate();
		     showalertSuccess('Updated successfully');
	
}	    	 	
 
     
$("#chordprofiletype").change( function(){
    resetDrodown("Profile");
	  var dropdownList = getProfiles($("#chordprofiletype").val());
	   fillProfileDropdownList("Profile", dropdownList)
	   });
     
     
     
function showalertsession(text) {        	
    $('#alert_placeholder').append
    ('<div class="alert alert-success" id="alertdiv"> <i class="fa fa-check-circle"></i> ' + text + 
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>' +
            '</div>')       
     	setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
         	$("#alertdiv").remove();

     }, 1000);
   
   }



  $("#Profile").change( function(){
		if (!$('#Profile').val()) {
			$('#ProfileDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#ProfileDIV .select2-container--default .select2-selection--single').css("border-color","");
		}
		}); 

  
 $("#clipangle").change( function(){
		if (!$('#clipangle').val()) {
			$('#clipanglediv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
		  }else {
			  $('#clipanglediv .select2-container--default .select2-selection--single').css("border-color","");
		}
		}); 



$("#shearplatethickness").change( function(){
	if (!$('#shearplatethickness').val()) {
		$('#shearplatethicknessdiv .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#shearplatethicknessdiv .select2-container--default .select2-selection--single').css("border-color","");
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
$("#noofboltrw").change( function(){
	if (!$('#noofboltrw').val()) {
		$('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
	}); 


$("#boltspc").change( function(){
	if (!$('#boltspc').val()) {
		$('#clipBolt .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#clipBolt .select2-container--default .select2-selection--single').css("border-color","");
	}
	}); 

$("#boltspcY").change( function(){
	if (!$('#boltspcY').val()) {
		$('#boltspcYDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltspcYDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
	});  

$("#noofboltcol").change( function(){
	if (!$('#noofboltcol').val()) {
		$('#noofboltcolDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#noofboltcolDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
	});  
$("#boltspcX").change( function(){
	if (!$('#boltspcX').val()) {
		$('#boltspcXDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
	  }else {
		  $('#boltspcXDIV .select2-container--default .select2-selection--single').css("border-color","");
	}
	});    

$("#edgedistance").change( function(){
if (!$('#edgedistance').val()) {
	$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  }else {
	  $('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
}
});    


$("#thisdisable").change( function(){
if (!$('#thisdisable').val()) {
	$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  }else {
	  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
}
});    




function removeRedBoarder() {

			$('#clipanglediv .select2-container--default .select2-selection--single').css("border-color","");
		
			  $('#shearplatethicknessdiv .select2-container--default .select2-selection--single').css("border-color","");

			  $('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
		
			  $('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
	
			  $('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","");
	
			  $('#clipBolt .select2-container--default .select2-selection--single').css("border-color","");
		
			  $('#boltspcYDIV .select2-container--default .select2-selection--single').css("border-color","");
		
			  $('#noofboltcolDIV .select2-container--default .select2-selection--single').css("border-color","");
		      $('#boltspcXDIV .select2-container--default .select2-selection--single').css("border-color","");
		      $('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
	
		  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
	  

	
}

