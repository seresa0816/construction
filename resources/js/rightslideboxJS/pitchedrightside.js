function pitchedMandatoryValidation(event){
	    		if(($('#pitchedprofile,#pitchedgrade,#pitchedprofile1,#pitchedgrade1,#pitchedprofile2,#pitchedgrade2,#pitchedprofile3,#pitchedgrade3,#shapeicons').prop('selectedIndex')) == 0) {
	    			event.preventDefault();
	    			
	    			}
	    		if($('#pitchtlengthft,#pitchtheightft,#RidgepointFromLendft,#pitchtlengthft,#pitchtheightft') == "" || $('#pitchtlengthft,#pitchtheightft,#RidgepointFromLendft,#pitchtlengthft,#pitchtheightft') == undefined){
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
         $(profiles).appendTo('#pitchedprofile3,#pitchedprofile2,#pitchedprofile,#pitchedprofile1,#topchordprofile1,#bottomchordprofile1'); 

     });
        
             $.each( wsDropDown.BeamOrientation, function(key, value) {
               var profiles="<option>"+value.Beam_Orientation+"</option>";
                     $(profiles).appendTo('#pitchmemorientation2,#pitchmemorientation,#pitchedorientation,#pitchedorientation1,#parallelmemorientation2,#parallelmodalorientation3'); 
         
             }); 
             
          
             /* $.each(wsDropDown.MaterialGrade, function(index,data) {   
              var datasource="<option>"+data.MaterialGrade+"</option>";
                    $(datasource).appendTo('#pitchedgrade,#pitchedgrade1,#pitchedgrade2,#pitchedgrade3'); 
               
            });*/
           $.each(wsDropDown.SpacingBetweenVerticals, function(index,data) {   
            var datasource="<option>"+data.SpacingVerticals+"</option>";
                 $(datasource).appendTo('#pt1verticals'); 
             
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
            
            $('<option>').val(data.fr).text(data.fr_fra).appendTo('#pitinclined2,#RidgepointFromLendfr,#pitchtlengthfr,#pitchtheightfr');
           
           
        });
          
        $.each(wsDropDown.Inch, function(index,data) {   
             $('<option>').val(data.Inch).text(data.Inch).appendTo('#pitinclined1,#RidgepointFromLendin,#pitchtlengthin,#pitchtheightin');
        });
            
            
     
         if(RefDwgNumFiles){
         $.each(RefDwgNumFiles, function(index,data) { 
        		
        		var referencenum="<option>"+data+"</option>";
        		
        	     $(referencenum).appendTo('#referencenum'); 
        	     
        		});  
         }
  
    
	$("#pitchedprofile").change(function(){
	    var profilename = $(this).val();
		   $('#pitchedgrade').empty();
			 getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#pitchedgrade'); 
		           
		           
				   
				});  
		   
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			 $('#pitchedgrade').val(profileshgrade);
			             
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     		 $('#pitchedgrade').val(hssgrade);
		          
		         }
		     	} 
		     	else{
		     		if(anglegrade != ''){
		     			$('#pitchedgrade').val(anglegrade);
			          
			         }
		     	}
		     }
		   
		 
	    
		   $('#spliceRows').empty();
			
			   $('#tpitsplicecount').prop('selectedIndex',0);
	    $('#pitchconmark1').empty();
	    $('#pitchconmark5').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussend")>=0){
	        	return el.profile;
	        }
	    });
	
	    
	   
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#pitchconmark1').prop('selected', true); 
		         $(ConnectionMark).appendTo('#pitchconmark5').prop('selected', true); 
		   });
		
		$('#pitchconmark2').empty();
	    $('#pitchconmark6').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trusssplice")>=0){
	        	return el.profile;
	        }
	    });
	
	    
	  
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#pitchconmark2'); 
		         $(ConnectionMark).appendTo('#pitchconmark6'); 
		   });
	//	$("#pitchconntab").click(function(){
			 var connectionmark1 = $("#pitchconmark1").val();
			
			 
			 if(connectionmark1 != null){
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.trussConn;
			        }
			    });
			 $.each(conntype, function(key, value) {
				 var supportbeam="<option>"+value.trussConn+"</option>";
		         $(supportbeam).appendTo('#pitchconmark3'); 
			     
			         
			   });
			 
				
			 $('#pitchconmark4').empty();
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#pitchconmark4'); 
			        
			   });
			 }  
			 var connectionmark2 = $("#pitchconmark5").val();
		
			 if(connectionmark2 != null){
			 
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0)){
			        	
			        	return el.trussConn;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
				 var supportbeam="<option>"+value.trussConn+"</option>";
		         $(supportbeam).appendTo('#pitchconmark7');      
			      
			         
			         
			   });
			 
			
			    $('#pitchconmark8').empty();
			 
			
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#pitchconmark8'); 
			        
			   });
			
			 }
			
		});	
	
	//});
	$("#pitchedprofile1").change(function(){
		var profilename = $(this).val();
		   $('#pitchedgrade1').empty();
			 getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#pitchedgrade1'); 
		           
		           
				   
				});  
		   
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			 $('#pitchedgrade1').val(profileshgrade);
			             
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     		 $('#pitchedgrade1').val(hssgrade);
		          
		         }
		     	} 
		     	else{
		     		if(anglegrade != ''){
		     			$('#pitchedgrade1').val(anglegrade);
			          
			         }
		     	}
		     }
		   $('#spliceRows').empty();
		   $('#tpitsplicecount').prop('selectedIndex',0);
	    
	    $('#pitchconmark9').empty();
	    $('#pitchconmark13').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussend")>=0){
	        	return el.profile;
	        }
	    });
	   
	    
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#pitchconmark9'); 
		         $(ConnectionMark).appendTo('#pitchconmark13'); 
		   });
		
		 $('#pitchconmark10').empty();
		    $('#pitchconmark14').empty();
		    
		    var filtered = $.grep(connectionObjList, function (el) {
		    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trusssplice")>=0){
		        	return el.profile;
		        }
		    });
		 
		    
		  
			$.each(filtered, function(key, value) {
			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
			         $(ConnectionMark).appendTo('#pitchconmark10'); 
			         $(ConnectionMark).appendTo('#pitchconmark14'); 
			   });
			//$("#pitchconntab").click(function(){
				 var connectionmark1 = $("#pitchconmark9").val();
			
				 if(connectionmark1 != null){
				 
				 var conntype = $.grep(connectionObjList, function (el) {
				        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
				        	
				        	return el.trussConn;
				        }
				    });
				 $.each(conntype, function(key, value) {
					 var supportbeam="<option>"+value.trussConn+"</option>";
			         $(supportbeam).appendTo('#pitchconmark11'); 
				     
				         
				   });
				 $('#pitchconmark12').empty();
				 var supptype = $.grep(connectionObjList, function (el) {
					 
				        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
				        	
				        	return el.supportside;
				        	
				        }
				    });
				 
				
				 $.each(supptype, function(key, value) {
				       var supportbeam="<option>"+value.supportside+"</option>";
				         $(supportbeam).appendTo('#pitchconmark12'); 
				        
				   });
				 }  
				 var connectionmark2 = $("#pitchconmark13").val();
				
				 if(connectionmark2 != null){
				 
				 var conntype = $.grep(connectionObjList, function (el) {
				        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0)){
				        	
				        	return el.trussConn;
				        }
				    });
				
				 $.each(conntype, function(key, value) {
				     
					 var supportbeam="<option>"+value.trussConn+"</option>";
			         $(supportbeam).appendTo('#pitchconmark15');      
				      
				         
				         
				   });
				 
				 
				
				
				    $('#pitchconmark16').empty();
				 
				
				 var supptype = $.grep(connectionObjList, function (el) {
					 
				        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0 )){
				        	
				        	return el.supportside;
				        	
				        }
				    });
				 
				
				 $.each(supptype, function(key, value) {
				       var supportbeam="<option>"+value.supportside+"</option>";
				         $(supportbeam).appendTo('#pitchconmark16'); 
				        
				   });
				
				 }
				
			});	
	//});
	
  $("#topchordprofile1").change(function(){
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
  });
  $("#bottomchordprofile1").change(function(){
		var profilename = $(this).val();
		   $('#pitchedgrade3').empty();
			 getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#pitchedgrade3'); 
		           
		           
				   
				});  
		   
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			 $('#pitchedgrade3').val(profileshgrade);
			             
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     		 $('#pitchedgrade3').val(hssgrade);
		          
		         }
		     	} 
		     	else{
		     		if(anglegrade != ''){
		     			$('#pitchedgrade3').val(anglegrade);
			          
			         }
		     	}
		     }
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
			//$("#pitchconntab").click(function(){
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
					 
				        if(el.connectionMark != null && ( connectionmark1.indexOf(el.connectionMark) >= 0) ){
				        	
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
		
//});
  $("#pitchedprofile3").change(function(){
		var profilename = $(this).val();
		   $('#pitchedgrade3').empty();
			 getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#pitchedgrade3'); 
		           
		           
				   
				}); 
		   
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			 $('#pitchedgrade3').val(profileshgrade);
			             
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     		 $('#pitchedgrade3').val(hssgrade);
		          
		         }
		     	} 
		     	else{
		     		if(anglegrade != ''){
		     			$('#pitchedgrade3').val(anglegrade);
			          
			         }
		     	}
		     }
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
//});
//Bind Connection Type
  // top left
  $("#pitchconmark1").change(function() {  
		 var connectionmark = $(this).val();
		
		 
		 if(connectionmark != null){
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#pitchconmark3').empty();
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
			         $(ConnType).appendTo('#pitchconmark3'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#pitchconmark3'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#pitchconmark3'); 
		       }
		     if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#pitchconmark3'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
			         $(ConnType).appendTo('#pitchconmark3'); 
		       }  
		         
		         
		   });
		 }
	});
	
	//top right
	$("#pitchconmark5").change(function() {  
		 var connectionmark = $(this).val();
		
		 if(connectionmark != null){
		 
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#pitchconmark7').empty();
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
			         $(ConnType).appendTo('#pitchconmark7'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#pitchconmark7'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#pitchconmark7'); 
		       }
		     if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#pitchconmark7'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
			         $(ConnType).appendTo('#pitchconmark7'); 
		       } 
		         
		         
		   });
		 }
	});
	
	// bottom left
	  $("#pitchconmark9").change(function() {  
			 var connectionmark = $(this).val();
			
			 if(connectionmark != null){
			 
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
			        	
			        	return el.connectionMark;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
			       var connectiontype = value.type;
			       $('#pitchconmark11').empty();
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
				         $(ConnType).appendTo('#pitchconmark11'); 
			       }
			       
			   
			       
			     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
			      {
			   		    var ConnType="<option>"+"ClipAngle"+"</option>";
				         $(ConnType).appendTo('#pitchconmark11'); 
			       }
			     
			     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
			      {
			   		    var ConnType="<option>"+"EndPlate"+"</option>";
				         $(ConnType).appendTo('#pitchconmark11'); 
			       }
			     if(connectiontype === conhbval)
			      {
			   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
				         $(ConnType).appendTo('#pitchconmark11'); 
			       }  
			      if(connectiontype === convbval)
			      {
			   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
				         $(ConnType).appendTo('#pitchconmark11'); 
			       }  
			         
			         
			   });
			 }
		});
		
		//bottom right
		$("#pitchconmark13").change(function() {  
			 var connectionmark = $(this).val();
			
			 if(connectionmark != null){
			 
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
			        	
			        	return el.connectionMark;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
			       var connectiontype = value.type;
			       $('#pitchconmark15').empty();
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
				         $(ConnType).appendTo('#pitchconmark15'); 
			       }
			       
			   
			       
			     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
			      {
			   		    var ConnType="<option>"+"ClipAngle"+"</option>";
				         $(ConnType).appendTo('#pitchconmark15'); 
			       }
			     
			     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
			      {
			   		    var ConnType="<option>"+"EndPlate"+"</option>";
				         $(ConnType).appendTo('#pitchconmark15'); 
			       }
			     if(connectiontype === conhbval)
			      {
			   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
				         $(ConnType).appendTo('#pitchconmark15'); 
			       }  
			      if(connectiontype === convbval)
			      {
			   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
				         $(ConnType).appendTo('#pitchconmark15'); 
			       } 
			         
			         
			   });
			 }
		});

		$("#tpitsplicecount").change(function() {
        	
            $('#spliceRows').empty();
            var spliceCount=parseInt($('#tpitsplicecount').val() );
            $('.spliceprofiletop').empty();
            $('.spliceprofilebottom').empty();
           
            for(var i=1;i<=spliceCount;i++) {

                 var html=`
                	   <div class="row nomarginlr m-b-10 traXsplice1">
                     <div class="col-lg-4 col-lg-4 padding10 ">
                         <label class="labelBlack control-label">Splice Position `+i+` From Left End</label>
                         <div class="row">

                             <div class="col-lg-4 col-md-4">
                                 <input type="text" class="form-control per70" id="splicePosition`+i+`LeftEndFt" onkeypress="return AllowNumbersOnly(event)">
                                 <div class="txt-right">
                                     ft
                                 </div>
                             </div>
                             <div class="col-lg-4 col-md-4 padding5">
                                 <select class="form-control per70 splicein" id="splicePosition`+i+`LeftEndIn">
                                   
                                 </select>
                                 <div class="txt-right">
                                     in
                                 </div>
                             </div>
                             <div class="col-lg-4 col-md-4 p-l-5">
                                 <select class="form-control per70 splicefr" id="splicePosition`+i+`LeftEndFr">
                                  
                                 </select>
                                 <div class="txt-right">
                                     fr
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div class="col-lg-3 col-md-3">
                         <label class="labelBlack control-label">Top Chord Profile</label>
                         <select class="form-control spliceprofiletop" id="trapTopChordProfile`+i+`">
                             <option value="Select">Select</option>
                        
                         </select>
                     </div>
                     <div class="col-lg-3 col-md-3">
                         <label class="labelBlack control-label">Bottom Chord Profile</label>
                         <select class="form-control spliceprofilebottom" id="trapBottomChordProfile`+i+`">
                             <option value="Select">Select</option>
                           
                         </select>
                     </div>
                 </div>
               
                 `;
                 
                 $('#spliceRows').append(html);
            }
            $.each(wsDropDown.Inch, function(index,data) {   
        		
                $('<option>').val(data.Inch).text(data.Inch).appendTo('.splicein');        
                
                 });

                 
        	  
        		  $.each(wsDropDown.Fraction, function(index,data) {   
        			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('.splicefr');
                        }); 
        		  $.each(wsDropDown.TopBottomChord, function(index,data) {   
        			
        			  $('<option>').val(data.Profile).text(data.Profile).appendTo('.spliceprofiletop');
        			  
        			    
                        });
        		  var profilename=$("#pitchedprofile").val();
        		  if(profilename !="Select"){
        		  var profiles="<option value>"+profilename+"</option>";
    			    $(profiles).appendTo('.spliceprofiletop').prop('selected', true); 
        		  }
        		  $.each(wsDropDown.TopBottomChord, function(index,data) {   
	                  	
        			  $('<option>').val(data.Profile).text(data.Profile).appendTo('.spliceprofilebottom');
        			  
        			    
                        });
        		  var profilename=$("#pitchedprofile1").val();
        		  if(profilename !="Select"){
    			    var profiles="<option value>"+profilename+"</option>";
    			    $(profiles).appendTo('.spliceprofilebottom').prop('selected', true);  
        		  }		  
        		
        });
		 $("#pverticalnum,#pt1verticals").change(function() {
				
	            var verticalCount=parseInt($('#pverticalnum').val() );
	            $('#verticalRows').empty();
	          
	            if($("#pt1verticals").val()=="Unequal"){
	            for(var i=1;i<=verticalCount;i++) {
	            	var lableTExt ="";
	            	if(i==1){
	            		lableTExt="Spacing  from left end ";
	            	}
	            	else{
	            		lableTExt="Spacing  from " +(i-1)+ "  Vertical";
	            	}
	            		
	            	
	                 var html=`
	                	    <div class="row padding-5">
                       <div class="col-lg-8 col-md-8  p-r-5">
                           <label class="labelBlack control-label">`+lableTExt+`  </label>
                           <div class="row">
                               <div class="col-lg-4 col-md-4 p-r-5">
                                   <input type="text" class="form-control per70" id="trapezoidal`+(i-1)+`ft" onkeypress="return AllowNumbersOnly(event)">
                                   <div class="txt-right">
                                       ft
                                   </div>
                               </div>
                               <div class="col-lg-4 col-md-4 p-r-5">
                                   <select class="form-control per70 verticalin" id="trapezoidal`+(i-1)+`in">
                                      
                                   </select>
                                   <div class="txt-right">
                                       in
                                   </div>
                               </div>
                               <div class="col-lg-4 col-md-4 p-r-5">
                                   <select class="form-control per70 verticalfr" id="trapezoidal`+(i-1)+`fr">
                                      
                                   </select>
                                   <div class="txt-right">
                                       fr
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
	               
	                 `;
	                 $('#verticalRows').append(html);
	            }
	            }
	            $.each(wsDropDown.Inch, function(index,data) {   
	        		
	                $('<option>').val(data.Inch).text(data.Inch).appendTo('.verticalin');        
	                
	                 });

	                 
	        	  
	        		  $.each(wsDropDown.Fraction, function(index,data) {   
	        			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('.verticalfr');
	                        }); 
	        		 
	        		
	        });

