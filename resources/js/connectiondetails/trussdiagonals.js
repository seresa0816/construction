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
  	 if (!$('#Gussetplatethickness').val()) {
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
			$('#sherBolt .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}

	 if (!$('#edgedistance').val()) {
			$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}

  	
	 if (!$('#clawanglesize').val()) {
			$('#clawanglesizeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}

	 if (!$('#shearplatethickness').val()) {
			$('#shearplatethicknessDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}

	 if (!$('#noofboltrwclwangle').val()) {
			$('#noofboltrwclwangleDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}


	 if (!$('#ddlcjp').val()) {
			$('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}

	 if (!$('#thisdisable').val()) {
			$('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
  	

	 if (!$('#ddlcjp2').val()) {
			$('#ddlcjp2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	

	 if (!$('#thisdisable2').val()) {
			$('#thisdisable2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}

	 if (!$('#ddlcjp3').val()) {
			$('#ddlcjp3DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
		}
	

	 if (!$('#thisdisable3').val()) {
			$('#thisdisable3DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
			
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
        $(".left,#btocWeldDetails2").hide();
        $("#adddata").show();
        $("#update").hide();
        $(".memtype-rightedit").show();
        $(".editmemtype .rightFloat").show();  
        $(".BoltDetails,.ClipAngleLength,#conmark,#beamprofile,#clipanglesz,#btocClip1,#btocClip2,.WeldDetails,#btocWeldDetails2").val('').trigger("change");  
        $('#formBeamToColumnClipAngle').removeClass('submitted');
        $('#ProfileDIV .select2-container--default .select2-selection--single').css("border-color","");
	    
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
 	          data : {connectiongrouptype:"TrussDiagonals",connectiontype:'0',connectionjson:JSON.stringify(connectionjson)},
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
		     var Cprofile=value["DiagonalProfile"];
		     var WeldPlateLengthDD= value[WeldPlateLength]; 
		     var BracetoGussetDD= value[BracetoGusset]; 
		     var GussettoTrussDD= value[GussettoTruss]; 
		     
		     var GussetPlateThicknessval= value[GussetPlateThicknessDD]; 
		     var BoltSpacingYDD= value[BoltSpacingY]; 
		    
		      var ClawAngleSizeDD=value[ClawAngleSize];
		      var SplicePlateThicknessvalDD=value[SplicePlateThicknessval];
		     
		     var WeldPlateLengthformat=feetInchFormater(WeldPlateLengthDD[Length],WeldPlateLengthDD[InchKeyN],WeldPlateLengthDD[Fractionfraction]);
			 var BracetoGussetformat=feetInchFormater(BracetoGussetDD[Length],BracetoGussetDD[InchKeyN],BracetoGussetDD[Fractionfraction]);
	         var GussettoTrussformat=feetInchFormater(GussettoTrussDD[Length],GussettoTrussDD[InchKeyN],GussettoTrussDD[Fractionfraction]);
	       
			  if (!WeldPlateLengthDD[Length]) {
				  WeldPlateLengthformat="";

				}
		
			  if (!BracetoGussetDD[Length]) {
				  BracetoGussetformat="";

				}
			  if (!GussettoTrussDD[Length]) {
				  GussettoTrussformat="";

				}
			var NRowclw=value["NoofBoltRowsinClawAngle"];
			var NRowsplice=value["NoofBoltRowsinSplicePlate"];
   
		
			$("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td  class="contxt">'+value[ConnectionMark]+'</td><td>'+value[DiagonalProfileType]+'</td><td>'+Cprofile[BeamProfile]+'</td><td>'+value[DiagonalConnectionType]+'</td><td>'+getformateforrepresentation(GussetPlateThicknessval[ShearPlateThickness_fra])+'<input type="hidden" value='+GussetPlateThicknessval[ShearPlateThickness]+'></td><td>'+value[ConnectionMethodDD]+'</td><td>'+value[BoltGrade]+'</td><td>'+getformateforrepresentation(value[BoltDia_fra])+'<input type="hidden" value='+value[BoltDia]+'></td><td>'+value[BoltRows]+'</td><td>'+getformateforrepresentation(BoltSpacingYDD[BoltSpacing_fra])+'<input type="hidden" value='+BoltSpacingYDD[BoltSpacing]+'></td><td>'+getformateforrepresentation(value[EdgeDistance_fra])+'<input type="hidden" value='+value[EdgeDistance]+'></td><td>'+WeldPlateLengthformat+'<input type="hidden" class="inchH"  value='+WeldPlateLengthDD[InchKeyN]+'><input type="hidden" class="lengH"  value='+WeldPlateLengthDD[Length]+'><input type="hidden" class="fracH"  value='+WeldPlateLengthDD[Fractiondecimal]+'> <input type="hidden" class="fracHFrac"  value="'+WeldPlateLengthDD[Fractionfraction]+'"></td><td>'+WeldPlateLengthDD[WeldType]+'</td><td>'+getformateforrepresentation(WeldPlateLengthDD[WeldSize_fra])+'<input type="hidden" value='+WeldPlateLengthDD[WeldSize]+'></td><td>'+BracetoGussetformat+'<input type="hidden" class="inchH"  value='+BracetoGussetDD[InchKeyN]+'><input type="hidden" class="lengH"  value='+BracetoGussetDD[Length]+'><input type="hidden" class="fracH"  value='+BracetoGussetDD[Fractiondecimal]+'> <input type="hidden" class="fracHFrac"  value="'+BracetoGussetDD[Fractionfraction]+'"></td><td>'+BracetoGussetDD[WeldType]+'</td><td>'+getformateforrepresentation(BracetoGussetDD[WeldSize_fra])+'<input type="hidden" value='+BracetoGussetDD[WeldSize]+'></td><td>'+GussettoTrussformat+'<input type="hidden" class="inchH"  value='+GussettoTrussDD[InchKeyN]+'><input type="hidden" class="lengH"  value='+GussettoTrussDD[Length]+'><input type="hidden" class="fracH"  value='+GussettoTrussDD[Fractiondecimal]+'> <input type="hidden" class="fracHFrac"  value="'+GussettoTrussDD[Fractionfraction]+'"></td><td>'+GussettoTrussDD[WeldType]+'</td><td>'+getformateforrepresentation(GussettoTrussDD[WeldSize_fra])+'<input type="hidden" value='+GussettoTrussDD[WeldSize]+'></td><td>'+ClawAngleSizeDD[BeamProfileKeyN]+'</td><td>'+getformateforrepresentation(SplicePlateThicknessvalDD[ShearPlateThickness_fra])+'<input type="hidden" value='+SplicePlateThicknessvalDD[ShearPlateThickness]+'></td><td>'+NRowclw[NoOfBoltRowsForClawAngleKeyN]+'</td><td>'+NRowsplice[NoOfBoltRowsForClawAngleKeyN]+'</td> </tr>');

	  
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
	 
	  $("#Gussetplatethickness").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
	 
	  $("#boltgrade").val($row.find("td:nth-child(9)").text()).trigger("change");
	  $("#boltdia").val($row.find("td:nth-child(10)").find('input').val()).trigger("change");
	  $("#noofboltrw").val($row.find("td:nth-child(11)").text()).trigger("change");
	  $("#boltspc").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
	  $("#edgedistance").val($row.find("td:nth-child(13)").find('input').val()).trigger("change");	
	  
	  $("#cpanglelen").val($row.find("td:nth-child(14)").find('.lengH').val()).trigger("change");
	  $("#inch").val($row.find("td:nth-child(14)").find('.inchH').val()).trigger("change");   
	  $("#fraction").val($row.find("td:nth-child(14)").find('.fracH').val()).trigger("change");
	  $("#ddlcjp").val($row.find("td:nth-child(15)").text()).trigger("change");
	  $("#thisdisable").val($row.find("td:nth-child(16)").find('input').val()).trigger("change");   
	  
	  
	  
	  $("#cpanglelen2").val($row.find("td:nth-child(17)").find('.lengH').val()).trigger("change");
	  $("#inch2").val($row.find("td:nth-child(17)").find('.inchH').val()).trigger("change");   
	  $("#fraction2").val($row.find("td:nth-child(17)").find('.fracH').val()).trigger("change");
	  $("#ddlcjp2").val($row.find("td:nth-child(18)").text()).trigger("change");
	  $("#thisdisable2").val($row.find("td:nth-child(19)").find('input').val()).trigger("change"); 

	  $("#cpanglelen3").val($row.find("td:nth-child(20)").find('.lengH').val()).trigger("change");
	  $("#inch3").val($row.find("td:nth-child(20)").find('.inchH').val()).trigger("change");   
	  $("#fraction3").val($row.find("td:nth-child(20)").find('.fracH').val()).trigger("change");
	  $("#ddlcjp3").val($row.find("td:nth-child(21)").text()).trigger("change");
	  $("#thisdisable3").val($row.find("td:nth-child(22)").find('input').val()).trigger("change");  
	  
	  $("#clawanglesize").val($row.find("td:nth-child(23)").text()).trigger("change");
	  $("#shearplatethickness").val($row.find("td:nth-child(24)").find('input').val()).trigger("change");  
	  $("#noofboltrwclwangle").val($row.find("td:nth-child(25)").text()).trigger("change");
	  $("#noofboltrwspliceplate").val($row.find("td:nth-child(26)").text()).trigger("change");
	  
	  
	  $("#btocClip1").val($row.find("td:nth-child(6)").text()).trigger("change");
	  if ($row.find("td:nth-child(6)").text()=="Gusset Plate") {
		  $("#connectionmethod").val($row.find("td:nth-child(8)").text()).trigger("change");
	}
	 
		
			
	 
	}
	
	
});


$("#recall").click(function(){

	 $row=$('#table tr:last');
	
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
	 
	  $("#Gussetplatethickness").val($row.find("td:nth-child(7)").find('input').val()).trigger("change");
	 
	  $("#boltgrade").val($row.find("td:nth-child(9)").text()).trigger("change");
	  $("#boltdia").val($row.find("td:nth-child(10)").find('input').val()).trigger("change");
	  $("#noofboltrw").val($row.find("td:nth-child(11)").text()).trigger("change");
	  $("#boltspc").val($row.find("td:nth-child(12)").find('input').val()).trigger("change");
	  $("#edgedistance").val($row.find("td:nth-child(13)").find('input').val()).trigger("change");	
	  
	  $("#cpanglelen").val($row.find("td:nth-child(14)").find('.lengH').val()).trigger("change");
	  $("#inch").val($row.find("td:nth-child(14)").find('.inchH').val()).trigger("change");   
	  $("#fraction").val($row.find("td:nth-child(14)").find('.fracH').val()).trigger("change");
	  $("#ddlcjp").val($row.find("td:nth-child(15)").text()).trigger("change");
	  $("#thisdisable").val($row.find("td:nth-child(16)").find('input').val()).trigger("change");   
	  
	  
	  
	  $("#cpanglelen2").val($row.find("td:nth-child(17)").find('.lengH').val()).trigger("change");
	  $("#inch2").val($row.find("td:nth-child(17)").find('.inchH').val()).trigger("change");   
	  $("#fraction2").val($row.find("td:nth-child(17)").find('.fracH').val()).trigger("change");
	  $("#ddlcjp2").val($row.find("td:nth-child(18)").text()).trigger("change");
	  $("#thisdisable2").val($row.find("td:nth-child(19)").find('input').val()).trigger("change"); 

	  $("#cpanglelen3").val($row.find("td:nth-child(20)").find('.lengH').val()).trigger("change");
	  $("#inch3").val($row.find("td:nth-child(20)").find('.inchH').val()).trigger("change");   
	  $("#fraction3").val($row.find("td:nth-child(20)").find('.fracH').val()).trigger("change");
	  $("#ddlcjp3").val($row.find("td:nth-child(21)").text()).trigger("change");
	  $("#thisdisable3").val($row.find("td:nth-child(22)").find('input').val()).trigger("change");  
	  
	  $("#clawanglesize").val($row.find("td:nth-child(23)").text()).trigger("change");
	  $("#shearplatethickness").val($row.find("td:nth-child(24)").find('input').val()).trigger("change");  
	  $("#noofboltrwclwangle").val($row.find("td:nth-child(25)").text()).trigger("change");
	  $("#noofboltrwspliceplate").val($row.find("td:nth-child(26)").text()).trigger("change");
	  
	  
	  $("#btocClip1").val($row.find("td:nth-child(6)").text()).trigger("change");
	  if ($row.find("td:nth-child(6)").text()=="Gusset Plate") {
		  $("#connectionmethod").val($row.find("td:nth-child(8)").text()).trigger("change");
	}
	

});











$("#btocClipAngleLength").hide();   

$("#connectionmethod").change( function(){
	$("#ddlcjp").val('');  
	$(".wpro,#weldlengthdetails1,#weldlengthdetails2,#weldlengthdetails3,#typeandsize1,#typeandsize2,#typeandsize3").hide();	
 	$("#clipBolt").show();
	$(".sherBolt,#btocClipAngleLength2,.wpro").hide();
	
	  if($('#btocClip1').val()=='Gusset Plate'){ 
		
		  $("#shearplatethicknessdiv,#connectionmethoddv").show();
		 if ( $('#connectionmethod').val()=='Field Bolted') {
			 $("#clipBolt").hide();
			 $(".sherBolt").show();
       		
			  $("#btocBoltDetails").show();
              getboltdetails()
              $("#typeandsize1").show();
              getWelddetails();
              $("#btocClipAngleLength").hide();	
         	  $(".ClipAngleLength").val('').trigger("change");  
         	  if ($('#chordprofiletype').val()=='W') {
          		 $(".wpro").show();
				}
			}
       	 else   if($('#connectionmethod').val()=='Field Welded' ){ 
                $("#btocBoltDetails").hide();
                getboltdetails()
                $("#typeandsize2,#typeandsize3,#weldlengthdetails2,#weldlengthdetails3").show();
                getWelddetails();
                $("#btocClipAngleLength,#btocClipAngleLength2").show();
                $(".BoltDetails").val('').trigger("change");
                $("#inch3,#fraction3,#inch2,#fraction2").val("0").trigger("change");
                $("#LabelID").text("Gusset Plate Length");
             
                 
            }
       	 else{
          	  $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength").hide();
          
          	 }
    }
 
	 else{
   	 $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength").hide();
    }
	  removeRedBoader();
});


    $("#btocClip1,#chordprofiletype").change( function(){
    	 $("#ddlcjp,#ddlcjp2,#ddlcjp3").val(''); 
    	 $(".wpro,#weldlengthdetails1,#weldlengthdetails2,#weldlengthdetails3,#typeandsize1,#typeandsize2,#typeandsize3").hide();	
    	 resetDrodown("connectionmethod");
    	 $("#clipBolt").show();
    	 $(".sherBolt,#btocClipAngleLength2").hide();
    	 $("#btocBoltDetails,#btocWeldDetails,#btocClipAngleLength,#connectionmethoddv,#clipanglediv,#shearplatethicknessdiv,#btocClipAngleLength").hide();
    	 if ($("#btocClip1").val()) {
    	
    		 if($('#btocClip1').val()=='Directly Welded'){ 
                 $("#btocBoltDetails").hide();
                 getboltdetails()
                 $("#typeandsize1,#weldlengthdetails1").show();
                 getWelddetails();
                 $("#btocClipAngleLength").show();
                 $(".BoltDetails").val('').trigger("change");
                 $("#inch,#fraction").val("0").trigger("change");
                 $("#LabelID").text("Weld Length");
                
             }
        	 else   if($('#btocClip1').val()=='Gusset Plate'){ 
        		 $("#clipBolt").hide();
    			 $(".sherBolt").show();
           		
        		 var listval= [{"ConnectionMethode": "Field Welded"}, {"ConnectionMethode": "Field Bolted"}];
         		fillConnectionMethodDropdownList("connectionmethod", listval);
        		 $("#shearplatethicknessdiv,#connectionmethoddv").show();
        		 if ( $('#connectionmethod').val()=='Field Bolted') {
                		
                    	  $("#btocBoltDetails").show();
                          getboltdetails()
                         $("#typeandsize1").show();
                          getWelddetails();
                          $("#btocClipAngleLength").hide();	
                     	  $(".ClipAngleLength").val('').trigger("change");  
                     	  if ($('#chordprofiletype').val()=='W') {
                      		 $(".wpro").show();
          				}
        			}
                	 else   if($('#connectionmethod').val()=='Field Welded' ){ 
                		  $("#btocBoltDetails").hide();
                          getboltdetails()
                          $("#typeandsize2,#typeandsize3,#weldlengthdetails2,#weldlengthdetails3").show();
                          getWelddetails();
                          $("#btocClipAngleLength,#btocClipAngleLength2").show();
                          $(".BoltDetails").val('').trigger("change");
                          $("#inch3,#fraction3,#inch2,#fraction2").val("0").trigger("change");
                          $("#LabelID").text("Gusset Plate Length");
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
		 
    		}
    	 removeRedBoader();
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
	 	          data : {connectiongrouptype:"TrussDiagonals",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
	 	                var weldsize2= $("#thisdisable2 option:selected").text()+'"';
	 	                var weldsize3= $("#thisdisable3 option:selected").text()+'"';
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
	 	               if (!$("#thisdisable2").val()) {
		 	               	 weldsize2="";
		 	       		}
	 	              if (!$("#thisdisable3").val()) {
		 	               	 weldsize3="";
		 	       		}
	 	             
	 	                
	 	                if (!$("#edgedistance").val()) {
	 	               	 edgedistance="";
	 	       		}
	 	                if (!$("#cpanglelen").val()) {
	 	               	 cpanglelen="";

	 	       		}
	 	                

	 	               var boltspc=$("#boltspc option:selected").text()+ '"';
	 	              
	 	               if (!$("#boltspc").val()) {
	 	            	 boltspc="";
                        }
	 	              
	 	              var weldl1=feetInchFormater($('#cpanglelen').val(), $('#inch').val(), $("#fraction option:selected").text());
	 	                
	 	              var weld2=feetInchFormater($('#cpanglelen2').val(), $('#inch2').val(), $("#fraction2 option:selected").text());
	 	                
	 	              var weldl3=feetInchFormater($('#cpanglelen3').val(), $('#inch3').val(), $("#fraction3 option:selected").text());
	 	            
	 	             if (!$("#cpanglelen").val()) {
	 	            	weldl1="";
	 	       		}
	 	             if (!$("#cpanglelen2").val()) {
	 	            	weld2="";
	 	       		}
	 	            if (!$("#cpanglelen3").val()) {
	 	            	weldl3="";
	 	       		}
	 	               
	 	               var shearplatethickness=$("#shearplatethickness option:selected").text()+ '"';
	 	               
	 	              if (!$("#shearplatethickness").val()) {
	 	            	 shearplatethickness="";
	                        }
	 	              
	 	              
	 	             var Gussetplatethickness=$("#Gussetplatethickness option:selected").text()+ '"';
	 	               
	 	              if (!$("#Gussetplatethickness").val()) {
	 	            	 Gussetplatethickness="";
	                        }
	 	              
		 	
	 	              $("#table").append('<tr><td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td  class="contxt">'+$('#conmark').val()+'</td><td>'+$('#chordprofiletype').val()+'</td><td>'+$('#Profile').val()+'</td><td>'+$('#btocClip1').val()+'</td><td>'+Gussetplatethickness+'<input type="hidden" value='+$('#Gussetplatethickness').val()+'></td><td>'+$('#connectionmethod').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td>'+boltspc+'<input type="hidden" value='+$('#boltspc').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+weldl1+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelen').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction option:selected').text()+ '" /></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+weld2+'<input type="hidden" class="inchH"  value='+$('#inch2').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelen2').val()+'><input type="hidden" class="fracH"  value='+$('#fraction2').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction2 option:selected').text()+ '" /></td><td>'+$('#ddlcjp2').val()+'</td><td>'+weldsize2+'<input type="hidden" value='+$('#thisdisable2').val()+'></td><td>'+weldl3+'<input type="hidden" class="inchH"  value='+$('#inch3').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelen3').val()+'><input type="hidden" class="fracH"  value='+$('#fraction3').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction3 option:selected').text()+ '" /></td><td>'+$('#ddlcjp3').val()+'</td><td>'+weldsize3+'<input type="hidden" value='+$('#thisdisable3').val()+'></td><td>'+$('#clawanglesize').val()+'</td><td>'+shearplatethickness+'<input type="hidden" value='+$('#shearplatethickness').val()+'></td><td>'+$('#noofboltrwclwangle').val()+'</td><td>'+$('#noofboltrwspliceplate').val()+'</td></tr>');         	 	                	 	        
	 	          
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
	 	          data : {connectiongrouptype:"TrussDiagonals",connectiontype:'0',connectionMarkjson:JSON.stringify(connectionmarkvalues)},
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
						           data : {connectiongrouptype:"TrussDiagonals",connectiontype:'0',connectionMarkjson:JSON.stringify(deleteconmarkval)},
							       
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
deleteconnectionmarks("TrussDiagonals")
 	
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
		      
		         
		         var boltdia= $("#boltdia option:selected").text()+'"';
	                var weldsize= $("#thisdisable option:selected").text()+'"';
	                var weldsize2= $("#thisdisable2 option:selected").text()+'"';
	                var weldsize3= $("#thisdisable3 option:selected").text()+'"';
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
	               if (!$("#thisdisable2").val()) {
	 	               	 weldsize2="";
	 	       		}
	              if (!$("#thisdisable3").val()) {
	 	               	 weldsize3="";
	 	       		}
	             
	                
	                if (!$("#edgedistance").val()) {
	               	 edgedistance="";
	       		}
	                if (!$("#cpanglelen").val()) {
	               	 cpanglelen="";

	       		}
	                

	               var boltspc=$("#boltspc option:selected").text()+ '"';
	              
	               if (!$("#boltspc").val()) {
	            	 boltspc="";
                 }
	              
	              var weldl1=feetInchFormater($('#cpanglelen').val(), $('#inch').val(), $("#fraction option:selected").text());
	                
	              var weld2=feetInchFormater($('#cpanglelen2').val(), $('#inch2').val(), $("#fraction2 option:selected").text());
	                
	              var weldl3=feetInchFormater($('#cpanglelen3').val(), $('#inch3').val(), $("#fraction3 option:selected").text());
	            
	             if (!$("#cpanglelen").val()) {
	            	weldl1="";
	       		}
	             if (!$("#cpanglelen2").val()) {
	            	weld2="";
	       		}
	            if (!$("#cpanglelen3").val()) {
	            	weldl3="";
	       		}
	               
	               var shearplatethickness=$("#shearplatethickness option:selected").text()+ '"';
	               
	              if (!$("#shearplatethickness").val()) {
	            	 shearplatethickness="";
                     }
	              
	              
	             var Gussetplatethickness=$("#Gussetplatethickness option:selected").text()+ '"';
	               
	              if (!$("#Gussetplatethickness").val()) {
	            	 Gussetplatethickness="";
                     }
	              
	 	
	              $row.append('<td class="text-center"><label class="custom-control custom-checkbox" ><input id="" type="checkbox" name="selectAll" class="custom-control-input cci-select"><span class="custom-control-indicator"></span> <span class="custom-control-description labelblk"></span></label></td><td></td><td  class="contxt">'+$('#conmark').val()+'</td><td>'+$('#chordprofiletype').val()+'</td><td>'+$('#Profile').val()+'</td><td>'+$('#btocClip1').val()+'</td><td>'+Gussetplatethickness+'<input type="hidden" value='+$('#Gussetplatethickness').val()+'></td><td>'+$('#connectionmethod').val()+'</td><td>'+$('#boltgrade').val()+'</td><td>'+boltdia+'<input type="hidden" value='+$('#boltdia').val()+'></td><td>'+$('#noofboltrw').val()+'</td><td>'+boltspc+'<input type="hidden" value='+$('#boltspc').val()+'></td><td>'+edgedistance+'<input type="hidden" value='+$('#edgedistance').val()+'></td><td>'+weldl1+'<input type="hidden" class="inchH"  value='+$('#inch').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelen').val()+'><input type="hidden" class="fracH"  value='+$('#fraction').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction option:selected').text()+ '" /></td><td>'+$('#ddlcjp').val()+'</td><td>'+weldsize+'<input type="hidden" value='+$('#thisdisable').val()+'></td><td>'+weld2+'<input type="hidden" class="inchH"  value='+$('#inch2').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelen2').val()+'><input type="hidden" class="fracH"  value='+$('#fraction2').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction2 option:selected').text()+ '" /></td><td>'+$('#ddlcjp2').val()+'</td><td>'+weldsize2+'<input type="hidden" value='+$('#thisdisable2').val()+'></td><td>'+weldl3+'<input type="hidden" class="inchH"  value='+$('#inch3').val()+'><input type="hidden" class="lengH"  value='+$('#cpanglelen3').val()+'><input type="hidden" class="fracH"  value='+$('#fraction3').val()+'><input type="hidden" class="fracHFrac" value="'+$('#fraction3 option:selected').text()+ '" /></td><td>'+$('#ddlcjp3').val()+'</td><td>'+weldsize3+'<input type="hidden" value='+$('#thisdisable3').val()+'></td><td>'+$('#clawanglesize').val()+'</td><td>'+shearplatethickness+'<input type="hidden" value='+$('#shearplatethickness').val()+'></td><td>'+$('#noofboltrwclwangle').val()+'</td><td>'+$('#noofboltrwspliceplate').val()+'</td>');         	 	                	 	        
	          
	              addorupdate();
		         
		         
		         
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

$("#Gussetplatethickness").change( function(){
	if (!$('#Gussetplatethickness').val()) {
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
	$('#sherBolt .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  }else {
	  $('#sherBolt .select2-container--default .select2-selection--single').css("border-color","");
}
});  

$("#edgedistance").change( function(){
if (!$('#edgedistance').val()) {
	$('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  }else {
	  $('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
}
});  

$("#clawanglesize").change( function(){
if (!$('#clawanglesize').val()) {
	$('#clawanglesizeDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  }else {
	  $('#clawanglesizeDIV .select2-container--default .select2-selection--single').css("border-color","");
}
});  


$("#shearplatethickness").change( function(){
if (!$('#shearplatethickness').val()) {
	$('#shearplatethicknessDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  }else {
	  $('#shearplatethicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
}
});  

$("#noofboltrwclwangle").change( function(){
if (!$('#noofboltrwclwangle').val()) {
	$('#noofboltrwclwangleDIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  }else {
	  $('#noofboltrwclwangleDIV .select2-container--default .select2-selection--single').css("border-color","");
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

$("#ddlcjp2").change( function(){
if (!$('#ddlcjp2').val()) {
	$('#ddlcjp2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  }else {
	  $('#ddlcjp2DIV .select2-container--default .select2-selection--single').css("border-color","");
}
});    

$("#thisdisable2").change( function(){
if (!$('#thisdisable2').val()) {
	$('#thisdisable2DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  }else {
	  $('#thisdisable2DIV .select2-container--default .select2-selection--single').css("border-color","");
}
});    


$("#ddlcjp3").change( function(){
if (!$('#ddlcjp3').val()) {
	$('#ddlcjp3DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  }else {
	  $('#ddlcjp3DIV .select2-container--default .select2-selection--single').css("border-color","");
}
});    


$("#thisdisable3").change( function(){
if (!$('#thisdisable3').val()) {
	$('#thisdisable3DIV .select2-container--default .select2-selection--single').css("border-color","#ff0000");
  }else {
	  $('#thisdisable3DIV .select2-container--default .select2-selection--single').css("border-color","");
}
});    






function removeRedBoader() {

		  $('#clipanglediv .select2-container--default .select2-selection--single').css("border-color","");
		  $('#shearplatethicknessdiv .select2-container--default .select2-selection--single').css("border-color","");
		  $('#boltgradeDIV .select2-container--default .select2-selection--single').css("border-color","");
	
		  $('#boltdiaDIV .select2-container--default .select2-selection--single').css("border-color","");
		
		  $('#noofboltrwDIV .select2-container--default .select2-selection--single').css("border-color","");
		
		  $('#sherBolt .select2-container--default .select2-selection--single').css("border-color","");
	
		  $('#edgedistanceDIV .select2-container--default .select2-selection--single').css("border-color","");
	
		  $('#clawanglesizeDIV .select2-container--default .select2-selection--single').css("border-color","");

		  $('#shearplatethicknessDIV .select2-container--default .select2-selection--single').css("border-color","");
	
		  $('#noofboltrwclwangleDIV .select2-container--default .select2-selection--single').css("border-color","");

		  $('#ddlcjpDIV .select2-container--default .select2-selection--single').css("border-color","");

		  $('#thisdisableDIV .select2-container--default .select2-selection--single').css("border-color","");
	
		  $('#ddlcjp2DIV .select2-container--default .select2-selection--single').css("border-color","");
	
		  $('#thisdisable2DIV .select2-container--default .select2-selection--single').css("border-color","");
	
		  $('#ddlcjp3DIV .select2-container--default .select2-selection--single').css("border-color","");
	
		  $('#thisdisable3DIV .select2-container--default .select2-selection--single').css("border-color","");
	
	
}

$("#ddlcjp2").change(function() {  
	   if ( $("#ddlcjp2").val()=="CJP") {
		   $("#thisdisable2").val("").trigger("change"); 
		   $("#thisdisable2").attr("disabled", true);
		   $("#thisdisable2").prop('required',false);
		   $('#thisdisable2DIV .select2-container--default .select2-selection--single').css("border-color","");
			
		}else {
			  $("#thisdisable2").attr("disabled", false);
			  $("#thisdisable2").prop('required',true);
		}

		});
$("#ddlcjp3").change(function() { 
	  if ($("#ddlcjp3").val()=="CJP") {
		   $("#thisdisable3").val("").trigger("change"); 
		   $("#thisdisable3").attr("disabled", true);
		   $("#thisdisable3").prop('required',false);
		   $('#thisdisable3DIV .select2-container--default .select2-selection--single').css("border-color","");
			
		}else {
			  $("#thisdisable3").attr("disabled", false);
			  $("#thisdisable3").prop('required',true);
		}

		});

     