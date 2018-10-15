function parallelRightInclinedMandatoryValidation(event){
	    		if(($('#parallelmodalprofile3,#parallelgrade3,#shapeicons').prop('selectedIndex')) == 0) {
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
      $(profiles).appendTo('#parallelmodalprofile3');

  });
     
          $.each( wsDropDown.BeamOrientation, function(key, value) {
            var profiles="<option>"+value.Beam_Orientation+"</option>";
                 $(profiles).appendTo('#parallelmodalorientation3');
      
          }); 
          
       
       /*   $.each(wsDropDown.MaterialGrade, function(index,data) {   
              var datasource="<option>"+data.MaterialGrade+"</option>";
                    $(datasource).appendTo('#parallelgrade3');             
            });*/
			
           $.each(wsDropDown.Fraction, function(index,data) {   
               
               $('<option>').val(data.fr).text(data.fr_fra).appendTo('#parainclined2');
                
           });
             
           $.each(wsDropDown.Inch, function(index,data) {   
                $('<option>').val(data.Inch).text(data.Inch).appendTo('#parainclined1');
           });
               
         
            if(RefDwgNumFiles){
            $.each(RefDwgNumFiles, function(index,data) { 
           		
           		var referencenum="<option>"+data+"</option>";
           		
           	     $(referencenum).appendTo('#parallelreferencenum'); 
           	     
           		});  
            }
            $("#parallelmodalprofile3").change(function(){
          	  var profilename = $("#parallelmodalprofile3").val();
          	 $('#parallelgrade3').empty();
			 getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#parallelgrade3'); 
		           
		           
				   
				}); 
		   
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			 $('#parallelgrade3').val(profileshgrade);
			             
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     		 $('#parallelgrade3').val(hssgrade);
		          
		         }
		     	} 
		     	else{
		     		if(anglegrade != ''){
		     			$('#parallelgrade3').val(anglegrade);
			          
			         }
		     	}
		     }
		   var filtered = $.grep(connectionObjList, function (el) {
		    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussdiagonals")>=0){
		        	return el.profile;
		        }
		    });
	  	 var filtered = $.grep(connectionObjList, function (el) {
		    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussdiagonals")>=0){
		        	return el.profile;
		        }
		    });
          	  	 var filtered = $.grep(connectionObjList, function (el) {
          		    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussdiagonals")>=0){
          		        	return el.profile;
          		        }
          		    });
          		    $('#cgload1').empty();
          		    $('#2cgload1').empty();
          		    $('#3cgload1').empty();
          		    $('#4cgload1').empty();
          		    $('#5cgload1').empty();
          		 
          		    
          		  
          			$.each(filtered, function(key, value) {
          			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
          			         $(ConnectionMark).appendTo('#cgload1'); 
          			         $(ConnectionMark).appendTo('#2cgload1'); 
          			         $(ConnectionMark).appendTo('#3cgload1'); 
          			         $(ConnectionMark).appendTo('#4cgload1'); 
          			         $(ConnectionMark).appendTo('#5cgload1'); 
          			        
          			   });
          						$('#cgload2').empty();
          					    $('#2cgload2').empty();
          					    $('#3cgload2').empty();
          					    $('#4cgload2').empty();
          					    $('#5cgload2').empty();
          					  
          					 var connectionmark1 = $("#cgload1").val();
          					 if(connectionmark1 != null){
          					 var conntype = $.grep(connectionObjList, function (el) {
          					        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
          					        	
          					        	return el.conntype;
          					        }
          					    });
          					 $.each(conntype, function(key, value) {
          						 var supportbeam="<option>"+value.conntype+"</option>";
          				         $(supportbeam).appendTo('#cgload2'); 
          				         $(supportbeam).appendTo('#2cgload2'); 
          				         $(supportbeam).appendTo('#3cgload2'); 
          				         $(supportbeam).appendTo('#4cgload2'); 
          				         $(supportbeam).appendTo('#5cgload2'); 
          				        
          					   });
          					         
          					
          					 
          					 
          					
          					 $('#cgload3').empty();
          					 $('#2cgload3').empty();
          					 $('#3cgload3').empty();
          					 $('#4cgload3').empty();
          					 $('#5cgload3').empty();
          						 
          					 var supptype = $.grep(connectionObjList, function (el) {
          						 
          					        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
          					        	
          					        	return el.trussConn;
          					        	
          					        }
          					    });
          					 
          					
          					 $.each(supptype, function(key, value) {
          					       var supportbeam="<option>"+value.trussConn+"</option>";
          					         $(supportbeam).appendTo('#cgload3'); 
          					         $(supportbeam).appendTo('#2cgload3'); 
          					         $(supportbeam).appendTo('#3cgload3'); 
          					         $(supportbeam).appendTo('#4cgload3'); 
          					         $(supportbeam).appendTo('#5cgload3'); 
          					        
          					   });
          					 }
          		    
          		  
          });
       //   });

// JQuery Code
            $(".referenceSelect").select2({
                placeholder: "Select"
            });
  $(".pmselect7").select2({
      placeholder: "Select"
  });
  $(".pmselect8").select2({
      placeholder: "Select"
  });

	$('#chkinclined').change(function() {
		if($(this).prop("checked") == true){
			$('#parainclined, #parainclined1, #parainclined2, #parainclined3').attr('disabled', false);
		} 
		else {
			$('#parainclined, #parainclined1, #parainclined2, #parainclined3').attr('disabled', true);
		}
	});
