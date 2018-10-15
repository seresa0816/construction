  

  $(function() {
    $('.chosen-select').chosen();
    $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
  });

  $(".referenceSelect").select2({
      placeholder: "Select"
  });
  $(".pgselect1").select2({
        placeholder: "Select"
    });
        
  	
	$('#pgShearstud').change(function() {
		if($(this).prop("checked") == true){
			$('#pgdia, #pglength1, #pgcount').attr('disabled', false);
		} 
		else {
			$('#pgdia, #pglength1, #pgcount').attr('disabled', true);
			$("#pgdia,#pglength1,#pgcount").removeClass("importantRed");
		}
	});
	
	$('#pgcamber').change(function() {
		if($(this).prop("checked") == true){
			$('#plategridercamber').attr('disabled', false);
		} 
		else {
			$('#plategridercamber').attr('disabled', true);
			$("#plategridercamber").removeClass("importantRed");
		}
	});

  function AllowNumbersOnly(e) {
      var code = (e.which) ? e.which : e.keyCode;
     
      if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
      }
    }
  $.each(wsDropDown.PlateGrade, function(index,data) {   
      var datasource="<option value=\""+data.MaterialGrade+"\">"+data.MaterialGrade+"</option>";
          $(datasource).appendTo('#plategridergrade'); 
       
    });
  if(wsPlateGrade != null){
   	var plateGrades = wsPlateGrade.MemberGrades.Plates;
   	
   	 if(plateGrades != ''){
         $('#plategridergrade').val(plateGrades);
      
         }
   	
   }
  
  $.each(wsDropDown.SurfacePreparation, function(index,data) {   
   var weldsize = "<option>"+data.SSPC_No+"</option>";
   $(weldsize).appendTo('#pgsurfacePreparation1'); 
    
 }); 
         
  $.each(wsDropDown.NoOfCoats, function(index,data) {   
       var NoOfCoats = "<option>"+data.Coats+"</option>";
       $(NoOfCoats).appendTo('#pgpaint2,#pgprimer2'); 
        
     });         
  
  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
       var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
       $(NoOfCoats).appendTo('#pggalvanization2'); 
        
     });         

  $.each(wsDropDown.FireProofingType, function(index,data) {   
       var appendval = "<option>"+data.FireProofingType+"</option>";
       $(appendval).appendTo('#pgfireProofing2'); 
        
     }); 
  $.each(wsDropDown.FireRating, function(index,data) {   
   var appendval = "<option>"+data.FireRating_fra+"</option>";
   $(appendval).appendTo('#pgfireProofing3'); 
    
 }); 
   
  
  $.each(wsDropDown.AESSCategory, function(index,data) {   
       var appendval = "<option>"+data.AESS+"</option>";
       $(appendval).appendTo('#pgaess1'); 
        
     });

  if(wsFinish != null){
	    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	console.log(usedfinish);
	   var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
		 var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
		 var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
		    
		    if(paintValue != null){
		    $('#pgprimer1').val(paintValue);
		    document.getElementById("pgprimer1").setAttribute("disabled", false);
		    }
		    if(noOfCoatsprimer != null){
		       var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
		       $('select[name^="#pgprimer2"] option[value=noOfCts]').attr("selected","selected");

		    }
		 
		   $('#chkprimer').change(function() {
		      if($(this).prop("checked") == true){
		          $('#pgprimer1, #pgprimer2').attr('disabled', false);
		         if(primerperiSPreparation != null){
		  		  $('#pgsurfacePreparation1').val(primerperiSPreparation);
		  	  }
		      } else {
		          $('#pgprimer1, #pgprimer2').attr('disabled', true);

		      }
		  });
		if(usedfinish == "Primer"){
		$('#chkprimer').prop('checked', true);
		$('#chknopaint').attr('checked', true);
		$('#pgprimer1,#pgprimer2').attr('disabled', false);	
		if(primerperiSPreparation != null){
			  $('#pgsurfacePreparation1').val(primerperiSPreparation);
		}
		  } 


	var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
    if(usedfinish != "Galvanizing" &&  SPreparation != null){
    	 $('#chkprimer').prop('checked', true);
    	  $('#chknopaint').attr('checked', true);
    	 $('#pgprimer1,#pgprimer2').attr('disabled', false);	
    	 if(primerperiSPreparation != null){
    		  $('#pgsurfacePreparation1').val(primerperiSPreparation);
    	  }
    }
	var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
	var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
	var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
	if(paintValue != null){
	$('#pgpaint1').val(paintValue);
	document.getElementById("pgpaint1").setAttribute("disabled", false);
	}

	if(noOfCoatspaint != null){
	var noOfCts="<option value>"+noOfCoatspaint+"</option>";
	$('select[name^="#pgpaint2"] option[value=noOfCts]').attr("selected","selected");
	}
	$('#chkpaint').change(function() {
	 if($(this).prop("checked") == true){
	     $('#pgpaint1, #pgpaint2').attr('disabled', false);
	     if(paintperiSPreparation != null){
		    		  $('#pgsurfacePreparation1').val(paintperiSPreparation);
		    	  }
	 } else {
	     $('#pgpaint1, #pgpaint2').attr('disabled', true);
	 }
	 if($('#chkprimer').prop("checked") == true){
	     $('#chkprimer').removeAttr("disabled");
	 } else {
	     $('#chkprimer').removeAttr("disabled");
	 }
	 $('#pggalvanization2').attr('disabled', true);
	});
	if(usedfinish == "Paint"){
	  	  $('#chkpaint').attr('checked', true);
	  	  $('#pgpaint1, #pgpaint2').attr('disabled', false);
	  	  if(paintperiSPreparation != null){
	  		  $('#pgsurfacePreparation1').val(paintperiSPreparation);
	  	  }
	    }

		var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
	var	category = wsFinish.Finish.AESS.Category;
	 
	if(category != null){   
	    var aess="<option value>"+category+"</option>";
		   $('select[name^="#pgaess1"] option[value=aess]').attr("selected","selected");
	}
	$('#chkaess').change(function() {
	if($(this).prop("checked") == true){
	  $('#pgaess1').attr('disabled', false);
	  if(aessperiSPreparation != null){
			  $('#pgsurfacePreparation1').val(aessperiSPreparation);
		  }
	} else {
	  $('#pgaess1').attr('disabled', true);
	}
	if($('#chkprimer').prop("checked") == true){
	  $('#chkprimer').removeAttr("disabled");
	} else {
	  $('#chkprimer').removeAttr("disabled");
	}
	$('#pgpaint1, #pgpaint2, #pggalvanization2, #pgfireProofing2, #pgfireProofing3').attr('disabled', true); 
	});
	if(usedfinish == "AESS"){
	$('#chkaess').attr('checked', true);
	$('#pgaess1').attr('disabled', false);
	if(aessperiSPreparation != null){
		  $('#pgsurfacePreparation1').val(aessperiSPreparation);
	}
	}
	 var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
	 var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
	 var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	 
		      
	    if(fireRating != null){
	    var fireRatingval="<option value>"+fireRating+"</option>";
	    $('select[name^="#pgfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	    }
	    if(fireProofingType != null){
	       var fireProofing="<option value>"+fireProofingType+"</option>";
	       $('select[name^="#pgfireProofing3"] option[value=fireProofing]').attr("selected","selected");
	    }
	   $('#chkfireproofing').change(function() {
	      if($(this).prop("checked") == true){
	          $('#pgfireProofing2, #pgfireProofing3').attr('disabled', false);
	         if(fpperiSPreparation != null){
		       		$('#pgsurfacePreparation1').val(fpperiSPreparation);
		       	}
	      } else {
	          $('#pgfireProofing2, #pgfireProofing3').attr('disabled', true);
	      }  
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').removeAttr("disabled");
	      } else {
	          $('#chkprimer').removeAttr("disabled");
	      }
	      $('#pgpaint1, #pgpaint2, #pggalvanization2, #pgaess1').attr('disabled', true);  
	      // $('#chkprimer').removeAttr("disabled");
	  });
	    if(usedfinish == "Fire proofing"){
	     	  $('#chkfireproofing').attr('checked',true);
	     	  $('#pgfireProofing2, #pgfireProofing3').attr('disabled', false);
	     	
		    }
	 var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	 var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	    if(zincCoatingThickness != null){
	    var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	    $('select[name^="#pggalvanization2"] option[value=zincCoating]').attr("selected","selected");
	    }
	   $('#chkgalvanize').change(function() {
	      if($(this).prop("checked") == true){
	          $('#pggalvanization2').attr('disabled', false);
	         if(galperiSPreparation != null){
		     	 	 $('#pgsurfacePreparation1').val(galperiSPreparation);
		     	 	   } 
	      } else {
	          $('#pggalvanization2').attr('disabled', true);
	      }
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	      } 
	      else {
	          $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	      }
	      $('#pgprimer1, #pgprimer2, #pgpaint1, #pgpaint2, #pgfireProofing2, #pgfireProofing3, #pgaess1').attr('disabled', true);
	      // $("#chkprimer").attr('disabled', 'disabled');
	  });
	   if(usedfinish == "Galvanizing"){
	  	  $('#chkgalvanize').attr('checked', true);
	  	  $('#pggalvanization2').attr('disabled', false);
	  	  $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	          if(galperiSPreparation != null){
	   	 	 $('#pgsurfacePreparation1').val(galperiSPreparation);
	   	 	   }  
	    }
	 var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
	$('#chknopaint').change(function() {
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').attr('disabled', false);
	         if(nopperiSPreparation != null){
		 			 $('#pgsurfacePreparation1').val(nopperiSPreparation);
		 		 	   }
	      } else {
	          $('#chkprimer').attr('disabled', false);
	      }
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').removeAttr("disabled");
	      } else {
	          $('#chkprimer').removeAttr("disabled");
	      }
	      $('#pgpaint1, #pgpaint2, #pggalvanization2, #pgfireProofing2, #pgfireProofing3, #pgaess1').attr('disabled', true);
	  });
		  if(usedfinish == "NoPaint"){
		  $('#chknopaint').attr('checked', true);
		
	}
	}
   $.each( wsDropDown.BeamProfile, function(key, value) {
             var profiles="<option>"+value.Profile+"</option>";
         $(profiles).appendTo('#cantileverbeamprofile'); 

         });
        
                 $.each( wsDropDown.BeamOrientation, function(key, value) {
                     var profiles="<option>"+value.Beam_Orientation+"</option>";
                       $(profiles).appendTo('#infillbeamorientation'); 
           
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
                $(datasource).appendTo('#plategridercamber'); 
               
            });
         
        
           
        $.each(wsDropDown.StudDia, function(index,data) {   
          var datasource="<option>"+data.StudDia_fra+"</option>";
              $(datasource).appendTo('#pgdia'); 
           
        });
        $.each(wsDropDown.StudLength, function(index,data) {   
              var datasource="<option>"+data.StudLength_fra+"</option>";
                $(datasource).appendTo('#pglength1'); 
               
            });
      
        $.each(wsDropDown.NoOfBeams, function(index,data) {   
              var datasource="<option>"+data.No_Beams+"</option>";
                $(datasource).appendTo('#noofbeams1'); 
               
            });
        
          $.each(wsDropDown.PlateThickness, function(index,data) {   
              
              $('<option>').val(data.tp).text(data.tp_fra).appendTo('#gspshear2');
             
           
        });
         
          $.each(wsDropDown.WeldType, function(index,data) {   
              var weldtype = "<option>"+data.wtype+"</option>";
              $(weldtype).appendTo('#plategriderwebtype1,#plategriderwebtype2'); 
               
            });
          $.each(wsDropDown.WeldSize, function(index,data) {   
              var weldsize = "<option>"+data.weld_fra+"</option>";
              $(weldsize).appendTo('#plategriderwebsize1,#plategriderwebsize2'); 
               
            });
              
         
              
              $.each(wsDropDown.Fraction, function(index,data) {   
                  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#pgtfptfr,#pgtfpwfr,#pgbfptfr,#pgbfpwfr,#pgwptfr,#pgwpwfr,#pgtosfr,#pgfflfr');
                 
               
            });
              
            $.each(wsDropDown.Inch, function(index,data) {   
                   $('<option>').val(data.Inch).text(data.Inch).appendTo('#pgtfptin,#pgtfpwin,#pgbfptin,#pgbfpwin,#pgwptin,#pgwpwin,#pgtosin,#pgfflin');
            });
                    
                  $.each(wsDropDown.PlateThickness, function(index,data) {   
                  var appendval = "<option>"+data.tp+"</option>";
                  $(appendval).appendTo('#caspshear2'); 
                   
                });
             if(RefDwgNumFiles){
             $.each(RefDwgNumFiles, function(index,data) { 
         		
         		var referencenum="<option>"+data+"</option>";
         		
         	     $(referencenum).appendTo('#pgreferencenum'); 
         	     
         		});
             }
             
                  $(".cmark1").change( function(){
                      if ($(".cmark1").val()=='BA1') {
                          $("#gBeamLeftConnType").val("Clip Angle");
                          $("#gBeamLeftConnMethod").val("Field Bolted");
                          $("#gBeamLeftConnMethod1").val("Shop Welded");
                           
                    }else  if ($(".cmark1").val()=='BA2') {
                         $("#gBeamLeftConnType").val("Clip Angle");
                         $("#gBeamLeftConnMethod").val("Field Bolted");
                      $("#gBeamLeftConnMethod1").val("Shop Welded");
                }else  if ($(".cmark1").val()=='BA3') {
                     $("#gBeamLeftConnType").val("Clip Angle");
                     $("#gBeamLeftConnMethod").val("Field Bolted");
                     $("#gBeamLeftConnMethod1").val("Shop Welded");
                } else  if ($(".cmark1").val()=='BS1') {
                     $("#gBeamLeftConnType").val("Shear Plate");
                     $("#gBeamLeftConnMethod").val("Shop Welded");
                     $("#gBeamLeftConnMethod1").val("Field Bolted");
            }else  if ($(".cmark1").val()=='BS2') {
                 $("#gBeamLeftConnType").val("Shear Plate");
                 $("#gBeamLeftConnMethod").val("Shop Welded");
                 $("#gBeamLeftConnMethod1").val("Field Bolted");
            } else  if ($(".cmark1").val()=='BS3') {
                 $("#gBeamLeftConnType").val("Shear Plate");
                 $("#gBeamLeftConnMethod").val("Shop Welded");
                 $("#gBeamLeftConnMethod1").val("Field Bolted");
            } 
                      
                  });
                  
                  $(".cmark2").change( function(){
                      if ($(".cmark2").val()=='BA1') {
                          $("#gBeamRightConnType").val("Clip Angle");
                          $("#gBeamRightConnMethod").val("Field Bolted");
                          $("#gBeamRightConnMethod1").val("Shop Welded");
                           
                    }else  if ($(".cmark2").val()=='BA2') {
                         $("#gBeamRightConnType").val("Clip Angle");
                         $("#gBeamRightConnMethod").val("Field Bolted");
                      $("#gBeamRightConnMethod1").val("Shop Welded");
                }else  if ($(".cmark2").val()=='BA3') {
                     $("#gBeamRightConnType").val("Clip Angle");
                     $("#gBeamRightConnMethod").val("Field Bolted");
                     $("#gBeamRightConnMethod1").val("Shop Welded");
                } else  if ($(".cmark2").val()=='BS1') {
                     $("#gBeamRightConnType").val("Shear Plate");
                     $("#gBeamRightConnMethod").val("Shop Welded");
                     $("#gBeamRightConnMethod1").val("Field Bolted");
            }else  if ($(".cmark2").val()=='BS2') {
                 $("#gBeamRightConnType").val("Shear Plate");
                 $("#gBeamRightConnMethod").val("Shop Welded");
                 $("#gBeamRightConnMethod1").val("Field Bolted");
            } else  if ($(".cmark2").val()=='BS3') {
                 $("#gBeamRightConnType").val("Shear Plate");
                 $("#gBeamRightConnMethod").val("Shop Welded");
                 $("#gBeamRightConnMethod1").val("Field Bolted");
            } 
                      
                  
                  });
                  
            
 

  
  var profilename="Built-Up Member";
  var filtered = $.grep(connectionObjList, function (el) {
      if(el.profile.indexOf(profilename) >= 0 && (el.type.toLowerCase().indexOf("beamtocolumn")>=0)){
      	return el.profile;
      }
  });

  
 
	$.each(filtered, function(key, value) {
	       var ConnectionMark="<option>"+value.connectionMark+"</option>";
	         $(ConnectionMark).appendTo('#pgconmark1'); 
	         $(ConnectionMark).appendTo('#pgconmark2'); 
	      
	   });
	
	var filtered = $.grep(connectionObjList, function (el) {
	      if(el.profile.indexOf(profilename) >= 0 && (el.type.toLowerCase().indexOf("beamtobeam")>=0)){
	      	return el.profile;
	      }
	  });

	  
	 
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#pgconmark1'); 
		         $(ConnectionMark).appendTo('#pgconmark2'); 
		      
		   });
		var filtered = $.grep(connectionObjList, function (el) {
		      if(el.profile.indexOf(profilename) >= 0 && (el.type.toLowerCase().indexOf("beamtoembed")>=0)){
		      	return el.profile;
		      }
		  });
		
		  
		 
			$.each(filtered, function(key, value) {
			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
			         $(ConnectionMark).appendTo('#pgconmark1'); 
			         $(ConnectionMark).appendTo('#pgconmark2'); 
			      
			   });
			var filtered = $.grep(connectionObjList, function (el) {
			      if(el.profile.indexOf(profilename) >= 0 && (el.type.toLowerCase().indexOf("moment")>=0)){
			      	return el.profile;
			      }
			  });
			 
			  
			 
				$.each(filtered, function(key, value) {
				       var ConnectionMark="<option>"+value.connectionMark+"</option>";
				         $(ConnectionMark).appendTo('#pgconmark1'); 
				         $(ConnectionMark).appendTo('#pgconmark2'); 
				      
				   });
	//$("#plateconntab").click(function() { 
		
		var connectionmark1 = $("#pgconmark1").val();
	
		 if(connectionmark1 != null){
		 
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark1.indexOf(el.connectionMark) >= 0){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#pgcontype1').empty();
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
			         $(ConnType).appendTo('#pgcontype1'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#pgcontype1'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#pgcontype1'); 
		       }
		      
		         
		         
		   });
		 
		 $('#pgcmss1').empty();
		    $('#pgcmss2').empty();
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#pgcmss1'); 
		        
		   });
		
		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportedside;
		        	
		        }
		    });

		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#pgcmss2'); 
		        
		   });
		 
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 }
		 var connectionmark = $("#pgconmark2").val();
		
		 
		 if(connectionmark != null){
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#pgcontype2').empty();
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
			         $(ConnType).appendTo('#pgcontype2'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#pgcontype2'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#pgcontype2'); 
		       }
		      
		         
		         
		   });
		 
		 $('#pgcmss3').empty();
		    $('#pgcmss4').empty();
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#pgcmss3'); 
		        
		   });
	
		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
		
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#pgcmss4'); 
		        
		   });
		 
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 }
	//});
	
	$("#pgconmark1").change(function() {  
		 var connectionmark = $(this).val();
	
		 
		 if(el.connectionMark != null){
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#pgcontype1').empty();
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
			         $(ConnType).appendTo('#pgcontype1'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#pgcontype1'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#pgcontype1'); 
		       }
		      
		         
		         
		   });
		 var mconntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0 && el.type.toLowerCase().indexOf("moment")>=0){
		        	
		        	return el.moncontype;
		        }
		    });
		 $.each(mconntype, function(key, value) {
				
		       var ConnectionMark="<option>"+value.moncontype+"</option>";
		         $(ConnectionMark).appendTo('#pgcontype1'); 
		       
		   });
		 $('#pgcmss1').empty();
		    $('#pgcmss2').empty();
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#pgcmss1'); 
		        
		   });
	
		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
		
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#pgcmss2'); 
		        
		   });
		 
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 }
	});  
	$("#pgconmark2").change(function() {  
		 var connectionmark = $(this).val();
		
		 
		 if(e1.connectionmark != null){
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#pgcontype2').empty();
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
			         $(ConnType).appendTo('#pgcontype2'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#pgcontype2'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#pgcontype2'); 
		       }
		      
		         
		         
		   });
		 var mconntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0 && el.type.toLowerCase().indexOf("moment")>=0){
		        	
		        	return el.moncontype;
		        }
		    });
		 $.each(mconntype, function(key, value) {
				
		       var ConnectionMark="<option>"+value.moncontype+"</option>";
		         $(ConnectionMark).appendTo('#pgcontype2'); 
		       
		   });
		 $('#pgcmss3').empty();
		    $('#pgcmss4').empty();
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#pgcmss3'); 
		        
		   });
	
		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
		
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#pgcmss4'); 
		        
		   });
		 
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 }
	});
	  
	  $("#pgtfptin").change(function(){
		  var thicknessin = $(this).val();
			  var bottomflange ="<option>"+thicknessin+"</option>";
	           $(bottomflange).appendTo('#pgbfptin').prop('selected', true); 
			});
	
	$("#pgtfptfr").change(function(){
		
		  var thicknessfr =  $(this).val();
		  $('#pgbfptfr').val(thicknessfr);
			});
	$('#pgtfpwft').keyup(function(e){
		
		  var widthft = $("#pgtfpwft").val()
	    $('#pgbfpwft').val(widthft);
		});
	
	$("#pgtfpwin").change(function(){
		
		  var thicknesswin = $(this).val();
			  var bottomflangewin ="<option>"+thicknesswin+"</option>";
	           $(bottomflangewin).appendTo('#pgbfpwin').prop('selected', true); 
			});
	
	$("#pgtfpwfr").change(function(){
		
		  var thicknesswfr = $(this).val();
		  $('#pgbfpwfr').val(thicknesswfr);
			});
	
	
	$("#plategriderwebtype1").change(function() {  
	    if ( $("#plategriderwebtype1").val()=="CJP") {
	 	   $("#plategriderwebsize1").attr("disabled", true);
	 	   $("#plategriderwebsize1").prop('required',false);
	 	  $("#plategriderwebsize1").prop('selectedIndex',0);
	 	}else {
	 		  $("#plategriderwebsize1").attr("disabled", false);
	 		  $("#plategriderwebsize1").prop('required',true);
	 	}

	 	});
	$("#plategriderwebtype2").change(function() {  
	    if ( $("#plategriderwebtype2").val()=="CJP") {
	 	   $("#plategriderwebsize2").attr("disabled", true);
	 	   $("#plategriderwebsize2").prop('required',false);
	 	  $("#plategriderwebsize2").prop('selectedIndex',0);
	 	}else {
	 		  $("#plategriderwebsize2").attr("disabled", false);
	 		  $("#plategriderwebsize2").prop('required',true);
	 	}

	 	});
