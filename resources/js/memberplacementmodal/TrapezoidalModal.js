
function trapezoidalMandatoryValidation(event){
	    		if(($('#trapezoidalprofile,#topChordMaterialGrade,#trapezoidalprofile1,#bottomChordMaterialGrade,#trapezoidalprofile2,#verticalMaterialGrade,#trapezoidalprofile3,#inclinedMaterialGrade,#shapeicons').prop('selectedIndex')) == 0) {
	    			event.preventDefault();
	    			
	    			}
	    		if($('#trapezoidalHeightOfTrussLeftInFt,#trapezoidalTrussLenInFt,#trapezoidalHeightOfTrussRightInFt,#trapezoidalHeightAtRidgeInFt') == "" || $('#trapezoidalHeightOfTrussLeftInFt,#trapezoidalTrussLenInFt,#trapezoidalHeightOfTrussRightInFt,#trapezoidalHeightAtRidgeInFt') == undefined){
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
     $(weldsize).appendTo('#trasurfacePreparation1'); 
      
   }); 
     
  $.each(wsDropDown.NoOfCoats, function(index,data) {   
         var NoOfCoats = "<option>"+data.Coats+"</option>";
         $(NoOfCoats).appendTo('#traprimer2,#trapaint2'); 
          
       });     
  
  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
       var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
       $(NoOfCoats).appendTo('#tragalvanization2'); 
        
     });     

  $.each(wsDropDown.FireProofingType, function(index,data) {   
       var appendval = "<option>"+data.FireProofingType+"</option>";
       $(appendval).appendTo('#trafireProofing2'); 
       $(appendval).appendTo('#trafireProofing1'); 
     }); 
  $.each(wsDropDown.FireRating, function(index,data) {   
     var appendval = "<option>"+data.FireRating_fra+"</option>";
     $(appendval).appendTo('#trafireProofing3'); 
      
   }); 
       
  
  $.each(wsDropDown.AESSCategory, function(index,data) {   
         var appendval = "<option>"+data.AESS+"</option>";
         $(appendval).appendTo('#traaess1'); 
          
       });
  if(wsFinish != null){
	    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	console.log(usedfinish);

	   var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
	 var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
	 var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
	    
	    if(paintValue != null){
	    $('#traprimer1').val(paintValue);
	    document.getElementById("traprimer1").setAttribute("disabled", false);
	    }
	    if(noOfCoatsprimer != null){
	       var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
	       $('select[name^="#traprimer2"] option[value=noOfCts]').attr("selected","selected");

	    }
	 
	   $('#chkprimer').change(function() {
	      if($(this).prop("checked") == true){
	          $('#traprimer1, #traprimer2').attr('disabled', false);
	         if(primerperiSPreparation != null){
	  		  $('#trasurfacePreparation1').val(primerperiSPreparation);
	  	  }
	      } else {
	          $('#traprimer1, #traprimer2').attr('disabled', true);

	      }
	  });
	if(usedfinish == "Primer"){
	$('#chkprimer').prop('checked', true);
	$('#chknopaint').attr('checked', true);
	$('#traprimer1,#traprimer2').attr('disabled', false);	
	if(primerperiSPreparation != null){
		  $('#trasurfacePreparation1').val(primerperiSPreparation);
	}
	  } 

	var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
    if(usedfinish != "Galvanizing" &&  SPreparation != null){
    	 $('#chkprimer').prop('checked', true);
    	  $('#chknopaint').attr('checked', true);
    	 $('#traprimer1,#traprimer2').attr('disabled', false);	
    	 if(primerperiSPreparation != null){
    		  $('#trasurfacePreparation1').val(primerperiSPreparation);
    	  }
    }
	var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
	var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
	var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
	if(paintValue != null){
	$('#trapaint1').val(paintValue);
	document.getElementById("trapaint1").setAttribute("disabled", false);
	}

	if(noOfCoatspaint != null){
	var noOfCts="<option value>"+noOfCoatspaint+"</option>";
	$('select[name^="#trapaint2"] option[value=noOfCts]').attr("selected","selected");
	}
	$('#chkpaint').change(function() {
	 if($(this).prop("checked") == true){
	     $('#trapaint1, #trapaint2').attr('disabled', false);
	     if(paintperiSPreparation != null){
		    		  $('#trasurfacePreparation1').val(paintperiSPreparation);
		    	  }
	 } else {
	     $('#trapaint1, #trapaint2').attr('disabled', true);
	 }
	 if($('#chkprimer').prop("checked") == true){
	     $('#chkprimer').removeAttr("disabled");
	 } else {
	     $('#chkprimer').removeAttr("disabled");
	 }
	 $('#tragalvanization2').attr('disabled', true);
	});
	if(usedfinish == "Paint"){
	  	  $('#chkpaint').attr('checked', true);
	  	  $('#trapaint1, #trapaint2').attr('disabled', false);
	  	  if(paintperiSPreparation != null){
	  		  $('#trasurfacePreparation1').val(paintperiSPreparation);
	  	  }
	    }

	var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
	var	category = wsFinish.Finish.AESS.Category;
	 
	if(category != null){   
	    var aess="<option value>"+category+"</option>";
		   $('select[name^="#traaess1"] option[value=aess]').attr("selected","selected");
	}
	$('#chkaess').change(function() {
	if($(this).prop("checked") == true){
	  $('#traaess1').attr('disabled', false);
	  if(aessperiSPreparation != null){
			  $('#trasurfacePreparation1').val(aessperiSPreparation);
		  }
	} else {
	  $('#traaess1').attr('disabled', true);
	}
	if($('#chkprimer').prop("checked") == true){
	  $('#chkprimer').removeAttr("disabled");
	} else {
	  $('#chkprimer').removeAttr("disabled");
	}
	$('#trapaint1, #trapaint2, #tragalvanization2, #trafireProofing2, #trafireProofing3').attr('disabled', true); 
	});
	if(usedfinish == "AESS"){
	$('#chkaess').attr('checked', true);
	$('#traaess1').attr('disabled', false);
	if(aessperiSPreparation != null){
		  $('#trasurfacePreparation1').val(aessperiSPreparation);
	}
	}
	 var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
	 var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
	 var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	 
		      
	    if(fireRating != null){
	    var fireRatingval="<option value>"+fireRating+"</option>";
	    $('select[name^="#trafireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	    }
	    if(fireProofingType != null){
	       var fireProofing="<option value>"+fireProofingType+"</option>";
	       $('select[name^="#trafireProofing3"] option[value=fireProofing]').attr("selected","selected");
	    }
	   $('#chkfireproofing').change(function() {
	      if($(this).prop("checked") == true){
	          $('#trafireProofing2, #trafireProofing3').attr('disabled', false);
	         if(fpperiSPreparation != null){
		       		$('#trasurfacePreparation1').val(fpperiSPreparation);
		       	}
	      } else {
	          $('#trafireProofing2, #trafireProofing3').attr('disabled', true);
	      }  
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').removeAttr("disabled");
	      } else {
	          $('#chkprimer').removeAttr("disabled");
	      }
	      $('#trapaint1, #trapaint2, #tragalvanization2, #traaess1').attr('disabled', true);  
	      // $('#chkprimer').removeAttr("disabled");
	  });
	    if(usedfinish == "Fire proofing"){
	     	  $('#chkfireproofing').attr('checked',true);
	     	  $('#trafireProofing2, #trafireProofing3').attr('disabled', false);
	     	
		    }
	 var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	 var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	    if(zincCoatingThickness != null){
	    var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	    $('select[name^="#tragalvanization2"] option[value=zincCoating]').attr("selected","selected");
	    }
	   $('#chkgalvanize').change(function() {
	      if($(this).prop("checked") == true){
	          $('#tragalvanization2').attr('disabled', false);
	         if(galperiSPreparation != null){
		     	 	 $('#trasurfacePreparation1').val(galperiSPreparation);
		     	 	   } 
	      } else {
	          $('#tragalvanization2').attr('disabled', true);
	      }
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	      } 
	      else {
	          $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	      }
	      $('#traprimer1, #traprimer2, #trapaint1, #trapaint2, #trafireProofing2, #trafireProofing3, #traaess1').attr('disabled', true);
	      // $("#chkprimer").attr('disabled', 'disabled');
	  });
	   if(usedfinish == "Galvanizing"){
	  	  $('#chkgalvanize').attr('checked', true);
	  	  $('#tragalvanization2').attr('disabled', false);
	  	  $('#chkprimer').prop('checked', false);
	          $('#chkprimer').attr('disabled', true);
	          if(galperiSPreparation != null){
	   	 	 $('#trasurfacePreparation1').val(galperiSPreparation);
	   	 	   }  
	    }
	 var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
	$('#chknopaint').change(function() {
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').attr('disabled', false);
	         if(nopperiSPreparation != null){
		 			 $('#trasurfacePreparation1').val(nopperiSPreparation);
		 		 	   }
	      } else {
	          $('#chkprimer').attr('disabled', false);
	      }
	      if($('#chkprimer').prop("checked") == true){
	          $('#chkprimer').removeAttr("disabled");
	      } else {
	          $('#chkprimer').removeAttr("disabled");
	      }
	      $('#trapaint1, #trapaint2, #tragalvanization2, #trafireProofing2, #trafireProofing3, #traaess1').attr('disabled', true);
	  });
		  if(usedfinish == "NoPaint"){
		  $('#chknopaint').attr('checked', true);
		
	}
	}
   
   $.each( wsDropDown.TopBottomChord, function(key, value) {
       var profiles="<option>"+value.Profile+"</option>";
         $(profiles).appendTo('#trapezoidalprofile,#trapezoidalprofile1,#trapezoidalprofile2,#trapezoidalprofile3'); 

     });
        
           $.each( wsDropDown.BeamOrientation, function(key, value) {
               var profiles="<option>"+value.Beam_Orientation+"</option>";
                     $(profiles).appendTo('#topChordMemberprofile,#bottomChordMemberprofile,#verticalMemberorientation,#inclinedMemberOrientation'); 
         
             }); 
             
          
              
           $.each(wsDropDown.SpacingBetweenVerticals, function(index,data) {   
            var datasource="<option value=\""+data.SpacingVerticals+"\">"+data.SpacingVerticals+"</option>";
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
        
      $.each(wsDropDown.PlateThickness, function(index,data) {   
        
        $('<option>').val(data.tp).text(data.tp_fra).appendTo('#gspshear2');
       
       
    });
     
    
              
      $.each(wsDropDown.SlopingChords, function(index,data) {   
          var weldsize = "<option>"+data.SlopingChords+"</option>";
          $(weldsize).appendTo('#parallelslopchord'); 
           
        });
              
          $.each(wsDropDown.Fraction, function(index,data) {   
            
            $('<option>').val(data.fr).text(data.fr_fra).appendTo('#RidgepointFromLendin,#trainclined2,#splicePosition1LeftEndFr,#trapezoidalHeightOfTrussLeftInFr,#trapezoidalTrussLenInFr,#trapezoidalHeightOfTrussRightInFr,#trapezoidalHeightAtRidgeInFr,#splicePosition1LeftEndFr,#splicePosition2LeftEndFr,#spacing1LeftEndFr,#spacing2LeftEndFr,#inclinedBracingInFr');
           
           
        });
          
        $.each(wsDropDown.Inch, function(index,data) {   
             $('<option>').val(data.Inch).text(data.Inch).appendTo('#RidgepointFromLendfr,#trainclined1,#splicePosition1LeftEndIn,#trapezoidalHeightOfTrussLeftInIn,#trapezoidalTrussLenInIn,#trapezoidalHeightOfTrussRightInIn,#trapezoidalHeightAtRidgeInIn,#splicePosition1LeftEndIn,#splicePosition2LeftEndIn,#spacing1LeftEndIn,#spacing2LeftEndIn,#inclinedBracingInIn');
        });
            
       
         if(RefDwgNumFiles){
         $.each(RefDwgNumFiles, function(index,data) { 
     		
     		var referencenum="<option>"+data+"</option>";
     		
             $(referencenum).appendTo('#referencenum'); 
             
     		});
         }
	$("#trapezoidalprofile").change(function(){
	    var profilename=$("#trapezoidalprofile").find('option:selected').text();
	    $('#spliceRows').empty();
	    $('#trapezoidalSpliceCount').prop('selectedIndex',0);

		   $('#topChordMaterialGrade').empty();
		   getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#topChordMaterialGrade'); 
		           
		           
				   
				});
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	var cmcgrade = wsPlateGrade.MemberGrades.Channels;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			  $('#topChordMaterialGrade').val(profileshgrade);
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     		  $('#topChordMaterialGrade').val(hssgrade);
		         }
		     	} 
		     	else{
		     		 if(cmcgrade != ''){
		     			  $('#topChordMaterialGrade').val(cmcgrade);
			         } 
		     	}
		     }
	    $('#endConnectionMark').empty();
	    $('#endConnectionMark1').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	        if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussend")>=0){
	        	return el.profile;
	        }
	    });
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#endConnectionMark'); 
		         $(ConnectionMark).appendTo('#endConnectionMark1'); 
		   });
		$('#spliceConnectionMark').empty();
	    $('#spliceConnectionMark1').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trusssplice")>=0){
	        	return el.profile;
	        }
	    });
	    
	  
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#spliceConnectionMark'); 
		         $(ConnectionMark).appendTo('#spliceConnectionMark1'); 
		   });
		//$("#trapconntab").click(function(){
			$('#connectiontype').empty();
		    $('#connectionmethod').empty();
			 var connectionmark1 = $("#endConnectionMark").val();
			 if(connectionmark1 != null){
			 
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.trussConn;
			        }
			    });
			 $.each(conntype, function(key, value) {
				 var supportbeam="<option>"+value.trussConn+"</option>";
		         $(supportbeam).appendTo('#connectiontype'); 
			     
			         
			   });
			 
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#connectionmethod'); 
			        
			   });

			    $('#connectionmethod1').empty();
			 
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#connectionmethod1'); 
			        
			   });
			 }    
			 var connectionmark2 = $("#endConnectionMark1").val();
			 $('#connectiontype1').empty();
			 if(connectionmark2 != null){
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0)){
			        	
			        	return el.trussConn;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
				 var supportbeam="<option>"+value.trussConn+"</option>";
		         $(supportbeam).appendTo('#connectiontype1');      
			         
			   });
				
			 }
				
		});	
	 
		
		  
	//});
	 
	$("#trapezoidalprofile1").change(function(){
	    var profilename=$("#trapezoidalprofile1").find('option:selected').text();
	    $('#bottomChordMaterialGrade').empty();
		 getProfileGrades(profilename);
		 $.each(profileGrades, function(index,data) {   
			  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
			 
	           $(grades).appendTo('#bottomChordMaterialGrade'); 
	           
	           
			   
			});  
	   
	   var res = profilename.charAt(0);
	   if(wsPlateGrade != ''){
	     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
	     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
	     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
	     	if(res=="W"){
	     		if(profileshgrade != null){
	     			 $('#bottomChordMaterialGrade').val(profileshgrade);
		             
		           }
			   }
	    	else if(res=="H"){
	     	if(hssgrade != ''){
	     		 $('#bottomChordMaterialGrade').val(hssgrade);
	          
	         }
	     	} 
	     	else{
	     		if(anglegrade != ''){
	     			$('#bottomChordMaterialGrade').val(anglegrade);
		          
		         }
	     	}
	     }
	   $('#spliceRows').empty();
	   $('#trapezoidalSpliceCount').prop('selectedIndex',0);
	   $('#endConnectionMark2').empty();
	    $('#endConnectionMark3').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	        if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussend")>=0){
	        	return el.profile;
	        }
	    });
	    
	  
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#endConnectionMark2'); 
		         $(ConnectionMark).appendTo('#endConnectionMark3'); 
		   });
		$('#spliceConnectionMark2').empty();
	    $('#spliceConnectionMark3').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trusssplice")>=0){
	        	return el.profile;
	        }
	    });
	    
	  
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#spliceConnectionMark2'); 
		         $(ConnectionMark).appendTo('#spliceConnectionMark3'); 
		   });
		//$("#trapconntab").click(function(){
			$('#connectiontype2').empty();
		    $('#connectionmethod2').empty();
			 var connectionmark1 = $("#endConnectionMark2").val();
			 if(connectionmark1 != null){
			 
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.trussConn;
			        }
			    });
			 $.each(conntype, function(key, value) {
				 var supportbeam="<option>"+value.trussConn+"</option>";
		         $(supportbeam).appendTo('#connectiontype2'); 
			     
			         
			   });
			 
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#connectionmethod2'); 
			        
			   });

				
			    $('#connectionmethod3').empty();
			 
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#connectionmethod3'); 
			        
			   });
			 }     
			 var connectionmark2 = $("#endConnectionMark3").val();
			 $('#connectiontype3').empty();
			 if(connectionmark2 != null){
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0)){
			        	
			        	return el.trussConn;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
				 var supportbeam="<option>"+value.trussConn+"</option>";
		         $(supportbeam).appendTo('#connectiontype3');      
			      
			         
			         
			   });
			 
			 } 
			});	
	//});
	
	 $("#trapezoidalprofile2").change(function(){
			var profilename = $(this).val();
			   $('#verticalMaterialGrade').empty();
				 getProfileGrades(profilename);
				 $.each(profileGrades, function(index,data) {   
					  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
					 
			           $(grades).appendTo('#verticalMaterialGrade'); 
			           
			           
					   
					});  
			   
			   var res = profilename.charAt(0);
			   if(wsPlateGrade != ''){
			     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
			     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
			     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
			     	if(res=="W"){
			     		if(profileshgrade != null){
			     			 $('#verticalMaterialGrade').val(profileshgrade);
				             
				           }
					   }
			    	else if(res=="H"){
			     	if(hssgrade != ''){
			     		 $('#verticalMaterialGrade').val(hssgrade);
			          
			         }
			     	} 
			     	else{
			     		if(anglegrade != ''){
			     			$('#verticalMaterialGrade').val(anglegrade);
				          
				         }
			     	}
			     }
			   $('#leftConnectionMark1').empty();
			   $('#leftConnectionMark4').empty();
			  var filtered = $.grep(connectionObjList, function (el) {
			    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("trussvertical")>=0){
			        	return el.profile;
			        }
			    });
			  
				$.each(filtered, function(key, value) {
				       var ConnectionMark="<option>"+value.connectionMark+"</option>";
				         $(ConnectionMark).appendTo('#leftConnectionMark1'); 
				         $(ConnectionMark).appendTo('#leftConnectionMark4'); 
				         
				        
				   });
				//$("#trapconntab").click(function(){
					  $('#leftConnectionMark2').empty();
					   $('#leftConnectionType5').empty();
					 var connectionmark1 = $("#leftConnectionMark1").val();
					 
					 if(connectionmark1 != null){
					 var conntype = $.grep(connectionObjList, function (el) {
					        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
					        	
					        	return el.conntype;
					        }
					    });
					 $.each(conntype, function(key, value) {
						 var supportbeam="<option>"+value.conntype+"</option>";
				         $(supportbeam).appendTo('#leftConnectionMark2'); 
				         $(supportbeam).appendTo('#leftConnectionType5'); 
				             
					   });
					         
					
					
					 $('#leftConnectionMark3').empty();
					    $('#leftConnectionMethod6').empty();
					 
					 var supptype = $.grep(connectionObjList, function (el) {
						 
					        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0) ){
					        	
					        	return el.trussConn;
					        	
					        }
					    });
					 
					
					 $.each(supptype, function(key, value) {
					       var supportbeam="<option>"+value.trussConn+"</option>";
					         $(supportbeam).appendTo('#leftConnectionMark3'); 
					         $(supportbeam).appendTo('#leftConnectionMethod6'); 
					        
					   });
					
					 }
					 
					
				});	
			
	 // });
	  $("#trapezoidalprofile3").change(function(){
			var profilename = $(this).val();
			   $('#inclinedMaterialGrade').empty();
				 getProfileGrades(profilename);
				 $.each(profileGrades, function(index,data) {   
					  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
					 
			           $(grades).appendTo('#inclinedMaterialGrade'); 
			           
			           
					   
					}); 
			   
			   var res = profilename.charAt(0);
			   if(wsPlateGrade != ''){
			     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
			     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
			     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
			     	if(res=="W"){
			     		if(profileshgrade != null){
			     			 $('#inclinedMaterialGrade').val(profileshgrade);
				             
				           }
					   }
			    	else if(res=="H"){
			     	if(hssgrade != ''){
			     		 $('#inclinedMaterialGrade').val(hssgrade);
			          
			         }
			     	} 
			     	else{
			     		if(anglegrade != ''){
			     			$('#inclinedMaterialGrade').val(anglegrade);
				          
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
 // });
  
//  });
//Bind Connection Type
  // top left
  $("#endConnectionMark").change(function() {  
		 var connectionmark = $(this).val();
		 
		 if(connectionmark != null){
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#connectiontype').empty();
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
			         $(ConnType).appendTo('#connectiontype'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#connectiontype'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#connectiontype'); 
		       }
		     if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#connectiontype'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
			         $(ConnType).appendTo('#connectiontype'); 
		       }  
		         
		         
		   });
		 }
	});
	
	//top right
	$("#endConnectionMark1").change(function() {  
		 var connectionmark = $(this).val();
		 
		 
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#connectiontype1').empty();
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
			         $(ConnType).appendTo('#connectiontype1'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#connectiontype1'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#connectiontype1'); 
		       }
		     if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#connectiontype1'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
			         $(ConnType).appendTo('#connectiontype1'); 
		       } 
		         
		         
		   });
	});
	
	// bottom left
	  $("#endConnectionMark2").change(function() {  
			 var connectionmark = $(this).val();
			 
			 if(connectionmark != null){
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
			        	
			        	return el.connectionMark;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
			       var connectiontype = value.type;
			       $('#connectiontype2').empty();
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
				         $(ConnType).appendTo('#connectiontype2'); 
			       }
			       
			   
			       
			     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
			      {
			   		    var ConnType="<option>"+"ClipAngle"+"</option>";
				         $(ConnType).appendTo('#connectiontype2'); 
			       }
			     
			     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
			      {
			   		    var ConnType="<option>"+"EndPlate"+"</option>";
				         $(ConnType).appendTo('#connectiontype2'); 
			       }
			     if(connectiontype === conhbval)
			      {
			   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
				         $(ConnType).appendTo('#connectiontype2'); 
			       }  
			      if(connectiontype === convbval)
			      {
			   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
				         $(ConnType).appendTo('#connectiontype2'); 
			       }  
			         
			         
			   });
			 }
		});
		
		//bottom right
		$("#endConnectionMark3").change(function() {  
			 var connectionmark = $(this).val();
			 if(connectionmark != null){
			 
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
			        	
			        	return el.connectionMark;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
			       var connectiontype = value.type;
			       $('#connectiontype3').empty();
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
				         $(ConnType).appendTo('#connectiontype3'); 
			       }
			       
			   
			       
			     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
			      {
			   		    var ConnType="<option>"+"ClipAngle"+"</option>";
				         $(ConnType).appendTo('#connectiontype3'); 
			       }
			     
			     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
			      {
			   		    var ConnType="<option>"+"EndPlate"+"</option>";
				         $(ConnType).appendTo('#connectiontype3'); 
			       }
			     if(connectiontype === conhbval)
			      {
			   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
				         $(ConnType).appendTo('#connectiontype3'); 
			       }  
			      if(connectiontype === convbval)
			      {
			   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
				         $(ConnType).appendTo('#connectiontype3'); 
			       } 
			         
			         
			   });
			 }
		});

		 $("#trapezoidalSpliceCount").change(function() {
	        	
	            $('#spliceRows').empty();
	            var spliceCount=parseInt($('#trapezoidalSpliceCount').val() );
	            $('.spliceprofiletop').empty();
	            $('.spliceprofilebottom').empty();
	            for(var i=1;i<=spliceCount;i++) {

	                 var html=`
	                	   <div class="row traXsplice1">
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
	                     <div class="col-lg-2">
	                         <label class="labelBlack control-label">Top Chord Profile</label>
	                         <select class="form-control spliceprofiletop" id="trapTopChordProfile`+i+`">
	                             <option value="Select">Select</option>
	                        
	                         </select>
	                     </div>
	                     <div class="col-lg-2">
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
	        		  var profilename=$("#trapezoidalprofile").val();
	        		  if(profilename !="Select"){
	        		  var profiles="<option value>"+profilename+"</option>";
	    			    $(profiles).appendTo('.spliceprofiletop').prop('selected', true); 
	        		  }
	        		  $.each(wsDropDown.TopBottomChord, function(index,data) {   
		                  	
	        			  $('<option>').val(data.Profile).text(data.Profile).appendTo('.spliceprofilebottom');
	        			  
	        			    
	                        });
	        		  var profilename=$("#trapezoidalprofile1").val();
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
    $(function() {
       $('.chosen-select').chosen();
       $('.chosen-select-deselect').chosen({
           allow_single_deselect: true
       });
   });
    $(".referenceSelect").select2({
        placeholder: "Select"
    });
    $(".tmselect1").select2({
        placeholder: "Select"
    });
    $(".tmselect2").select2({
        placeholder: "Select"
    });
    $(".tmselect3").select2({
        placeholder: "Select"
    });
    $(".tmselect4").select2({
        placeholder: "Select"
    });
    $(".tmselect5").select2({
        placeholder: "Select"
    });
    $(".tmselect6").select2({
        placeholder: "Select"
    });
    $(".tmselect7").select2({
        placeholder: "Select"
    });
    $(".tmselect8").select2({
        placeholder: "Select"
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
	  	var profilename = $("#trapezoidalprofile3").val();
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
			$('#trainclined3, #trainclined2, #trainclined1, #trainclined').attr('disabled', false);
		} 
		else {
			$('#trainclined3, #trainclined2, #trainclined1, #trainclined').attr('disabled', true);
		}
	});

   

  

		