$(function() {
    $('.chosen-select').chosen();
    $('.chosen-select-deselect').chosen({
        allow_single_deselect: true
    });
});

$(".pShape2").hide();
$(".pShape3").hide();
$(".pShape4").hide();
$(".pShape5").hide();
$(".pShape6").hide();
$(".pShape7").hide();
$(".pShape8").hide();
$(".pShape9").hide();
$(".pShape10").hide();
$(".pShape11").hide();

$(function() {
    $("#pShapes").change(function() {
        if ($('#pShapes').val() == 'ps1') {
            $(".pShape1").show();
            $(".pShape2").hide();
            $(".pShape3").hide();
            $(".pShape4").hide();
            $(".pShape5").hide();
            $(".pShape6").hide();
            $(".pShape7").hide();
            $(".pShape8").hide();
            $(".pShape9").hide();
            $(".pShape10").hide();
            $(".pShape11").hide();
        } else if ($('#pShapes').val() == 'ps2') {
            $(".pShape1").hide();
            $(".pShape2").show();
            $(".pShape3").hide();
            $(".pShape4").hide();
            $(".pShape5").hide();
            $(".pShape6").hide();
            $(".pShape7").hide();
            $(".pShape8").hide();
            $(".pShape9").hide();
            $(".pShape10").hide();
            $(".pShape11").hide();
        } else if ($('#pShapes').val() == 'ps3') {
            $(".pShape1").hide();
            $(".pShape2").hide();
            $(".pShape3").show();
            $(".pShape4").hide();
            $(".pShape5").hide();
            $(".pShape6").hide();
            $(".pShape7").hide();
            $(".pShape8").hide();
            $(".pShape9").hide();
            $(".pShape10").hide();
            $(".pShape11").hide();

        } else if ($('#pShapes').val() == 'ps4') {
            $(".pShape1").hide();
            $(".pShape2").hide();
            $(".pShape3").hide();
            $(".pShape4").show();
            $(".pShape5").hide();
            $(".pShape6").hide();
            $(".pShape7").hide();
            $(".pShape8").hide();
            $(".pShape9").hide();
            $(".pShape10").hide();
            $(".pShape11").hide();
        } else if ($('#pShapes').val() == 'ps5') {
            $(".pShape1").hide();
            $(".pShape2").hide();
            $(".pShape3").hide();
            $(".pShape4").hide();
            $(".pShape5").show();
            $(".pShape6").hide();
            $(".pShape7").hide();
            $(".pShape8").hide();
            $(".pShape9").hide();
            $(".pShape10").hide();
            $(".pShape11").hide();
        } else if ($('#pShapes').val() == 'ps6') {
            $(".pShape1").hide();
            $(".pShape2").hide();
            $(".pShape3").hide();
            $(".pShape4").hide();
            $(".pShape5").hide();
            $(".pShape6").show();
            $(".pShape7").hide();
            $(".pShape8").hide();
            $(".pShape9").hide();
            $(".pShape10").hide();
            $(".pShape11").hide();
        } else if ($('#pShapes').val() == 'ps7') {
            $(".pShape1").hide();
            $(".pShape2").hide();
            $(".pShape3").hide();
            $(".pShape4").hide();
            $(".pShape5").hide();
            $(".pShape6").hide();
            $(".pShape7").show();
            $(".pShape8").hide();
            $(".pShape9").hide();
            $(".pShape10").hide();
            $(".pShape11").hide();
        } else if ($('#pShapes').val() == 'ps8') {
            $(".pShape1").hide();
            $(".pShape2").hide();
            $(".pShape3").hide();
            $(".pShape4").hide();
            $(".pShape5").hide();
            $(".pShape6").hide();
            $(".pShape7").hide();
            $(".pShape8").show();
            $(".pShape9").hide();
            $(".pShape10").hide();
            $(".pShape11").hide();
        } else if ($('#pShapes').val() == 'ps9') {
            $(".pShape1").hide();
            $(".pShape2").hide();
            $(".pShape3").hide();
            $(".pShape4").hide();
            $(".pShape5").hide();
            $(".pShape6").hide();
            $(".pShape7").hide();
            $(".pShape8").hide();
            $(".pShape9").show();
            $(".pShape10").hide();
            $(".pShape11").hide();
        } else if ($('#pShapes').val() == 'ps10') {
            $(".pShape1").hide();
            $(".pShape2").hide();
            $(".pShape3").hide();
            $(".pShape4").hide();
            $(".pShape5").hide();
            $(".pShape6").hide();
            $(".pShape7").hide();
            $(".pShape8").hide();
            $(".pShape9").hide();
            $(".pShape10").hide();
            $(".pShape11").hide();
        } else if ($('#pShapes').val() == 'ps11') {
            $(".pShape1").hide();
            $(".pShape2").hide();
            $(".pShape3").hide();
            $(".pShape4").hide();
            $(".pShape5").hide();
            $(".pShape6").hide();
            $(".pShape7").hide();
            $(".pShape8").hide();
            $(".pShape9").hide();
            $(".pShape10").hide();
            $(".pShape11").show();
        }

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
        //  else if($('#eESConnectiontype').val()=='skewed'){
        //    $(".skewed").show();
        //     $(".efieldsFB").hide();
        //      $(".einXsplice1").hide();
        //      $(".einXsplice2").hide();
        //     $(".sloppedSkewed").hide();
        // }
        //  else if($('#eESConnectiontype').val()=='sloppedSkewed'){
        //   $(".sloppedSkewed").show();
        //    $(".efieldsFB").hide();
        //      $(".einXsplice1").hide();
        //      $(".einXsplice2").hide();
        //       $(".skewed").show();
        // }

    });
});