// JQuery Code
		 $(".referenceSelect").select2({
		        placeholder: "Select"
		    });
        $(".pitselect1").select2({
            placeholder: "Select"
        });
        $(".pitselect2").select2({
            placeholder: "Select"
        });
        $(".pitselect3").select2({
            placeholder: "Select"
        });
        $(".pitselect4").select2({
            placeholder: "Select"
        });
        $(".pitselect5").select2({
            placeholder: "Select"
        });
        $(".pitselect6").select2({
            placeholder: "Select"
        });
        $(".pitselect7").select2({
            placeholder: "Select"
        });
        $(".pitselect8").select2({
            placeholder: "Select"
        });

    $('#chkinclined').change(function() {
   		if($(this).prop("checked") == true){
	        $('#pitinclined, #pitinclined1, #pitinclined3, #pitinclined2').attr('disabled', false);
	    } 
	    else {
	    	$('#pitinclined, #pitinclined1, #pitinclined3, #pitinclined2').attr('disabled', true);
	    }
    });


    //Position of Ridge Point
    $(function() {

        $("#positionofridge").change(function() {
            if ($('#positionofridge').val() == 'Center') {
                $(".Center").show();
                $(".Specific").hide();

            } else if ($('#positionofridge').val() == 'Specific') {
                $(".Center").hide();
                $(".Specific").show();

            }

        });
    });

   
    //shapes

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
    	 	var profilename = $("#pitchedprofile3").val();
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

    

    function show1() {
        document.getElementById('showcg').style.display = 'block';
        document.getElementById('showcd').style.display = 'none';
    }

    function show2() {
        document.getElementById('showcd').style.display = 'block';
        document.getElementById('showcg').style.display = 'none';
    }
	
	
	//ref. Drwaing Number
    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({
            allow_single_deselect: true
        });
    });
