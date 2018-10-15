        function AllowNumbersOnly(e) {
            var code = (e.which) ? e.which : e.keyCode;
           
            if (code > 31 && (code < 48 || code > 57)) {
              e.preventDefault();
            }
          }

        $.each(wsDropDown.SurfacePreparation, function(index,data) {   
     		  var weldsize = "<option>"+data.SSPC_No+"</option>";
     		  $(weldsize).appendTo('#pssurfacePreparation1'); 
     		   
     		});	
  				
  		 $.each(wsDropDown.NoOfCoats, function(index,data) {   
        		  var NoOfCoats = "<option>"+data.Coats+"</option>";
        		  $(NoOfCoats).appendTo('#psprimer2,#pspaint2'); 
        		   
        		});			
  		 
  		 $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
       		  var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
       		  $(NoOfCoats).appendTo('#psgalvanization2'); 
       		   
       		});			
 		 
  		 $.each(wsDropDown.FireProofingType, function(index,data) {   
      		  var appendval = "<option>"+data.FireProofingType+"</option>";
      		  $(appendval).appendTo('#psfireProofing2'); 
      		   
      		});	
  		 $.each(wsDropDown.FireRating, function(index,data) {   
     		  var appendval = "<option>"+data.FireRating_fra+"</option>";
     		  $(appendval).appendTo('#psfireProofing3'); 
     		   
     		});	
    	   	  
  		 
  		 $.each(wsDropDown.AESSCategory, function(index,data) {   
        		  var appendval = "<option>"+data.AESS+"</option>";
        		  $(appendval).appendTo('#psaess1'); 
        		   
        		});

		 if(wsFinish != null){
			    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
			console.log(usedfinish);
			   var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
				 var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
				 var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
				    
				    if(paintValue != null){
				    $('#psprimer1').val(paintValue);
				    document.getElementById("psprimer1").setAttribute("disabled", false);
				    }
				    if(noOfCoatsprimer != null){
				       var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
				       $('select[name^="#psprimer2"] option[value=noOfCts]').attr("selected","selected");

				    }
				 
				   $('#chkprimer').change(function() {
				      if($(this).prop("checked") == true){
				          $('#psprimer1, #psprimer2').attr('disabled', false);
				         if(primerperiSPreparation != null){
				  		  $('#pssurfacePreparation1').val(primerperiSPreparation);
				  	  }
				      } else {
				          $('#psprimer1, #psprimer2').attr('disabled', true);

				      }
				  });
				if(usedfinish == "Primer"){
				$('#chkprimer').prop('checked', true);
				$('#chknopaint').attr('checked', true);
				$('#psprimer1,#psprimer2').attr('disabled', false);	
				if(primerperiSPreparation != null){
					  $('#pssurfacePreparation1').val(primerperiSPreparation);
				}
				  } 
			var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
		    if(usedfinish != "Galvanizing" &&  SPreparation != null){
		    	 $('#chkprimer').prop('checked', true);
		    	  $('#chknopaint').attr('checked', true);
		    	 $('#psprimer1,#psprimer2').attr('disabled', false);	
		    	 if(primerperiSPreparation != null){
		    		  $('#pssurfacePreparation1').val(primerperiSPreparation);
		    	  }
		    }
			var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
			var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
			var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
			if(paintValue != null){
			$('#pspaint1').val(paintValue);
			document.getElementById("pspaint1").setAttribute("disabled", false);
			}

			if(noOfCoatspaint != null){
			var noOfCts="<option value>"+noOfCoatspaint+"</option>";
			$('select[name^="#pspaint2"] option[value=noOfCts]').attr("selected","selected");
			}
			$('#chkpaint').change(function() {
			 if($(this).prop("checked") == true){
			     $('#pspaint1, #pspaint2').attr('disabled', false);
			     if(paintperiSPreparation != null){
				    		  $('#pssurfacePreparation1').val(paintperiSPreparation);
				    	  }
			 } else {
			     $('#pspaint1, #pspaint2').attr('disabled', true);
			 }
			 if($('#chkprimer').prop("checked") == true){
			     $('#chkprimer').removeAttr("disabled");
			 } else {
			     $('#chkprimer').removeAttr("disabled");
			 }
			 $('#psgalvanization2').attr('disabled', true);
			});
			if(usedfinish == "Paint"){
			  	  $('#chkpaint').attr('checked', true);
			  	  $('#pspaint1, #pspaint2').attr('disabled', false);
			  	  if(paintperiSPreparation != null){
			  		  $('#pssurfacePreparation1').val(paintperiSPreparation);
			  	  }
			    }

			

			var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
			var	category = wsFinish.Finish.AESS.Category;
			 
			if(category != null){   
			    var aess="<option value>"+category+"</option>";
				   $('select[name^="#psaess1"] option[value=aess]').attr("selected","selected");
			}
			$('#chkaess').change(function() {
			if($(this).prop("checked") == true){
			  $('#psaess1').attr('disabled', false);
			  if(aessperiSPreparation != null){
					  $('#pssurfacePreparation1').val(aessperiSPreparation);
				  }
			} else {
			  $('#psaess1').attr('disabled', true);
			}
			if($('#chkprimer').prop("checked") == true){
			  $('#chkprimer').removeAttr("disabled");
			} else {
			  $('#chkprimer').removeAttr("disabled");
			}
			$('#pspaint1, #pspaint2, #psgalvanization2, #psfireProofing2, #psfireProofing3').attr('disabled', true); 
			});
			if(usedfinish == "AESS"){
			$('#chkaess').attr('checked', true);
			$('#psaess1').attr('disabled', false);
			if(aessperiSPreparation != null){
				  $('#pssurfacePreparation1').val(aessperiSPreparation);
			}
			}
			 var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
			 var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
			 var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
			 
				      
			    if(fireRating != null){
			    var fireRatingval="<option value>"+fireRating+"</option>";
			    $('select[name^="#psfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
			    }
			    if(fireProofingType != null){
			       var fireProofing="<option value>"+fireProofingType+"</option>";
			       $('select[name^="#psfireProofing3"] option[value=fireProofing]').attr("selected","selected");
			    }
			   $('#chkfireproofing').change(function() {
			      if($(this).prop("checked") == true){
			          $('#psfireProofing2, #psfireProofing3').attr('disabled', false);
			         if(fpperiSPreparation != null){
				       		$('#pssurfacePreparation1').val(fpperiSPreparation);
				       	}
			      } else {
			          $('#psfireProofing2, #psfireProofing3').attr('disabled', true);
			      }  
			      if($('#chkprimer').prop("checked") == true){
			          $('#chkprimer').removeAttr("disabled");
			      } else {
			          $('#chkprimer').removeAttr("disabled");
			      }
			      $('#pspaint1, #pspaint2, #psgalvanization2, #psaess1').attr('disabled', true);  
			      // $('#chkprimer').removeAttr("disabled");
			  });
			    if(usedfinish == "Fire proofing"){
			     	  $('#chkfireproofing').attr('checked',true);
			     	  $('#psfireProofing2, #psfireProofing3').attr('disabled', false);
			     	
				    }
			 var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
			 var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
			    if(zincCoatingThickness != null){
			    var zincCoating="<option value>"+zincCoatingThickness+"</option>";
			    $('select[name^="#psgalvanization2"] option[value=zincCoating]').attr("selected","selected");
			    }
			   $('#chkgalvanize').change(function() {
			      if($(this).prop("checked") == true){
			          $('#psgalvanization2').attr('disabled', false);
			         if(galperiSPreparation != null){
				     	 	 $('#pssurfacePreparation1').val(galperiSPreparation);
				     	 	   } 
			      } else {
			          $('#psgalvanization2').attr('disabled', true);
			      }
			      if($('#chkprimer').prop("checked") == true){
			          $('#chkprimer').prop('checked', false);
			          $('#chkprimer').attr('disabled', true);
			      } 
			      else {
			          $('#chkprimer').prop('checked', false);
			          $('#chkprimer').attr('disabled', true);
			      }
			      $('#psprimer1, #psprimer2, #pspaint1, #pspaint2, #psfireProofing2, #psfireProofing3, #psaess1').attr('disabled', true);
			      // $("#chkprimer").attr('disabled', 'disabled');
			  });
			   if(usedfinish == "Galvanizing"){
			  	  $('#chkgalvanize').attr('checked', true);
			  	  $('#psgalvanization2').attr('disabled', false);
			  	  $('#chkprimer').prop('checked', false);
			          $('#chkprimer').attr('disabled', true);
			          if(galperiSPreparation != null){
			   	 	 $('#pssurfacePreparation1').val(galperiSPreparation);
			   	 	   }  
			    }
			 var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
			$('#chknopaint').change(function() {
			      if($('#chkprimer').prop("checked") == true){
			          $('#chkprimer').attr('disabled', false);
			         if(nopperiSPreparation != null){
				 			 $('#pssurfacePreparation1').val(nopperiSPreparation);
				 		 	   }
			      } else {
			          $('#chkprimer').attr('disabled', false);
			      }
			      if($('#chkprimer').prop("checked") == true){
			          $('#chkprimer').removeAttr("disabled");
			      } else {
			          $('#chkprimer').removeAttr("disabled");
			      }
			      $('#pspaint1, #pspaint2, #psgalvanization2, #psfireProofing2, #psfireProofing3, #psaess1').attr('disabled', true);
			  });
				  if(usedfinish == "NoPaint"){
				  $('#chknopaint').attr('checked', true);
				
			}
			}

   
  
   $.each( wsDropDown.BeamProfile, function(key, value) {
			 var profiles="<option>"+value.Profile+"</option>";
         $(profiles).appendTo('#trapezoidalprofile'); 

		 });
	
       			
       			 
       			 $.each(wsDropDown.PourStopWeldType, function(index,data) {   
		     		  var weldtype = "<option>"+data.PourStop_WeldType+"</option>";
		     		  $(weldtype).appendTo('#psWeldtype'); 
		     		 
		     		});
		     	  $.each(wsDropDown.WeldSize, function(index,data) {   
		     		  var weldsize = "<option>"+data.weld_fra+"</option>";
		     		  $(weldsize).appendTo('#weldSize'); 
		     		   
		     		});
       	   	 
       			 $.each(wsDropDown.AngleProfile, function(index,data) {   
             		  var datasource="<option>"+data.Profile+"</option>";
                        $(datasource).appendTo('#pourstopprofile'); 
             		   
             		});
       			$.each(wsDropDown.SpacingBetweenVerticals, function(index,data) {   
           		  var datasource="<option>"+data.SpacingVerticals+"</option>";
                      $(datasource).appendTo('#spacingVerticals'); 
           		   
           		});
       	   $.each(wsDropDown.PourStopMaterial, function(index,data) {   
      		  var datasource="<option>"+data.PourStop_Material+"</option>";
                 $(datasource).appendTo('#psMaterial'); 
      		   
      		});

       	   	  $.each(wsDropDown.BeamType, function(index,data) {   
         		  var datasource="<option>"+data.BeamType+"</option>";
                    $(datasource).appendTo('#clbeamtype'); 
         		   
         		});
       	   	  
       	
       	  
       	   $.each(wsDropDown.DataSource, function(index,data) {   
      		  var datasource="<option>"+data.DataSource+"</option>";
                 $(datasource).appendTo('#pdatasource'); 
      		   
      		});
       	 $.each(wsDropDown.Camber, function(index,data) {   
     		  var datasource="<option>"+data.Camber_fra+"</option>";
                $(datasource).appendTo('#tracamber1,#pezcamber1'); 
     		   
     		});
       	 
       	
       	   
        $.each(wsDropDown.StudDia, function(index,data) {   
   		  var datasource="<option>"+data.StudDia_fra+"</option>";
              $(datasource).appendTo('#switchdia'); 
   		   
   		});
        $.each(wsDropDown.BoltDia, function(index,data) {   
     		  var datasource="<option>"+data.d1_fra+"</option>";
                $(datasource).appendTo('#boltDia'); 
     		   
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
   		  var appendval = "<option>"+data.tp_fra+"</option>";
   		  $(appendval).appendTo('#pourstopthickness'); 
   		   
   		});
		 
		 
		
       	   	  
		  $.each(wsDropDown.SlopingChords, function(index,data) {   
    		  var weldsize = "<option>"+data.SlopingChords+"</option>";
    		  $(weldsize).appendTo('#parallelslopchord'); 
    		   
    		});
		  $.each(wsDropDown.PourStopConnectionToBeam, function(index,data) {   
    		  var weldsize = "<option>"+data.PourStop_ConnToBeam+"</option>";
    		  $(weldsize).appendTo('#pourStopBeamConn'); 
    		   
    		});
		  $.each(wsDropDown.OverlapLength, function(index,data) {   
    		  var weldsize = "<option>"+data.OverlapLength_fra+"</option>";
    		  $(weldsize).appendTo('#overlapLength'); 
    		   
    		});
       	   	  
    		  $.each(wsDropDown.Fraction, function(index,data) {   
    			  
    			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#leftendpositionfr,#pourlengthfr,#pourstopLegLengthFr,#slabEdgeFr,#weldLengthFr,#pitchFr,#switchlength2,#boltSpacingFr');
    			 
     		   
     		});
    		  
    		$.each(wsDropDown.Inch, function(index,data) {   
    			   $('<option>').val(data.Inch).text(data.Inch).appendTo('#leftendpositionin,#pourlengthin,#pourstopLegLengthIn,#slabEdgeIn,#weldLengthIn,#pitchIn,#boltSpacingIn');
    		});
    				
    		 $.each(wsDropDown.OverlapLength, function(index,data) {   
                 var datasource="<option>"+data.OverlapLength_fra+"</option>";
                    $(datasource).appendTo('#switchlength1'); 
                  
               });	
    		 $.each(wsDropDown.NoOfBoltRows, function(index,data) {   
                 var datasource="<option>"+data.Nc+"</option>";
                    $(datasource).appendTo('#boltrows'); 
                  
               });	
    		
    		  if(RefDwgNumFiles){
    		 $.each(RefDwgNumFiles, function(index,data) { 
    				
    				var referencenum="<option>"+data+"</option>";
    				
    		         $(referencenum).appendTo('#pourStopRefDrawingNo'); 
    		         
    				});
    		  }
    		 $.each(wsDropDown.BoltGrade, function(index,data) {   
         		  var appendval = "<option>"+data.BoGr+"</option>";
         		  $(appendval).appendTo('#boltGrade'); 
         		   
         		});
    		 var profilename=$("#psMaterial").find('option:selected').text();
    		 var res = profilename.charAt(0);
  		   if(wsPlateGrade != null){
  			 
  		     	var cmcgrade = wsPlateGrade.MemberGrades.Angles;
  		     	
  		     	if(res=="A"){
  		     		if(cmcgrade != null){
  			              var prgrade="<option value>"+cmcgrade+"</option>";
  			              $(prgrade).appendTo('#pourstopgrade').prop('selected', true); 
  			           }
  				   }
  		      getProfileGrades(profilename);
 			 $.each(profileGrades, function(index,data) {   
 				  var grades="<option>"+data.Grade+"</option>";
 				 
 		           $(grades).appendTo('#pourstopgrade'); 
 		           
 		           
 				   
 				});	  
  		   }
    			  
            
 
  //$( document ).ready(function() {
	$("#psMaterial").change(function(){
		 var profilename = $(this).val();
		   $('#pourstopgrade').empty();
		   $.each(wsDropDown.PlateGrade, function(index,data) {   
      		  var datasource="<option value=\""+data.MaterialGrade+"\">"+data.MaterialGrade+"</option>";
                 $(datasource).appendTo('#pourstopgrade'); 
      		   
      		});
		     	var plgrade = wsPlateGrade.MemberGrades.Plates;

		     
		     		 if(plgrade != ''){
		     			 $('#pourstopgrade').val(plgrade);
			           
			         } 
		     	
		     
		  
				});	
				//});	

  // jQuery Code
  $(".referenceSelect").select2({
      placeholder: "Select"
  });
    $(".psselect1").select2({
            placeholder: "Select"
        });
    $(".psselect2").select2({
            placeholder: "Select"
        });
     /*// Start Finish check
     $('#chkprimer').change(function() {
        if($(this).prop("checked") == true){
            $('#psprimer1, #psprimer2').attr('disabled', false);
        } else {
            $('#psprimer1, #psprimer2').attr('disabled', true);

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
        $('#pspaint1, #pspaint2, #psgalvanization2, #psfireProofing2, #psfireProofing3, #psaess1').attr('disabled', true);
    });
    $('#chkpaint').change(function() {
        if($(this).prop("checked") == true){
            $('#pspaint1, #pspaint2').attr('disabled', false);
        } else {
            $('#pspaint1, #pspaint2').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#psgalvanization2').attr('disabled', true);
    });
    $('#chkgalvanize').change(function() {
        if($(this).prop("checked") == true){
            $('#psgalvanization2').attr('disabled', false);
        } else {
            $('#psgalvanization2').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        } 
        else {
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        }
        $('#psprimer1, #psprimer2, #pspaint1, #pspaint2, #psfireProofing2, #psfireProofing3, #psaess1').attr('disabled', true);
        // $("#chkprimer").attr('disabled', 'disabled');
    });
    $('#chkfireproofing').change(function() {
        if($(this).prop("checked") == true){
            $('#psfireProofing2, #psfireProofing3').attr('disabled', false);
        } else {
            $('#psfireProofing2, #psfireProofing3').attr('disabled', true);
        }  
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#pspaint1, #pspaint2, #psgalvanization2, #psaess1').attr('disabled', true);  
        // $('#chkprimer').removeAttr("disabled");
    });
    $('#chkaess').change(function() {
        if($(this).prop("checked") == true){
            $('#psaess1').attr('disabled', false);
        } else {
            $('#psaess1').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#pspaint1, #pspaint2, #psgalvanization2, #psfireProofing2, #psfireProofing3').attr('disabled', true); 
    });
    // End Finish check   

	*/
	$('#psmswitch').change(function() {
		if($(this).prop("checked") == true){
			$('#switchdia, #switchlength1, #switchcount').attr('disabled', false);
		} 
		else {
			$('#switchdia, #switchlength1, #switchcount').attr('disabled', true);
			 $("#switchdia,#switchlength1,#switchcount").removeClass("importantRed");
		}
	});
	
    $(".specificlengthshow").hide();
    $("#pourposition").change(function() {
        if ($('#pourposition').val() == 'fulllength') {
           
            $(".specificlengthshow").hide();

        } else if ($('#pourposition').val() == 'specificlength') {
            $(".specificlengthshow").show();
        }
    });
   
    $(".showBent").hide();
    $("#psMaterial").change(function() {
       
        if ($('#psMaterial').val() == 'Angle') {
            $(".showAngle").show();
            $(".showBent").hide();

        } else if ($('#psMaterial').val() == 'Bent Plate') {
            $(".showAngle").hide();
            $(".showBent").show();
        }
    });
    $(".eshowpsbolt").hide();
    $("#pourStopBeamConn").change(function() {
        if ($('#pourStopBeamConn').val() == 'Welded') {
            $(".eshowpsweld").show();
            $(".eshowpsbolt").hide();

        } else if ($('#pourStopBeamConn').val() == 'Bolted') {
            $(".eshowpsweld").hide();
            $(".eshowpsbolt").show();
        }
    });
   
    $("#psWeldtype").change(function() {
        if ($('#psWeldtype').val() == 'ContinuousWeld') {
            $(".showpitch").hide();
            $('#weldLengthFt').val()
            $('#pitchFt').val()

        } else   if ($('#psWeldtype').val() == 'Stitch Weld') {
            $(".showpitch").show();
        }
        else if ($('#psWeldtype').val() == 'Continuous Weld') {
            $(".showpitch").hide();
            $('#weldLengthFt').val()
            $('#pitchFt').val()

        } else {
            $(".showpitch").show();
        }
     
    }); 
    
   /* $("#psWeldtype").change(function() {
        if ($('#psWeldtype').val() == 'ContinuousWeld') {
            $(".showpitch").hide();

        } else {
            $(".showpitch").show();
        }

    });*/
    //ref. Drwaing Number
     $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({
            allow_single_deselect: true
        });
    });
     
     
 	$.each(wsPlateGrade, function(key, value) {   
   		if (value["ShearStudDia"]||value["ShearStudGrade"]||value["ShearStudLength"]) {
   		
   			  $("#switchdia").val(value["ShearStudDia"]).trigger("change");
   			  $("#switchlength1").val(value["ShearStudLength"]).trigger("change");
   			  
   		}	
   	});
 	  $("#pourstopprofile").change(function(){
 	  		$("#pourprofile .select2-container--default .select2-selection--single").removeClass("importantRed");
 	  		});
 	  	$("#pourstopgrade").change(function(){
 	  		$("#pourgrade .select2-container--default .select2-selection--single").removeClass("importantRed");
 	  		});
 	  	$("#pourstopthickness").change(function(){
 			$("#pourstopthickness").removeClass("importantRed");
 			});
 	  	$("#overlapLength").change(function(){
 			$("#overlapLength").removeClass("importantRed");
 			});
 	  	$("#switchdia").change(function(){
 			$("#switchdia").removeClass("importantRed");
 			});
 	  	$("#switchlength1").change(function(){
 			$("#switchlength1").removeClass("importantRed");
 			});
 	  	$("#weldSize").change(function(){
 			$("#weldSize").removeClass("importantRed");
 			});
 	  	$("#boltDia").change(function(){
 			$("#boltDia").removeClass("importantRed");
 			});
 	  	$("#boltGrade").change(function(){
 			$("#boltGrade").removeClass("importantRed");
 			});
 	  	$("#boltrows").change(function(){
 			$("#boltrows").removeClass("importantRed");
 			});
 	  	
 	  	$('#slabEdgeFt').on('click', function() {
 		   if( $('slabEdgeFt').val() == "0") {
 		   $('#slabEdgeFt').val("");
 		   }
 	  });
 	  	$('#weldLengthFt').on('click', function() {
 		   if( $('#weldLengthFt').val() == "0") {
 		   $('#weldLengthFt').val("");
 		   }
 	  });
 	  	$('#pitchFt').on('click', function() {
 		   if( $('#pitchFt').val() == "0") {
 		   $('#pitchFt').val("");
 		   }
 	  });
 	  	$('#boltSpacingFt').on('click', function() {
 		   if( $('#boltSpacingFt').val() == "0") {
 		   $('#boltSpacingFt').val("");
 		   }
 	  });
 	 	  	$("#switchcount").keyup(function(e){
 			$("#switchcount").removeClass("importantRed");
 			});