$(".hideAll").hide();
$(function() {
	  $("#shapeicons").change(function() {
	    	 $('#showcg').empty();
	  	   $('#showcd').empty();
	  	var connectionvalue=$('option:selected', this).attr('ctbg');
	  	var ctbgval = $('#shapeicons').val();
	  	var ctbdval = $('option:selected', this).attr('ctbd');
	  	if(ctbgval=="s1"){
	    	var html='<div class="row">'+
	        			'<div class="col-md-8 p-r-0 borderRight">'+
	        				'<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
	        					'<div class="col-lg-1 col-md-1 "></div>'+
	    						'<div class="col-md-3 ">'+
	    							'<label class="labelBlack control-label">Connection Mark</label>'+
	    						'</div>'+
	        					'<div class="col-md-3 ">'+
	        					'<label class="labelBlack control-label">Connection Type</label>'+
	        					'</div>'+
	        					'<div class="col-md-3 ">'+
	        					'<label class="labelBlack control-label">Connection Method</label>'+
	        					'</div>'+
	        			    '</div>'+
		        			'<div class=" pShape1 pShape2  hideAll">'+
		                      '<div class="row">'+
		                          '<div class="col-lg-1 col-md-1 ">'+
		                              '<label class=" numbubble">1</label>'+
		                          '</div>'+
		                          '<div class="col-lg-3 col-md-3">'+
		                              '<select class="form-control" id="cgload1">'+
		                              '</select>'+
		                          '</div>'+
		                          '<div class="col-lg-3 col-md-3">'+
		                              '<select class="form-control" id="cgload2" disabled="true">'+
		                              '</select>'+
		                          '</div>'+
		                          '<div class="col-lg-3 col-md-3">'+
		                              '<select class="form-control" id="cgload3" disabled="true">'+
		                              '</select>'+
		                          '</div>'+
		                      '</div>'+
		                      '<div class="row m-t-20">'+
		                          '<div class="col-lg-1 col-md-1 ">'+
		                              '<label class=" numbubble">2</label>'+
		                          '</div>'+
		                          '<div class="col-lg-3 col-md-3">'+
		                              '<select class="form-control" id="2cgload1">'+
		                              '</select>'+
		                          '</div>'+
		                          '<div class="col-lg-3 col-md-3">'+
		                              '<select class="form-control" id="2cgload2" disabled="true">'+
		                              '</select>'+
		                          '</div>'+
		                          '<div class="col-lg-3 col-md-3">'+
		                              '<select class="form-control" id="2cgload3" disabled="true">'+
		                              '</select>'+
		                          '</div>'+
		                        '</div>'+
		                   '</div>'+
	                  '</div>'+
	                  '<div class="col-lg-4 col-md-4  m-b-10 m-t-10 ">'+
		                  '<div class="row pShape1 hideAll m-b-10">'+
		                      '<div class="col-lg-12 col-md-12 text-center">'+
		                          '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/forward+slash.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/forward+slash.png">'+
		                      '</div>'+
		                  '</div>'+
	        			'</div>'+'</div>'
	        $('#showcg').append(html);
	    	
	    		$('#showcd').empty();
	    		var htmlcg=
	    		'<div class="row">'+
	            '<div class="col-md-6 padding10 borderRight">'+
	                '<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
	                    '<div class="col-lg-2 col-md-2 "></div>'+
	                    '<div class="col-md-3 ">'+
	                        '<label class="labelBlack control-label p-l-10">Axial Load</label>'+
	                    '</div>'+
	                '</div>'+
	                '<div class="row pShape1 pShape2 hideAll">'+
	                    '<div class="col-lg-6 col-md-6 m-b-10 m-l-40">'+
	                        '<div class="row m-b-10">'+
	                            '<div class="col-lg-1 col-md-1 ">'+
	                                '<label class=" numbubble">1</label>'+
	                            '</div>'+
	                            '<div class="col-lg-7 col-md-7 m-l-20">'+
	                                '<input type="text" class="form-control per70" id="axialload1">'+
	                                '<div class="txt-right">'+
	                                    'Kips'+
	                                '</div>'+
	                            '</div>'+
	                        '</div>'+
	                    '</div>'+
	                '</div>'+'</div>'+
	                '<div class="col-lg-6 col-md-6  m-b-10 m-t-10 text-center">'+
	                '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'+
	                '<div class="row pShape1 hideAll m-b-10">'+
	                    '<div class="col-lg-12 col-md-12 text-center">'+
	                        '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/1.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/1.png">'+
	                    '</div>'+
	                '</div>'+
	                '</div>'
	                $('#showcd').append(htmlcg);
	  	}
	    	else if(ctbgval=="s2"){
	    		var html='<div class="row">'+
				'<div class="col-md-8 p-r-0 borderRight">'+
					'<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
						'<div class="col-lg-1 col-md-1 "></div>'+
						'<div class="col-md-3 ">'+
							'<label class="labelBlack control-label">Connection Mark</label>'+
						'</div>'+
						'<div class="col-md-3 ">'+
						'<label class="labelBlack control-label">Connection Type</label>'+
						'</div>'+
						'<div class="col-md-3 ">'+
						'<label class="labelBlack control-label">Connection Method</label>'+
						'</div>'+
				    '</div>'+
	    			'<div class=" pShape1 pShape2  hideAll">'+
	                  '<div class="row">'+
	                      '<div class="col-lg-1 col-md-1 ">'+
	                          '<label class=" numbubble">1</label>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload1">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload2" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload3" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                  '</div>'+
	                  '<div class="row m-t-20">'+
	                      '<div class="col-lg-1 col-md-1 ">'+
	                          '<label class=" numbubble">2</label>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload1">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload2" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload3" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                    '</div>'+
	               '</div>'+
	          '</div>'+
	          '<div class="col-lg-4 col-md-4  m-b-10 m-t-10 ">'+
	              '<div class="row pShape1 hideAll m-b-10">'+
	                  '<div class="col-lg-12 col-md-12 text-center">'+
	                      '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/backward+slash.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/forward+slash.png">'+
	                  '</div>'+
	              '</div>'+
				'</div>'+'</div>'
	$('#showcg').append(html);

		$('#showcd').empty();
		var htmlcg=
		'<div class="row">'+
	    '<div class="col-md-6 padding10 borderRight">'+
	        '<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
	            '<div class="col-lg-2 col-md-2 "></div>'+
	            '<div class="col-md-3 ">'+
	                '<label class="labelBlack control-label p-l-10">Axial Load</label>'+
	            '</div>'+
	        '</div>'+
	        '<div class="row pShape1 pShape2 hideAll">'+
	            '<div class="col-lg-6 col-md-6 m-b-10 m-l-40">'+
	                '<div class="row m-b-10">'+
	                    '<div class="col-lg-1 col-md-1 ">'+
	                        '<label class=" numbubble">1</label>'+
	                    '</div>'+
	                    '<div class="col-lg-7 col-md-7 m-l-20">'+
	                        '<input type="text" class="form-control per70" id="axialload1">'+
	                        '<div class="txt-right">'+
	                            'Kips'+
	                        '</div>'+
	                    '</div>'+
	                '</div>'+
	            '</div>'+
	        '</div>'+'</div>'+
	        '<div class="col-lg-6 col-md-6  m-b-10 m-t-10 text-center">'+
	        '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'+
	        '<div class="row pShape1 hideAll m-b-10">'+
	            '<div class="col-lg-12 col-md-12 text-center">'+
	                '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/2.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/1.png">'+
	            '</div>'+
	        '</div>'+
	        '</div>'
	        $('#showcd').append(htmlcg);
	    	}
	  	
	    	else if(ctbgval=="s4"){
	    		var html='<div class="row">'+
				'<div class="col-md-8 p-r-0 borderRight">'+
					'<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
						'<div class="col-lg-1 col-md-1 "></div>'+
						'<div class="col-md-3 ">'+
							'<label class="labelBlack control-label">Connection Mark</label>'+
						'</div>'+
						'<div class="col-md-3 ">'+
						'<label class="labelBlack control-label">Connection Type</label>'+
						'</div>'+
						'<div class="col-md-3 ">'+
						'<label class="labelBlack control-label">Connection Method</label>'+
						'</div>'+
				    '</div>'+
	    			'<div class=" pShape1 pShape2  hideAll">'+
	                  '<div class="row">'+
	                      '<div class="col-lg-1 col-md-1 ">'+
	                          '<label class=" numbubble">1</label>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload1">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload2" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload3" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                  '</div>'+
	                  '<div class="row m-t-20">'+
	                      '<div class="col-lg-1 col-md-1 ">'+
	                          '<label class=" numbubble">2</label>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload1">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload2" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload3" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                    '</div>'+
	                    '<div class="row m-t-20">'+
	                    '<div class="col-lg-1 col-md-1 ">'+
	                        '<label class=" numbubble">3</label>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload1">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload2" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload3" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                  '</div>'+
	               '</div>'+
	          '</div>'+
	          '<div class="col-lg-4 col-md-4  m-b-10 m-t-10 ">'+
	              '<div class="row pShape1 hideAll m-b-10">'+
	                  '<div class="col-lg-12 col-md-12 text-center">'+
	                      '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V1.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V1.png">'+
	                  '</div>'+
	              '</div>'+
				'</div>'+'</div>'
	$('#showcg').append(html);

		$('#showcd').empty();
		var htmlcg=
		'<div class="row">'+
	    '<div class="col-md-6 padding10 borderRight">'+
	        '<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
	            '<div class="col-lg-2 col-md-2 "></div>'+
	            '<div class="col-md-3 ">'+
	                '<label class="labelBlack control-label p-l-10">Axial Load</label>'+
	            '</div>'+
	        '</div>'+
	        '<div class="row pShape1 pShape2 hideAll">'+
	            '<div class="col-lg-6 col-md-6 m-b-10 m-l-40">'+
	                '<div class="row m-b-10">'+
	                    '<div class="col-lg-1 col-md-1 ">'+
	                        '<label class=" numbubble">1</label>'+
	                    '</div>'+
	                    '<div class="col-lg-7 col-md-7 m-l-20">'+
	                        '<input type="text" class="form-control per70" id="axialload1">'+
	                        '<div class="txt-right">'+
	                            'Kips'+
	                        '</div>'+
	                    '</div>'+
	                '</div>'+
	                '<div class="row m-b-10">'+
	                '<div class="col-lg-1 col-md-1 ">'+
	                    '<label class=" numbubble">2</label>'+
	                '</div>'+
	                '<div class="col-lg-7 col-md-7 m-l-20">'+
	                    '<input type="text" class="form-control per70" id="axialload2">'+
	                    '<div class="txt-right">'+
	                        'Kips'+
	                    '</div>'+
	                '</div>'+
	            '</div>'+ 
	                
	            '</div>'+
	        '</div>'+'</div>'+
	        '<div class="col-lg-6 col-md-6  m-b-10 m-t-10 text-center">'+
	        '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'+
	        '<div class="row pShape1 hideAll m-b-10">'+
	            '<div class="col-lg-12 col-md-12 text-center">'+
	                '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/4.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/4.png">'+
	            '</div>'+
	        '</div>'+
	        '</div>'
	        $('#showcd').append(htmlcg);
	    	}
	    	else if(ctbgval=="s5"){
	    		var html='<div class="row">'+
				'<div class="col-md-8 p-r-0 borderRight">'+
					'<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
						'<div class="col-lg-1 col-md-1 "></div>'+
						'<div class="col-md-3 ">'+
							'<label class="labelBlack control-label">Connection Mark</label>'+
						'</div>'+
						'<div class="col-md-3 ">'+
						'<label class="labelBlack control-label">Connection Type</label>'+
						'</div>'+
						'<div class="col-md-3 ">'+
						'<label class="labelBlack control-label">Connection Method</label>'+
						'</div>'+
				    '</div>'+
	    			'<div class=" pShape1 pShape2  hideAll">'+
	                  '<div class="row">'+
	                      '<div class="col-lg-1 col-md-1 ">'+
	                          '<label class=" numbubble">1</label>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload1">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload2" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload3" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                  '</div>'+
	                  '<div class="row m-t-20">'+
	                      '<div class="col-lg-1 col-md-1 ">'+
	                          '<label class=" numbubble">2</label>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload1">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload2" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload3" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                    '</div>'+
	                    '<div class="row m-t-20">'+
	                    '<div class="col-lg-1 col-md-1 ">'+
	                        '<label class=" numbubble">3</label>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload1">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload2" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload3" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                  '</div>'+
	               '</div>'+
	          '</div>'+
	          '<div class="col-lg-4 col-md-4  m-b-10 m-t-10 ">'+
	              '<div class="row pShape1 hideAll m-b-10">'+
	                  '<div class="col-lg-12 col-md-12 text-center">'+
	                      '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V2.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V2.png">'+
	                  '</div>'+
	              '</div>'+
				'</div>'+'</div>'
	$('#showcg').append(html);
		$('#showcd').empty();
		var htmlcg=
		'<div class="row">'+
	    '<div class="col-md-6 padding10 borderRight">'+
	        '<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
	            '<div class="col-lg-2 col-md-2 "></div>'+
	            '<div class="col-md-3 ">'+
	                '<label class="labelBlack control-label p-l-10">Axial Load</label>'+
	            '</div>'+
	        '</div>'+
	        '<div class="row pShape1 pShape2 hideAll">'+
	            '<div class="col-lg-6 col-md-6 m-b-10 m-l-40">'+
	                '<div class="row m-b-10">'+
	                    '<div class="col-lg-1 col-md-1 ">'+
	                        '<label class=" numbubble">1</label>'+
	                    '</div>'+
	                    '<div class="col-lg-7 col-md-7 m-l-20">'+
	                        '<input type="text" class="form-control per70" id="axialload1">'+
	                        '<div class="txt-right">'+
	                            'Kips'+
	                        '</div>'+
	                    '</div>'+
	                '</div>'+
	                '<div class="row m-b-10">'+
	                '<div class="col-lg-1 col-md-1 ">'+
	                    '<label class=" numbubble">2</label>'+
	                '</div>'+
	                '<div class="col-lg-7 col-md-7 m-l-20">'+
	                    '<input type="text" class="form-control per70" id="axialload2">'+
	                    '<div class="txt-right">'+
	                        'Kips'+
	                    '</div>'+
	                '</div>'+
	            '</div>'+ 
	                
	            '</div>'+
	        '</div>'+'</div>'+
	        '<div class="col-lg-6 col-md-6  m-b-10 m-t-10 text-center">'+
	        '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'+
	        '<div class="row pShape1 hideAll m-b-10">'+
	            '<div class="col-lg-12 col-md-12 text-center">'+
	                '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/5.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/5.png">'+
	            '</div>'+
	        '</div>'+
	        '</div>'
	        $('#showcd').append(htmlcg);
	    	}
	    	else if(ctbgval=="s8"){
	    		var html='<div class="row">'+
				'<div class="col-md-8 p-r-0 borderRight">'+
					'<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
						'<div class="col-lg-1 col-md-1 "></div>'+
						'<div class="col-md-3 ">'+
							'<label class="labelBlack control-label">Connection Mark</label>'+
						'</div>'+
						'<div class="col-md-3 ">'+
						'<label class="labelBlack control-label">Connection Type</label>'+
						'</div>'+
						'<div class="col-md-3 ">'+
						'<label class="labelBlack control-label">Connection Method</label>'+
						'</div>'+
				    '</div>'+
	    			'<div class=" pShape1 pShape2  hideAll">'+
	                  '<div class="row">'+
	                      '<div class="col-lg-1 col-md-1 ">'+
	                          '<label class=" numbubble">1</label>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload1">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload2" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload3" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                  '</div>'+
	                  '<div class="row m-t-20">'+
	                      '<div class="col-lg-1 col-md-1 ">'+
	                          '<label class=" numbubble">2</label>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload1">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload2" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload3" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                    '</div>'+
	                    
	                    '<div class="row m-t-20">'+
	                    '<div class="col-lg-1 col-md-1 ">'+
	                        '<label class=" numbubble">3</label>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload1">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload2" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload3" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                  '</div>'+
	                  
	                  '<div class="row m-t-20">'+
	                  '<div class="col-lg-1 col-md-1 ">'+
	                      '<label class=" numbubble">4</label>'+
	                  '</div>'+
	                  '<div class="col-lg-3 col-md-3">'+
	                      '<select class="form-control" id="4cgload1">'+
	                      '</select>'+
	                  '</div>'+
	                  '<div class="col-lg-3 col-md-3">'+
	                      '<select class="form-control" id="4cgload2" disabled="true">'+
	                      '</select>'+
	                  '</div>'+
	                  '<div class="col-lg-3 col-md-3">'+
	                      '<select class="form-control" id="4cgload3" disabled="true">'+
	                      '</select>'+
	                  '</div>'+
	                '</div>'+
	                    
	                    '<div class="row m-t-20">'+
	                    '<div class="col-lg-1 col-md-1 ">'+
	                        '<label class=" numbubble">5</label>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="5cgload1">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="5cgload2" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="5cgload3" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                  '</div>'+
	               '</div>'+
	          '</div>'+
	          '<div class="col-lg-4 col-md-4  m-b-10 m-t-10 ">'+
	              '<div class="row pShape1 hideAll m-b-10">'+
	                  '<div class="col-lg-12 col-md-12 text-center">'+
	                      '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W.png">'+
	                  '</div>'+
	              '</div>'+
				'</div>'+'</div>'
	$('#showcg').append(html);

		$('#showcd').empty();
		var htmlcg=
		'<div class="row">'+
	    '<div class="col-md-6 padding10 borderRight">'+
	        '<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
	            '<div class="col-lg-2 col-md-2 "></div>'+
	            '<div class="col-md-3 ">'+
	                '<label class="labelBlack control-label p-l-10">Axial Load</label>'+
	            '</div>'+
	        '</div>'+
	        '<div class="row pShape1 pShape2 hideAll">'+
	            '<div class="col-lg-6 col-md-6 m-b-10 m-l-40">'+
	                '<div class="row m-b-10">'+
	                    '<div class="col-lg-1 col-md-1 ">'+
	                        '<label class=" numbubble">1</label>'+
	                    '</div>'+
	                    '<div class="col-lg-7 col-md-7 m-l-20">'+
	                        '<input type="text" class="form-control per70" id="axialload1">'+
	                        '<div class="txt-right">'+
	                            'Kips'+
	                        '</div>'+
	                    '</div>'+
	                '</div>'+
	                '<div class="row m-b-10">'+
	                '<div class="col-lg-1 col-md-1 ">'+
	                    '<label class=" numbubble">2</label>'+
	                '</div>'+
	                '<div class="col-lg-7 col-md-7 m-l-20">'+
	                    '<input type="text" class="form-control per70" id="axialload2">'+
	                    '<div class="txt-right">'+
	                        'Kips'+
	                    '</div>'+
	                '</div>'+
	            '</div>'+ 
	            
	            '<div class="row m-b-10">'+
	            '<div class="col-lg-1 col-md-1 ">'+
	                '<label class=" numbubble">3</label>'+
	            '</div>'+
	            '<div class="col-lg-7 col-md-7 m-l-20">'+
	                '<input type="text" class="form-control per70" id="axialload3">'+
	                '<div class="txt-right">'+
	                    'Kips'+
	                '</div>'+
	            '</div>'+
	        '</div>'+ 
	        
	        '<div class="row m-b-10">'+
	        '<div class="col-lg-1 col-md-1 ">'+
	            '<label class=" numbubble">4</label>'+
	        '</div>'+
	        '<div class="col-lg-7 col-md-7 m-l-20">'+
	            '<input type="text" class="form-control per70" id="axialload4">'+
	            '<div class="txt-right">'+
	                'Kips'+
	            '</div>'+
	        '</div>'+
	    '</div>'+ 
	                
	            '</div>'+
	        '</div>'+'</div>'+
	        '<div class="col-lg-6 col-md-6  m-b-10 m-t-10 text-center">'+
	        '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'+
	        '<div class="row pShape1 hideAll m-b-10">'+
	            '<div class="col-lg-12 col-md-12 text-center">'+
	                '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/8.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/8.png">'+
	            '</div>'+
	        '</div>'+
	        '</div>'
	        $('#showcd').append(htmlcg);
	    	}	

	    	else {
	    		var html='<div class="row">'+
				'<div class="col-md-8 p-r-0 borderRight">'+
					'<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
						'<div class="col-lg-1 col-md-1 "></div>'+
						'<div class="col-md-3 ">'+
							'<label class="labelBlack control-label">Connection Mark</label>'+
						'</div>'+
						'<div class="col-md-3 ">'+
						'<label class="labelBlack control-label">Connection Type</label>'+
						'</div>'+
						'<div class="col-md-3 ">'+
						'<label class="labelBlack control-label">Connection Method</label>'+
						'</div>'+
				    '</div>'+
	    			'<div class=" pShape1 pShape2  hideAll">'+
	                  '<div class="row">'+
	                      '<div class="col-lg-1 col-md-1 ">'+
	                          '<label class=" numbubble">1</label>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload1">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload2" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="cgload3" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                  '</div>'+
	                  '<div class="row m-t-20">'+
	                      '<div class="col-lg-1 col-md-1 ">'+
	                          '<label class=" numbubble">2</label>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload1">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload2" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                      '<div class="col-lg-3 col-md-3">'+
	                          '<select class="form-control" id="2cgload3" disabled="true">'+
	                          '</select>'+
	                      '</div>'+
	                    '</div>'+
	                    
	                    '<div class="row m-t-20">'+
	                    '<div class="col-lg-1 col-md-1 ">'+
	                        '<label class=" numbubble">3</label>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload1">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload2" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="3cgload3" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                  '</div>'+
	                  
	                  '<div class="row m-t-20">'+
	                  '<div class="col-lg-1 col-md-1 ">'+
	                      '<label class=" numbubble">4</label>'+
	                  '</div>'+
	                  '<div class="col-lg-3 col-md-3">'+
	                      '<select class="form-control" id="4cgload1">'+
	                      '</select>'+
	                  '</div>'+
	                  '<div class="col-lg-3 col-md-3">'+
	                      '<select class="form-control" id="4cgload2" disabled="true">'+
	                      '</select>'+
	                  '</div>'+
	                  '<div class="col-lg-3 col-md-3">'+
	                      '<select class="form-control" id="4cgload3" disabled="true">'+
	                      '</select>'+
	                  '</div>'+
	                '</div>'+
	                    
	                    '<div class="row m-t-20">'+
	                    '<div class="col-lg-1 col-md-1 ">'+
	                        '<label class=" numbubble">5</label>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="5cgload1">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="5cgload2" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                    '<div class="col-lg-3 col-md-3">'+
	                        '<select class="form-control" id="5cgload3" disabled="true">'+
	                        '</select>'+
	                    '</div>'+
	                  '</div>'+
	               '</div>'+
	          '</div>'+
	          '<div class="col-lg-4 col-md-4  m-b-10 m-t-10 ">'+
	              '<div class="row pShape1 hideAll m-b-10">'+
	                  '<div class="col-lg-12 col-md-12 text-center">'+
	                      '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/M.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/M.png">'+
	                  '</div>'+
	              '</div>'+
				'</div>'+'</div>'
	$('#showcg').append(html);

		$('#showcd').empty();
		var htmlcg=
		'<div class="row">'+
	    '<div class="col-md-6 padding10 borderRight">'+
	        '<div class="row pShape1 pShape2 pShape3 pShape4 pShape8 pShape5 pShape9 hideAll">'+
	            '<div class="col-lg-2 col-md-2 "></div>'+
	            '<div class="col-md-3 ">'+
	                '<label class="labelBlack control-label p-l-10">Axial Load</label>'+
	            '</div>'+
	        '</div>'+
	        '<div class="row pShape1 pShape2 hideAll">'+
	            '<div class="col-lg-6 col-md-6 m-b-10 m-l-40">'+
	                '<div class="row m-b-10">'+
	                    '<div class="col-lg-1 col-md-1 ">'+
	                        '<label class=" numbubble">1</label>'+
	                    '</div>'+
	                    '<div class="col-lg-7 col-md-7 m-l-20">'+
	                        '<input type="text" class="form-control per70" id="axialload1">'+
	                        '<div class="txt-right">'+
	                            'Kips'+
	                        '</div>'+
	                    '</div>'+
	                '</div>'+
	                '<div class="row m-b-10">'+
	                '<div class="col-lg-1 col-md-1 ">'+
	                    '<label class=" numbubble">2</label>'+
	                '</div>'+
	                '<div class="col-lg-7 col-md-7 m-l-20">'+
	                    '<input type="text" class="form-control per70" id="axialload2">'+
	                    '<div class="txt-right">'+
	                        'Kips'+
	                    '</div>'+
	                '</div>'+
	            '</div>'+ 
	            
	            '<div class="row m-b-10">'+
	            '<div class="col-lg-1 col-md-1 ">'+
	                '<label class=" numbubble">3</label>'+
	            '</div>'+
	            '<div class="col-lg-7 col-md-7 m-l-20">'+
	                '<input type="text" class="form-control per70" id="axialload3">'+
	                '<div class="txt-right">'+
	                    'Kips'+
	                '</div>'+
	            '</div>'+
	        '</div>'+ 
	        
	        '<div class="row m-b-10">'+
	        '<div class="col-lg-1 col-md-1 ">'+
	            '<label class=" numbubble">4</label>'+
	        '</div>'+
	        '<div class="col-lg-7 col-md-7 m-l-20">'+
	            '<input type="text" class="form-control per70" id="axialload4">'+
	            '<div class="txt-right">'+
	                'Kips'+
	            '</div>'+
	        '</div>'+
	    '</div>'+ 
	                
	            '</div>'+
	        '</div>'+'</div>'+
	        '<div class="col-lg-6 col-md-6  m-b-10 m-t-10 text-center">'+
	        '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'+
	        '<div class="row pShape1 hideAll m-b-10">'+
	            '<div class="col-lg-12 col-md-12 text-center">'+
	                '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/9.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/9.png">'+
	            '</div>'+
	        '</div>'+
	        '</div>'
	        $('#showcd').append(htmlcg);
	    	}	
	  	var profilename = $("#parallelmodalprofile3").val();
	  	 var filtered = $.grep(connectionObjList, function (el) {
		    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussdiagonals")>=0){
		        	return el.profile;
		        }
		    });
		    $('#cgload1').empty();
		    $('#2cgload1').empty();
		    $('#3cgload1').empty();
		    $('#4cgload1').empty();
		    $('#5cgload1').empty();
		 
		    
		  
			$.each(filtered, function(key, value) {
			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
			         $(ConnectionMark).appendTo('#cgload1'); 
			         $(ConnectionMark).appendTo('#2cgload1'); 
			         $(ConnectionMark).appendTo('#3cgload1'); 
			         $(ConnectionMark).appendTo('#4cgload1'); 
			         $(ConnectionMark).appendTo('#5cgload1'); 
			        
			   });
						$('#cgload2').empty();
					    $('#2cgload2').empty();
					    $('#3cgload2').empty();
					    $('#4cgload2').empty();
					    $('#5cgload2').empty();
					  
					 var connectionmark1 = $("#cgload1").val();
					 if(connectionmark1 != null){
					 var conntype = $.grep(connectionObjList, function (el) {
					        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
					        	
					        	return el.conntype;
					        }
					    });
					 $.each(conntype, function(key, value) {
						 var supportbeam="<option>"+value.conntype+"</option>";
				         $(supportbeam).appendTo('#cgload2'); 
				         $(supportbeam).appendTo('#2cgload2'); 
				         $(supportbeam).appendTo('#3cgload2'); 
				         $(supportbeam).appendTo('#4cgload2'); 
				         $(supportbeam).appendTo('#5cgload2'); 
				        
					   });
					         
					
					 
					 
					
					 $('#cgload3').empty();
					 $('#2cgload3').empty();
					 $('#3cgload3').empty();
					 $('#4cgload3').empty();
					 $('#5cgload3').empty();
						 
					 var supptype = $.grep(connectionObjList, function (el) {
						 
					        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
					        	
					        	return el.trussConn;
					        	
					        }
					    });
					 
					
					 $.each(supptype, function(key, value) {
					       var supportbeam="<option>"+value.trussConn+"</option>";
					         $(supportbeam).appendTo('#cgload3'); 
					         $(supportbeam).appendTo('#2cgload3'); 
					         $(supportbeam).appendTo('#3cgload3'); 
					         $(supportbeam).appendTo('#4cgload3'); 
					         $(supportbeam).appendTo('#5cgload3'); 
					        
					   });
					 }
	    });
});

