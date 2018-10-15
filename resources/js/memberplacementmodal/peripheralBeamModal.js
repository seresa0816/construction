     $(function() {
      $('.chosen-select').chosen();
      $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
    });
     $(".referenceSelect").select2({
         placeholder: "Select"
     });
     /* // Start Finish check
     $('#chkprimer').change(function() {
        if($(this).prop("checked") == true){
            $('#periprimer1, #periprimer2').attr('disabled', false);
        } else {
            $('#periprimer1, #periprimer2').attr('disabled', true);
        }
    });
    $('#chknopaint').change(function() {
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').attr('disabled', false);
        } else {
            $('#chkprimer').attr('disabled', false);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#peripaint1, #peripaint2, #perigalvanization2, #perifireProofing2, #perifireProofing3, #periaess1').attr('disabled', true);
    });
    $('#chkpaint').change(function() {
        if($(this).prop("checked") == true){
            $('#peripaint1, #peripaint2').attr('disabled', false);
        } else {
            $('#peripaint1, #peripaint2').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#perigalvanization2').attr('disabled', true);
    });
    $('#chkgalvanize').change(function() {
        if($(this).prop("checked") == true){
            $('#perigalvanization2').attr('disabled', false);
        } else {
            $('#perigalvanization2').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        } 
        else {
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        }
        $('#periprimer1, #periprimer2, #peripaint1, #peripaint2, #perifireProofing2, #perifireProofing3, #periaess1').attr('disabled', true);
        // $("#chkprimer").attr('disabled', 'disabled');
    });
    $('#chkfireproofing').change(function() {
        if($(this).prop("checked") == true){
            $('#perifireProofing2, #perifireProofing3').attr('disabled', false);
        } else {
            $('#perifireProofing2, #perifireProofing3').attr('disabled', true);
        }  
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#peripaint1, #peripaint2, #perigalvanization2, #periaess1').attr('disabled', true);  
        // $('#chkprimer').removeAttr("disabled");
    });
    $('#chkaess').change(function() {
        if($(this).prop("checked") == true){
            $('#periaess1').attr('disabled', false);
        } else {
            $('#periaess1').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#peripaint1, #peripaint2, #perigalvanization2, #perifireProofing2, #perifireProofing3').attr('disabled', true); 
    });
    // End Finish check
*/  
    $(".pbselect1").select2({
        placeholder: "Select"
    });
    $(".pbselect2").select2({
        placeholder: "Select"
    });
    
     
    
	
	$('#pshear').change(function() {
		if($(this).prop("checked") == true){
			$('#psheardia, #pshearlen, #pshear3').attr('disabled', false);
		} 
		else {
			$('#psheardia, #pshearlen, #pshear3').attr('disabled', true);
	  		$("#psheardia").removeClass("importantRed");
	  		$("#pshearlen").removeClass("importantRed");
	  		$("#pshear3").removeClass("importantRed");
		}
	});
	
	$('#pcamber').change(function() {
		if($(this).prop("checked") == true){
			$('#pcamber1').attr('disabled', false);
		} 
		else {
			$('#pcamber1').attr('disabled', true);
	  		$("#pcamber1").removeClass("importantRed");
			
		}
	});
	
	$('#pstiffenerplate').change(function() {
		if($(this).prop("checked") == true){
			$('#splshear1, #splshear2, #splshear3, #splshear4, #splshear5').attr('disabled', false);
		} 
		else {
			$('#splshear1, #splshear2, #splshear3, #splshear4, #splshear5').attr('disabled', true);
			$("#splshear1").removeClass("importantRed");
			$("#splshear2").removeClass("importantRed");
			$("#splshear3").removeClass("importantRed");
			$("#splshear4").removeClass("importantRed");
			$("#splshear5").removeClass("importantRed");
		}
	});
	
	
   
     function AllowNumbersOnly(e) {
         var code = (e.which) ? e.which : e.keyCode;
        
         if (code > 31 && (code < 48 || code > 57)) {
           e.preventDefault();
         }
       }
     
     $.each(wsDropDown.PlateGrade, function(index,data) {   
		  var plategrade="<option value=\""+data.MaterialGrade+"\">"+data.MaterialGrade+"</option>";
         $(plategrade).appendTo('#splshear3'); 
		}); 
   if(wsPlateGrade != null){
   	var plateGrades = wsPlateGrade.MemberGrades.Plates;
   	 if(plateGrades != null){
            var plgrade="<option value=\""+plateGrades+"\">"+plateGrades+"</option>";
            $('select[name^="#splshear3"] option[value=plgrade]').attr("selected","selected");
       
         }
   	
   }
       $.each(wsDropDown.SurfacePreparation, function(index,data) {   
         var surfacepreparation = "<option>"+data.SSPC_No+"</option>";
         $(surfacepreparation).appendTo('#perisurfacePreparation1'); 
          
       }); 
     $.each(wsDropDown.FireProofingType, function(index,data) {   
         var fireproofingtype = "<option>"+data.FireProofingType+"</option>";
         $(fireproofingtype).appendTo('#perifireProofing2'); 
          
       });
     $.each(wsDropDown.FireRating, function(index,data) {   
         var firerating = "<option>"+data.FireRating_fra+"</option>";
         $(firerating).appendTo('#perifireProofing3'); 
          
       });
     $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
         var zinccoatingthickness = "<option>"+data.ZincCoatingThickness+"</option>";
         $(zinccoatingthickness).appendTo('#perigalvanization2'); 
          
       });
     $.each(wsDropDown.NoOfCoats, function(index,data) {   
         var noofcoats = "<option>"+data.Coats+"</option>";
         $(noofcoats).appendTo('#periprimer2'); 
          
       });
     $.each(wsDropDown.NoOfCoats, function(index,data) {   
         var noofcoats = "<option>"+data.Coats+"</option>";
         $(noofcoats).appendTo('#peripaint2'); 
          
       });   
     $.each(wsDropDown.AESSCategory, function(index,data) {   
         var appendval = "<option>"+data.AESS+"</option>";
         $(appendval).appendTo('#periaess1'); 
          
       });

     if(wsFinish != null){
	      var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
   console.log(usedfinish);
   
   var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
   var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
   var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
      
      if(paintValue != null){
      $('#periprimer1').val(paintValue);
      document.getElementById("periprimer1").setAttribute("disabled", false);
      }
      if(noOfCoatsprimer != null){
         var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
         $('select[name^="#periprimer2"] option[value=noOfCts]').attr("selected","selected");

      }
   
     $('#chkprimer').change(function() {
        if($(this).prop("checked") == true){
            $('#periprimer1, #periprimer2').attr('disabled', false);
           if(primerperiSPreparation != null){
    		  $('#perisurfacePreparation1').val(primerperiSPreparation);
    	  }
        } else {
            $('#periprimer1, #periprimer2').attr('disabled', true);

        }
    });
if(usedfinish == "Primer"){
	 $('#chkprimer').prop('checked', true);
	  $('#chknopaint').attr('checked', true);
	 $('#periprimer1,#periprimer2').attr('disabled', false);	
	 if(primerperiSPreparation != null){
		  $('#perisurfacePreparation1').val(primerperiSPreparation);
	  }
    } 


   var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
   if(usedfinish != "Galvanizing" &&  SPreparation != null){
   	 $('#chkprimer').prop('checked', true);
   	  $('#chknopaint').attr('checked', true);
   	 $('#periprimer1,#periprimer2').attr('disabled', false);	
   	 if(primerperiSPreparation != null){
   		  $('#perisurfacePreparation1').val(primerperiSPreparation);
   	  }
   }
     var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
     var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
     var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
      if(paintValue != null){
      $('#peripaint1').val(paintValue);
      document.getElementById("peripaint1").setAttribute("disabled", false);
      }
      
      if(noOfCoatspaint != null){
         var noOfCts="<option value>"+noOfCoatspaint+"</option>";
         $('select[name^="#peripaint2"] option[value=noOfCts]').attr("selected","selected");
      }
      $('#chkpaint').change(function() {
          if($(this).prop("checked") == true){
              $('#peripaint1, #peripaint2').attr('disabled', false);
              if(paintperiSPreparation != null){
		    		  $('#perisurfacePreparation1').val(paintperiSPreparation);
		    	  }
          } else {
              $('#peripaint1, #peripaint2').attr('disabled', true);
          }
          if($('#chkprimer').prop("checked") == true){
              $('#chkprimer').removeAttr("disabled");
          } else {
              $('#chkprimer').removeAttr("disabled");
          }
          $('#perigalvanization2').attr('disabled', true);
      });
      if(usedfinish == "Paint"){
	    	  $('#chkpaint').attr('checked', true);
	    	  $('#peripaint1, #peripaint2').attr('disabled', false);
	    	  if(paintperiSPreparation != null){
	    		  $('#perisurfacePreparation1').val(paintperiSPreparation);
	    	  }
	      }
 
	var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
var	category = wsFinish.Finish.AESS.Category;
	   
if(category != null){   
	      var aess="<option value>"+category+"</option>";
		   $('select[name^="#periaess1"] option[value=aess]').attr("selected","selected");
}
$('#chkaess').change(function() {
       if($(this).prop("checked") == true){
           $('#periaess1').attr('disabled', false);
           if(aessperiSPreparation != null){
     		  $('#perisurfacePreparation1').val(aessperiSPreparation);
     	  }
       } else {
           $('#periaess1').attr('disabled', true);
       }
       if($('#chkprimer').prop("checked") == true){
           $('#chkprimer').removeAttr("disabled");
       } else {
           $('#chkprimer').removeAttr("disabled");
       }
       $('#peripaint1, #peripaint2, #perigalvanization2, #perifireProofing2, #perifireProofing3').attr('disabled', true); 
   });
 if(usedfinish == "AESS"){
	  $('#chkaess').attr('checked', true);
	  $('#periaess1').attr('disabled', false);
	  if(aessperiSPreparation != null){
		  $('#perisurfacePreparation1').val(aessperiSPreparation);
	  }
 }
 	   var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
 	   var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
 	   var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	   
	 	      
	      if(fireRating != null){
	      var fireRatingval="<option value>"+fireRating+"</option>";
	      $('select[name^="#perifireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	      }
	      if(fireProofingType != null){
	         var fireProofing="<option value>"+fireProofingType+"</option>";
	         $('select[name^="#perifireProofing3"] option[value=fireProofing]').attr("selected","selected");
	      }
	     $('#chkfireproofing').change(function() {
	        if($(this).prop("checked") == true){
	            $('#perifireProofing2, #perifireProofing3').attr('disabled', false);
	           if(fpperiSPreparation != null){
		       		$('#perisurfacePreparation1').val(fpperiSPreparation);
		       	}
	        } else {
	            $('#perifireProofing2, #perifireProofing3').attr('disabled', true);
	        }  
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').removeAttr("disabled");
	        } else {
	            $('#chkprimer').removeAttr("disabled");
	        }
	        $('#peripaint1, #peripaint2, #perigalvanization2, #periaess1').attr('disabled', true);  
	        // $('#chkprimer').removeAttr("disabled");
	    });
	      if(usedfinish == "Fire proofing"){
	       	  $('#chkfireproofing').attr('checked',true);
	       	  $('#perifireProofing2, #perifireProofing3').attr('disabled', false);
	       	
		    }
	   var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	   var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	      if(zincCoatingThickness != null){
	      var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	      $('select[name^="#perigalvanization2"] option[value=zincCoating]').attr("selected","selected");
	      }
	     $('#chkgalvanize').change(function() {
	        if($(this).prop("checked") == true){
	            $('#perigalvanization2').attr('disabled', false);
	           if(galperiSPreparation != null){
		     	 	 $('#perisurfacePreparation1').val(galperiSPreparation);
		     	 	   } 
	        } else {
	            $('#perigalvanization2').attr('disabled', true);
	        }
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').prop('checked', false);
	            $('#chkprimer').attr('disabled', true);
	        } 
	        else {
	            $('#chkprimer').prop('checked', false);
	            $('#chkprimer').attr('disabled', true);
	        }
	        $('#periprimer1, #periprimer2, #peripaint1, #peripaint2, #perifireProofing2, #perifireProofing3, #periaess1').attr('disabled', true);
	        // $("#chkprimer").attr('disabled', 'disabled');
	    });
	     if(usedfinish == "Galvanizing"){
	    	  $('#chkgalvanize').attr('checked', true);
	    	  $('#perigalvanization2').attr('disabled', false);
	    	  $('#chkprimer').prop('checked', false);
	            $('#chkprimer').attr('disabled', true);
	            if(galperiSPreparation != null){
	     	 	 $('#perisurfacePreparation1').val(galperiSPreparation);
	     	 	   }  
	      }
	   var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
	  $('#chknopaint').change(function() {
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').attr('disabled', false);
	           if(nopperiSPreparation != null){
		 			 $('#perisurfacePreparation1').val(nopperiSPreparation);
		 		 	   }
	        } else {
	            $('#chkprimer').attr('disabled', false);
	        }
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').removeAttr("disabled");
	        } else {
	            $('#chkprimer').removeAttr("disabled");
	        }
	        $('#peripaint1, #peripaint2, #perigalvanization2, #perifireProofing2, #perifireProofing3, #periaess1').attr('disabled', true);
	    });
	 	  if(usedfinish == "NoPaint"){
		  $('#chknopaint').attr('checked', true);
		
	  }
 }        
    
   if(RefDwgNumFiles){
   $.each(RefDwgNumFiles, function(index,data) { 
		
		var referencenum="<option>"+data+"</option>";
		
	     $(referencenum).appendTo('#pbreferencenum'); 
	     
		});
   }

  
    	  
   $.each(wsDropDown.BeamProfile, function(key, value) {
                     var profiles="<option>"+value.Profile+"</option>";
                       $(profiles).appendTo('#peribeamprofile'); 
           
                 });
                 
              $.each(wsDropDown.DataSource, function(index,data) {   
                  var datasource="<option>"+data.DataSource+"</option>";
                    $(datasource).appendTo('#pbeamdatasource'); 
                   
                });
              $.each(wsDropDown.BeamType, function(index,data) {   
                  var datasource="<option>"+data.BeamType+"</option>";
                    $(datasource).appendTo('#peribeamtype'); 
                   
                });
         
          $.each(wsDropDown.BeamAlignment, function(key, value) {
              var profiles="<option>"+value.BeamAlignment+"</option>";
                $(profiles).appendTo('#pbeamalignment'); 

          });
              $.each(wsDropDown.Fraction, function(index,data) {   
                  
                  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#peribeamtos_fra');
                  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#peribeamffl_fra,#pbtosfr,#peribeamffl_fra1');

               
            });
              
                    $.each(wsDropDown.Inch, function(index,data) {   
                  
                  $('<option>').val(data.Inch).text(data.Inch).appendTo('#peribeamtos_in,#pbtosin,#peribeamffl_in1');
                  $('<option>').val(data.Inch).text(data.Inch).appendTo('#peribeamffl_in');

               
            });
                    
              
                 $.each(wsDropDown.WeldType, function(index,data) {   
                      var weldtype = "<option>"+data.wtype+"</option>";
                      $(weldtype).appendTo('#splshear4'); 
                       
                    });
                  $.each(wsDropDown.WeldSize, function(index,data) {   
                      var weldsize = "<option>"+data.weld_fra+"</option>";
                      $(weldsize).appendTo('#splshear5'); 
                       
                    });
                
              
                  $.each(wsDropDown.Camber, function(index,data) {   
                      var camber="<option>"+data.Camber_fra+"</option>";
                       $(camber).appendTo('#pcamber1'); 
                       
                    });
                 $.each( wsDropDown.BeamOrientation, function(key, value) {
                     var profiles="<option>"+value.Beam_Orientation+"</option>";
                       $(profiles).appendTo('#gBeamOrientation'); 
           
                 });
                 
               
                 $.each(wsDropDown.StudDia, function(index,data) {   
                      var datasource="<option>"+data.StudDia_fra+"</option>";
                       $(datasource).appendTo('#psheardia'); 
                       
                    });
                 $.each(wsDropDown.OverlapLength, function(index,data) {   
                      var datasource="<option>"+data.OverlapLength_fra+"</option>";
                         $(datasource).appendTo('#pshearlen'); 
                       
                    });
              
                 $.each(wsDropDown.PlateThickness, function(index,data) {   
                      var datasource="<option>"+data.tp_fra+"</option>";
                         $(datasource).appendTo('#splshear2'); 
                       
                    });
                  
                 $.each(RefDwgNumFiles, function(index,data) { 
             		
             		var referencenum="<option>"+data+"</option>";
             		
             	     $(referencenum).appendTo('#pbreferencenum_chosen'); 
             	     
             		});    
                  
                 $.each(wsDropDown.FrameConnectionMethod, function(index,data) {   
                     var appendval = "<option>"+data.FrameConnMethod+"</option>";
                     $(appendval).appendTo('#periBeamConnMethod'); 
                      
                   });  
                 
            
 
 // $( document ).ready(function() {
	$("#peribeamprofile").change(function(){
	    
	    var profilename = $(this).val();
		   $('#peribeamgrade').empty();
		   getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#peribeamgrade'); 
		           
		           
				   
				});
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	var cmcgrade = wsPlateGrade.MemberGrades.Channels;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			  $('#peribeamgrade').val(profileshgrade);
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     		  $('#peribeamgrade').val(hssgrade);
		         }
		     	} 
		     	else{
		     		 if(cmcgrade != ''){
		     			  $('#peribeamgrade').val(cmcgrade);
			         } 
		     	}
		     }
		   $("#perigrade .select2-container--default .select2-selection--single").removeClass("importantRed");
	    $('#pbprofile').val(profilename);
	    $('#pbconmark1').empty();
	    $('#pbconmark2').empty();
	    var filtered = $.grep(connectionObjList, function (el) {
	        if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtocolumn")>=0) ){
	        	
	        	return el.profile;
	        }
	    });
	
	  
		$.each(filtered, function(key, value) {
			
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#pbconmark1'); 
		         $(ConnectionMark).appendTo('#pbconmark2'); 
		   });
		
		
		var filtered = $.grep(connectionObjList, function (el) {
		 if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtobeam")>=0)){
	        	
	        	return el.profile;
	        }
	    });

	  
		$.each(filtered, function(key, value) {
			
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#pbconmark1'); 
		         $(ConnectionMark).appendTo('#pbconmark2'); 
		   });
		
		var filtered = $.grep(connectionObjList, function (el) {
		 if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtoembed")>=0)){
	        	
	        	return el.profile;
	        }
	    });

		$.each(filtered, function(key, value) {
			
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#pbconmark1'); 
		         $(ConnectionMark).appendTo('#pbconmark2'); 
		   });
		var filtered = $.grep(connectionObjList, function (el) {
		 if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("moment")>=0)){
	        	
	        	return el.profile;
	        }
	    });
	   
	    
		$.each(filtered, function(key, value) {
			
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#pbconmark1'); 
		         $(ConnectionMark).appendTo('#pbconmark2'); 
		   });
		//$("#periconnectiontab").click(function(){
			 var connectionmark1 = $("#pbconmark1").val();
		
			 if(connectionmark1 != null){
				 
				$('#gBeamLeftConnType').empty();
				$('#gBeamRightConnType').empty();
				$('#gBeamLeftConnMethod').empty();
				$('#gBeamRightConnMethod').empty();
				$('#gBeamLeftConnMethod1').empty();
				$('#gBeamRightConnMethod1').empty();
				 
				 
			 var mconntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 && el.type.toLowerCase().indexOf("moment")>=0)){
			        	
			        	return el.moncontype;
			        }
			    });
			 $.each(mconntype, function(key, value) {
					
			       var ConnectionMark="<option>"+value.moncontype+"</option>";
			         $(ConnectionMark).appendTo('#gBeamLeftConnType'); 
			       
			   });
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0)){
			        	
			        	return el.connectionMark;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
			       var connectiontype = value.type;
			       $('#gBeamLeftConnType').empty();
			       var conbeamval = "BeamToBeamShearPlate";
			       var concolval = "BeamToColumnShearPlate";
			       var conendval = "BeamToEmbedShearPlate";
			       var conbeamcval = "BeamToBeamClipAngle";
			       var concolcval = "BeamToColumnClipAngle";
			       var conendcval = "BeamToEmbedClipAngle";
			       var conbeameval = "BeamToBeamEndPlate";
			       var concoleval = "BeamToColumnEndPlate";
			       var conendeval = "BeamToEmbedEndPlate";
			       
			       
			     if( (connectiontype === conbeamval ) || (connectiontype === concolval ) || (connectiontype === conendval ))
			      {
			   		    var ConnType="<option>"+"ShearPlate"+"</option>";
				         $(ConnType).appendTo('#gBeamLeftConnType'); 
			       }
			       
			   
			       
			     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
			      {
			   		    var ConnType="<option>"+"ClipAngle"+"</option>";
				         $(ConnType).appendTo('#gBeamLeftConnType'); 
			       }
			     
			     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
			      {
			   		    var ConnType="<option>"+"EndPlate"+"</option>";
				         $(ConnType).appendTo('#gBeamLeftConnType'); 
			       }
			      
			         
			         
			   });
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#gBeamLeftConnMethod'); 
			        
			   });
		
			 var supportedtype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportedside;
			        	
			        }
			    });
			 
	
			 $.each(supportedtype, function(key, value) {
			       var supportedbeam="<option>"+value.supportedside+"</option>";
			         $(supportedbeam).appendTo('#gBeamLeftConnMethod1'); 
			        
			   });
			 }
			 var connectionmark2 = $("#pbconmark2").val();
		
			 if(connectionmark2 != null){
			 
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0)){
			        	
			        	return el.connectionMark;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
			       var connectiontype = value.type;
			       $('#gBeamRightConnType').empty();
			       var conbeamval = "BeamToBeamShearPlate";
			       var concolval = "BeamToColumnShearPlate";
			       var conendval = "BeamToEmbedShearPlate";
			       var conbeamcval = "BeamToBeamClipAngle";
			       var concolcval = "BeamToColumnClipAngle";
			       var conendcval = "BeamToEmbedClipAngle";
			       var conbeameval = "BeamToBeamEndPlate";
			       var concoleval = "BeamToColumnEndPlate";
			       var conendeval = "BeamToEmbedEndPlate";
			       
			     if( (connectiontype === conbeamval ) || (connectiontype === concolval ) || (connectiontype === concolval ))
			      {
			   		    var ConnType="<option>"+"ShearPlate"+"</option>";
				         $(ConnType).appendTo('#gBeamRightConnType'); 
			       }
			       
			   
			       
			     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
			      {
			   		    var ConnType="<option>"+"ClipAngle"+"</option>";
				         $(ConnType).appendTo('#gBeamRightConnType'); 
			       }
			     
			     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
			      {
			   		    var ConnType="<option>"+"EndPlate"+"</option>";
				         $(ConnType).appendTo('#gBeamRightConnType'); 
			       }
			      
			         
			         
			   });
					 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0) ){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#gBeamRightConnMethod'); 
			        
			   });
		
			 var supportedtype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportedside;
			        	
			        }
			    });
			 
			
			 $.each(supportedtype, function(key, value) {
			       var supportedbeam="<option>"+value.supportedside+"</option>";
			         $(supportedbeam).appendTo('#gBeamRightConnMethod1'); 
			        
			   });
			 }
			 
			 //get Depth
			 getDepth($('#peribeamprofile').val());
			 
		});
	
	//});
	$("#pbconmark1").change(function() {  
		 var connectionmark = $(this).val();
	
		 
		 if(connectionmark != null){
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#gBeamLeftConnType').empty();
		       var conbeamval = "BeamToBeamShearPlate";
		       var concolval = "BeamToColumnShearPlate";
		       var conendval = "BeamToEmbedShearPlate";
		       var conbeamcval = "BeamToBeamClipAngle";
		       var concolcval = "BeamToColumnClipAngle";
		       var conendcval = "BeamToEmbedClipAngle";
		       var conbeameval = "BeamToBeamEndPlate";
		       var concoleval = "BeamToColumnEndPlate";
		       var conendeval = "BeamToEmbedEndPlate";
		       
		     if( (connectiontype === conbeamval ) || (connectiontype === concolval ) || (connectiontype === concolval ))
		      {
		   		    var ConnType="<option>"+"ShearPlate"+"</option>";
			         $(ConnType).appendTo('#gBeamLeftConnType'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#gBeamLeftConnType'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#gBeamLeftConnType'); 
		       }
		      
		         
		         
		   });
		 var mconntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0 && el.type.toLowerCase().indexOf("moment")>=0){
		        	
		        	return el.moncontype;
		        }
		    });
		 $.each(mconntype, function(key, value) {
				
		       var ConnectionMark="<option>"+value.moncontype+"</option>";
		         $(ConnectionMark).appendTo('#gBeamLeftConnType'); 
		       
		   });
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 $('#gBeamLeftConnMethod').empty();
		 $('#gBeamLeftConnMethod1').empty();
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#gBeamLeftConnMethod'); 
		        
		   });
	
		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
		 
		
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#gBeamLeftConnMethod1'); 
		        
		   });
		 }
	});
	
	$("#pbconmark2").change(function() {  
		 var connectionmark = $(this).val();

		 
		 if(connectionmark != null){
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#gBeamRightConnType').empty();
		       var conbeamval = "BeamToBeamShearPlate";
		       var concolval = "BeamToColumnShearPlate";
		       var conendval = "BeamToEmbedShearPlate";
		       var conbeamcval = "BeamToBeamClipAngle";
		       var concolcval = "BeamToColumnClipAngle";
		       var conendcval = "BeamToEmbedClipAngle";
		       var conbeameval = "BeamToBeamEndPlate";
		       var concoleval = "BeamToColumnEndPlate";
		       var conendeval = "BeamToEmbedEndPlate";
		       
		     if( (connectiontype === conbeamval ) || (connectiontype === concolval ) || (connectiontype === concolval ))
		      {
		   		    var ConnType="<option>"+"ShearPlate"+"</option>";
			         $(ConnType).appendTo('#gBeamRightConnType'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#gBeamRightConnType'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#gBeamRightConnType'); 
		       }
		     var mconntype = $.grep(connectionObjList, function (el) {
			        if(connectionmark.indexOf(el.connectionMark) >= 0 && el.type.toLowerCase().indexOf("moment")>=0){
			        	
			        	return el.moncontype;
			        }
			    });
			 $.each(mconntype, function(key, value) {
					
			       var mcontype="<option>"+value.moncontype+"</option>";
			         $(mcontype).appendTo('#gBeamRightConnType'); 
			       
			   });
		     var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
		     $('#gBeamRightConnMethod').empty();
			 $('#gBeamRightConnMethod1').empty();
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#gBeamRightConnMethod'); 
			        
			   });
	
			 var supportedtype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0) ){
			        	
			        	return el.supportedside;
			        	
			        }
			    });
			 
		
			 $.each(supportedtype, function(key, value) {
			       var supportedbeam="<option>"+value.supportedside+"</option>";
			         $(supportedbeam).appendTo('#gBeamRightConnMethod1'); 
			        
			   });   
		         
		   });
		 }
	});
	$("#splshear4").change(function() {  
	    if ( $("#splshear4").val()=="CJP") {
	 	   $("#splshear5").attr("disabled", true);
	 	   $("#splshear5").prop('required',false);
		 	  $("#splshear5").prop('selectedIndex',0);
		 	 $("#splshear5").removeClass("importantRed");

	 	}else {
	 		  $("#splshear5").attr("disabled", false);
	 		  $("#splshear5").prop('required',true);
	 		 $("#splshear5").addClass("importantRed");
	 	}

	 	});
	$('#periBeamFrame').keyup(function(e){
		
		  var widthft = $("#periBeamFrame").val()
		  if(widthft > 0){
			  $("#periBeamConnMethod").prop("disabled", false);  
			 
			  }
		  else{
			  $("#periBeamConnMethod").prop("disabled", true);
			  $("#periBeamConnMethod").removeClass("importantRed");
		  }
		});

	
	$.each(wsPlateGrade, function(key, value) {   
		
		if (value["Camber"]) {
			 
			  $("#pcamber1").val(value["Camber"]).trigger("change");
		}
		if (value["ShearStudDia"]||value["ShearStudGrade"]||value["ShearStudLength"]) {
			
			  $("#psheardia").val(value["ShearStudDia"]).trigger("change");
			  $("#pshearlen").val(value["ShearStudLength"]).trigger("change");
			//  $("#pshear3").val(value["ShearStudGrade"]).trigger("change");
			  
		}	
	});
	
	
	
	
		 function getDepth(Profile)
{
var dataObj = ""; 
if (Profile) {
var data="";
if (Profile=="W4X13") {

data=Number(4.16);
}else if (Profile=="W5X16") {

data=Number(5.01);
}
else if (Profile=="W5X19") {

data=Number(5.15);
}
else if (Profile=="W6X8.5") {

data=Number(5.83);
}

data=data*25.4;

$("#peridepthForGivenProfile").remove();
$('.appendtextbox').append('<input id="peridepthForGivenProfile" value="'+data.toFixed(3)+'" type="hidden" name="depth">');
$("#peridepthForGivenProfile").val();

/* $.ajax({

type: "GET",
url: "/bimspring/getDepthForGivenProfile", 
data: "profile=" + Profile,
async: false,
success: function(data)
{
console.log(data);
console.log(Profile);



},
error: function(error){
if(error.status == 401){
window.location.href = 'logout';
}else{
alert('Sorry! Your session has expired Please select Project again');
window.location.href='dashboard';
}

}
});*/
}

}
	
		 $("#peribeamprofile").change(function(){
		  		$("#periprofile .select2-container--default .select2-selection--single").removeClass("importantRed");
		  		});
		      $("#peribeamgrade").change(function(){
		  		$("#perigrade .select2-container--default .select2-selection--single").removeClass("importantRed");
		  		});
		      
		  	$('#pbtosft').on('click', function() {
		  		   if( $('#pbtosft').val() == "0") {
		  		   $('#pbtosft').val("");
		  		   }
		  	   });
		    $("#splshear1").change(function(){
		  		$("#pshearlen").removeClass("importantRed");
		  		});
		  	
		     	$("#pcamber1").change(function(){
		  		$("#pcamber1").removeClass("importantRed");
		  		});
		      $("#psheardia").change(function(){
		  		$("#psheardia").removeClass("importantRed");
		  		});
		      $("#pshearlen").change(function(){
		  		$("#pshearlen").removeClass("importantRed");
		  		});
		      $("#pshear3").change(function(){
		  		$("#pshear3").removeClass("importantRed");
		  		});
		      $("#splshear2").change(function(){
		  		$("#splshear2").removeClass("importantRed");
		  		});
		      $("#splshear4").change(function(){
		  		$("#splshear4").removeClass("importantRed");
		  		});
		      $("#splshear5").change(function(){
			  		$("#splshear5").removeClass("importantRed");
			  		});