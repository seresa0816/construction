function trapezoidalRightVerticalMandatoryValidation(event){
	    		if(($('#trapezoidalprofile2,#verticalMaterialGrade,#verticalMemberorientation').prop('selectedIndex')) == 0) {
	    			event.preventDefault();
	    			
	    			}
	    			    		
	    }   
function AllowNumbersOnly(e) {
         var code = (e.which) ? e.which : e.keyCode;
        
         if (code > 31 && (code < 48 || code > 57)) {
           e.preventDefault();
         }
       }	
$.each(wsDropDown.SurfacePreparation, function(index,data) {   
     var weldsize = "<option>"+data.SSPC_No+"</option>";
     $(weldsize).appendTo('#trasurfacePreparation1'); 
      
   }); 
     
  $.each(wsDropDown.NoOfCoats, function(index,data) {   
         var NoOfCoats = "<option>"+data.Coats+"</option>";
         $(NoOfCoats).appendTo('#traprimer2,#trapaint2'); 
          
       });     
  
  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
       var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
       $(NoOfCoats).appendTo('#tragalvanization2'); 
        
     });     

  $.each(wsDropDown.FireProofingType, function(index,data) {   
       var appendval = "<option>"+data.FireProofingType+"</option>";
       $(appendval).appendTo('#trafireProofing2'); 
       $(appendval).appendTo('#trafireProofing1'); 
     }); 
  $.each(wsDropDown.FireRating, function(index,data) {   
     var appendval = "<option>"+data.FireRating_fra+"</option>";
     $(appendval).appendTo('#trafireProofing3'); 
      
   }); 
       
  
  $.each(wsDropDown.AESSCategory, function(index,data) {   
         var appendval = "<option>"+data.AESS+"</option>";
         $(appendval).appendTo('#traaess1'); 
          
       });
  if(wsFinish != null){
	    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	console.log(usedfinish);

	   var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
	 var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
	 var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
	    
	    if(paintValue != null){
	    $('#traprimer1').val(paintValue);
	    document.getElementById("traprimer1").setAttribute("disabled", false);
	    }
	    if(noOfCoatsprimer != null){
	       var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
	       $('select[name^="#traprimer2"] option[value=noOfCts]').attr("selected","selected");

	    }
	 
	   $('#chkprimer').change(function() {
	      if($(this).prop("checked") == true){
	          $('#traprimer1, #traprimer2').attr('disabled', false);
	         if(primerperiSPreparation != null){
	  		  $('#trasurfacePreparation1').val(primerperiSPreparation);
	  	  }
	      } else {
	          $('#traprimer1, #traprimer2').attr('disabled', true);

	      }
	  });
	if(usedfinish == "Primer"){
	$('#chkprimer').prop('checked', true);
	$('#chknopaint').attr('checked', true);
	$('#traprimer1,#traprimer2').attr('disabled', false);	
	if(primerperiSPreparation != null){
		  $('#trasurfacePreparation1').val(primerperiSPreparation);
	}
	  } 


	var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
    if(usedfinish != "Galvanizing" &&  SPreparation != null){
    	 $('#chkprimer').prop('checked', true);
    	  $('#chknopaint').attr('checked', true);
    	 $('#traprimer1,#traprimer2').attr('disabled', false);	
    	 if(primerperiSPreparation != null){
    		  $('#trasurfacePreparation1').val(primerperiSPreparation);
    	  }
    }
	var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
	var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
	var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
	if(paintValue != null){
	$('#trapaint1').val(paintValue);
	document.getElementById("trapaint1").setAttribute("disabled", false);
	}

	if(noOfCoatspaint != null){
	var noOfCts="<option value>"+noOfCoatspaint+"</option>";
	$('select[name^="#trapaint2"] option[value=noOfCts]').attr("selected","selected");
	}
	$('#chkpaint').change(function() {
	 if($(this).prop("checked") == true){
	     $('#trapaint1, #trapaint2').attr('disabled', false);
	     if(paintperiSPreparation != null){
		    		  $('#trasurfacePreparation1').val(paintperiSPreparation);
		    	  }
	 } else {
	     $('#trapaint1, #trapaint2').attr('disabled', true);
	 }
	 if($('#chkprimer').prop("checked") == true){
	     $('#chkprimer').removeAttr("disabled");
	 } else {
	     $('#chkprimer').removeAttr("disabled");
	 }
	 $('#tragalvanization2').attr('disabled', true);
	});
	if(usedfinish == "Paint"){
	  	  $('#chkpaint').attr('checked', true);
	  	  $('#trapaint1, #trapaint2').attr('disabled', false);
	  	  if(paintperiSPreparation != null){
	  		  $('#trasurfacePreparation1').val(paintperiSPreparation);
	  	  }
	    }
	var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
	var	category = wsFinish.Finish.AESS.Category;
	 
	if(category != null){   
	    var aess="<option value>"+category+"</option>";
		   $('select[name^="#traaess1"] option[value=aess]').attr("selected","selected");
	}
	$('#chkaess').change(function() {
	if($(this).prop("checked") == true){
	  $('#traaess1').attr('disabled', false);
	  if(aessperiSPreparation != null){
			  $('#trasurfacePreparation1').val(aessperiSPreparation);
		  }
	} else {
	  $('#traaess1').attr('disabled', true);
	}
	if($('#chkprimer').prop("checked") == true){
	  $('#chkprimer').removeAttr("disabled");
	} else {
	  $('#chkprimer').removeAttr("disabled");
	}
	$('#trapaint1, #trapaint2, #tragalvanization2, #trafireProofing2, #trafireProofing3').attr('disabled', true); 
	});
	if(usedfinish == "AESS"){
	$('#chkaess').attr('checked', true);
	$('#traaess1').attr('disabled', false);
	if(aessperiSPreparation != null){
		  $('#trasurfacePreparation1').val(aessperiSPreparation);
	}
	}
	 var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
	 var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
	 var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	 
		      
	    if(fireRating != null){
	    var fireRatingval="<option value>"+fireRating+"</option>";
	    $('select[name^="#trafireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	    }
	    if(fireProofingType != null){
	       var fireProofing="<option value>"+fireProofingType+"</option>";
	       $('select[name^="#trafireProofing3"] option[value=fireProofing]').attr("selected","selected");
	    }
	   $('#chkfireproofing').change(function() {
	      if($(this).prop("checked") == true){
	          $('#trafireProofing2, #trafireProofing3').attr('disabled', false);
	         if(fpperiSPreparation != null){
		       		$('#trasurfacePreparation1').val(fpperiSPreparation);
		       	}
	      } else {
	          $('#trafireProofing2, #trafireProofing3').attr('disabled', true);
	      }  
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').removeAttr("disabled");
	      } else {
	          $('#chkprimer').removeAttr("disabled");
	      }
	      $('#trapaint1, #trapaint2, #tragalvanization2, #traaess1').attr('disabled', true);  
	      // $('#chkprimer').removeAttr("disabled");
	  });
	    if(usedfinish == "Fire proofing"){
	     	  $('#chkfireproofing').attr('checked',true);
	     	  $('#trafireProofing2, #trafireProofing3').attr('disabled', false);
	     	
		    }
	 var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	 var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	    if(zincCoatingThickness != null){
	    var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	    $('select[name^="#tragalvanization2"] option[value=zincCoating]').attr("selected","selected");
	    }
	   $('#chkgalvanize').change(function() {
	      if($(this).prop("checked") == true){
	          $('#tragalvanization2').attr('disabled', false);
	         if(galperiSPreparation != null){
		     	 	 $('#trasurfacePreparation1').val(galperiSPreparation);
		     	 	   } 
	      } else {
	          $('#tragalvanization2').attr('disabled', true);
	      }
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	      } 
	      else {
	          $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	      }
	      $('#traprimer1, #traprimer2, #trapaint1, #trapaint2, #trafireProofing2, #trafireProofing3, #traaess1').attr('disabled', true);
	      // $("#chkprimer").attr('disabled', 'disabled');
	  });
	   if(usedfinish == "Galvanizing"){
	  	  $('#chkgalvanize').attr('checked', true);
	  	  $('#tragalvanization2').attr('disabled', false);
	  	  $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	          if(galperiSPreparation != null){
	   	 	 $('#trasurfacePreparation1').val(galperiSPreparation);
	   	 	   }  
	    }
	 var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
	$('#chknopaint').change(function() {
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').attr('disabled', false);
	         if(nopperiSPreparation != null){
		 			 $('#trasurfacePreparation1').val(nopperiSPreparation);
		 		 	   }
	      } else {
	          $('#chkprimer').attr('disabled', false);
	      }
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').removeAttr("disabled");
	      } else {
	          $('#chkprimer').removeAttr("disabled");
	      }
	      $('#trapaint1, #trapaint2, #tragalvanization2, #trafireProofing2, #trafireProofing3, #traaess1').attr('disabled', true);
	  });
		  if(usedfinish == "NoPaint"){
		  $('#chknopaint').attr('checked', true);
		
	}
	}
  $.each( wsDropDown.TopBottomChord, function(key, value) {
			 var profiles="<option>"+value.Profile+"</option>";
         $(profiles).appendTo('#trapezoidalprofile2'); 

		 });
        
       			  $.each( wsDropDown.BeamOrientation, function(key, value) {
       				 var profiles="<option>"+value.Beam_Orientation+"</option>";
	                   $(profiles).appendTo('#verticalMemberorientation'); 
	       
       			 }); 
      		   $.each(RefDwgNumFiles, function(index,data) { 
           		
           		var referencenum="<option>"+data+"</option>";
           		
           	     $(referencenum).appendTo('#referencenum'); 
           	     
           		}); 
    		   $("#trapezoidalprofile2").change(function(){
    				var profilename = $(this).val();
    				   $('#verticalMaterialGrade').empty();
    					 getProfileGrades(profilename);
    					 $.each(profileGrades, function(index,data) {   
    						  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
    						 
    				           $(grades).appendTo('#verticalMaterialGrade'); 
    				           
    				           
    						   
    						});  
    				   
    				   var res = profilename.charAt(0);
    				   if(wsPlateGrade != ''){
    				     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
    				     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
    				     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
    				     	if(res=="W"){
    				     		if(profileshgrade != null){
    				     			 $('#verticalMaterialGrade').val(profileshgrade);
    					             
    					           }
    						   }
    				    	else if(res=="H"){
    				     	if(hssgrade != ''){
    				     		 $('#verticalMaterialGrade').val(hssgrade);
    				          
    				         }
    				     	} 
    				     	else{
    				     		if(anglegrade != ''){
    				     			$('#verticalMaterialGrade').val(anglegrade);
    					          
    					         }
    				     	}
    				     }
    				   $('#leftConnectionMark1').empty();
    				   $('#leftConnectionMark4').empty();
    				  var filtered = $.grep(connectionObjList, function (el) {
    				    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussvertical")>=0){
    				        	return el.profile;
    				        }
    				    });
    				   
    				  
    					$.each(filtered, function(key, value) {
    					       var ConnectionMark="<option>"+value.connectionMark+"</option>";
    					         $(ConnectionMark).appendTo('#leftConnectionMark1'); 
    					         $(ConnectionMark).appendTo('#leftConnectionMark4'); 
    					         
    					        
    					   });
    						  $('#leftConnectionMark2').empty();
    						   $('#leftConnectionType5').empty();
    						 var connectionmark1 = $("#leftConnectionMark1").val();
    						
    						 if(connectionmark1 != null){
    						 
    						 var conntype = $.grep(connectionObjList, function (el) {
    						        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
    						        	
    						        	return el.conntype;
    						        }
    						    });
    						 $.each(conntype, function(key, value) {
    							 var supportbeam="<option>"+value.conntype+"</option>";
    					         $(supportbeam).appendTo('#leftConnectionMark2'); 
    					         $(supportbeam).appendTo('#leftConnectionType5'); 
    					             
    						   });
    						         
    						
    						
    						 $('#leftConnectionMark3').empty();
    						    $('#leftConnectionMethod6').empty();
    						 
    						 var supptype = $.grep(connectionObjList, function (el) {
    							 
    						        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
    						        	
    						        	return el.trussConn;
    						        	
    						        }
    						    });
    						 
    						
    						 $.each(supptype, function(key, value) {
    						       var supportbeam="<option>"+value.trussConn+"</option>";
    						         $(supportbeam).appendTo('#leftConnectionMark3'); 
    						         $(supportbeam).appendTo('#leftConnectionMethod6'); 
    						        
    						   });
    						
    						 }
    						 
    						
    					});	
    				
    		//  });

// Jquery Code

    $(function() {
    $('.chosen-select').chosen();
    $('.chosen-select-deselect').chosen({
    allow_single_deselect: true
    });
    });
    $(".referenceSelect").select2({
        placeholder: "Select"
    });
    
 