$('#shapeicons').ddslick({
    data: ddData,
    width: 100,
    imagePosition: "left",
    selectText: "Select ",
    onSelected: function(data) {
      
        // alert(data.selectedData.value);
        $(".hideAll").hide();
        if (data.selectedData.value == '1') {
            $(".pShape1").show();
        } else if (data.selectedData.value == '2') {
            $(".pShape2").show();
        } else if (data.selectedData.value == '3') {
            $(".pShape3").show();
        } else if (data.selectedData.value == '4') {
            $(".pShape4").show();
        } else if (data.selectedData.value == '5') {
            $(".pShape5").show();
        } else if (data.selectedData.value == '6') {
            $(".pShape6").show();
        } else if (data.selectedData.value == '7') {
            $(".pShape7").show();
        } else if (data.selectedData.value == '8') {
            $(".pShape8").show();
        } else if (data.selectedData.value == '9') {
            $(".pShape9").show();
        } else if (data.selectedData.value == '10') {
            $(".pShape10").show();
        } else if (data.selectedData.value == '11') {
            $(".pShape11").show();
        }

    }
});

function show1() {
    document.getElementById('showcg').style.display = 'block';
    document.getElementById('showcd').style.display = 'none';
}

function show2() {
    document.getElementById('showcd').style.display = 'block';
    document.getElementById('showcg').style.display = 'none';
}