//  });
	
  
	  $.each(wsPlateGrade, function(key, value) {   
			
			if (value["Camber"]) {
				 
				  $("#plategridercamber").val(value["Camber"]).trigger("change");
			}
		
		});
	
	  
	
	  $(".depthfield").change(function() {
		  var TopFlangePlateThickness= 0;
		  var BottomFlangePlateThickness= 0;
		  var WebPlatewidth=0;
		  if ($("#pgtfptin").val()!=0&&$("#pgtfptfr").val()!=0) {
				
			  TopFlangePlateThickness= Number($("#pgtfptin").val())+ Number($("#pgtfptfr").val());
			
		}else if ($("#pgtfptin").val()!=0) {
			 
			 TopFlangePlateThickness= Number($("#pgtfptin").val());
		}
		else if ($("#pgtfptfr").val()!=0) {
		
			 TopFlangePlateThickness= Number($("#pgtfptfr").val());
		}
		  
		  if ($("#pgbfptin").val()!=0&&$("#pgbfptfr").val()!=0) {
			 
				BottomFlangePlateThickness= Number($("#pgbfptin").val())+ Number($("#pgbfptfr").val());
		}else if ($("#pgbfptin").val()!=0) {
			 
			BottomFlangePlateThickness= Number($("#pgbfptin").val());
		}
		else if ($("#pgbfptfr").val()!=0) {
			
			BottomFlangePlateThickness= Number($("#pgbfptfr").val());
		}
		  
		  
		  
		  if ($("#pgwpwin").val()!=0&&$("#pgwpwfr").val()!=0) {
			
			  WebPlatewidth= Number($("#pgwpwin").val())+Number($("#pgwpwfr").val());
		}else if ($("#pgwpwin").val()!=0) {
			 
			  WebPlatewidth= Number($("#pgwpwin").val());
			 
		}
		else if ($("#pgwpwfr").val()!=0) {
			
			WebPlatewidth= Number($("#pgwpwfr").val());
		}
		
	if ($("#pgwpwft").val()!=0&&$("#pgwpwft").val()) {
    	var textValue=	Number($("#pgwpwft").val())*12;
		WebPlatewidth=WebPlatewidth+textValue;
	}
			  
		  var depth=Number(TopFlangePlateThickness)+Number(BottomFlangePlateThickness)+Number(WebPlatewidth);
		 
		 
		
		  $("#plategriderdepthForGivenProfile").remove();
	      $('.appendtextbox').append('<input id="plategriderdepthForGivenProfile" value="'+depth+'" type="hidden" name="depth">');
	    	$("#plategriderdepthForGivenProfile").val();
		   

		 	});
	
	  $("#plategridergrade").change(function(){
			$("#girdergrade .select2-container--default .select2-selection--single").removeClass("importantRed");
			});
	  
	  
	  $('#pgtfpwft').on('click', function() {
 		   if( $('#pgtfpwft').val() == "0") {
 		   $('#pgtfpwft').val("");
 		   }
 	   });
	  $('#pgbfpwft').on('click', function() {
 		   if( $('#pgbfpwft').val() == "0") {
 		   $('#pgbfpwft').val("");
 		   }
 	   });
	  $('#pgwpwft').on('click', function() {
 		   if( $('#pgwpwft').val() == "0") {
 		   $('#pgwpwft').val("");
 		   }
 	   });
	  $('#pgtosft').on('click', function() {
 		   if( $('#pgtosft').val() == "0") {
 		   $('#pgtosft').val("");
 		   }
 	   });
	  
	  
		$("#pgcount").keyup(function(e){
			$("#pgcount").removeClass("importantRed");
			});
		$("#plategridercamber").change(function(){
			$("#plategridercamber").removeClass("importantRed");
			});
		$("#plategriderwebtype1").change(function(){
			$("#plategriderwebtype1").removeClass("importantRed");
			});
		$("#plategriderwebtype2").change(function(){
			$("#plategriderwebtype2").removeClass("importantRed");
			});
		$("#plategriderwebsize2").change(function(){
			$("#plategriderwebsize2").removeClass("importantRed");
			});
		$("#plategriderwebsize1").change(function(){
			$("#plategriderwebsize1").removeClass("importantRed");
			});
		$("#pgdia").change(function(){
			$("#pgdia").removeClass("importantRed");
			});
		$("#pglength1").change(function(){
			$("#pglength1").removeClass("importantRed");
			});