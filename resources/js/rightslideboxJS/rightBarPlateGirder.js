  

  $(function() {
    
  });

  function keyDownEvent(e){
	   	
	    // Allow: backspace, delete, tab, escape, enter and .
	    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13,  190]) !== -1 ||
	         // Allow: Ctrl+A, Command+A
	        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
	         // Allow: home, end, left, right, down, up
	        (e.keyCode >= 35 && e.keyCode <= 40)) {
	             // let it happen, don't do anything
	             return;
	    }
	    // Ensure that it is a number and stop the keypress
	    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
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
                  $('<option>').val(data.fr_fra).text(data.fr_fra).appendTo('#pbtosfr12,#pbtosfr11,#pbtosfr10,#pbtosfr9,#peribeamffl_fra5,#pbtosfr8,#peribeamffl_fra4,#pbtosfr7,#pbtosfr4,#pbtosfr6,#pbtosfr5,#pbtosfr3,#pgbeamffl_fra1,#pbtosfr2,#pbtosfr1,#pgbeamffl_fra,#pgtfptfr,#pgtfpwfr,#pgbfptfr,#pgbfpwfr,#pgwptfr,#pgwpwfr,#pgtosfr,#pgfflfr');
                 
               
            });
              
            $.each(wsDropDown.Inch, function(index,data) {   
                   $('<option>').val(data.Inch).text(data.Inch).appendTo('#pbtosin12,#pbtosin11,#pbtosin10,#pbtosin9,#peribeamffl_in5,#pbtosin8,#peribeamffl_in4,#pbtosin7,#pbtosin4,#pbtosin6,#pbtosin5,#pbtosin3,#pgbeamffl_in1,#pbtosin2,#pgbeamffl_in,#pbtosin1,#pgtfptin,#pgtfpwin,#pgbfptin,#pgbfpwin,#pgwptin,#pgwpwin,#pgtosin,#pgfflin');
            });
                    
         
             $.each(wsDropDown.PlateThickness, function(index,data) {   
                  var appendval = "<option>"+data.tp+"</option>";
                  $(appendval).appendTo('#caspshear2'); 
                   
                });
             
             $.each(RefDwgNumFiles, function(index,data) { 
         		
         		var referencenum="<option>"+data+"</option>";
         		
         	     $(referencenum).appendTo('#pgreferencenum'); 
         	     
         		});
             
                 
                  
            
 
  //$( document ).ready(function() {
	  
  /*$('.chosen-select').chosen();
   $('.chosen-select-deselect').chosen({ allow_single_deselect: true });*/
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
 				if($("#usplicecount").val()>0){
 				 $('#spliceconnectionmark').empty();
 		 	    var filtered = $.grep(connectionObjList, function (el) {
 		 	    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("splicebeamusingspliceplate")>=0){
 		 	        	return el.profile;
 		 	        }
 		 	    });
 		 	
 		 	   $.each(filtered, function(key, value) {
 		 		 
 			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
 			       $(ConnectionMark).appendTo('#spliceconnectionmark'); 
 			   });
 		 	  
 			    var filtered = $.grep(connectionObjList, function (el) {
 			    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("splicebeamusingend")>=0){
 			        	return el.profile;
 			        }
 			    });
 			    
 			   $.each(filtered, function(key, value) {
 				  
 			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
 			       $(ConnectionMark).appendTo('#spliceconnectionmark'); 
 			   });
 				 }
 // });
