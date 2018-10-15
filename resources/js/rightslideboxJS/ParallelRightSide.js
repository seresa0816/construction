 
 function parallelMandatoryValidation(event){
	    		if(($('#parallelmodalprofile,#parallelgrade,#parallelmodalprofile1,#parallelgrade1,#parallelmodalprofile3,#parallelgrade3,#shapeicons').prop('selectedIndex')) == 0) {
	    			event.preventDefault();
	    			
	    			}
	    		if($('#paralleltrusslft,#paralleltrusslenft,#paralleltrussrft') == "" || $('#paralleltrusslft,#paralleltrusslenft,#paralleltrussrft') == undefined){
	    			event.preventDefault();
	    		}
	    		if(($('#tracamber').prop("checked") == true) && ($('#tracamber1').prop('selectedIndex') )== 0){
	    			event.preventDefault();
	    		}
	    		if(($('#pezcamber').prop("checked") == true) && ($('#pezcamber1').prop('selectedIndex') )== 0){
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
            var datasource="<option value=\""+data.SpacingVerticals+"\">"+data.SpacingVerticals+"</option>";
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
            
            $('<option>').val(data.fr).text(data.fr_fra).appendTo('#pbtosfr,#pbtos2fr,#parallels2fr,#parallelsp1fr,#parallelsp2fr,#parallels1fr,#parallels1fr,#paralleltrusslfr,#paralleltrusslenfr,#paralleltrussrfr,#parainclined2,#parallelsp3fr,#parallelsp4fr,#parallelsp5fr');
           
           
        });
          
        $.each(wsDropDown.Inch, function(index,data) {   
             $('<option>').val(data.Inch).text(data.Inch).appendTo('#pbtosin,#pbtos2in,#parallels2in,#paralleltrusslin,#paralleltrussrin,#paralleltrusslenin,#parallelsp1in,#parallelsp2in,#parallelsp3in,#parallelsp4in,#parallelsp5in,#parallels1in,#parallels1in,#parainclined1');
        });
            
      
         if(RefDwgNumFiles){
         $.each(RefDwgNumFiles, function(index,data) { 
        		
        		var referencenum="<option>"+data+"</option>";
        		
        	     $(referencenum).appendTo('#parallelreferencenum'); 
        	     
        		});  
         }
  
    
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
		   
		   $('#spliceRows').empty();
				  $('#splicecount').prop('selectedIndex',0);
	    
	    
	    
	    $('#parallelconmark1').empty();
	    $('#parallelconmark5').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	        if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussend")>=0){
	        	return el.profile;
	        }
	    });
	  
	    
	   
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#parallelconmark1').prop('selected', true); 
		         $(ConnectionMark).appendTo('#parallelconmark5').prop('selected', true); 
		   });
		
		$('#parallelconmark2').empty();
	    $('#parallelconmark6').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trusssplice")>=0){
	        	return el.profile;
	        }
	    });
	  
	    
	  
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#parallelconmark2'); 
		         $(ConnectionMark).appendTo('#parallelconmark6'); 
		   });
		//$("#paratrusscontab").click(function(){
			 var connectionmark1 = $("#parallelconmark1").val();
			
			 
			 if(connectionmark1 != null){
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && connectionmark1.indexOf(el.connectionMark) >= 0 ){
			        	
			        	return el.trussConn;
			        }
			    });
			 $.each(conntype, function(key, value) {
				 var supportbeam="<option>"+value.trussConn+"</option>";
		         $(supportbeam).appendTo('#parallelconmark3'); 
		         
			   });
			 $('#parallelconmark4').empty();
			 
			 
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#parallelconmark4'); 
			        
			   });
			 }        
			
			 var connectionmark2 = $("#parallelconmark5").val();
			
			 if(connectionmark2 != null){
			 
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(connectionmark2.indexOf(el.connectionMark) >= 0){
			        	
			        	return el.trussConn;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
				 var supportbeam="<option>"+value.trussConn+"</option>";
		         $(supportbeam).appendTo('#parallelconmark7');      
			      
			         
			         
			   });
			 
			 
			
			 
			    $('#parallelconmark8').empty();
			 
			
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(connectionmark2.indexOf(el.connectionMark) >= 0 ){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#parallelconmark8'); 
			        
			   });
			
			 }
			
		});	
	
	//});
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
		   
		   $('#spliceRows').empty();
			
			  $("#splicecount").val($("#splicecount option:first").val());
	    
	    $('#parallelconmark9').empty();
	    $('#parallelconmark13').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussend")>=0){
	        	return el.profile;
	        }
	    });
	 
	    
	  
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#parallelconmark9'); 
		         $(ConnectionMark).appendTo('#parallelconmark13'); 
		   });
		  $('#parallelconmark10').empty();
		    $('#parallelconmark14').empty();
		    
		    var filtered = $.grep(connectionObjList, function (el) {
		    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trusssplice")>=0){
		        	return el.profile;
		        }
		    });
		   
		    
		  
			$.each(filtered, function(key, value) {
			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
			         $(ConnectionMark).appendTo('#parallelconmark10'); 
			         $(ConnectionMark).appendTo('#parallelconmark14'); 
			   });
			 $('#cgload1').empty();
			    $('#2cgload7').empty();
			    $('#3cgload7').empty();
			    $('#4cgload7').empty();
			    $('#5cgload7').empty();
			    
			    
			    
			    
			   
			
		//$("#paratrusscontab").click(function(){
			 var connectionmark1 = $("#parallelconmark9").val();
			
			 if(connectionmark1 != null){
			 
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
			        	
			        	return el.trussConn;
			        }
			    });
			 $.each(conntype, function(key, value) {
				 var supportbeam="<option>"+value.trussConn+"</option>";
		         $(supportbeam).appendTo('#parallelconmark11'); 
			     
			         
			   });
			 $('#parallelconmark12').empty();
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#parallelconmark12'); 
			        
			   });
			    }
			   
			 var connectionmark2 = $("#parallelconmark13").val();
			
			 
			 if(connectionmark2 != null ){
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(connectionmark2.indexOf(el.connectionMark) >= 0){
			        	
			        	return el.trussConn;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
				 var supportbeam="<option>"+value.trussConn+"</option>";
		         $(supportbeam).appendTo('#parallelconmark15');      
			      
			         
			         
			   });
			 
			 
			
			
			    $('#parallelconmark16').empty();
			 
			
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(connectionmark2.indexOf(el.connectionMark) >= 0 ){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#parallelconmark16'); 
			        
			   });
			
			    }
			
		});	
	
	//});
 // });
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
			//$("#paratrusscontab").click(function(){
				  $('#leftConnectionMarkverical2').empty();
				   $('#leftConnectionMarkverical5').empty();
				 var connectionmark1 = $("#leftConnectionMarkverical1").val();
				
				 if(connectionmark1 != null){
				 
				 var conntype = $.grep(connectionObjList, function (el) {
				        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
				        	
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
 // });
//Bind Connection Type
  // top left
  $("#parallelconmark1").change(function() {  
		 var connectionmark = $(this).val();
		
		 
		 if(connectionmark != null){
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0){
		        	
		        	return el.connectionMark;
		        }
		    });
		 }
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
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.trussConn;
		        }
		    });
		 $.each(conntype, function(key, value) {
			 var supportbeam="<option>"+value.trussConn+"</option>";
	         $(supportbeam).appendTo('#parallelconmark3'); 
		     
		         
		   });
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#parallelconmark4'); 
		        
		   });
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark2.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
	});
	
	//top right
	$("#parallelconmark5").change(function() {  
		 var connectionmark = $(this).val();
		
		 if(connectionmark != null){
		 
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0){
		        	
		        	return el.connectionMark;
		        }
		    });
		 }
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
			
			 
			 if(connectionmark != null){
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(connectionmark.indexOf(el.connectionMark) >= 0){
			        	
			        	return el.connectionMark;
			        }
			    });
	  }
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
		  if(connectionmark != null){
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(connectionmark.indexOf(el.connectionMark) >= 0){
			        	
			        	return el.connectionMark;
			        }
			    });
			 }
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
		$("#splicecount").change(function() {

	        $('#spliceRows').empty();
	        var spliceCount = parseInt($('#splicecount').val());
	        $('.spliceprofile').empty();
	       
	        for (var i = 1; i <= spliceCount; i++) {

	            var html = `
	                  <div class="row traXsplice1">
	                 <div class="col-lg-6 col-lg-6 padding10 ">
	                     <label class="labelBlack control-label">Splice Position ` + i + ` From Left End</label>
	                     <div class="row">

	                         <div class="col-lg-4 col-md-4">
	                             <input type="text" class="form-control per70" id="splicePosition` + i + `LeftEndFt">
	                             <div class="txt-right">
	                                 ft
	                             </div>
	                         </div>
	                         <div class="col-lg-4 col-md-4 padding5">
	                             <select class="form-control per70 splicein" id="splicePosition` + i + `LeftEndIn">
	                               
	                             </select>
	                             <div class="txt-right">
	                                 in
	                             </div>
	                         </div>
	                         <div class="col-lg-4 col-md-4 p-l-5">
	                             <select class="form-control per70 splicefr" id="splicePosition` + i + `LeftEndFr">
	                              
	                             </select>
	                             <div class="txt-right">
	                                 fr
	                             </div>
	                         </div>
	                     </div>
	                 </div>
	                 <div class="col-lg-3">
	                     <label class="labelBlack control-label">Top Chord Profile</label>
	                     <select class="form-control spliceprofile" id="paraTopChordProfile` + i + `">
	                         <option value="Select">Select</option>
	                    
	                     </select>
	                 </div>
	                 <div class="col-lg-3">
	                     <label class="labelBlack control-label">Bottom Chord Profile</label>
	                     <select class="form-control spliceprofile1" id="paraBottomChordProfile` + i + `">
	                     <option value="Select">Select</option>
	                     </select>
	                 </div>
	             </div>
	           
	             `;

	            $('#spliceRows').append(html);
	        }
	        $.each(wsDropDown.Inch, function(index, data) {

	            $('<option>').val(data.Inch).text(data.Inch).appendTo('.splicein');

	        });



	        $.each(wsDropDown.Fraction, function(index, data) {
	            $('<option>').val(data.fr).text(data.fr_fra).appendTo('.splicefr');
	        });
	        $.each(wsDropDown.TopBottomChord, function(index, data) {

	            $('<option>').val(data.Profile).text(data.Profile).appendTo('.spliceprofile');


	        });

	        var profilename = $("#parallelmodalprofile").val();
	        if (profilename != "Select") {
	            var profiles = "<option value>" + profilename + "</option>";
	            $(profiles).appendTo('.spliceprofile').prop('selected', true);
	        }
	        $.each(wsDropDown.TopBottomChord, function(index, data) {

	            $('<option>').val(data.Profile).text(data.Profile).appendTo('.spliceprofile1');


	        });
	        var profilename = $("#parallelmodalprofile1").val();
	        if (profilename != "Select") {
	            var profiles = "<option value>" + profilename + "</option>";
	            $(profiles).appendTo('.spliceprofile1').prop('selected', true);
	        }
	    });
		 $("#verticalnumt1,#t1verticals").change(function() {
			
	            var verticalCount=parseInt($('#verticalnumt1').val() );
	            $('#verticalRows').empty();
	           
	            if($("#t1verticals").val()=="Unequal"){
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
                                 <label class="labelBlack control-label">`+lableTExt+`</label>
                                 <div class="row">
                                     <div class="col-lg-4 col-md-4 p-r-5">
                                         <input type="text" class="form-control per70" id="parallels`+(i-1)+`ft" onkeypress="return AllowNumbersOnly(event)">
                                         <div class="txt-right">
                                             ft
                                         </div>
                                     </div>
                                     <div class="col-lg-4 col-md-4 p-r-5">
                                         <select class="form-control per70 verticalin" id="parallels`+(i-1)+`in">
                                            
                                         </select>
                                         <div class="txt-right">
                                             in
                                         </div>
                                     </div>
                                     <div class="col-lg-4 col-md-4 p-r-5">
                                         <select class="form-control per70 verticalfr" id="parallels`+(i-1)+`fr">
                                            
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
    $(".pmselect1").select2({
      placeholder: "Select"
  });
  $(".pmselect2").select2({
      placeholder: "Select"
  });
  $(".pmselect3").select2({
      placeholder: "Select"
  });
  $(".pmselect4").select2({
      placeholder: "Select"
  });
  $(".pmselect5").select2({
      placeholder: "Select"
  });
  $(".pmselect6").select2({
      placeholder: "Select"
  });
  $(".pmselect7").select2({
      placeholder: "Select"
  });
  $(".pmselect8").select2({
      placeholder: "Select"
  });
    

    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({
            allow_single_deselect: true
        });
    });

function show2() {
    document.getElementById('showcd').style.display = 'block';
    document.getElementById('showcg').style.display = 'none';
}
$('#tracamber').change(function() {
	if($(this).prop("checked") == true){
		$('#tracamber1').attr('disabled', false);
	} 
	else {
		$('#tracamber1').attr('disabled', true);
	}
});
$('#pezcamber').change(function() {
	if($(this).prop("checked") == true){
		$('#pezcamber1').attr('disabled', false);
	} 
	else {
		$('#pezcamber1').attr('disabled', true);
	}
});
$('#chkinclined').change(function() {
	if($(this).prop("checked") == true){
		$('#parainclined, #parainclined1, #parainclined2, #parainclined3').attr('disabled', false);
	} 
	else {
		$('#parainclined, #parainclined1, #parainclined2, #parainclined3').attr('disabled', true);
	}
});

// Verticals
$(".showtv1").hide();
$(".showtv2").hide();
$(".showtv3").hide();
$(".showtv4").hide();
$(".showtv5").hide();
$(".showtv6").hide();
$(".showtv7").hide();
$(".showtv8").hide();
$(".showtv9").hide();
$(".showtv10").hide();
$(".showtv11").hide();
$(".showtv12").hide();
$(".showtv13").hide();
$(".showtv14").hide();
$(".showtv15").hide();
$(".showtv16").hide();
$(".showtv17").hide();
$(".showtv18").hide();
$(".showtv19").hide();
$(".showtv20").hide();
$(function() {
    $("#verticalnumt1, #t1verticals").change(function() {
        if ($('#verticalnumt1').val() == '0' || $('#t1verticals').val() == 'Equal') {
            $(".showtv1").hide();
            $(".showtv2").hide();
            $(".showtv3").hide();
            $(".showtv4").hide();
            $(".showtv5").hide();
            $(".showtv6").hide();
            $(".showtv7").hide();
            $(".showtv8").hide();
            $(".showtv9").hide();
            $(".showtv10").hide();
            $(".showtv11").hide();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '1') {
            $(".showtv1").show();
            $(".showtv2").hide();
            $(".showtv3").hide();
            $(".showtv4").hide();
            $(".showtv5").hide();
            $(".showtv6").hide();
            $(".showtv7").hide();
            $(".showtv8").hide();
            $(".showtv9").hide();
            $(".showtv10").hide();
            $(".showtv11").hide();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '2') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").hide();
            $(".showtv4").hide();
            $(".showtv5").hide();
            $(".showtv6").hide();
            $(".showtv7").hide();
            $(".showtv8").hide();
            $(".showtv9").hide();
            $(".showtv10").hide();
            $(".showtv11").hide();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '3') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").hide();
            $(".showtv5").hide();
            $(".showtv6").hide();
            $(".showtv7").hide();
            $(".showtv8").hide();
            $(".showtv9").hide();
            $(".showtv10").hide();
            $(".showtv11").hide();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '4') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").hide();
            $(".showtv6").hide();
            $(".showtv7").hide();
            $(".showtv8").hide();
            $(".showtv9").hide();
            $(".showtv10").hide();
            $(".showtv11").hide();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '5') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").hide();
            $(".showtv7").hide();
            $(".showtv8").hide();
            $(".showtv9").hide();
            $(".showtv10").hide();
            $(".showtv11").hide();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '6') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").hide();
            $(".showtv8").hide();
            $(".showtv9").hide();
            $(".showtv10").hide();
            $(".showtv11").hide();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '7') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").hide();
            $(".showtv9").hide();
            $(".showtv10").hide();
            $(".showtv11").hide();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '8') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").hide();
            $(".showtv10").hide();
            $(".showtv11").hide();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '9') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").hide();
            $(".showtv11").hide();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '10') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").show();
            $(".showtv11").hide();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '11') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").show();
            $(".showtv11").show();
            $(".showtv12").hide();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '12') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").show();
            $(".showtv11").show();
            $(".showtv12").show();
            $(".showtv13").hide();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '13') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").show();
            $(".showtv11").show();
            $(".showtv12").show();
            $(".showtv13").show();
            $(".showtv14").hide();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '14') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").show();
            $(".showtv11").show();
            $(".showtv12").show();
            $(".showtv13").show();
            $(".showtv14").show();
            $(".showtv15").hide();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '15') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").show();
            $(".showtv11").show();
            $(".showtv12").show();
            $(".showtv13").show();
            $(".showtv14").show();
            $(".showtv15").show();
            $(".showtv16").hide();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '16') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").show();
            $(".showtv11").show();
            $(".showtv12").show();
            $(".showtv13").show();
            $(".showtv14").show();
            $(".showtv15").show();
            $(".showtv16").show();
            $(".showtv17").hide();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '17') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").show();
            $(".showtv11").show();
            $(".showtv12").show();
            $(".showtv13").show();
            $(".showtv14").show();
            $(".showtv15").show();
            $(".showtv16").show();
            $(".showtv17").show();
            $(".showtv18").hide();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '18') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").show();
            $(".showtv11").show();
            $(".showtv12").show();
            $(".showtv13").show();
            $(".showtv14").show();
            $(".showtv15").show();
            $(".showtv16").show();
            $(".showtv17").show();
            $(".showtv18").show();
            $(".showtv19").hide();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '19') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").show();
            $(".showtv11").show();
            $(".showtv12").show();
            $(".showtv13").show();
            $(".showtv14").show();
            $(".showtv15").show();
            $(".showtv16").show();
            $(".showtv17").show();
            $(".showtv18").show();
            $(".showtv19").show();
            $(".showtv20").hide();
        } else if ($('#verticalnumt1').val() == '20') {
            $(".showtv1").show();
            $(".showtv2").show();
            $(".showtv3").show();
            $(".showtv4").show();
            $(".showtv5").show();
            $(".showtv6").show();
            $(".showtv7").show();
            $(".showtv8").show();
            $(".showtv9").show();
            $(".showtv10").show();
            $(".showtv11").show();
            $(".showtv12").show();
            $(".showtv13").show();
            $(".showtv14").show();
            $(".showtv15").show();
            $(".showtv16").show();
            $(".showtv17").show();
            $(".showtv18").show();
            $(".showtv19").show();
            $(".showtv20").show();
        }
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
    
    function show1() {
        document.getElementById('showcg').style.display = 'block';
        document.getElementById('showcd').style.display = 'none';
    }

    function show2() {
        document.getElementById('showcd').style.display = 'block';
        document.getElementById('showcg').style.display = 'none';
    }

	