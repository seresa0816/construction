  function AllowNumbersOnly(e) {
         var code = (e.which) ? e.which : e.keyCode;
        
         if (code > 31 && (code < 48 || code > 57)) {
           e.preventDefault();
         }
       }  
  if(wsFinish != null){
	    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	console.log(usedfinish);

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
         $(profiles).appendTo('#parallelmodalprofile,#parallelmodalprofile1,#parallelmodalprofile2,#parallelmodalprofile3'); 

     });
        
             $.each( wsDropDown.BeamOrientation, function(key, value) {
               var profiles="<option>"+value.Beam_Orientation+"</option>";
                     $(profiles).appendTo('#parallelorientation,#parallelmemorientation,#parallelmemorientation2,#parallelmodalorientation3'); 
         
             }); 
             
          
             /* $.each(wsDropDown.MaterialGrade, function(index,data) {   
              var datasource="<option>"+data.MaterialGrade+"</option>";
                    $(datasource).appendTo('#parallelgrade,#parallelgrade1,#parallelgrade2,#parallelgrade3'); 
               
            });*/
           $.each(wsDropDown.SpacingBetweenVerticals, function(index,data) {   
            var datasource="<option>"+data.SpacingVerticals+"</option>";
                 $(datasource).appendTo('#t1verticals'); 
             
          });

              $.each(wsDropDown.BeamType, function(index,data) {   
              var datasource="<option>"+data.BeamType+"</option>";
                    $(datasource).appendTo('#clbeamtype'); 
               
            });
              
        
          
           $.each(wsDropDown.DataSource, function(index,data) {   
            var datasource="<option>"+data.DataSource+"</option>";
                 $(datasource).appendTo('#cldatasource'); 
             
          });
         $.each(wsDropDown.Camber, function(index,data) {   
          var datasource="<option>"+data.Camber_fra+"</option>";
                $(datasource).appendTo('#tracamber1,#pezcamber1'); 
           
        });
         
        
           
        $.each(wsDropDown.StudDia, function(index,data) {   
        var datasource="<option>"+data.StudDia_fra+"</option>";
              $(datasource).appendTo('#pgdia'); 
         
      });
        $.each(wsDropDown.StudLength, function(index,data) {   
          var datasource="<option>"+data.StudLength_fra+"</option>";
                $(datasource).appendTo('#pglength1'); 
           
        });
        $.each(wsDropDown.PlateGrade, function(index,data) {   
        var datasource="<option>"+data.MaterialGrade+"</option>";
              $(datasource).appendTo('#caspshear3'); 
         
      });
        $.each(wsDropDown.NoOfBeams, function(index,data) {   
          var datasource="<option>"+data.No_Beams+"</option>";
                $(datasource).appendTo('#noofbeams1'); 
           
        });
    
     
    
              
      $.each(wsDropDown.SlopingChords, function(index,data) {   
          var weldsize = "<option>"+data.SlopingChords+"</option>";
          $(weldsize).appendTo('#parallelslopchord'); 
           
        });
              
          $.each(wsDropDown.Fraction, function(index,data) {   
            
            $('<option>').val(data.fr).text(data.fr_fra).appendTo('#parallels2fr,#parallelsp1fr,#parallelsp2fr,#parallels1fr,#parallels1fr,#paralleltrusslfr,#paralleltrusslenfr,#paralleltrussrfr,#parainclined2,#parallelsp3fr,#parallelsp4fr,#parallelsp5fr');
           
           
        });
          
        $.each(wsDropDown.Inch, function(index,data) {   
             $('<option>').val(data.Inch).text(data.Inch).appendTo('#parallels2in,#paralleltrusslin,#paralleltrussrin,#paralleltrusslenin,#parallelsp1in,#parallelsp2in,#parallelsp3in,#parallelsp4in,#parallelsp5in,#parallels1in,#parallels1in,#parainclined1');
        });
            
            
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
         $.each(RefDwgNumFiles, function(index,data) { 
        		
        		var referencenum="<option>"+data+"</option>";
        		
        	     $(referencenum).appendTo('#parallelreferencenum'); 
        	     
        		});   
  
    
  $( document ).ready(function() {
	$("#parallelmodalprofile").change(function(){
	    var profilename = $(this).val();
		   $('#parallelgrade').empty();
			 getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#parallelgrade'); 
		           
		           
				   
				});  
		   
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			 $('#parallelgrade').val(profileshgrade);
			             
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     		 $('#parallelgrade').val(hssgrade);
		          
		         }
		     	} 
		     	else{
		     		if(anglegrade != ''){
		     			$('#parallelgrade').val(anglegrade);
			          
			         }
		     	}
		     }
		   
		 
	    
	    
	    
	    
	    $('#parallelconmark1').empty();
	    $('#parallelconmark5').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	        if(profilename.indexOf(el.profile) >= 0){
	        	return el.profile;
	        }
	    });
	  
	    
	    var newselect="<option >select</option>";
	 	  $(newselect).appendTo('#parallelconmark1');
	 	  $(newselect).appendTo('#parallelconmark5'); 
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#parallelconmark1').prop('selected', true); 
		         $(ConnectionMark).appendTo('#parallelconmark5').prop('selected', true); 
		   });
	
	});
	$("#parallelmodalprofile1").change(function(){
		var profilename = $(this).val();
		   $('#parallelgrade1').empty();
			 getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#parallelgrade1'); 
		           
		           
				   
				});  
		   
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			 $('#parallelgrade1').val(profileshgrade);
			             
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     		 $('#parallelgrade1').val(hssgrade);
		          
		         }
		     	} 
		     	else{
		     		if(anglegrade != ''){
		     			$('#parallelgrade1').val(anglegrade);
			          
			         }
		     	}
		     }
		   
	    
	    
	    $('#parallelconmark9').empty();
	    $('#parallelconmark13').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	        if(profilename.indexOf(el.profile) >= 0){
	        	return el.profile;
	        }
	    });
	  
	    
	    var newselect="<option >select</option>";
	 	  
	 	  $(newselect).appendTo('#parallelconmark9');
	 	  $(newselect).appendTo('#parallelconmark13'); 
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#parallelconmark9'); 
		         $(ConnectionMark).appendTo('#parallelconmark13'); 
		   });
	
	});
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
  });
  $("#parallelmodalprofile3").change(function(){
	  
	  
		var profilename = $(this).val();
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
});
//Bind Connection Type
  // top left
  $("#parallelconmark1").change(function() {  
		 var connectionmark = $(this).val();
		
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#parallelconmark3').empty();
		       var conbeamval = "BeamToBeamShearPlate";
		       var concolval = "BeamToColumnShearPlate";
		       var conendval = "BeamToEmbedShearPlate";
		       var conbeamcval = "BeamToBeamClipAngle";
		       var concolcval = "BeamToColumnClipAngle";
		       var conendcval = "BeamToEmbedClipAngle";
		       var conbeameval = "BeamToBeamEndPlate";
		       var concoleval = "BeamToColumnEndPlate";
		       var conendeval = "BeamToEmbedEndPlate";
		       var conhbval = "HorizontalBrace";
		       var convbval = "VerticalBrace";
		       
		     if( (connectiontype === conbeamval ) || (connectiontype === concolval ) || (connectiontype === concolval ))
		      {
		   		    var ConnType="<option>"+"ShearPlate"+"</option>";
			         $(ConnType).appendTo('#parallelconmark3'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#parallelconmark3'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#parallelconmark3'); 
		       }
		     if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#parallelconmark3'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
			         $(ConnType).appendTo('#parallelconmark3'); 
		       }  
		         
		         
		   });
	});
	
	//top right
	$("#parallelconmark5").change(function() {  
		 var connectionmark = $(this).val();
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#parallelconmark7').empty();
		       var conbeamval = "BeamToBeamShearPlate";
		       var concolval = "BeamToColumnShearPlate";
		       var conendval = "BeamToEmbedShearPlate";
		       var conbeamcval = "BeamToBeamClipAngle";
		       var concolcval = "BeamToColumnClipAngle";
		       var conendcval = "BeamToEmbedClipAngle";
		       var conbeameval = "BeamToBeamEndPlate";
		       var concoleval = "BeamToColumnEndPlate";
		       var conendeval = "BeamToEmbedEndPlate";
		       var conhbval = "HorizontalBrace";
		       var convbval = "VerticalBrace";
		       
		       
		     if( (connectiontype === conbeamval ) || (connectiontype === concolval ) || (connectiontype === concolval ))
		      {
		   		    var ConnType="<option>"+"ShearPlate"+"</option>";
			         $(ConnType).appendTo('#parallelconmark7'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#parallelconmark7'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#parallelconmark7'); 
		       }
		     if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#parallelconmark7'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
			         $(ConnType).appendTo('#parallelconmark7'); 
		       } 
		         
		         
		   });
	});
	
	// bottom left
	  $("#parallelconmark9").change(function() {  
			 var connectionmark = $(this).val();
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(connectionmark.indexOf(el.connectionMark) >= 0){
			        	
			        	return el.connectionMark;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
			       var connectiontype = value.type;
			       $('#parallelconmark11').empty();
			       var conbeamval = "BeamToBeamShearPlate";
			       var concolval = "BeamToColumnShearPlate";
			       var conendval = "BeamToEmbedShearPlate";
			       var conbeamcval = "BeamToBeamClipAngle";
			       var concolcval = "BeamToColumnClipAngle";
			       var conendcval = "BeamToEmbedClipAngle";
			       var conbeameval = "BeamToBeamEndPlate";
			       var concoleval = "BeamToColumnEndPlate";
			       var conendeval = "BeamToEmbedEndPlate";
			       var conhbval = "HorizontalBrace";
			       var convbval = "VerticalBrace";
			       
			     if( (connectiontype === conbeamval ) || (connectiontype === concolval ) || (connectiontype === concolval ))
			      {
			   		    var ConnType="<option>"+"ShearPlate"+"</option>";
				         $(ConnType).appendTo('#parallelconmark11'); 
			       }
			       
			   
			       
			     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
			      {
			   		    var ConnType="<option>"+"ClipAngle"+"</option>";
				         $(ConnType).appendTo('#parallelconmark11'); 
			       }
			     
			     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
			      {
			   		    var ConnType="<option>"+"EndPlate"+"</option>";
				         $(ConnType).appendTo('#parallelconmark11'); 
			       }
			     if(connectiontype === conhbval)
			      {
			   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
				         $(ConnType).appendTo('#parallelconmark11'); 
			       }  
			      if(connectiontype === convbval)
			      {
			   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
				         $(ConnType).appendTo('#parallelconmark11'); 
			       }  
			         
			         
			   });
		});
		
		//bottom right
		$("#parallelconmark13").change(function() {  
			 var connectionmark = $(this).val();
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(connectionmark.indexOf(el.connectionMark) >= 0){
			        	
			        	return el.connectionMark;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
			       var connectiontype = value.type;
			       $('#parallelconmark15').empty();
			       var conbeamval = "BeamToBeamShearPlate";
			       var concolval = "BeamToColumnShearPlate";
			       var conendval = "BeamToEmbedShearPlate";
			       var conbeamcval = "BeamToBeamClipAngle";
			       var concolcval = "BeamToColumnClipAngle";
			       var conendcval = "BeamToEmbedClipAngle";
			       var conbeameval = "BeamToBeamEndPlate";
			       var concoleval = "BeamToColumnEndPlate";
			       var conendeval = "BeamToEmbedEndPlate";
			       var conhbval = "HorizontalBrace";
			       var convbval = "VerticalBrace";
			       
			       
			     if( (connectiontype === conbeamval ) || (connectiontype === concolval ) || (connectiontype === concolval ))
			      {
			   		    var ConnType="<option>"+"ShearPlate"+"</option>";
				         $(ConnType).appendTo('#parallelconmark15'); 
			       }
			       
			   
			       
			     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
			      {
			   		    var ConnType="<option>"+"ClipAngle"+"</option>";
				         $(ConnType).appendTo('#parallelconmark15'); 
			       }
			     
			     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
			      {
			   		    var ConnType="<option>"+"EndPlate"+"</option>";
				         $(ConnType).appendTo('#parallelconmark15'); 
			       }
			     if(connectiontype === conhbval)
			      {
			   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
				         $(ConnType).appendTo('#parallelconmark15'); 
			       }  
			      if(connectiontype === convbval)
			      {
			   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
				         $(ConnType).appendTo('#parallelconmark15'); 
			       } 
			         
			         
			   });
		});

		
	