//$("#rightplateconntab").click(function() { 
		
		var connectionmark1 = $("#pgconmark1").val();
	
		 if(connectionmark1 !=null){
		 
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0)){
		        	
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
			 
		        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#pgcmss1'); 
		        
		   });
	
		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
	
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#pgcmss2'); 
		        
		   });
		 
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 }
		 var connectionmark = $("#pgconmark2").val();
		
		 if(connectionmark !=null){
		 
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
		        	
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
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0) ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#pgcmss3'); 
		        
		   });
		
		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
	
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#pgcmss4'); 
		        
		   });
		 
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0) ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 }
	$("#pgconmark1").change(function() {  
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
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#pgcmss1'); 
		        
		   });
	
		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
		
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#pgcmss2'); 
		        
		   });
		 
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null &&  (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		}
	});  
	
	$("#pgconmark2").change(function() {  
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
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
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
	
	
	
	
 // });
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
$("#usplicecount").change(function() {

	 $('#spliceRows').empty();
    var spliceCount=parseInt($('#usplicecount').val());
  
    $('#spliceconnectionmark').empty();
    for(var i=1;i<=spliceCount;i++) {
         var html=`<div class="row">
        	<div class="col-lg-8 col-lg-8 padding10 ">
            <label class="labelBlack control-label">Splice Position `+i+` From Left End</label>
            <div class="row">

                <div class="col-lg-4 col-md-4">
                    <input type="text" class="form-control per70" onkeydown="keyDownEvent(event)" id="splicePositionLeftEndFt`+i+`" placeholder="0" onfocus="this.placeholder = ''" onblur="this.placeholder = '0'">
                    <div class="txt-right">
                        ft
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 padding5">
                    <select class="form-control per70 splicein" id="splicePositionLeftEndIn`+i+`">
                    </select>
                    <div class="txt-right">
                        in
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 p-l-5"> 
                    <select class="form-control per70 splicefr" id="splicePositionLeftEndFr`+i+`">
                    </select>
                    <div class="txt-right">
                        fr
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-5 col-md-5 padding10 m-b-10">
            <label class="labelBlack control-label">Top Flange Plate Thickness</label>
            <div class="row padding10">
                <div class="col-lg-6 col-md-6 padding5">
                    <select class="form-control per70 splicein" id="splicePositionTopThicknessIn`+i+`">
                    </select>
                    <div class="txt-right">
                        in
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 padding5">
                    <select class="form-control per70 splicefr" id="splicePositionTopThicknessFr`+i+`">
                    </select>
                    <div class="txt-right">
                        fr
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7 col-md-7 padding10 m-b-10">
            <label class="labelBlack control-label padding10">Top Flange Plate width</label>
            <div class="row padding10">
                <div class="col-lg-4 col-md-4 p-r-5">
                    <input type="text" class="form-control per70" onkeydown="keyDownEvent(event)" id="splicePositionTopWidthft`+i+`" placeholder="0" onfocus="this.placeholder = ''" onblur="this.placeholder = '0'">
                    <div class="txt-right">
                        ft
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 padding5">
                    <select class="form-control per70 splicein" id="splicePositionTopWidthIn`+i+`">
                    </select>
                    <div class="txt-right">
                        in
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 padding5">
                    <select class="form-control per70 splicefr" id="splicePositionTopWidthFr`+i+`">
                    </select>
                    <div class="txt-right">
                        fr
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-5 col-md-5 padding10 m-b-10">
            <label class="labelBlack control-label">Bottom Flange Plate Thickness</label>
            <div class="row padding10">
                <div class="col-lg-6 col-md-6 padding5">
                    <select class="form-control per70 splicein" id="splicePositionBottomThicknessIn`+i+`">
                    </select>
                    <div class="txt-right">
                        in
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 padding5">
                    <select class="form-control per70 splicefr" id="splicePositionBottomThicknessFr`+i+`">
                    </select>
                    <div class="txt-right">
                        fr
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7 col-md-7 padding10 m-b-10">
            <label class="labelBlack control-label padding10">Bottom Flange Plate width</label>
            <div class="row padding10">
                <div class="col-lg-4 col-md-4 p-r-5">
                    <input type="text" class="form-control per70" onkeydown="keyDownEvent(event)" id="splicePositionBottomWidthft`+i+`" placeholder="0" onfocus="this.placeholder = ''" onblur="this.placeholder = '0'">
                    <div class="txt-right">
                        ft
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 padding5">
                    <select class="form-control per70 splicein" id="splicePositionBottomWidthIn`+i+`">
                    </select>
                    <div class="txt-right">
                        in
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 padding5">
                    <select class="form-control per70 splicefr" id="splicePositionBottomWidthFr`+i+`">
                    </select>
                    <div class="txt-right">
                        fr
                    </div>
                </div>
            </div>
        </div>

        <div class="col-lg-5 col-md-5 padding10 m-b-10">
            <label class="labelBlack control-label ">Web Plate Thickness</label>
            <div class="row padding10">
                <div class="col-lg-6 col-md-6 padding5">
                    <select class="form-control per70 splicein" id="splicePositionWebThicknessIn`+i+`">
                    </select>
                    <div class="txt-right">
                        in
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 padding5">
                    <select class="form-control per70 splicefr"  id="splicePositionWebThicknessFr`+i+`">
                    </select>
                    <div class="txt-right">
                        fr
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-7 col-md-7 padding10 m-b-10">
            <label class="labelBlack control-label padding10">Web Plate width</label>
            <div class="row padding10">
                <div class="col-lg-4 col-md-4 p-r-5">
                    <input type="text" class="form-control per70" onkeydown="keyDownEvent(event)" id="splicePositionWebWidthft`+i+`" placeholder="0" onfocus="this.placeholder = ''" onblur="this.placeholder = '0'">
                    <div class="txt-right">
                        ft
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 padding5">
                    <select class="form-control per70 splicein" id="splicePositionWebWidthIn`+i+`">
                    </select>
                    <div class="txt-right">
                        in
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 padding5">
                <select class="form-control per70 splicefr" id="splicePositionWebWidthFr`+i+`">
            </select>
                    <div class="txt-right">
                        fr
                    </div>
                </div>
            </div>
        </div>`;

                     $('#spliceRows').append(html);
       }

                  $.each(wsDropDown.Inch, function(index,data) {   
         			
         	        $('<option>').val(data.Inch).text(data.Inch).appendTo('.splicein');        
         	        
         	         });

         	         
         		  
         			  $.each(wsDropDown.Fraction, function(index,data) {   
         				  $('<option>').val(data.fr_fra).text(data.fr_fra).appendTo('.splicefr');
         	                }); 
         			  
         			  
         			var topplatethicknessin = $("#pgtfptin").val();
         			$('#splicePositionTopThicknessIn1,#splicePositionTopThicknessIn2,#splicePositionTopThicknessIn3,#splicePositionTopThicknessIn4,#splicePositionTopThicknessIn5,#splicePositionTopThicknessIn6,#splicePositionTopThicknessIn7,#splicePositionTopThicknessIn8,#splicePositionTopThicknessIn9,#splicePositionTopThicknessIn10').val(topplatethicknessin);
         			
         			var topplatethicknessfr = $("#pgtfptfr").val();
         			$('#splicePositionTopThicknessFr1,#splicePositionTopThicknessFr2,#splicePositionTopThicknessFr3,#splicePositionTopThicknessFr4,#splicePositionTopThicknessFr5,#splicePositionTopThicknessFr6,#splicePositionTopThicknessFr7,#splicePositionTopThicknessFr8,#splicePositionTopThicknessFr9,#splicePositionTopThicknessFr10').val(topplatethicknessfr);
         			
         			var topplatewidthft = $("#pgtfpwft").val();
         			$('#splicePositionTopWidthft1,#splicePositionTopWidthft2,#splicePositionTopWidthft3,#splicePositionTopWidthft4,#splicePositionTopWidthft5,#splicePositionTopWidthft6,#splicePositionTopWidthft7,#splicePositionTopWidthft8,#splicePositionTopWidthft9,#splicePositionTopWidthft10').val(topplatewidthft);

						var topplatewidthin = $("#pgtfpwin").val();
						$('#splicePositionTopWidthIn1,#splicePositionTopWidthIn2,#splicePositionTopWidthIn3,#splicePositionTopWidthIn4,#splicePositionTopWidthIn5,#splicePositionTopWidthIn6,#splicePositionTopWidthIn7,#splicePositionTopWidthIn8,#splicePositionTopWidthIn9,#splicePositionTopWidthIn10').val(topplatewidthin);
						
         			var topplatewidthfr = $("#pgtfpwfr").val();
         			$('#splicePositionTopWidthFr1,#splicePositionTopWidthFr2,#splicePositionTopWidthFr3,#splicePositionTopWidthFr4,#splicePositionTopWidthFr5,#splicePositionTopWidthFr6,#splicePositionTopWidthFr7,#splicePositionTopWidthFr8,#splicePositionTopWidthFr9,#splicePositionTopWidthFr10').val(topplatewidthfr);
         			
         			var bottomplatethicknessin = $("#pgbfptin").val();
         			$('#splicePositionBottomThicknessIn1,#splicePositionBottomThicknessIn2,#splicePositionBottomThicknessIn3,#splicePositionBottomThicknessIn4,#splicePositionBottomThicknessIn5,#splicePositionBottomThicknessIn6,#splicePositionBottomThicknessIn7,#splicePositionBottomThicknessIn8,#splicePositionBottomThicknessIn9,#splicePositionBottomThicknessIn10').val(bottomplatethicknessin);
         			
         			var bottomplatethicknessfr = $("#pgbfptfr").val();
         			$('#splicePositionBottomThicknessFr1,#splicePositionBottomThicknessFr2,#splicePositionBottomThicknessFr3,#splicePositionBottomThicknessFr4,#splicePositionBottomThicknessFr5,#splicePositionBottomThicknessFr6,#splicePositionBottomThicknessFr7,#splicePositionBottomThicknessFr8,#splicePositionBottomThicknessFr9,#splicePositionBottomThicknessFr10').val(bottomplatethicknessfr);
         			
         			var bottomplatewidthft = $("#pgbfpwft").val();
         			$('#splicePositionBottomWidthft1,#splicePositionBottomWidthft2,#splicePositionBottomWidthft3,#splicePositionBottomWidthft4,#splicePositionBottomWidthft5,#splicePositionBottomWidthft6,#splicePositionBottomWidthft7,#splicePositionBottomWidthft8,#splicePositionBottomWidthft9,#splicePositionBottomWidthft10').val(bottomplatewidthft);
         			
         			var bottomplatewidthin = $("#pgbfpwin").val();
         			$('#splicePositionBottomWidthIn1,#splicePositionBottomWidthIn2,#splicePositionBottomWidthIn3,#splicePositionBottomWidthIn4,#splicePositionBottomWidthIn5,#splicePositionBottomWidthIn6,#splicePositionBottomWidthIn7,#splicePositionBottomWidthIn8,#splicePositionBottomWidthIn9,#splicePositionBottomWidthIn10').val(bottomplatewidthin);
         			
         			var bottomplatewidthfr = $("#pgbfpwfr").val();
         			$('#splicePositionBottomWidthFr1,#splicePositionBottomWidthFr2,#splicePositionBottomWidthFr3,#splicePositionBottomWidthFr4,#splicePositionBottomWidthFr5,#splicePositionBottomWidthFr6,#splicePositionBottomWidthFr7,#splicePositionBottomWidthFr8,#splicePositionBottomWidthFr9,#splicePositionBottomWidthFr10').val(bottomplatewidthfr);
         			
         			var webplatethicknessin = $("#pgwptin").val();
         			$('#splicePositionWebThicknessIn1,#splicePositionWebThicknessIn2,#splicePositionWebThicknessIn3,#splicePositionWebThicknessIn4,#splicePositionWebThicknessIn5,#splicePositionWebThicknessIn6,#splicePositionWebThicknessIn7,#splicePositionWebThicknessIn8,#splicePositionWebThicknessIn9,#splicePositionWebThicknessIn10').val(webplatethicknessin);
         			
         			var webplatethicknessfr = $("#pgwptfr").val();
         			$('#splicePositionWebThicknessFr1,#splicePositionWebThicknessFr2,#splicePositionWebThicknessFr3,#splicePositionWebThicknessFr4,#splicePositionWebThicknessFr5,#splicePositionWebThicknessFr6,#splicePositionWebThicknessFr7,#splicePositionWebThicknessFr8,#splicePositionWebThicknessFr9,#splicePositionWebThicknessFr10').val(webplatethicknessfr);
         			
         			var webplatewidthft = $("#pgwpwft").val();
         			$('#splicePositionWebWidthft1,#splicePositionWebWidthft2,#splicePositionWebWidthft3,#splicePositionWebWidthft4,#splicePositionWebWidthft5,#splicePositionWebWidthft6,#splicePositionWebWidthft7,#splicePositionWebWidthft8,#splicePositionWebWidthft9,#splicePositionWebWidthft10').val(webplatewidthft);
         			
         			var webplatewidthin = $("#pgwpwin").val();
         			$('#splicePositionWebWidthIn1,#splicePositionWebWidthIn2,#splicePositionWebWidthIn3,#splicePositionWebWidthIn4,#splicePositionWebWidthIn5,#splicePositionWebWidthIn6,#splicePositionWebWidthIn7,#splicePositionWebWidthIn8,#splicePositionWebWidthIn9,#splicePositionWebWidthIn10').val(webplatewidthin);
         			
         			var webplatewidthfr= $("#pgwpwfr").val();
         			$('#splicePositionWebWidthFr1,#splicePositionWebWidthFr2,#splicePositionWebWidthFr3,#splicePositionWebWidthFr4,#splicePositionWebWidthFr5,#splicePositionWebWidthFr6,#splicePositionWebWidthFr7,#splicePositionWebWidthFr8,#splicePositionWebWidthFr9,#splicePositionWebWidthFr10').val(webplatewidthfr);
         			
         			$("#pgtfptin,#pgtfptfr,#pgtfpwft,#pgtfpwin,#pgtfpwfr,#pgbfpwft,#pgbfpwin,#pgbfpwfr,#pgwptin,#pgwptfr,#pgwpwft,#pgwpwin,#pgwpwfr").change(function(){
                  	 $('#spliceRows').empty();
               	    $('#usplicecount').prop('selectedIndex',0);
                  });
         			
         			  if(spliceCount > 0){
        				 $('#spliceconnectionmark').empty();
        		 	    var filtered = $.grep(connectionObjList, function (el) {
        		 	    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("splicebeamusingspliceplate")>=0){
        		 	        	return el.profile;
        		 	        }
        		 	    });
        		 	  
        		 	   $.each(filtered, function(key, value) {
        		 		 
        			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
        			       $(ConnectionMark).appendTo('#spliceconnectionmark'); 
        			   });
        		 	  
        			    var filtered = $.grep(connectionObjList, function (el) {
        			    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("splicebeamusingend")>=0){
        			        	return el.profile;
        			        }
        			    });
        			    
        			   $.each(filtered, function(key, value) {
        				  
        			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
        			       $(ConnectionMark).appendTo('#spliceconnectionmark'); 
        			   });
        				 }
});

  // JQuery Code
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
		}
	});
	
	$('#pgcamber').change(function() {
		if($(this).prop("checked") == true){
			$('#plategridercamber').attr('disabled', false);
		} 
		else {
			$('#plategridercamber').attr('disabled', true);
		}
	});
	
 /*// Start Finish check
     $('#chkprimer').change(function() {
        if($(this).prop("checked") == true){
            $('#pgprimer1, #pgprimer2').attr('disabled', false);
        } else {
            $('#pgprimer1, #pgprimer2').attr('disabled', true);
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
        $('#pgpaint1, #pgpaint2, #pggalvanization2, #pgfireProofing2, #pgfireProofing3, #pgaess1').attr('disabled', true);
    });
    $('#chkpaint').change(function() {
        if($(this).prop("checked") == true){
            $('#pgpaint1, #pgpaint2').attr('disabled', false);
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
    $('#chkgalvanize').change(function() {
        if($(this).prop("checked") == true){
            $('#pggalvanization2').attr('disabled', false);
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
    $('#chkfireproofing').change(function() {
        if($(this).prop("checked") == true){
            $('#pgfireProofing2, #pgfireProofing3').attr('disabled', false);
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
    $('#chkaess').change(function() {
        if($(this).prop("checked") == true){
            $('#pgaess1').attr('disabled', false);
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
    // End Finish check
*/
   // $(function() {
        $(".hideAll").hide();
        $("#plategrideralignment").change(function() {
            if ($('#plategrideralignment').val() == 'Straight') {
                $(".efieldsFW").show();
                $(".efieldsFB").hide();
                $(".einXsplice1").hide();
                $(".einXsplice2").hide();
                $(".skewed").hide();
                $(".sloppedSkewed").hide();
            } else if ($('#plategrideralignment').val() == 'Sloped') {
                $(".efieldsFW").hide();
                $(".efieldsFB").show();
                $(".einXsplice1").show();
                $(".skewed").hide();
                $(".sloppedSkewed").hide();
            } else if ($('#plategrideralignment').val() == 'Skewed') {
                $(".skewed").show();
                $(".efieldsFB").hide();
                $(".efieldsFW").show();
                $(".einXsplice1").hide();
                $(".einXsplice2").hide();
                $(".sloppedSkewed").hide();
            }
            else if ($('#plategrideralignment').val() == 'Sloped & Skewed') {
            	$(".skewed").hide();
                $(".efieldsFB").hide();
                $(".efieldsFW").hide();
                $(".einXsplice1").hide();
                $(".einXsplice2").hide();
               $(".sloppedSkewed").show();
               $("#colTopNegative4,#colTopNegative5,#colTopNegative6,#colTopNegative7,#pbtosin9,#pbtosin10,#pbtosin11,#pbtosin12,#pbtosfr9,#pbtosfr10,#pbtosfr11,#pbtosfr12").prop('selectedIndex', 0);
            } 

        });
        $(document).ready(function() {
        	var spl=$('#usplicecount').val();
        	if(spl==null){
            $('#usplicecount').prop('selectedIndex', 0);
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
	
 
	