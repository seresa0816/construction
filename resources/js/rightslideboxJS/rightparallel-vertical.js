function parallelRightVerticalMandatoryValidation(event){
	    		if(($('#parallelmodalprofile2,#parallelmemorientation2,#parallelgrade2').prop('selectedIndex')) == 0) {
	    			event.preventDefault();
	    			
	    			}
	    			    		
	    }
$.each(wsDropDown.SurfacePreparation, function(index,data) {   
    var weldsize = "<option>"+data.SSPC_No+"</option>";
    $(weldsize).appendTo('#paralsurfacePreparation1'); 
     
  }); 
    
 $.each(wsDropDown.NoOfCoats, function(index,data) {   
        var NoOfCoats = "<option>"+data.Coats+"</option>";
        $(NoOfCoats).appendTo('#paralprimer2,#paralpaint2'); 
         
      });     
 
 $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
      var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
      $(NoOfCoats).appendTo('#paralgalvanization2'); 
       
    });     

 $.each(wsDropDown.FireProofingType, function(index,data) {   
      var appendval = "<option>"+data.FireProofingType+"</option>";
      $(appendval).appendTo('#paralfireProofing2'); 
       
    }); 
 $.each(wsDropDown.FireRating, function(index,data) {   
    var appendval = "<option>"+data.FireRating_fra+"</option>";
    $(appendval).appendTo('#paralfireProofing3'); 
     
  }); 
      
 
 $.each(wsDropDown.AESSCategory, function(index,data) {   
        var appendval = "<option>"+data.AESS+"</option>";
        $(appendval).appendTo('#paralaess1'); 
         
      });
 if(wsFinish != null){
	    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	console.log(usedfinish);
	   var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
		 var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
		 var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
		    
		    if(paintValue != null){
		    $('#paralprimer1').val(paintValue);
		    document.getElementById("paralprimer1").setAttribute("disabled", false);
		    }
		    if(noOfCoatsprimer != null){
		       var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
		       $('select[name^="#paralprimer2"] option[value=noOfCts]').attr("selected","selected");

		    }
		 
		   $('#chkprimer').change(function() {
		      if($(this).prop("checked") == true){
		          $('#paralprimer1, #paralprimer2').attr('disabled', false);
		         if(primerperiSPreparation != null){
		  		  $('#paralsurfacePreparation1').val(primerperiSPreparation);
		  	  }
		      } else {
		          $('#paralprimer1, #paralprimer2').attr('disabled', true);

		      }
		  });
		if(usedfinish == "Primer"){
		$('#chkprimer').prop('checked', true);
		$('#chknopaint').attr('checked', true);
		$('#paralprimer1,#paralprimer2').attr('disabled', false);	
		if(primerperiSPreparation != null){
			  $('#paralsurfacePreparation1').val(primerperiSPreparation);
		}
		  } 

	var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
    if(usedfinish != "Galvanizing" &&  SPreparation != null){
    	 $('#chkprimer').prop('checked', true);
    	  $('#chknopaint').attr('checked', true);
    	 $('#paralprimer1,#paralprimer2').attr('disabled', false);	
    	 if(primerperiSPreparation != null){
    		  $('#paralsurfacePreparation1').val(primerperiSPreparation);
    	  }
    }
	var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
	var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
	var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
	if(paintValue != null){
	$('#paralpaint1').val(paintValue);
	document.getElementById("paralpaint1").setAttribute("disabled", false);
	}

	if(noOfCoatspaint != null){
	var noOfCts="<option value>"+noOfCoatspaint+"</option>";
	$('select[name^="#paralpaint2"] option[value=noOfCts]').attr("selected","selected");
	}
	$('#chkpaint').change(function() {
	 if($(this).prop("checked") == true){
	     $('#paralpaint1, #paralpaint2').attr('disabled', false);
	     if(paintperiSPreparation != null){
		    		  $('#paralsurfacePreparation1').val(paintperiSPreparation);
		    	  }
	 } else {
	     $('#paralpaint1, #paralpaint2').attr('disabled', true);
	 }
	 if($('#chkprimer').prop("checked") == true){
	     $('#chkprimer').removeAttr("disabled");
	 } else {
	     $('#chkprimer').removeAttr("disabled");
	 }
	 $('#paralgalvanization2').attr('disabled', true);
	});
	if(usedfinish == "Paint"){
	  	  $('#chkpaint').attr('checked', true);
	  	  $('#paralpaint1, #paralpaint2').attr('disabled', false);
	  	  if(paintperiSPreparation != null){
	  		  $('#paralsurfacePreparation1').val(paintperiSPreparation);
	  	  }
	    }

	
	var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
	var	category = wsFinish.Finish.AESS.Category;
	 
	if(category != null){   
	    var aess="<option value>"+category+"</option>";
		   $('select[name^="#paralaess1"] option[value=aess]').attr("selected","selected");
	}
	$('#chkaess').change(function() {
	if($(this).prop("checked") == true){
	  $('#paralaess1').attr('disabled', false);
	  if(aessperiSPreparation != null){
			  $('#paralsurfacePreparation1').val(aessperiSPreparation);
		  }
	} else {
	  $('#paralaess1').attr('disabled', true);
	}
	if($('#chkprimer').prop("checked") == true){
	  $('#chkprimer').removeAttr("disabled");
	} else {
	  $('#chkprimer').removeAttr("disabled");
	}
	$('#paralpaint1, #paralpaint2, #paralgalvanization2, #paralfireProofing2, #paralfireProofing3').attr('disabled', true); 
	});
	if(usedfinish == "AESS"){
	$('#chkaess').attr('checked', true);
	$('#paralaess1').attr('disabled', false);
	if(aessperiSPreparation != null){
		  $('#paralsurfacePreparation1').val(aessperiSPreparation);
	}
	}
	 var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
	 var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
	 var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	 
		      
	    if(fireRating != null){
	    var fireRatingval="<option value>"+fireRating+"</option>";
	    $('select[name^="#paralfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	    }
	    if(fireProofingType != null){
	       var fireProofing="<option value>"+fireProofingType+"</option>";
	       $('select[name^="#paralfireProofing3"] option[value=fireProofing]').attr("selected","selected");
	    }
	   $('#chkfireproofing').change(function() {
	      if($(this).prop("checked") == true){
	          $('#paralfireProofing2, #paralfireProofing3').attr('disabled', false);
	         if(fpperiSPreparation != null){
		       		$('#paralsurfacePreparation1').val(fpperiSPreparation);
		       	}
	      } else {
	          $('#paralfireProofing2, #paralfireProofing3').attr('disabled', true);
	      }  
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').removeAttr("disabled");
	      } else {
	          $('#chkprimer').removeAttr("disabled");
	      }
	      $('#paralpaint1, #paralpaint2, #paralgalvanization2, #paralaess1').attr('disabled', true);  
	      // $('#chkprimer').removeAttr("disabled");
	  });
	    if(usedfinish == "Fire proofing"){
	     	  $('#chkfireproofing').attr('checked',true);
	     	  $('#paralfireProofing2, #paralfireProofing3').attr('disabled', false);
	     	
		    }
	 var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	 var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	    if(zincCoatingThickness != null){
	    var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	    $('select[name^="#paralgalvanization2"] option[value=zincCoating]').attr("selected","selected");
	    }
	   $('#chkgalvanize').change(function() {
	      if($(this).prop("checked") == true){
	          $('#paralgalvanization2').attr('disabled', false);
	         if(galperiSPreparation != null){
		     	 	 $('#paralsurfacePreparation1').val(galperiSPreparation);
		     	 	   } 
	      } else {
	          $('#paralgalvanization2').attr('disabled', true);
	      }
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	      } 
	      else {
	          $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	      }
	      $('#paralprimer1, #paralprimer2, #paralpaint1, #paralpaint2, #paralfireProofing2, #paralfireProofing3, #paralaess1').attr('disabled', true);
	      // $("#chkprimer").attr('disabled', 'disabled');
	  });
	   if(usedfinish == "Galvanizing"){
	  	  $('#chkgalvanize').attr('checked', true);
	  	  $('#paralgalvanization2').attr('disabled', false);
	  	  $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	          if(galperiSPreparation != null){
	   	 	 $('#paralsurfacePreparation1').val(galperiSPreparation);
	   	 	   }  
	    }
	 var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
	$('#chknopaint').change(function() {
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').attr('disabled', false);
	         if(nopperiSPreparation != null){
		 			 $('#paralsurfacePreparation1').val(nopperiSPreparation);
		 		 	   }
	      } else {
	          $('#chkprimer').attr('disabled', false);
	      }
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').removeAttr("disabled");
	      } else {
	          $('#chkprimer').removeAttr("disabled");
	      }
	      $('#paralpaint1, #paralpaint2, #paralgalvanization2, #paralfireProofing2, #paralfireProofing3, #paralaess1').attr('disabled', true);
	  });
		  if(usedfinish == "NoPaint"){
		  $('#chknopaint').attr('checked', true);
		
	}
	}
	
	  $.each( wsDropDown.TopBottomChord, function(key, value) {
       var profiles="<option>"+value.Profile+"</option>";
         $(profiles).appendTo('#parallelmodalprofile2');

     });
        
             $.each( wsDropDown.BeamOrientation, function(key, value) {
               var profiles="<option>"+value.Beam_Orientation+"</option>";
                    $(profiles).appendTo('#parallelmemorientation2');
         
             }); 
          

         $("#parallelmodalprofile2").change(function(){
     		var profilename = $(this).val();
     		   $('#parallelgrade2').empty();
     			 getProfileGrades(profilename);
     			 $.each(profileGrades, function(index,data) {   
     				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
     				 
     		           $(grades).appendTo('#parallelgrade2'); 
     		           
     		           
     				   
     				});  
     		   
     		   var res = profilename.charAt(0);
     		   if(wsPlateGrade != ''){
     		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
     		     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
     		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
     		     	if(res=="W"){
     		     		if(profileshgrade != null){
     		     			 $('#parallelgrade2').val(profileshgrade);
     			             
     			           }
     				   }
     		    	else if(res=="H"){
     		     	if(hssgrade != ''){
     		     		 $('#parallelgrade2').val(hssgrade);
     		          
     		         }
     		     	} 
     		     	else{
     		     		if(anglegrade != ''){
     		     			$('#parallelgrade2').val(anglegrade);
     			          
     			         }
     		     	}
     		     }
     		   $('#leftConnectionMarkverical1').empty();
     		   $('#leftConnectionMarkverical4').empty();
     		  var filtered = $.grep(connectionObjList, function (el) {
     		    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussvertical")>=0){
     		        	return el.profile;
     		        }
     		    });
     		 
     		  
     			$.each(filtered, function(key, value) {
     			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
     			         $(ConnectionMark).appendTo('#leftConnectionMarkverical1'); 
     			         $(ConnectionMark).appendTo('#leftConnectionMarkverical4'); 
     			         
     			        
     			   });
     				  $('#leftConnectionMarkverical2').empty();
     				   $('#leftConnectionMarkverical5').empty();
     				 var connectionmark1 = $("#leftConnectionMarkverical1").val();
     				
     				 
     				 if(connectionmark1 != null){
     				 var conntype = $.grep(connectionObjList, function (el) {
     				        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
     				        	
     				        	return el.conntype;
     				        }
     				    });
     				 $.each(conntype, function(key, value) {
     					 var supportbeam="<option>"+value.conntype+"</option>";
     			         $(supportbeam).appendTo('#leftConnectionMarkverical2'); 
     			         $(supportbeam).appendTo('#leftConnectionMarkverical5'); 
     			             
     				   });
     				         
     				
     				
     				 $('#leftConnectionMarkverical3').empty();
     				    $('#leftConnectionMarkverical6').empty();
     				 
     				 var supptype = $.grep(connectionObjList, function (el) {
     					 
     				        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
     				        	
     				        	return el.trussConn;
     				        	
     				        }
     				    });
     				 
     				
     				 $.each(supptype, function(key, value) {
     				       var supportbeam="<option>"+value.trussConn+"</option>";
     				         $(supportbeam).appendTo('#leftConnectionMarkverical3'); 
     				         $(supportbeam).appendTo('#leftConnectionMarkverical6'); 
     				        
     				   });
     				
     				
     				 }
     				
     			});	
     		
      // });


// jQuery Code
         $(".referenceSelect").select2({
             placeholder: "Select"
         });
  $(".pmselect5").select2({
      placeholder: "Select"
  });
  $(".pmselect6").select2({
      placeholder: "Select"
  });
$(function() {
    $('.chosen-select').chosen();
    $('.chosen-select-deselect').chosen({
        allow_single_deselect: true
    });
});

$(function() {
    $(".hideAll").hide();
    $("#eESConnectiontype").change(function() {
        if ($('#eESConnectiontype').val() == 'Straight') {
            $(".efieldsFW").show();
            $(".efieldsFB").hide();
            $(".einXsplice1").hide();
            $(".einXsplice2").hide();
            $(".skewed").hide();
            $(".sloppedSkewed").hide();
        } else if ($('#eESConnectiontype').val() == 'Sloped') {
            $(".efieldsFW").hide();
            $(".efieldsFB").show();
            $(".einXsplice1").show();
            $(".skewed").hide();
            $(".sloppedSkewed").hide();
        }
    });
});

