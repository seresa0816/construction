
$.each(wsDropDown.SurfacePreparation, function(index,data) {   
	       		  var weldsize = "<option>"+data.SSPC_No+"</option>";
	       		  $(weldsize).appendTo('#vbsurfacePreparation1'); 
	       		$(weldsize).appendTo('#vbgalvanization1'); 
	       		});	
	    				
	    		 $.each(wsDropDown.NoOfCoats, function(index,data) {   
	          		  var NoOfCoats = "<option>"+data.Coats+"</option>";
	          		  $(NoOfCoats).appendTo('#vbprimer2,#vbpaint2'); 
	          		   
	          		});			
	    		 
	    		 $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
	         		  var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
	         		  $(NoOfCoats).appendTo('#vbgalvanization2'); 
	         		   
	         		});			
	   		 
	    		 $.each(wsDropDown.FireProofingType, function(index,data) {   
	        		  var appendval = "<option>"+data.FireProofingType+"</option>";
		       		  $(appendval).appendTo('#vbfireProofing2'); 
	        		   
	        		});	
	    		 $.each(wsDropDown.FireRating, function(index,data) {   
	       		  var appendval = "<option>"+data.FireRating_fra+"</option>";
	       		 $(appendval).appendTo('#vbfireProofing3'); 
	       		
	       		});	
	      	   	  
	    		 
	    		 $.each(wsDropDown.AESSCategory, function(index,data) {   
	          		  var appendval = "<option>"+data.AESS+"</option>";
	          		  $(appendval).appendTo('#vbaess1'); 
	          		 $(appendval).appendTo('#vbaess2'); 
	          		 
	          		});
	    


	    		 if(wsFinish != null){
	    			    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	    			console.log(usedfinish);
	    			   var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
		    			 var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
		    			 var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
		    			    
		    			    if(paintValue != null){
		    			    $('#vbprimer1').val(paintValue);
		    			    document.getElementById("vbprimer1").setAttribute("disabled", false);
		    			    }
		    			    if(noOfCoatsprimer != null){
		    			       var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
		    			       $('select[name^="#vbprimer2"] option[value=noOfCts]').attr("selected","selected");

		    			    }
		    			 
		    			   $('#chkprimer').change(function() {
		    			      if($(this).prop("checked") == true){
		    			          $('#vbprimer1, #vbprimer2').attr('disabled', false);
		    			         if(primerperiSPreparation != null){
		    			  		  $('#vbsurfacePreparation1').val(primerperiSPreparation);
		    			  	  }
		    			      } else {
		    			          $('#vbprimer1, #vbprimer2').attr('disabled', true);

		    			      }
		    			  });
		    			if(usedfinish == "Primer"){
		    			$('#chkprimer').prop('checked', true);
		    			$('#chknopaint').attr('checked', true);
		    			$('#vbprimer1,#vbprimer2').attr('disabled', false);	
		    			if(primerperiSPreparation != null){
		    				  $('#vbsurfacePreparation1').val(primerperiSPreparation);
		    			}
		    			  } 

	    			var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
	    		    if(usedfinish != "Galvanizing" &&  SPreparation != null){
	    		    	 $('#chkprimer').prop('checked', true);
	    		    	  $('#chknopaint').attr('checked', true);
	    		    	 $('#vbprimer1,#vbprimer2').attr('disabled', false);	
	    		    	 if(primerperiSPreparation != null){
	    		    		  $('#vbsurfacePreparation1').val(primerperiSPreparation);
	    		    	  }
	    		    }
	    			var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
	    			var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
	    			var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
	    			if(paintValue != null){
	    			$('#vbpaint1').val(paintValue);
	    			document.getElementById("vbpaint1").setAttribute("disabled", false);
	    			}

	    			if(noOfCoatspaint != null){
	    			var noOfCts="<option value>"+noOfCoatspaint+"</option>";
	    			$('select[name^="#vbpaint2"] option[value=noOfCts]').attr("selected","selected");
	    			}
	    			$('#chkpaint').change(function() {
	    			 if($(this).prop("checked") == true){
	    			     $('#vbpaint1, #vbpaint2').attr('disabled', false);
	    			     if(paintperiSPreparation != null){
	    				    		  $('#vbsurfacePreparation1').val(paintperiSPreparation);
	    				    	  }
	    			 } else {
	    			     $('#vbpaint1, #vbpaint2').attr('disabled', true);
	    			 }
	    			 if($('#chkprimer').prop("checked") == true){
	    			     $('#chkprimer').removeAttr("disabled");
	    			 } else {
	    			     $('#chkprimer').removeAttr("disabled");
	    			 }
	    			 $('#vbgalvanization2').attr('disabled', true);
	    			});
	    			if(usedfinish == "Paint"){
	    			  	  $('#chkpaint').attr('checked', true);
	    			  	  $('#vbpaint1, #vbpaint2').attr('disabled', false);
	    			  	  if(paintperiSPreparation != null){
	    			  		  $('#vbsurfacePreparation1').val(paintperiSPreparation);
	    			  	  }
	    			    }

	    		
	    			var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
	    			var	category = wsFinish.Finish.AESS.Category;
	    			 
	    			if(category != null){   
	    			    var aess="<option value>"+category+"</option>";
	    				   $('select[name^="#vbaess1"] option[value=aess]').attr("selected","selected");
	    			}
	    			$('#chkaess').change(function() {
	    			if($(this).prop("checked") == true){
	    			  $('#vbaess1').attr('disabled', false);
	    			  if(aessperiSPreparation != null){
	    					  $('#vbsurfacePreparation1').val(aessperiSPreparation);
	    				  }
	    			} else {
	    			  $('#vbaess1').attr('disabled', true);
	    			}
	    			if($('#chkprimer').prop("checked") == true){
	    			  $('#chkprimer').removeAttr("disabled");
	    			} else {
	    			  $('#chkprimer').removeAttr("disabled");
	    			}
	    			$('#vbpaint1, #vbpaint2, #vbgalvanization2, #vbfireProofing2, #vbfireProofing3').attr('disabled', true); 
	    			});
	    			if(usedfinish == "AESS"){
	    			$('#chkaess').attr('checked', true);
	    			$('#vbaess1').attr('disabled', false);
	    			if(aessperiSPreparation != null){
	    				  $('#vbsurfacePreparation1').val(aessperiSPreparation);
	    			}
	    			}
	    			 var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
	    			 var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
	    			 var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	    			 
	    				      
	    			    if(fireRating != null){
	    			    var fireRatingval="<option value>"+fireRating+"</option>";
	    			    $('select[name^="#vbfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	    			    }
	    			    if(fireProofingType != null){
	    			       var fireProofing="<option value>"+fireProofingType+"</option>";
	    			       $('select[name^="#vbfireProofing3"] option[value=fireProofing]').attr("selected","selected");
	    			    }
	    			   $('#chkfireproofing').change(function() {
	    			      if($(this).prop("checked") == true){
	    			          $('#vbfireProofing2, #vbfireProofing3').attr('disabled', false);
	    			         if(fpperiSPreparation != null){
	    				       		$('#vbsurfacePreparation1').val(fpperiSPreparation);
	    				       	}
	    			      } else {
	    			          $('#vbfireProofing2, #vbfireProofing3').attr('disabled', true);
	    			      }  
	    			      if($('#chkprimer').prop("checked") == true){
	    			          $('#chkprimer').removeAttr("disabled");
	    			      } else {
	    			          $('#chkprimer').removeAttr("disabled");
	    			      }
	    			      $('#vbpaint1, #vbpaint2, #vbgalvanization2, #vbaess1').attr('disabled', true);  
	    			      // $('#chkprimer').removeAttr("disabled");
	    			  });
	    			    if(usedfinish == "Fire proofing"){
	    			     	  $('#chkfireproofing').attr('checked',true);
	    			     	  $('#vbfireProofing2, #vbfireProofing3').attr('disabled', false);
	    			     	
	    				    }
	    			 var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	    			 var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	    			    if(zincCoatingThickness != null){
	    			    var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	    			    $('select[name^="#vbgalvanization2"] option[value=zincCoating]').attr("selected","selected");
	    			    }
	    			   $('#chkgalvanize').change(function() {
	    			      if($(this).prop("checked") == true){
	    			          $('#vbgalvanization2').attr('disabled', false);
	    			         if(galperiSPreparation != null){
	    				     	 	 $('#vbsurfacePreparation1').val(galperiSPreparation);
	    				     	 	   } 
	    			      } else {
	    			          $('#vbgalvanization2').attr('disabled', true);
	    			      }
	    			      if($('#chkprimer').prop("checked") == true){
	    			          $('#chkprimer').prop('checked', false);
	    			          $('#chkprimer').attr('disabled', true);
	    			      } 
	    			      else {
	    			          $('#chkprimer').prop('checked', false);
	    			          $('#chkprimer').attr('disabled', true);
	    			      }
	    			      $('#vbprimer1, #vbprimer2, #vbpaint1, #vbpaint2, #vbfireProofing2, #vbfireProofing3, #vbaess1').attr('disabled', true);
	    			      // $("#chkprimer").attr('disabled', 'disabled');
	    			  });
	    			   if(usedfinish == "Galvanizing"){
	    			  	  $('#chkgalvanize').attr('checked', true);
	    			  	  $('#vbgalvanization2').attr('disabled', false);
	    			  	  $('#chkprimer').prop('checked', false);
	    			          $('#chkprimer').attr('disabled', true);
	    			          if(galperiSPreparation != null){
	    			   	 	 $('#vbsurfacePreparation1').val(galperiSPreparation);
	    			   	 	   }  
	    			    }
	    			 var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
	    			$('#chknopaint').change(function() {
	    			      if($('#chkprimer').prop("checked") == true){
	    			          $('#chkprimer').attr('disabled', false);
	    			         if(nopperiSPreparation != null){
	    				 			 $('#vbsurfacePreparation1').val(nopperiSPreparation);
	    				 		 	   }
	    			      } else {
	    			          $('#chkprimer').attr('disabled', false);
	    			      }
	    			      if($('#chkprimer').prop("checked") == true){
	    			          $('#chkprimer').removeAttr("disabled");
	    			      } else {
	    			          $('#chkprimer').removeAttr("disabled");
	    			      }
	    			      $('#vbpaint1, #vbpaint2, #vbgalvanization2, #vbfireProofing2, #vbfireProofing3, #vbaess1').attr('disabled', true);
	    			  });
	    				  if(usedfinish == "NoPaint"){
	    				  $('#chknopaint').attr('checked', true);
	    				
	    			}
	    			}

     


        $.each( wsDropDown.VBProfile, function(key, value) {        

      var profiles="<option>"+value.Profile+"</option>";
vbsurfacePreparation1
            $(profiles).appendTo('#vBraceProfile');         
            
        
    	});
        
        
		  $.each(wsDropDown.Fraction, function(index,data) {   
			  
			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#vBraceLocation_fr');
 		   
 			});
		  
		  $('#vBraceLocation_fr').val("0");
		    
		      
			$.each(wsDropDown.Inch, function(index,data) {   
			  
				  $('<option>').val(data.Inches).text(data.Inches).appendTo('#vBraceLocation_in');
				  
	 		});
				
			$('#vBraceLocation_in').val("0");
			    
			    
		    $.each(wsDropDown.DataSource, function(index,data) {   
		     		  var datasource="<option>"+data.DataSource+"</option>";
		                $(datasource).appendTo('#vBraceDataSource'); 
		     		   
		     		});
		     	  
		   /* $.each(wsDropDown.MaterialGrade, function(index,data) {   
		     		  var grades="<option>"+data.MaterialGrade+"</option>";
		                $(grades).appendTo('#vBraceMaterialGrade'); 
		               	        		   
		     		});*/
		 
	    		  if(RefDwgNumFiles){
	    		 $.each(RefDwgNumFiles, function(index,data) { 
	    				
	    				var referencenum="<option>"+data+"</option>";
	    				
	    		         $(referencenum).appendTo('#vBraceRefNum'); 
	    		         
	    				});
	    		  }
	    		  
  
  $( document ).ready(function() {
	$("#vBraceProfile").change(function(){
		 var profilename = $(this).val();
		   $('#vBraceMaterialGrade').empty();
		   $('#vBraceMark1').empty();
		   $('#vBraceMark2').empty();
		   $('#vBraceMark3').empty();
		   $('#vBraceMark4').empty();
		   $('#vBraceMark5').empty();
		 
		   getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#vBraceMaterialGrade'); 
		           
		           
				   
				});	 
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	var cmcgrade = wsPlateGrade.MemberGrades.Angles;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			 $('#vBraceMaterialGrade').val(profileshgrade);

			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
	     			 $('#vBraceMaterialGrade').val(hssgrade);

		         }
		     	} 
		     	else{
		     		 if(cmcgrade != ''){
		     			 $('#vBraceMaterialGrade').val(cmcgrade);
			         } 
		     	}
		     }
		  
	    $('#vBraceMark1').empty();
	
	    var filtered = $.grep(connectionObjList, function (el) {
	        if(profilename.indexOf(el.profile) >= 0 && el.type.toLowerCase().indexOf("verticalbrace")>=0){
	        	return el.profile;
	        }
	    });
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#vBraceMark1'); 
		         $(ConnectionMark).appendTo('#vBraceMark2'); 
		         $(ConnectionMark).appendTo('#vBraceMark3'); 
		         $(ConnectionMark).appendTo('#vBraceMark4'); 
		         $(ConnectionMark).appendTo('#vBraceMark5'); 
		       
		   });
		 $('#vBraceMethodGusset').empty();
		    $('#vBraceMethodGusset2').empty();
		    $('#vBraceMethodGusset3').empty();
		    $('#vBraceMethodGusset4').empty();
		    $('#vBraceMethodGusset5').empty();
		 
		    var connectionmark = $("#vBraceMark1").val();
		   if(connectionmark != null){
		 var btogusset = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.bracetogusset;
		        	
		        }
		    });
		 
		
		 $.each(btogusset, function(key, value) {
		       var supportbeam="<option>"+value.bracetogusset+"</option>";
		         $(supportbeam).appendTo('#vBraceMethodGusset'); 
		         $(supportbeam).appendTo('#vBraceMethodGusset2'); 
		         $(supportbeam).appendTo('#vBraceMethodGusset3'); 
		         $(supportbeam).appendTo('#vBraceMethodGusset4'); 
		         $(supportbeam).appendTo('#vBraceMethodGusset5'); 
		       
		   });
		 $('#vBraceTypeBeam').empty();
		 $('#vBraceTypeBeam2').empty();
		 $('#vBraceTypeBeam3').empty();
		 $('#vBraceTypeBeam4').empty();
		 $('#vBraceTypeBeam5').empty();
		 var conntype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.conntype;
		        	
		        }
		    });
		 
		
		 $.each(conntype, function(key, value) {
		       var supportbeam="<option>"+value.conntype+"</option>";
		         $(supportbeam).appendTo('#vBraceTypeBeam'); 
		         $(supportbeam).appendTo('#vBraceTypeBeam2'); 
		         $(supportbeam).appendTo('#vBraceTypeBeam3'); 
		         $(supportbeam).appendTo('#vBraceTypeBeam4'); 
		         $(supportbeam).appendTo('#vBraceTypeBeam5'); 
			        
		   }); 
		 $('#vBraceMethodBeam').empty();
		 $('#vBraceMethodBeam2').empty();
		 $('#vBraceMethodBeam3').empty();
		 $('#vBraceMethodBeam4').empty();
		 $('#vBraceMethodBeam5').empty();
		 var gtobeam = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.gussettobeam;
		        	
		        }
		    });
		
		 $.each(gtobeam, function(key, value) {
	       var supportbeam="<option>"+value.gussettobeam+"</option>";
	         $(supportbeam).appendTo('#vBraceMethodBeam'); 
	         $(supportbeam).appendTo('#vBraceMethodBeam2'); 
	         $(supportbeam).appendTo('#vBraceMethodBeam3'); 
	         $(supportbeam).appendTo('#vBraceMethodBeam4'); 
	         $(supportbeam).appendTo('#vBraceMethodBeam5'); 
	   }); 
		   }
		   });
	
  });

 // JQuery Code
  
  $(".referenceSelect").select2({
      placeholder: "Select"
  });
   $(".vbselect1").select2({
        placeholder: "Select"
    });
    $(".vbselect2").select2({
        placeholder: "Select"
    });
    /*// Start Finish check
     $('#chkprimer').change(function() {
        if($(this).prop("checked") == true){
            $('#vbprimer1, #vbprimer2').attr('disabled', false);
        } else {
            $('#vbprimer1, #vbprimer2').attr('disabled', true);

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
        $('#vbpaint1, #vbpaint2, #vbgalvanization2, #vbfireProofing2, #vbfireProofing3, #vbaess1').attr('disabled', true);
    });
    $('#chkpaint').change(function() {
        if($(this).prop("checked") == true){
            $('#vbpaint1, #vbpaint2').attr('disabled', false);
        } else {
            $('#vbpaint1, #vbpaint2').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#vbgalvanization2').attr('disabled', true);
    });
    $('#chkgalvanize').change(function() {
        if($(this).prop("checked") == true){
            $('#vbgalvanization2').attr('disabled', false);
        } else {
            $('#vbgalvanization2').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        } 
        else {
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        }
        $('#vbprimer1, #vbprimer2, #vbpaint1, #vbpaint2, #vbfireProofing2, #vbfireProofing3, #vbaess1').attr('disabled', true);
        // $("#chkprimer").attr('disabled', 'disabled');
    });
    $('#chkfireproofing').change(function() {
        if($(this).prop("checked") == true){
            $('#vbfireProofing2, #vbfireProofing3').attr('disabled', false);
        } else {
            $('#vbfireProofing2, #vbfireProofing3').attr('disabled', true);
        }  
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#vbpaint1, #vbpaint2, #vbgalvanization2, #vbaess1').attr('disabled', true);  
        // $('#chkprimer').removeAttr("disabled");
    });
    $('#chkaess').change(function() {
        if($(this).prop("checked") == true){
            $('#vbaess1').attr('disabled', false);
        } else {
            $('#vbaess1').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#vbpaint1, #vbpaint2, #vbgalvanization2, #vbfireProofing2, #vbfireProofing3').attr('disabled', true); 
    });
    // End Finish check
*/
    $(".hideAll").hide();
    $("#vBraceShapes").change(function() {
		$('#showcg').empty();
		$('#showcd').empty();
		var connectionvalue = $('option:selected', this).attr(
				'ctbg');
		var ctbgval = $('#vBraceShapes').val();
		var ctbdval = $('option:selected', this).attr('ctbd');
		if (ctbgval == "vfs") {
			var html = ' <div class="row m-b-10">'+ 
						'<div class="col-lg-12 col-md-12 ">'+ 
							'<div class="row pShape1">'
								+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
								+ '<div class="col-md-2 padding5">'
								+ '<label class="labelBlack control-label">Connection Mark</label>'
								+ '</div>'
								+ '<div class="col-md-3 padding5">'
								+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
								+ '</div>'
								+ '<div class="col-md-3 padding5">'
								+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
								+ '</div>'
								+ '<div class="col-md-3 padding5">'
								+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
								+ '</div>'
						    + '</div>'
							+ ' <div class="row m-b-10">'
								+ '<div class="col-lg-1 col-md-1 ">'
								+ '<label class=" numbubble">1</label>'
								+ ' </div>'
								+
								'<div class="col-lg-2 col-md-2 padding5">'
								+ '<select class="form-control" id="vBraceMark1">'
								+ '</select>'
								+ '</div>'
								+ '<div class="col-lg-3 col-md-3 padding5">'
								+ '<select class="form-control" id="vBraceMethodGusset1" disabled="true">'
								+ '</select>'
								+ '</div>'
								+ '<div class="col-lg-3 col-md-3 padding5">'
								+ '<select class="form-control" id="vBraceTypeBeam1" disabled="true">'
								+ '</select>'
								+ '</div>'
								+ '<div class="col-lg-3 col-md-3 p-l-5">'
								+ '<select class="form-control" id="vBraceMethodBeam1" disabled="true">'
								+ '</select>'
								+ '</div>'
							+ ' </div>'
							+ ' <div class="row m-b-10">'
								+ '<div class="col-lg-1 col-md-1 ">'
								+ '<label class=" numbubble">2</label>'
								+ ' </div>'
								+
								'<div class="col-lg-2 col-md-2 padding5">'
								+ '<select class="form-control" id="vBraceMark2">'
								+ '</select>'
								+ '</div>'
								+ '<div class="col-lg-3 col-md-3 padding5">'
								+ '<select class="form-control" id="vBraceMethodGusset2" disabled="true">'
								+ '</select>'
								+ '</div>'
								+ '<div class="col-lg-3 col-md-3 padding5">'
								+ '<select class="form-control" id="vBraceTypeBeam2" disabled="true">'
								+ '</select>'
								+ '</div>'
								+ '<div class="col-lg-3 col-md-3 p-l-5">'
								+ '<select class="form-control" id="vBraceMethodBeam2" disabled="true">'
								+ '</select>' 
								+ '</div>' 
							+ ' </div>'
						
							+ ' </div>'
						+ ' </div>' +
						
					' <div class="row m-b-10">'+
                        '<div class="col-lg-12 col-md-12 ">'+
                            '<div class="row pShape1 hideAll m-b-10">'+
                                '<div class="col-lg-12 col-md-12 text-center">'+
                                    '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/forward+slash.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/forward+slash.png">'+
                                '</div>'+
                            '</div>'+
						' </div>' + 
					  ' </div>'
			$('#showcg').append(html);
		
				var html1 = '<div class="row">'
						+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
						+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
						+ '<div class="col-lg-3 col-md-3 "></div>'
						+ '<div class="col-md-6 ">'
						+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
						+ '</div>'
						+ '</div>'
						+ '<div class="row pShape1 pShape2 hideAll">'
						+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
						+ '<div class="row m-b-10">'
						+ '<div class="col-lg-1 col-md-1 ">'
						+ '<label class=" numbubble">1</label>'
						+ '</div>'
						+ '<div class="col-lg-7 col-md-7 m-l-20">'
						+ '<input type="text" class="form-control per70" id="vaxialload1">'
						+ '<div class="txt-right">'
						+ ' Kips'
						+ '</div>'
						+ '</div>'
						+ '</div>'
						+ '</div>'
						+ ' </div>'
						+ ' </div>'
						+ '<div class="col-lg-6 col-md-6 m-b-10">'
						+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
						+ '<div class="row pShape1 hideAll m-b-10">'
						+ '<div class="col-lg-12 col-md-12 text-center">'
						+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/1.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/1.png">'
						+ '</div>' + '</div>' + '</div>' + '</div>'
				$('#showcd').append(html1);
			
		}

		else if (ctbgval == "vbs") {
			var html = ' <div class="row m-b-10">'+ 
			'<div class="col-lg-12 col-md-12 ">'+ 
				'<div class="row pShape1">'
					+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
					+ '<div class="col-md-2 padding5">'
					+ '<label class="labelBlack control-label">Connection Mark</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
					+ '</div>'
			    + '</div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark1">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
				+ ' </div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">2</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark2">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam2" disabled="true">'
					+ '</select>' 
					+ '</div>' 
				+ ' </div>'
			
				+ ' </div>'
			+ ' </div>' +
			
		' <div class="row m-b-10">'+
            '<div class="col-lg-12 col-md-12 ">'+
                '<div class="row pShape1 hideAll m-b-10">'+
                    '<div class="col-lg-12 col-md-12 text-center">'+
                        '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/backward+slash.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/backward+slash.png">'+
                    '</div>'+
                '</div>'+
			' </div>' + 
		  ' </div>'
$('#showcg').append(html);

	var html1 = '<div class="row">'
			+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
			+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">1</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload1">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ ' </div>'
			+ ' </div>'
			+ '<div class="col-lg-6 col-md-6 m-b-10">'
			+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
			+ '<div class="row pShape1 hideAll m-b-10">'
			+ '<div class="col-lg-12 col-md-12 text-center">'
			+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/2.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/2.png">'
			+ '</div>' + '</div>' + '</div>' + '</div>'
	$('#showcd').append(html1);
			} 
		
		else if (ctbgval == "vxs") {
			var html = ' <div class="row m-b-10">'+ 
			'<div class="col-lg-12 col-md-12 ">'+ 
				'<div class="row pShape1">'
					+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
					+ '<div class="col-md-2 padding5">'
					+ '<label class="labelBlack control-label">Connection Mark</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
					+ '</div>'
			    + '</div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark1">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
				+ ' </div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">2</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark2">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam2" disabled="true">'
					+ '</select>' 
					+ '</div>' 
				+ ' </div>'
				+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">3</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="vBraceMark3">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceMethodGusset3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceTypeBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="vBraceMethodBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">4</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="vBraceMark4">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="vBraceMethodGusset4" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="vBraceTypeBeam4" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="vBraceMethodBeam4" disabled="true">'
			+ '</select>'
			+ '</div>'
		+ ' </div>'
		+ ' <div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">5</label>'
		+ ' </div>'
		+
		'<div class="col-lg-2 col-md-2 padding5">'
		+ '<select class="form-control" id="vBraceMark5">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="vBraceMethodGusset5" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="vBraceTypeBeam5" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 p-l-5">'
		+ '<select class="form-control" id="vBraceMethodBeam5" disabled="true">'
		+ '</select>'
		+ '</div>'
	+ ' </div>'
				+ ' </div>'
			+ ' </div>' +
			
		' <div class="row m-b-10">'+
            '<div class="col-lg-12 col-md-12 ">'+
                '<div class="row pShape1 hideAll m-b-10">'+
                    '<div class="col-lg-12 col-md-12 text-center">'+
                        '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/X.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/X.png">'+
                    '</div>'+
                '</div>'+
			' </div>' + 
		  ' </div>'
$('#showcg').append(html);

	var html1 = '<div class="row">'
			+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
			+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">1</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload1">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload2">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			
			+ ' </div>'
			+ ' </div>'
			+ '<div class="col-lg-6 col-md-6 m-b-10">'
			+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
			+ '<div class="row pShape1 hideAll m-b-10">'
			+ '<div class="col-lg-12 col-md-12 text-center">'
			+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/3.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/3.png">'
			+ '</div>' + '</div>' + '</div>' + '</div>'
	$('#showcd').append(html1);
			} 
		
		else if (ctbgval == "vvs") {
			var html = ' <div class="row m-b-10">'+ 
			'<div class="col-lg-12 col-md-12 ">'+ 
				'<div class="row pShape1">'
					+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
					+ '<div class="col-md-2 padding5">'
					+ '<label class="labelBlack control-label">Connection Mark</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
					+ '</div>'
			    + '</div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark1">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
				+ ' </div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">2</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark2">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam2" disabled="true">'
					+ '</select>' 
					+ '</div>' 
				+ ' </div>'
				+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="vBraceMark3">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceMethodGusset3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceTypeBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="vBraceMethodBeam3" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
				+ ' </div>'
			+ ' </div>' +
			
		' <div class="row m-b-10">'+
            '<div class="col-lg-12 col-md-12 ">'+
                '<div class="row pShape1 hideAll m-b-10">'+
                    '<div class="col-lg-12 col-md-12 text-center">'+
                        '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V1.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V1.png">'+
                    '</div>'+
                '</div>'+
			' </div>' + 
		  ' </div>'
$('#showcg').append(html);

	var html1 = '<div class="row">'
			+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
			+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">1</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload1">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload2">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ ' </div>'
			+ ' </div>'
			+ '<div class="col-lg-6 col-md-6 m-b-10">'
			+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
			+ '<div class="row pShape1 hideAll m-b-10">'
			+ '<div class="col-lg-12 col-md-12 text-center">'
			+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/4.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/4.png">'
			+ '</div>' + '</div>' + '</div>' + '</div>'
	$('#showcd').append(html1);
			} 			
		else if (ctbgval == "vas") {
			var html = ' <div class="row m-b-10">'+ 
			'<div class="col-lg-12 col-md-12 ">'+ 
				'<div class="row pShape1">'
					+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
					+ '<div class="col-md-2 padding5">'
					+ '<label class="labelBlack control-label">Connection Mark</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
					+ '</div>'
			    + '</div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark1">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
				+ ' </div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">2</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark2">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam2" disabled="true">'
					+ '</select>' 
					+ '</div>' 
				+ ' </div>'
				+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="vBraceMark3">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceMethodGusset3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceTypeBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="vBraceMethodBeam3" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
				+ ' </div>'
			+ ' </div>' +
			
		' <div class="row m-b-10">'+
            '<div class="col-lg-12 col-md-12 ">'+
                '<div class="row pShape1 hideAll m-b-10">'+
                    '<div class="col-lg-12 col-md-12 text-center">'+
                        '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V2.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V2.png">'+
                    '</div>'+
                '</div>'+
			' </div>' + 
		  ' </div>'
$('#showcg').append(html);

	var html1 = '<div class="row">'
			+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
			+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">1</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload1">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload2">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ ' </div>'
			+ ' </div>'
			+ '<div class="col-lg-6 col-md-6 m-b-10">'
			+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
			+ '<div class="row pShape1 hideAll m-b-10">'
			+ '<div class="col-lg-12 col-md-12 text-center">'
			+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/5.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/5.png">'
			+ '</div>' + '</div>' + '</div>' + '</div>'
	$('#showcd').append(html1);
			} 			
		
		else if (ctbgval == "vds") {
			var html = ' <div class="row m-b-10">'+ 
			'<div class="col-lg-12 col-md-12 ">'+ 
				'<div class="row pShape1">'
					+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
					+ '<div class="col-md-2 padding5">'
					+ '<label class="labelBlack control-label">Connection Mark</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
					+ '</div>'
			    + '</div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark1">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
				+ ' </div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">2</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark2">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam2" disabled="true">'
					+ '</select>' 
					+ '</div>' 
				+ ' </div>'
				+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="vBraceMark3">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceMethodGusset3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceTypeBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="vBraceMethodBeam3" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
				+ ' </div>'
			+ ' </div>' +
			
		' <div class="row m-b-10">'+
            '<div class="col-lg-12 col-md-12 ">'+
                '<div class="row pShape1 hideAll m-b-10">'+
                    '<div class="col-lg-12 col-md-12 text-center">'+
                        '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V3.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V3.png">'+
                    '</div>'+
                '</div>'+
			' </div>' + 
		  ' </div>'
$('#showcg').append(html);

	var html1 = '<div class="row">'
			+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
			+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">1</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload1">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload2">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ ' </div>'
			+ ' </div>'
			+ '<div class="col-lg-6 col-md-6 m-b-10">'
			+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
			+ '<div class="row pShape1 hideAll m-b-10">'
			+ '<div class="col-lg-12 col-md-12 text-center">'
			+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/6.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/6.png">'
			+ '</div>' + '</div>' + '</div>' + '</div>'
	$('#showcd').append(html1);
			} 	
		else if (ctbgval == "vps") {
			var html = ' <div class="row m-b-10">'+ 
			'<div class="col-lg-12 col-md-12 ">'+ 
				'<div class="row pShape1">'
					+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
					+ '<div class="col-md-2 padding5">'
					+ '<label class="labelBlack control-label">Connection Mark</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
					+ '</div>'
			    + '</div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark1">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
				+ ' </div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">2</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark2">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam2" disabled="true">'
					+ '</select>' 
					+ '</div>' 
				+ ' </div>'
				+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">2</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="vBraceMark3">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceMethodGusset3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceTypeBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="vBraceMethodBeam3" disabled="true">'
				+ '</select>' 
				+ '</div>' 
			+ ' </div>'
				+ ' </div>'
			+ ' </div>' +
			
		' <div class="row m-b-10">'+
            '<div class="col-lg-12 col-md-12 ">'+
                '<div class="row pShape1 hideAll m-b-10">'+
                    '<div class="col-lg-12 col-md-12 text-center">'+
                        '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V4.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/V4.png">'+
                    '</div>'+
                '</div>'+
			' </div>' + 
		  ' </div>'
$('#showcg').append(html);

	var html1 = '<div class="row">'
			+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
			+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">1</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload1">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload2">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ ' </div>'
			+ ' </div>'
			+ '<div class="col-lg-6 col-md-6 m-b-10">'
			+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
			+ '<div class="row pShape1 hideAll m-b-10">'
			+ '<div class="col-lg-12 col-md-12 text-center">'
			+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/7.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/7.png">'
			+ '</div>' + '</div>' + '</div>' + '</div>'
	$('#showcd').append(html1);
			} 	
		
		else if (ctbgval == "vws") {
			var html = ' <div class="row m-b-10">'+ 
			'<div class="col-lg-12 col-md-12 ">'+ 
				'<div class="row pShape1">'
					+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
					+ '<div class="col-md-2 padding5">'
					+ '<label class="labelBlack control-label">Connection Mark</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
					+ '</div>'
			    + '</div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark1">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
				+ ' </div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">2</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark2">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam2" disabled="true">'
					+ '</select>' 
					+ '</div>' 
				+ ' </div>'
				+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">3</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="vBraceMark3">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceMethodGusset3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceTypeBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="vBraceMethodBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">4</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="vBraceMark4">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="vBraceMethodGusset4" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="vBraceTypeBeam4" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="vBraceMethodBeam4" disabled="true">'
			+ '</select>'
			+ '</div>'
		+ ' </div>'
		+ ' <div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">5</label>'
		+ ' </div>'
		+
		'<div class="col-lg-2 col-md-2 padding5">'
		+ '<select class="form-control" id="vBraceMark5">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="vBraceMethodGusset5" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="vBraceTypeBeam5" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 p-l-5">'
		+ '<select class="form-control" id="vBraceMethodBeam5" disabled="true">'
		+ '</select>'
		+ '</div>'
	+ ' </div>'
				+ ' </div>'
			+ ' </div>' +
			
		' <div class="row m-b-10">'+
            '<div class="col-lg-12 col-md-12 ">'+
                '<div class="row pShape1 hideAll m-b-10">'+
                    '<div class="col-lg-12 col-md-12 text-center">'+
                        '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W.png">'+
                    '</div>'+
                '</div>'+
			' </div>' + 
		  ' </div>'
$('#showcg').append(html);

	var html1 = '<div class="row">'
			+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
			+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">1</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload1">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload2">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">3</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload3">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">4</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload4">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			
			+ ' </div>'
			+ ' </div>'
			+ '<div class="col-lg-6 col-md-6 m-b-10">'
			+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
			+ '<div class="row pShape1 hideAll m-b-10">'
			+ '<div class="col-lg-12 col-md-12 text-center">'
			+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/8.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/8.png">'
			+ '</div>' + '</div>' + '</div>' + '</div>'
	$('#showcd').append(html1);
			} 
		
		else if (ctbgval == "vms") {
			var html = ' <div class="row m-b-10">'+ 
			'<div class="col-lg-12 col-md-12 ">'+ 
				'<div class="row pShape1">'
					+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
					+ '<div class="col-md-2 padding5">'
					+ '<label class="labelBlack control-label">Connection Mark</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
					+ '</div>'
			    + '</div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark1">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
				+ ' </div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">2</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark2">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam2" disabled="true">'
					+ '</select>' 
					+ '</div>' 
				+ ' </div>'
				+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">3</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="vBraceMark3">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceMethodGusset3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceTypeBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="vBraceMethodBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">4</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="vBraceMark4">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="vBraceMethodGusset4" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="vBraceTypeBeam4" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="vBraceMethodBeam4" disabled="true">'
			+ '</select>'
			+ '</div>'
		+ ' </div>'
		+ ' <div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">5</label>'
		+ ' </div>'
		+
		'<div class="col-lg-2 col-md-2 padding5">'
		+ '<select class="form-control" id="vBraceMark5">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="vBraceMethodGusset5" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="vBraceTypeBeam5" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 p-l-5">'
		+ '<select class="form-control" id="vBraceMethodBeam5" disabled="true">'
		+ '</select>'
		+ '</div>'
	+ ' </div>'
				+ ' </div>'
			+ ' </div>' +
			
		' <div class="row m-b-10">'+
            '<div class="col-lg-12 col-md-12 ">'+
                '<div class="row pShape1 hideAll m-b-10">'+
                    '<div class="col-lg-12 col-md-12 text-center">'+
                        '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/M.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/M.png">'+
                    '</div>'+
                '</div>'+
			' </div>' + 
		  ' </div>'
$('#showcg').append(html);

	var html1 = '<div class="row">'
			+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
			+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">1</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload1">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload2">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">3</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload3">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">4</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload4">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			
			+ ' </div>'
			+ ' </div>'
			+ '<div class="col-lg-6 col-md-6 m-b-10">'
			+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
			+ '<div class="row pShape1 hideAll m-b-10">'
			+ '<div class="col-lg-12 col-md-12 text-center">'
			+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/9.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/9.png">'
			+ '</div>' + '</div>' + '</div>' + '</div>'
	$('#showcd').append(html1);
			} 
		
		else if (ctbgval == "ves") {
			var html = ' <div class="row m-b-10">'+ 
			'<div class="col-lg-12 col-md-12 ">'+ 
				'<div class="row pShape1">'
					+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
					+ '<div class="col-md-2 padding5">'
					+ '<label class="labelBlack control-label">Connection Mark</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
					+ '</div>'
			    + '</div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark1">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
				+ ' </div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">2</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark2">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam2" disabled="true">'
					+ '</select>' 
					+ '</div>' 
				+ ' </div>'
				+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">3</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="vBraceMark3">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceMethodGusset3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceTypeBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="vBraceMethodBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">4</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="vBraceMark4">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="vBraceMethodGusset4" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="vBraceTypeBeam4" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="vBraceMethodBeam4" disabled="true">'
			+ '</select>'
			+ '</div>'
		+ ' </div>'
		+ ' <div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">5</label>'
		+ ' </div>'
		+
		'<div class="col-lg-2 col-md-2 padding5">'
		+ '<select class="form-control" id="vBraceMark5">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="vBraceMethodGusset5" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="vBraceTypeBeam5" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 p-l-5">'
		+ '<select class="form-control" id="vBraceMethodBeam5" disabled="true">'
		+ '</select>'
		+ '</div>'
	+ ' </div>'
				+ ' </div>'
			+ ' </div>' +
			
		' <div class="row m-b-10">'+
            '<div class="col-lg-12 col-md-12 ">'+
                '<div class="row pShape1 hideAll m-b-10">'+
                    '<div class="col-lg-12 col-md-12 text-center">'+
                        '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W1.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W1.png">'+
                    '</div>'+
                '</div>'+
			' </div>' + 
		  ' </div>'
$('#showcg').append(html);

	var html1 = '<div class="row">'
			+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
			+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">1</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload1">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload2">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">3</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload3">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">4</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload4">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			
			+ ' </div>'
			+ ' </div>'
			+ '<div class="col-lg-6 col-md-6 m-b-10">'
			+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
			+ '<div class="row pShape1 hideAll m-b-10">'
			+ '<div class="col-lg-12 col-md-12 text-center">'
			+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/10.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/10.png">'
			+ '</div>' + '</div>' + '</div>' + '</div>'
	$('#showcd').append(html1);
			} 
		
		else {
			var html = ' <div class="row m-b-10">'+ 
			'<div class="col-lg-12 col-md-12 ">'+ 
				'<div class="row pShape1">'
					+ '<div class="col-lg-1 col-md-1 p-l-0"></div>'
					+ '<div class="col-md-2 padding5">'
					+ '<label class="labelBlack control-label">Connection Mark</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ '<label class="labelBlack control-label">Connection Method - Brace to Gusset</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Type - Gusset to Beam</label>'
					+ '</div>'
					+ '<div class="col-md-3 padding5">'
					+ ' <label class="labelBlack control-label">Connection Method - Gusset to Beam</label>'
					+ '</div>'
			    + '</div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">1</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark1">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam1" disabled="true">'
					+ '</select>'
					+ '</div>'
				+ ' </div>'
				+ ' <div class="row m-b-10">'
					+ '<div class="col-lg-1 col-md-1 ">'
					+ '<label class=" numbubble">2</label>'
					+ ' </div>'
					+
					'<div class="col-lg-2 col-md-2 padding5">'
					+ '<select class="form-control" id="vBraceMark2">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceMethodGusset2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 padding5">'
					+ '<select class="form-control" id="vBraceTypeBeam2" disabled="true">'
					+ '</select>'
					+ '</div>'
					+ '<div class="col-lg-3 col-md-3 p-l-5">'
					+ '<select class="form-control" id="vBraceMethodBeam2" disabled="true">'
					+ '</select>' 
					+ '</div>' 
				+ ' </div>'
				+ ' <div class="row m-b-10">'
				+ '<div class="col-lg-1 col-md-1 ">'
				+ '<label class=" numbubble">3</label>'
				+ ' </div>'
				+
				'<div class="col-lg-2 col-md-2 padding5">'
				+ '<select class="form-control" id="vBraceMark3">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceMethodGusset3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 padding5">'
				+ '<select class="form-control" id="vBraceTypeBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
				+ '<div class="col-lg-3 col-md-3 p-l-5">'
				+ '<select class="form-control" id="vBraceMethodBeam3" disabled="true">'
				+ '</select>'
				+ '</div>'
			+ ' </div>'
			+ ' <div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">4</label>'
			+ ' </div>'
			+
			'<div class="col-lg-2 col-md-2 padding5">'
			+ '<select class="form-control" id="vBraceMark4">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="vBraceMethodGusset4" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 padding5">'
			+ '<select class="form-control" id="vBraceTypeBeam4" disabled="true">'
			+ '</select>'
			+ '</div>'
			+ '<div class="col-lg-3 col-md-3 p-l-5">'
			+ '<select class="form-control" id="vBraceMethodBeam4" disabled="true">'
			+ '</select>'
			+ '</div>'
		+ ' </div>'
		+ ' <div class="row m-b-10">'
		+ '<div class="col-lg-1 col-md-1 ">'
		+ '<label class=" numbubble">5</label>'
		+ ' </div>'
		+
		'<div class="col-lg-2 col-md-2 padding5">'
		+ '<select class="form-control" id="vBraceMark5">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="vBraceMethodGusset5" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 padding5">'
		+ '<select class="form-control" id="vBraceTypeBeam5" disabled="true">'
		+ '</select>'
		+ '</div>'
		+ '<div class="col-lg-3 col-md-3 p-l-5">'
		+ '<select class="form-control" id="vBraceMethodBeam5" disabled="true">'
		+ '</select>'
		+ '</div>'
	+ ' </div>'
				+ ' </div>'
			+ ' </div>' +
			
		' <div class="row m-b-10">'+
            '<div class="col-lg-12 col-md-12 ">'+
                '<div class="row pShape1 hideAll m-b-10">'+
                    '<div class="col-lg-12 col-md-12 text-center">'+
                        '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W2.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/W2.png">'+
                    '</div>'+
                '</div>'+
			' </div>' + 
		  ' </div>'
$('#showcg').append(html);

	var html1 = '<div class="row">'
			+ '<div class="col-lg-6 col-md-6 padding5 borderRight">'
			+ '<div class="row m-b-10 pShape1 pShape2 pShape3 pShape4 pShape6 pShape7 pShape8 pShape5 pShape9 pShape10 pShape11 ideAll">'
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">1</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload1">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">2</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload2">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">3</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload3">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			+ '<div class="col-lg-3 col-md-3 "></div>'
			+ '<div class="col-md-6 ">'
			+ '<label class="labelBlack control-label p-l-10">Axial Load</label>'
			+ '</div>'
			+ '</div>'
			+ '<div class="row pShape1 pShape2 hideAll">'
			+ '<div class="col-lg-8 col-md-8 m-b-10 m-l-40">'
			+ '<div class="row m-b-10">'
			+ '<div class="col-lg-1 col-md-1 ">'
			+ '<label class=" numbubble">4</label>'
			+ '</div>'
			+ '<div class="col-lg-7 col-md-7 m-l-20">'
			+ '<input type="text" class="form-control per70" id="vaxialload4">'
			+ '<div class="txt-right">'
			+ ' Kips'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
			
			
			+ ' </div>'
			+ ' </div>'
			+ '<div class="col-lg-6 col-md-6 m-b-10">'
			+ '<label class="labelBlack control-label col-lg-12 p-0"><b> Load Details:</b></label>'
			+ '<div class="row pShape1 hideAll m-b-10">'
			+ '<div class="col-lg-12 col-md-12 text-center">'
			+ '<img class="imgwidth125" src="https://dvlc9qcftewvt.cloudfront.net/assets/images/11.svg" alt="Your Logo Alt" onerror="this.src="https://dvlc9qcftewvt.cloudfront.net/assets/images/11.png">'
			+ '</div>' + '</div>' + '</div>' + '</div>'
	$('#showcd').append(html1);
			} 
		$('#vBraceMark1').empty();
		var profilename = $("#vBraceProfile").val();
		var filtered = $.grep(connectionObjList,
				function(el) {
					if (profilename.indexOf(el.profile) >= 0
							&& el.type.toLowerCase().indexOf(
									"verticalbrace") >= 0) {
						return el.profile;
					}
				});
		$.each(filtered, function(key, value) {

			var ConnectionMark = "<option>" + value.connectionMark
					+ "</option>";
			$(ConnectionMark).appendTo('#vBraceMark1');
			$(ConnectionMark).appendTo('#vBraceMark2');
			$(ConnectionMark).appendTo('#vBraceMark3');
			$(ConnectionMark).appendTo('#vBraceMark4');
			$(ConnectionMark).appendTo('#vBraceMark5');

		});
		$('#vBraceMethodGusset1').empty();
		$('#vBraceMethodGusset2').empty();
		$('#vBraceMethodGusset3').empty();
		$('#vBraceMethodGusset4').empty();
		$('#vBraceMethodGusset5').empty();

		var connectionmark = $("#vBraceMark1").val();
		if (connectionmark != null) {
			var btogusset = $.grep(connectionObjList, function(el) {

				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.bracetogusset;

				}
			});

			$.each(btogusset, function(key, value) {
				var supportbeam = "<option>" + value.bracetogusset
						+ "</option>";
				$(supportbeam).appendTo('#vBraceMethodGusset1');
				$(supportbeam).appendTo('#vBraceMethodGusset2');
				$(supportbeam).appendTo('#vBraceMethodGusset3');
				$(supportbeam).appendTo('#vBraceMethodGusset4');
				$(supportbeam).appendTo('#vBraceMethodGusset5');

			});
			$('#vBraceTypeBeam1').empty();
			$('#vBraceTypeBeam2').empty();
			$('#vBraceTypeBeam3').empty();
			$('#vBraceTypeBeam4').empty();
			$('#vBraceTypeBeam5').empty();

			var conntype = $.grep(connectionObjList, function(el) {

				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.conntype;

				}
			});

			$.each(conntype, function(key, value) {
				var supportbeam = "<option>" + value.conntype
						+ "</option>";
				$(supportbeam).appendTo('#vBraceTypeBeam1');
				$(supportbeam).appendTo('#vBraceTypeBeam2');
				$(supportbeam).appendTo('#vBraceTypeBeam3');
				$(supportbeam).appendTo('#vBraceTypeBeam4');
				$(supportbeam).appendTo('#vBraceTypeBeam5');

			});
			$('#vBraceMethodBeam1').empty();
			$('#vBraceMethodBeam2').empty();
			$('#vBraceMethodBeam3').empty();
			$('#vBraceMethodBeam4').empty();
			$('#vBraceMethodBeam5').empty();

			var gtobeam = $.grep(connectionObjList, function(el) {

				if (el.connectionMark != null
						&& (connectionmark
								.indexOf(el.connectionMark) >= 0)) {

					return el.gussettobeam;

				}
			});

			$.each(gtobeam, function(key, value) {
				var supportbeam = "<option>" + value.gussettobeam
						+ "</option>";
				$(supportbeam).appendTo('#vBraceMethodBeam1');
				$(supportbeam).appendTo('#vBraceMethodBeam2');
				$(supportbeam).appendTo('#vBraceMethodBeam3');
				$(supportbeam).appendTo('#vBraceMethodBeam4');
				$(supportbeam).appendTo('#vBraceMethodBeam5');

			});
	}
		$("#vBraceMark1").change(function() { 
			var connectionmark = $("#vBraceMark1").val();
			if (connectionmark != null) {
				$('#vBraceMethodGusset1').empty();
				var btogusset = $.grep(connectionObjList, function(el) {
					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {

						return el.bracetogusset;
						alert(connectionmark);
					}
				});
				$.each(btogusset, function(key, value) {
					var supportbeam = "<option>" + value.bracetogusset
							+ "</option>";
					$(supportbeam).appendTo('#vBraceMethodGusset1');
				});
				$('#vBraceTypeBeam1').empty();
				var conntype = $.grep(connectionObjList, function(el) {

					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {

						return el.conntype;

					}
				});
				$.each(conntype, function(key, value) {
					var supportbeam = "<option>" + value.conntype
							+ "</option>";
					$(supportbeam).appendTo('#vBraceTypeBeam1');
				});
				$('#vBraceMethodBeam1').empty();
				var gtobeam = $.grep(connectionObjList, function(el) {
					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {
						return el.gussettobeam;
					}
				});
				$.each(gtobeam, function(key, value) {
					var supportbeam = "<option>" + value.gussettobeam + "</option>";
					$(supportbeam).appendTo('#vBraceMethodBeam1');
					
				});
		}
			
		});
		
		$("#vBraceMark2").change(function() { 
			var connectionmark = $("#vBraceMark2").val();
			if (connectionmark != null) {
				$('#vBraceMethodGusset2').empty();
				var btogusset = $.grep(connectionObjList, function(el) {
					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {

						return el.bracetogusset;
						alert(connectionmark);
					}
				});
				$.each(btogusset, function(key, value) {
					var supportbeam = "<option>" + value.bracetogusset
							+ "</option>";
					$(supportbeam).appendTo('#vBraceMethodGusset2');
				});
				$('#vBraceTypeBeam2').empty();
				var conntype = $.grep(connectionObjList, function(el) {

					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {

						return el.conntype;

					}
				});
				$.each(conntype, function(key, value) {
					var supportbeam = "<option>" + value.conntype
							+ "</option>";
					$(supportbeam).appendTo('#vBraceTypeBeam2');
				});
				$('#vBraceMethodBeam2').empty();
				var gtobeam = $.grep(connectionObjList, function(el) {
					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {
						return el.gussettobeam;
					}
				});
				$.each(gtobeam, function(key, value) {
					var supportbeam = "<option>" + value.gussettobeam + "</option>";
					$(supportbeam).appendTo('#vBraceMethodBeam2');
					
				});
		}
			
		});
		$("#vBraceMark3").change(function() { 
			var connectionmark = $("#vBraceMark3").val();
			if (connectionmark != null) {
				$('#vBraceMethodGusset3').empty();
				var btogusset = $.grep(connectionObjList, function(el) {
					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {

						return el.bracetogusset;
						alert(connectionmark);
					}
				});
				$.each(btogusset, function(key, value) {
					var supportbeam = "<option>" + value.bracetogusset
							+ "</option>";
					$(supportbeam).appendTo('#vBraceMethodGusset3');
				});
				$('#vBraceTypeBeam3').empty();
				var conntype = $.grep(connectionObjList, function(el) {

					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {

						return el.conntype;

					}
				});
				$.each(conntype, function(key, value) {
					var supportbeam = "<option>" + value.conntype
							+ "</option>";
					$(supportbeam).appendTo('#vBraceTypeBeam3');
				});
				$('#vBraceMethodBeam3').empty();
				var gtobeam = $.grep(connectionObjList, function(el) {
					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {
						return el.gussettobeam;
					}
				});
				$.each(gtobeam, function(key, value) {
					var supportbeam = "<option>" + value.gussettobeam + "</option>";
					$(supportbeam).appendTo('#vBraceMethodBeam3');
					
				});
		}
			
		});
		$("#vBraceMark4").change(function() { 
			var connectionmark = $("#vBraceMark4").val();
			if (connectionmark != null) {
				$('#vBraceMethodGusset4').empty();
				var btogusset = $.grep(connectionObjList, function(el) {
					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {

						return el.bracetogusset;
						alert(connectionmark);
					}
				});
				$.each(btogusset, function(key, value) {
					var supportbeam = "<option>" + value.bracetogusset
							+ "</option>";
					$(supportbeam).appendTo('#vBraceMethodGusset4');
				});
				$('#vBraceTypeBeam4').empty();
				var conntype = $.grep(connectionObjList, function(el) {

					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {

						return el.conntype;

					}
				});
				$.each(conntype, function(key, value) {
					var supportbeam = "<option>" + value.conntype
							+ "</option>";
					$(supportbeam).appendTo('#vBraceTypeBeam4');
				});
				$('#vBraceMethodBeam4').empty();
				var gtobeam = $.grep(connectionObjList, function(el) {
					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {
						return el.gussettobeam;
					}
				});
				$.each(gtobeam, function(key, value) {
					var supportbeam = "<option>" + value.gussettobeam + "</option>";
					$(supportbeam).appendTo('#vBraceMethodBeam4');
					
				});
		}
			
		});
		$("#vBraceMark5").change(function() { 
			var connectionmark = $("#vBraceMark5").val();
			if (connectionmark != null) {
				$('#vBraceMethodGusset5').empty();
				var btogusset = $.grep(connectionObjList, function(el) {
					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {

						return el.bracetogusset;
						alert(connectionmark);
					}
				});
				$.each(btogusset, function(key, value) {
					var supportbeam = "<option>" + value.bracetogusset
							+ "</option>";
					$(supportbeam).appendTo('#vBraceMethodGusset5');
				});
				$('#vBraceTypeBeam5').empty();
				var conntype = $.grep(connectionObjList, function(el) {

					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {

						return el.conntype;

					}
				});
				$.each(conntype, function(key, value) {
					var supportbeam = "<option>" + value.conntype
							+ "</option>";
					$(supportbeam).appendTo('#vBraceTypeBeam5');
				});
				$('#vBraceMethodBeam5').empty();
				var gtobeam = $.grep(connectionObjList, function(el) {
					if (el.connectionMark != null
							&& (connectionmark
									.indexOf(el.connectionMark) >= 0)) {
						return el.gussettobeam;
					}
				});
				$.each(gtobeam, function(key, value) {
					var supportbeam = "<option>" + value.gussettobeam + "</option>";
					$(supportbeam).appendTo('#vBraceMethodBeam5');
					
				});
		}
			
		});
	});

      function show1() {
          document.getElementById('showcg').style.display = 'block';
          document.getElementById('showcd').style.display = 'none';
      }
      function show2() {
          document.getElementById('showcd').style.display = 'block';
          document.getElementById('showcg').style.display = 'none';
      }
    
      $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
      });
      
      $("#vBraceProfile").change(function(){
  		$("#vbprofile .select2-container--default .select2-selection--single").removeClass("importantRed");
  		});
  	$("#vBraceMaterialGrade").change(function(){
  		$("#vbgrade .select2-container--default .select2-selection--single").removeClass("importantRed");
  		});
  	
  	$("#vBraceShapes").change(function(){
  		$("#vBraceShapes").removeClass("importantRed");
  		});