		function pitchedRightVerticalMandatoryValidation(event){
	    		if(($('#pitchedprofile2,#pitchedgrade2,#pitchmemorientation').prop('selectedIndex')) == 0) {
	    			event.preventDefault();
	    			
	    			}
	    	    }  	
						
    		 $.each(wsDropDown.SurfacePreparation, function(index,data) {   
       		  var weldsize = "<option>"+data.SSPC_No+"</option>";
       		  $(weldsize).appendTo('#pitsurfacePreparation1'); 
       		   
       		});	
    				
    		 $.each(wsDropDown.NoOfCoats, function(index,data) {   
          		  var NoOfCoats = "<option>"+data.Coats+"</option>";
          		  $(NoOfCoats).appendTo('#pitprimer2,#pitpaint2'); 
          		   
          		});			
    		 
    		 $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
         		  var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
         		  $(NoOfCoats).appendTo('#pitgalvanization2'); 
         		
         		   
         		});			
   		 
    		 $.each(wsDropDown.FireProofingType, function(index,data) {   
        		  var appendval = "<option>"+data.FireProofingType+"</option>";
        		  $(appendval).appendTo('#pitfireProofing2'); 
        		   
        		});	
    		 $.each(wsDropDown.FireRating, function(index,data) {   
       		  var appendval = "<option>"+data.FireRating_fra+"</option>";
       		  $(appendval).appendTo('#pitfireProofing3'); 
       		
       		  
       		});	
      	   	  
    		 
    		 $.each(wsDropDown.AESSCategory, function(index,data) {   
          		  var appendval = "<option>"+data.AESS+"</option>";
          		  $(appendval).appendTo('#pitaess1'); 
          		   
          		});	
    		 if(wsFinish != null){
    			    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
    			console.log(usedfinish);

 			   var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
 			 var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
 			 var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
 			    
 			    if(paintValue != null){
 			    $('#pitprimer1').val(paintValue);
 			    document.getElementById("pitprimer1").setAttribute("disabled", false);
 			    }
 			    if(noOfCoatsprimer != null){
 			       var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
 			       $('select[name^="#pitprimer2"] option[value=noOfCts]').attr("selected","selected");

 			    }
 			 
 			   $('#chkprimer').change(function() {
 			      if($(this).prop("checked") == true){
 			          $('#pitprimer1, #pitprimer2').attr('disabled', false);
 			         if(primerperiSPreparation != null){
 			  		  $('#pitsurfacePreparation1').val(primerperiSPreparation);
 			  	  }
 			      } else {
 			          $('#pitprimer1, #pitprimer2').attr('disabled', true);

 			      }
 			  });
 			if(usedfinish == "Primer"){
 			$('#chkprimer').prop('checked', true);
 			$('#chknopaint').attr('checked', true);
 			$('#pitprimer1,#pitprimer2').attr('disabled', false);	
 			if(primerperiSPreparation != null){
 				  $('#pitsurfacePreparation1').val(primerperiSPreparation);
 			}
 			  } 
    			var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
    			if(usedfinish != "Galvanizing" &&  SPreparation != null){
    				 $('#chkprimer').prop('checked', true);
    				  $('#chknopaint').attr('checked', true);
    				 $('#pitprimer1,#pitprimer2').attr('disabled', false);	
    				 if(primerperiSPreparation != null){
    					  $('#pitsurfacePreparation1').val(primerperiSPreparation);
    				  }
    			}

    			var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
    			var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
    			var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
    			if(paintValue != null){
    			$('#pitpaint1').val(paintValue);
    			document.getElementById("pitpaint1").setAttribute("disabled", false);
    			}

    			if(noOfCoatspaint != null){
    			var noOfCts="<option value>"+noOfCoatspaint+"</option>";
    			$('select[name^="#pitpaint2"] option[value=noOfCts]').attr("selected","selected");
    			}
    			$('#chkpaint').change(function() {
    			 if($(this).prop("checked") == true){
    			     $('#pitpaint1, #pitpaint2').attr('disabled', false);
    			     if(paintperiSPreparation != null){
    				    		  $('#pitsurfacePreparation1').val(paintperiSPreparation);
    				    	  }
    			 } else {
    			     $('#pitpaint1, #pitpaint2').attr('disabled', true);
    			 }
    			 if($('#chkprimer').prop("checked") == true){
    			     $('#chkprimer').removeAttr("disabled");
    			 } else {
    			     $('#chkprimer').removeAttr("disabled");
    			 }
    			 $('#pitgalvanization2').attr('disabled', true);
    			});
    			if(usedfinish == "Paint"){
    			  	  $('#chkpaint').attr('checked', true);
    			  	  $('#pitpaint1, #pitpaint2').attr('disabled', false);
    			  	  if(paintperiSPreparation != null){
    			  		  $('#pitsurfacePreparation1').val(paintperiSPreparation);
    			  	  }
    			    }


    			var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
    			var	category = wsFinish.Finish.AESS.Category;
    			 
    			if(category != null){   
    			    var aess="<option value>"+category+"</option>";
    				   $('select[name^="#pitaess1"] option[value=aess]').attr("selected","selected");
    			}
    			$('#chkaess').change(function() {
    			if($(this).prop("checked") == true){
    			  $('#pitaess1').attr('disabled', false);
    			  if(aessperiSPreparation != null){
    					  $('#pitsurfacePreparation1').val(aessperiSPreparation);
    				  }
    			} else {
    			  $('#pitaess1').attr('disabled', true);
    			}
    			if($('#chkprimer').prop("checked") == true){
    			  $('#chkprimer').removeAttr("disabled");
    			} else {
    			  $('#chkprimer').removeAttr("disabled");
    			}
    			$('#pitpaint1, #pitpaint2, #pitgalvanization2, #pitfireProofing2, #pitfireProofing3').attr('disabled', true); 
    			});
    			if(usedfinish == "AESS"){
    			$('#chkaess').attr('checked', true);
    			$('#pitaess1').attr('disabled', false);
    			if(aessperiSPreparation != null){
    				  $('#pitsurfacePreparation1').val(aessperiSPreparation);
    			}
    			}
    			 var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
    			 var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
    			 var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
    			 
    				      
    			    if(fireRating != null){
    			    var fireRatingval="<option value>"+fireRating+"</option>";
    			    $('select[name^="#pitfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
    			    }
    			    if(fireProofingType != null){
    			       var fireProofing="<option value>"+fireProofingType+"</option>";
    			       $('select[name^="#pitfireProofing3"] option[value=fireProofing]').attr("selected","selected");
    			    }
    			   $('#chkfireproofing').change(function() {
    			      if($(this).prop("checked") == true){
    			          $('#pitfireProofing2, #pitfireProofing3').attr('disabled', false);
    			         if(fpperiSPreparation != null){
    				       		$('#pitsurfacePreparation1').val(fpperiSPreparation);
    				       	}
    			      } else {
    			          $('#pitfireProofing2, #pitfireProofing3').attr('disabled', true);
    			      }  
    			      if($('#chkprimer').prop("checked") == true){
    			          $('#chkprimer').removeAttr("disabled");
    			      } else {
    			          $('#chkprimer').removeAttr("disabled");
    			      }
    			      $('#pitpaint1, #pitpaint2, #pitgalvanization2, #pitaess1').attr('disabled', true);  
    			      // $('#chkprimer').removeAttr("disabled");
    			  });
    			    if(usedfinish == "Fire proofing"){
    			     	  $('#chkfireproofing').attr('checked',true);
    			     	  $('#pitfireProofing2, #pitfireProofing3').attr('disabled', false);
    			     	
    				    }
    			 var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
    			 var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
    			    if(zincCoatingThickness != null){
    			    var zincCoating="<option value>"+zincCoatingThickness+"</option>";
    			    $('select[name^="#pitgalvanization2"] option[value=zincCoating]').attr("selected","selected");
    			    }
    			   $('#chkgalvanize').change(function() {
    			      if($(this).prop("checked") == true){
    			          $('#pitgalvanization2').attr('disabled', false);
    			         if(galperiSPreparation != null){
    				     	 	 $('#pitsurfacePreparation1').val(galperiSPreparation);
    				     	 	   } 
    			      } else {
    			          $('#pitgalvanization2').attr('disabled', true);
    			      }
    			      if($('#chkprimer').prop("checked") == true){
    			          $('#chkprimer').prop('checked', false);
    			          $('#chkprimer').attr('disabled', true);
    			      } 
    			      else {
    			          $('#chkprimer').prop('checked', false);
    			          $('#chkprimer').attr('disabled', true);
    			      }
    			      $('#pitprimer1, #pitprimer2, #pitpaint1, #pitpaint2, #pitfireProofing2, #pitfireProofing3, #pitaess1').attr('disabled', true);
    			      // $("#chkprimer").attr('disabled', 'disabled');
    			  });
    			   if(usedfinish == "Galvanizing"){
    			  	  $('#chkgalvanize').attr('checked', true);
    			  	  $('#pitgalvanization2').attr('disabled', false);
    			  	  $('#chkprimer').prop('checked', false);
    			          $('#chkprimer').attr('disabled', true);
    			          if(galperiSPreparation != null){
    			   	 	 $('#pitsurfacePreparation1').val(galperiSPreparation);
    			   	 	   }  
    			    }
    			 var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
    			$('#chknopaint').change(function() {
    			      if($('#chkprimer').prop("checked") == true){
    			          $('#chkprimer').attr('disabled', false);
    			         if(nopperiSPreparation != null){
    				 			 $('#pitsurfacePreparation1').val(nopperiSPreparation);
    				 		 	   }
    			      } else {
    			          $('#chkprimer').attr('disabled', false);
    			      }
    			      if($('#chkprimer').prop("checked") == true){
    			          $('#chkprimer').removeAttr("disabled");
    			      } else {
    			          $('#chkprimer').removeAttr("disabled");
    			      }
    			      $('#pitpaint1, #pitpaint2, #pitgalvanization2, #pitfireProofing2, #pitfireProofing3, #pitaess1').attr('disabled', true);
    			  });
    				  if(usedfinish == "NoPaint"){
    				  $('#chknopaint').attr('checked', true);
    				
    			}
    			}
 
  $.each( wsDropDown.TopBottomChord, function(key, value) {
			 var profiles="<option>"+value.Profile+"</option>";
         $(profiles).appendTo('#pitchedprofile2'); 

		 });
        
       			  $.each( wsDropDown.BeamOrientation, function(key, value) {
       				 var profiles="<option>"+value.Beam_Orientation+"</option>";
	                   $(profiles).appendTo('#pitchmemorientation'); 
	       
       			 }); 
       			 
       	  /*
       	   	  $.each(wsDropDown.MaterialGrade, function(index,data) {   
         		  var datasource="<option>"+data.MaterialGrade+"</option>";
                    $(datasource).appendTo('#pitchedgrade2'); 
         		   
         		});
				
				*/
				
	
    		 $.each(RefDwgNumFiles, function(index,data) { 
            		
            		var referencenum="<option>"+data+"</option>";
            		
            	     $(referencenum).appendTo('#referencenum'); 
            	     
            		});   
    		 $("#pitchedprofile2").change(function(){
    				var profilename = $(this).val();
    				   $('#pitchedgrade2').empty();
    					 getProfileGrades(profilename);
    					 $.each(profileGrades, function(index,data) {   
    						  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
    						 
    				           $(grades).appendTo('#pitchedgrade2'); 
    				           
    				           
    						   
    						});  
    				   
    				   var res = profilename.charAt(0);
    				   if(wsPlateGrade != ''){
    				     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
    				     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
    				     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
    				     	if(res=="W"){
    				     		if(profileshgrade != null){
    				     			 $('#pitchedgrade2').val(profileshgrade);
    					             
    					           }
    						   }
    				    	else if(res=="H"){
    				     	if(hssgrade != ''){
    				     		 $('#pitchedgrade2').val(hssgrade);
    				          
    				         }
    				     	} 
    				     	else{
    				     		if(anglegrade != ''){
    				     			$('#pitchedgrade2').val(anglegrade);
    					          
    					         }
    				     	}
    				     }
    				   $('#pitchconmark17').empty();
    				   $('#pitchconmark20').empty();
    				  var filtered = $.grep(connectionObjList, function (el) {
    				    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussvertical")>=0){
    				        	return el.profile;
    				        }
    				    });
    				
    				  
    					$.each(filtered, function(key, value) {
    					       var ConnectionMark="<option>"+value.connectionMark+"</option>";
    					         $(ConnectionMark).appendTo('#pitchconmark17'); 
    					         $(ConnectionMark).appendTo('#pitchconmark20'); 
    					         
    					        
    					   });
    						  $('#pitchconmark18').empty();
    						   $('#pitchconmark21').empty();
    						 var connectionmark1 = $("#pitchconmark17").val();
    						
    						 if(connectionmark1 != null){
    						 var conntype = $.grep(connectionObjList, function (el) {
    						        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
    						        	
    						        	return el.conntype;
    						        }
    						    });
    						 $.each(conntype, function(key, value) {
    							 var supportbeam="<option>"+value.conntype+"</option>";
    					         $(supportbeam).appendTo('#pitchconmark18'); 
    					         $(supportbeam).appendTo('#pitchconmark21'); 
    					             
    						   });
    						         
    						
    						
    						 $('#pitchconmark19').empty();
    						    $('#pitchconmark22').empty();
    						 
    						 var supptype = $.grep(connectionObjList, function (el) {
    							 
    						        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
    						        	
    						        	return el.trussConn;
    						        	
    						        }
    						    });
    						 
    						
    						 $.each(supptype, function(key, value) {
    						       var supportbeam="<option>"+value.trussConn+"</option>";
    						         $(supportbeam).appendTo('#pitchconmark19'); 
    						         $(supportbeam).appendTo('#pitchconmark22'); 
    						        
    						   });
    						
    						 }
    						 
    						
    					});	
    				
  // JQuery Code
    		 $(".referenceSelect").select2({
    		        placeholder: "Select"
    		    });
    $(".pitselect5").select2({
        placeholder: "Select"
    });
    $(".pitselect6").select2({
        placeholder: "Select"
    });
   
   $(function() {
   $('.chosen-select').chosen();
   $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
   });
   
 