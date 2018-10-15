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
$(function() {
    $('.chosen-select').chosen();
    $('.chosen-select-deselect').chosen({
        allow_single_deselect: true
    });
}); 
 
 
 
 
/*code to avoid characters in textbox */
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
 
 


function AllowNumbersOnly(e) {
    var code = (e.which) ? e.which : e.keyCode;
   
    if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
    }
  }
$.each(wsDropDown.PlateGrade, function(index,data) {   
	  var plategrade="<option value=\""+data.MaterialGrade+"\">"+data.MaterialGrade+"</option>";
  $(plategrade).appendTo('#caspshear3'); 
	}); 
if(wsPlateGrade != null){
	var plateGrades = wsPlateGrade.MemberGrades.Plates;
	 if(plateGrades != null){
     var plgrade="<option value=\""+plateGrades+"\">"+plateGrades+"</option>";
     $('select[name^="#caspshear3"] option[value=plgrade]').attr("selected","selected");

  }
	
}

 $.each(wsDropDown.SurfacePreparation, function(index,data) {   
	   var weldsize = "<option>"+data.SSPC_No+"</option>";
	   $(weldsize).appendTo('#cansurfacePreparation1'); 
	    
	  }); 
	         
	  $.each(wsDropDown.NoOfCoats, function(index,data) {   
	       var NoOfCoats = "<option>"+data.Coats+"</option>";
	       $(NoOfCoats).appendTo('#canprimer2,#canpaint2'); 
	        
	     });         

	  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
	       var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
	       $(NoOfCoats).appendTo('#cangalvanization2'); 
	        
	     });         

	  $.each(wsDropDown.FireProofingType, function(index,data) {   
	       var appendval = "<option>"+data.FireProofingType+"</option>";
	       $(appendval).appendTo('#canfireProofing2'); 
	        
	     }); 
	  $.each(wsDropDown.FireRating, function(index,data) {   
	   var appendval = "<option>"+data.FireRating_fra+"</option>";
	   $(appendval).appendTo('#canfireProofing3'); 
	    
	  }); 
	   

	  $.each(wsDropDown.AESSCategory, function(index,data) {   
	       var appendval = "<option>"+data.AESS+"</option>";
	       $(appendval).appendTo('#canaess1'); 
	        
	  	});
	  	
	  if(wsFinish != null){
		    var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
		console.log(usedfinish);
		

		   var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
		 var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
		 var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
		    
		    if(paintValue != null){
		    $('#canprimer1').val(paintValue);
		    document.getElementById("canprimer1").setAttribute("disabled", false);
		    }
		    if(noOfCoatsprimer != null){
		       var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
		       $('select[name^="#canprimer2"] option[value=noOfCts]').attr("selected","selected");

		    }
		 
		   $('#chkprimer').change(function() {
		      if($(this).prop("checked") == true){
		          $('#canprimer1, #canprimer2').attr('disabled', false);
		         if(primerperiSPreparation != null){
		  		  $('#cansurfacePreparation1').val(primerperiSPreparation);
		  	  }
		      } else {
		          $('#canprimer1, #canprimer2').attr('disabled', true);

		      }
		  });
		if(usedfinish == "Primer"){
		$('#chkprimer').prop('checked', true);
		$('#chknopaint').attr('checked', true);
		$('#canprimer1,#canprimer2').attr('disabled', false);	
		if(primerperiSPreparation != null){
			  $('#cansurfacePreparation1').val(primerperiSPreparation);
		}
		  } 

		var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
		if(usedfinish != "Galvanizing" &&  SPreparation != null){
			 $('#chkprimer').prop('checked', true);
			  $('#chknopaint').attr('checked', true);
			 $('#canprimer1,#canprimer2').attr('disabled', false);	
			 if(primerperiSPreparation != null){
				  $('#cansurfacePreparation1').val(primerperiSPreparation);
			  }
		}
		var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
		var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
		var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
		if(paintValue != null){
		$('#canpaint1').val(paintValue);
		document.getElementById("canpaint1").setAttribute("disabled", false);
		}

		if(noOfCoatspaint != null){
		var noOfCts="<option value>"+noOfCoatspaint+"</option>";
		$('select[name^="#canpaint2"] option[value=noOfCts]').attr("selected","selected");
		}
		$('#chkpaint').change(function() {
		 if($(this).prop("checked") == true){
		     $('#canpaint1, #canpaint2').attr('disabled', false);
		     if(paintperiSPreparation != null){
			    		  $('#cansurfacePreparation1').val(paintperiSPreparation);
			    	  }
		 } else {
		     $('#canpaint1, #canpaint2').attr('disabled', true);
		 }
		 if($('#chkprimer').prop("checked") == true){
		     $('#chkprimer').removeAttr("disabled");
		 } else {
		     $('#chkprimer').removeAttr("disabled");
		 }
		 $('#cangalvanization2').attr('disabled', true);
		});
		if(usedfinish == "Paint"){
		  	  $('#chkpaint').attr('checked', true);
		  	  $('#canpaint1, #canpaint2').attr('disabled', false);
		  	  if(paintperiSPreparation != null){
		  		  $('#cansurfacePreparation1').val(paintperiSPreparation);
		  	  }
		    }

		var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
		var	category = wsFinish.Finish.AESS.Category;
		 
		if(category != null){   
		    var aess="<option value>"+category+"</option>";
			   $('select[name^="#canaess1"] option[value=aess]').attr("selected","selected");
		}
		$('#chkaess').change(function() {
		if($(this).prop("checked") == true){
		  $('#canaess1').attr('disabled', false);
		  if(aessperiSPreparation != null){
				  $('#cansurfacePreparation1').val(aessperiSPreparation);
			  }
		} else {
		  $('#canaess1').attr('disabled', true);
		}
		if($('#chkprimer').prop("checked") == true){
		  $('#chkprimer').removeAttr("disabled");
		} else {
		  $('#chkprimer').removeAttr("disabled");
		}
		$('#canpaint1, #canpaint2, #cangalvanization2, #canfireProofing2, #canfireProofing3').attr('disabled', true); 
		});
		if(usedfinish == "AESS"){
		$('#chkaess').attr('checked', true);
		$('#canaess1').attr('disabled', false);
		if(aessperiSPreparation != null){
			  $('#cansurfacePreparation1').val(aessperiSPreparation);
		}
		}
		 var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
		 var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
		 var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
		 
			      
		    if(fireRating != null){
		    var fireRatingval="<option value>"+fireRating+"</option>";
		    $('select[name^="#canfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
		    }
		    if(fireProofingType != null){
		       var fireProofing="<option value>"+fireProofingType+"</option>";
		       $('select[name^="#canfireProofing3"] option[value=fireProofing]').attr("selected","selected");
		    }
		   $('#chkfireproofing').change(function() {
		      if($(this).prop("checked") == true){
		          $('#canfireProofing2, #canfireProofing3').attr('disabled', false);
		         if(fpperiSPreparation != null){
			       		$('#cansurfacePreparation1').val(fpperiSPreparation);
			       	}
		      } else {
		          $('#canfireProofing2, #canfireProofing3').attr('disabled', true);
		      }  
		      if($('#chkprimer').prop("checked") == true){
		          $('#chkprimer').removeAttr("disabled");
		      } else {
		          $('#chkprimer').removeAttr("disabled");
		      }
		      $('#canpaint1, #canpaint2, #cangalvanization2, #canaess1').attr('disabled', true);  
		      // $('#chkprimer').removeAttr("disabled");
		  });
		    if(usedfinish == "Fire proofing"){
		     	  $('#chkfireproofing').attr('checked',true);
		     	  $('#canfireProofing2, #canfireProofing3').attr('disabled', false);
		     	
			    }
		 var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
		 var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
		    if(zincCoatingThickness != null){
		    var zincCoating="<option value>"+zincCoatingThickness+"</option>";
		    $('select[name^="#cangalvanization2"] option[value=zincCoating]').attr("selected","selected");
		    }
		   $('#chkgalvanize').change(function() {
		      if($(this).prop("checked") == true){
		          $('#cangalvanization2').attr('disabled', false);
		         if(galperiSPreparation != null){
			     	 	 $('#cansurfacePreparation1').val(galperiSPreparation);
			     	 	   } 
		      } else {
		          $('#cangalvanization2').attr('disabled', true);
		      }
		      if($('#chkprimer').prop("checked") == true){
		          $('#chkprimer').prop('checked', false);
		          $('#chkprimer').attr('disabled', true);
		      } 
		      else {
		          $('#chkprimer').prop('checked', false);
		          $('#chkprimer').attr('disabled', true);
		      }
		      $('#canprimer1, #canprimer2, #canpaint1, #canpaint2, #canfireProofing2, #canfireProofing3, #canaess1').attr('disabled', true);
		      // $("#chkprimer").attr('disabled', 'disabled');
		  });
		   if(usedfinish == "Galvanizing"){
		  	  $('#chkgalvanize').attr('checked', true);
		  	  $('#cangalvanization2').attr('disabled', false);
		  	  $('#chkprimer').prop('checked', false);
		          $('#chkprimer').attr('disabled', true);
		          if(galperiSPreparation != null){
		   	 	 $('#cansurfacePreparation1').val(galperiSPreparation);
		   	 	   }  
		    }
		 var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
		$('#chknopaint').change(function() {
		      if($('#chkprimer').prop("checked") == true){
		          $('#chkprimer').attr('disabled', false);
		         if(nopperiSPreparation != null){
			 			 $('#cansurfacePreparation1').val(nopperiSPreparation);
			 		 	   }
		      } else {
		          $('#chkprimer').attr('disabled', false);
		      }
		      if($('#chkprimer').prop("checked") == true){
		          $('#chkprimer').removeAttr("disabled");
		      } else {
		          $('#chkprimer').removeAttr("disabled");
		      }
		      $('#canpaint1, #canpaint2, #cangalvanization2, #canfireProofing2, #canfireProofing3, #canaess1').attr('disabled', true);
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
                       $(profiles).appendTo('#clbeamorientation'); 
           
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
                $(datasource).appendTo('#icamber1'); 
               
            });
         
        
           
        $.each(wsDropDown.StudDia, function(index,data) {   
          var datasource="<option>"+data.StudDia_fra+"</option>";
              $(datasource).appendTo('#cshear1'); 
           
        });
        $.each(wsDropDown.StudLength, function(index,data) {   
              var datasource="<option>"+data.StudLength_fra+"</option>";
                $(datasource).appendTo('#cshear2'); 
               
            });
       
        $.each(wsDropDown.NoOfBeams, function(index,data) {   
              var datasource="<option>"+data.No_Beams+"</option>";
                $(datasource).appendTo('#noofbeams1'); 
               
            });
        
          $.each(wsDropDown.PlateThickness, function(index,data) {   
              
              $('<option>').val(data.tp).text(data.tp_fra).appendTo('#caspshear2');
             
           
        });
         
          $.each(wsDropDown.WeldType, function(index,data) {   
              var weldtype = "<option>"+data.wtype+"</option>";
              $(weldtype).appendTo('#caspshear4'); 
               
            });
          $.each(wsDropDown.WeldSize, function(index,data) {   
              var weldsize = "<option>"+data.weld_fra+"</option>";
              $(weldsize).appendTo('#caspshear5'); 
               
            });
              
         
              
              $.each(wsDropDown.Fraction, function(index,data) {   
                  
                  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#pbtosfr7,#peribeamffl_fra4,#peribeamffl_fra5,#pbtosfr8,#pbtosfr9,#pbtosfr9,#pbtosfr10,#pbtosfr11,#pbtosfr12,#pbtosfr3,#pbtosfr4,#pbtosfr5,#pbtosfr6,#clbeamffl_fra1,#clbeamffl_fra,#pbtosfr1,#pbtosfr2,#clbeamlengthfr,#cltosfr,#clfflfr,#distRefgridfr1,#lengthofbeamfr,#lengthofbeamfr1,#clbtosfr,#clbfflfr');
                 
               
            });
              
            $.each(wsDropDown.Inch, function(index,data) {   
                   $('<option>').val(data.Inch).text(data.Inch).appendTo('#peribeamffl_in5,#peribeamffl_in4,#pbtosin7,#pbtosin8,#pbtosin9,#pbtosin10,#pbtosin11,#pbtosin12,#pbtosin3,#pbtosin4,#pbtosin5,#pbtosin6,#clbeamffl_in1,#clbeamffl_in,#pbtosin1,#pbtosin2,#clbeamlengthin,#cltosin,#clfflin,#lengthofbeamin,#distRefgridin1,#lengthofbeamin1,#clbtosin,#clbfflin');
            });
                    
        
             $.each(RefDwgNumFiles, function(index,data) { 
     			
     			var referencenum="<option>"+data+"</option>";
     			
     	         $(referencenum).appendTo('#clreferencenumber'); 
     	         
     			});
             
             
             
             $.each(wsDropDown.FrameConnectionMethod, function(index,data) {   
                 var appendval = "<option>"+data.FrameConnMethod+"</option>";
                 $(appendval).appendTo('#caBeamConnMethod'); 
                  
               }); 
                 
             $.each(wsDropDown.CantileverReferenceColumn, function(index,data) {   
                 var appendval = "<option>"+data.SlopingChords+"</option>";
                 $(appendval).appendTo('#beamparallelto'); 
                  
               });
                  function getGradeOnProfileChange(){
                	  var profilename = $(cantileverbeamprofile).val();
           		   $('#cantilevermaterialgrade').empty();
           		   
           		   getProfileGrades(profilename);
           			 $.each(profileGrades, function(index,data) {   
           				  var grades="<option>"+data.Grade+"</option>";
           				 
           		           $(grades).appendTo('#cantilevermaterialgrade'); 
           		           
           		           
           				   
           				});
           		   var res = profilename.charAt(0);
           		   if(wsPlateGrade != ''){
           		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
           		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
           		     	var cmcgrade = wsPlateGrade.MemberGrades.Channels;
           		     	if(res=="W"){
           		     		if(profileshgrade != null){
           		     			  $('#cantilevermaterialgrade').val(profileshgrade);
           			           }
           				   }
           		    	else if(res=="H"){
           		     	if(hssgrade != ''){
           		     		  $('#cantilevermaterialgrade').val(hssgrade);
           		         }
           		     	} 
           		     	else{
           		     		 if(cmcgrade != ''){
           		     			  $('#cantilevermaterialgrade').val(cmcgrade);
           			         } 
           		     	}
           		     }
                  }
                  
       		function getProfileConnectionMark(){
       		  var profilename = $(cantileverbeamprofile).val();	
       		 $('#clprofile').val(profilename);
     	    $('#clconnectionmark1').empty();
     	    $('#clconnectionmark2').empty();
     	    
     	   var filtered = $.grep(connectionObjList, function (el) {
   	    	if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtocolumn")>=0)){
   	        	return el.profile;
   	        }
   	    });
   	
   	    
   	   
   		$.each(filtered, function(key, value) {
   		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
   		         $(ConnectionMark).appendTo('#clconnectionmark1'); 
   		         $(ConnectionMark).appendTo('#clconnectionmark2'); 
   		   });
   		
   		 var filtered = $.grep(connectionObjList, function (el) {
   		    	if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtobeam")>=0)){
   		        	return el.profile;
   		        }
   		    });
   		  
   		    
   		   
   			$.each(filtered, function(key, value) {
   			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
   			         $(ConnectionMark).appendTo('#clconnectionmark1'); 
   			         $(ConnectionMark).appendTo('#clconnectionmark2'); 
   			   });
   			
   			 var filtered = $.grep(connectionObjList, function (el) {
   			    	if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtoembed")>=0)){
   			        	return el.profile;
   			        }
   			    });
   			  
   			    
   			   
   				$.each(filtered, function(key, value) {
   				       var ConnectionMark="<option>"+value.connectionMark+"</option>";
   				         $(ConnectionMark).appendTo('#clconnectionmark1'); 
   				         $(ConnectionMark).appendTo('#clconnectionmark2'); 
   				   });
   				
   				 var filtered = $.grep(connectionObjList, function (el) {
   				    	if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("moment")>=0)){
   				        	return el.profile;
   				        }
   				    });
   				 
   				    
   				   
   					$.each(filtered, function(key, value) {
   					       var ConnectionMark="<option>"+value.connectionMark+"</option>";
   					         $(ConnectionMark).appendTo('#clconnectionmark1'); 
   					         $(ConnectionMark).appendTo('#clconnectionmark2'); 
   					   });
     		$("#rightcanticonntab").click(function() {
   			 var sconntypeval = $("#spliceConnectiontype").val()
   			  if(sconntypeval == "beam"){
   				  $('#clconnectionmark1').empty();
   				    $('#clconnectionmark2').empty();
   				    
   				    var filtered = $.grep(connectionObjList, function (el) {
   				    	if(profilename[0].indexOf(el.profile[0]) >= 0 && el.type.toLowerCase().indexOf("beamtobeam")>=0){
   				        	return el.profile;
   				        }
   				    });
   			
   				    
   				   
   					$.each(filtered, function(key, value) {
   					       var ConnectionMark="<option>"+value.connectionMark+"</option>";
   					         $(ConnectionMark).appendTo('#clconnectionmark1'); 
   					         $(ConnectionMark).appendTo('#clconnectionmark2'); 
   					   });
   			  }
   			
   			 var connectionmark1 = $("#clconnectionmark1").val();
   		if(connectionmark1 != null){
   			 
   			 
   			 var conntype = $.grep(connectionObjList, function (el) {
   			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0)){
   			        	
   			        	return el.connectionMark;
   			        }
   			    });
   			
   			 $.each(conntype, function(key, value) {
   			     
   			       var connectiontype = value.type;
   			       $('#clconnectiontype1').empty();
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
   				         $(ConnType).appendTo('#clconnectiontype1'); 
   			       }
   			       
   			   
   			       
   			     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
   			      {
   			   		    var ConnType="<option>"+"ClipAngle"+"</option>";
   				         $(ConnType).appendTo('#clconnectiontype1'); 
   			       }
   			     
   			     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
   			      {
   			   		    var ConnType="<option>"+"EndPlate"+"</option>";
   				         $(ConnType).appendTo('#clconnectiontype1'); 
   			       }
   			     if(connectiontype === conhbval)
   			      {
   			   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
   				         $(ConnType).appendTo('#clconnectiontype1'); 
   			       }  
   			      if(connectiontype === convbval)
   			      {
   			   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
   				         $(ConnType).appendTo('#clconnectiontype1'); 
   			       } 
   			         
   				    });
   			 $('#clconnectionmss1').empty();
   			    $('#clconnectionmss3').empty();
   			 var supptype = $.grep(connectionObjList, function (el) {
   				 
   			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
   			        	
   			        	return el.supportside;
   			        	
   			        }
   			    });
   			 
   			
   			 $.each(supptype, function(key, value) {
   			       var supportbeam="<option>"+value.supportside+"</option>";
   			         $(supportbeam).appendTo('#clconnectionmss1'); 
   			        
   			   });
   			
   			 var supportedtype = $.grep(connectionObjList, function (el) {
   				 
   			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
   			        	
   			        	return el.supportedside;
   			        	
   			        }
   			    });
   		
   			 $.each(supportedtype, function(key, value) {
   			       var supportedbeam="<option>"+value.supportedside+"</option>";
   			         $(supportedbeam).appendTo('#clconnectionmss3'); 
   			        
   			   });
   		}
   		});
   		 var connectionmark2 = $("#clconnectionmark2").val();
   	
   		 if(connectionmark2 != null){
   		 var conntype = $.grep(connectionObjList, function (el) {
   		        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0)){
   		        	
   		        	return el.connectionMark;
   		        }
   		    });
   		
   		 $.each(conntype, function(key, value) {
   		     
   		       var connectiontype = value.type;
   		       $('#clconnectiontype2').empty();
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
   			         $(ConnType).appendTo('#clconnectiontype2'); 
   		       }
   		       
   		   
   		       
   		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
   		      {
   		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
   			         $(ConnType).appendTo('#clconnectiontype2'); 
   		       }
   		     
   		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
   		      {
   		   		    var ConnType="<option>"+"EndPlate"+"</option>";
   			         $(ConnType).appendTo('#clconnectiontype2'); 
   		       }
   		     if(connectiontype === conhbval)
   		      {
   		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
   			         $(ConnType).appendTo('#clconnectiontype2'); 
   		       }  
   		      if(connectiontype === convbval)
   		      {
   		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
   			         $(ConnType).appendTo('#clconnectiontype2'); 
   		       } 
   		         
   		         
   		   });
   		 $('#clconnectionmss2').empty();
   		    $('#clconnectionmss4').empty();
   		 var supptype = $.grep(connectionObjList, function (el) {
   			 
   		        if(connectionmark2.indexOf(el.connectionMark) >= 0 ){
   		        	
   		        	return el.supportside;
   		        	
   		        }
   		    });
   		 
   		
   		 $.each(supptype, function(key, value) {
   		       var supportbeam="<option>"+value.supportside+"</option>";
   		         $(supportbeam).appendTo('#clconnectionmss2'); 
   		        
   		   });
 
   		 var supportedtype = $.grep(connectionObjList, function (el) {
   			 
   		        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0 )){
   		        	
   		        	return el.supportedside;
   		        	
   		        }
   		    });
   	
   		 $.each(supportedtype, function(key, value) {
   		       var supportedbeam="<option>"+value.supportedside+"</option>";
   		         $(supportedbeam).appendTo('#clconnectionmss4'); 
   		        
   		   });
   		 }
       			}

       	 $("#caspshear4").change(function() {  
			    if ( $("#caspshear4").val()=="CJP") {
			 	  
			 	   $("#caspshear5").attr("disabled", true);
			 	   $("#caspshear5").prop('required',false);
			 	  $("#caspshear5").prop('selectedIndex',0);
			 	}else {
			 		  $("#caspshear5").attr("disabled", false);
			 		  $("#caspshear5").prop('required',true);
			 	}

			 	});
	
	$("#cantileverbeamprofile").change(function(){
		 getGradeOnProfileChange();
		 getProfileConnectionMark();
		
		 getDepth($("#cantileverbeamprofile").val());  
	   
		   
	$('#caBeamframe').keyup(function(e){
		
		  var widthft = $("#caBeamframe").val()
		  if(widthft > 0){
			  $("#caBeamConnMethod").prop("disabled", false);  
			 
			  }
		  else{
			  $("#caBeamConnMethod").prop("disabled", true);
		  }
		});
  });
	
	
	$('#spliceConnectiontype').change(function(){
		  var sconntypeval = $("#spliceConnectiontype").val()
		  var profilename = $("#cantileverbeamprofile").val();
		  if(sconntypeval == "beam"){
			  $('#clconnectionmark1').empty();
			    $('#clconnectionmark2').empty();
			    
			    var filtered = $.grep(connectionObjList, function (el) {
			    	if(profilename.indexOf(el.profile) >= 0 && el.type.toLowerCase().indexOf("beamtobeam")>=0){
			        	return el.profile;
			        }
			    });
			    
			    
			   
				$.each(filtered, function(key, value) {
				       var ConnectionMark="<option>"+value.connectionMark+"</option>";
				         $(ConnectionMark).appendTo('#clconnectionmark1'); 
				         $(ConnectionMark).appendTo('#clconnectionmark2'); 
				   });
				 $.each(wsDropDown.CantileverReferenceBeam, function(index,data) {   
	                 var appendval = "<option>"+data.SlopingChords+"</option>";
	                 $(appendval).appendTo('#beamparallelto1'); 
	                  
	               });
		  }
		  else{
			  $('#clconnectionmark1').empty();
			    $('#clconnectionmark2').empty();
			    
			    var filtered = $.grep(connectionObjList, function (el) {
			    	if(profilename.indexOf(el.profile) >= 0 && el.type.toLowerCase().indexOf("beamtocolumn")>=0){
			        	return el.profile;
			        }
			    });
		
			    
			   
				$.each(filtered, function(key, value) {
				       var ConnectionMark="<option>"+value.connectionMark+"</option>";
				         $(ConnectionMark).appendTo('#clconnectionmark1'); 
				         $(ConnectionMark).appendTo('#clconnectionmark2'); 
				   });
				 $.each(wsDropDown.CantileverReferenceColumn, function(index,data) {   
	                 var appendval = "<option>"+data.SlopingChords+"</option>";
	                 $(appendval).appendTo('#beamparallelto'); 
	                  
	               });
		  }
		});



//Bind Connection Type
  
  $("#clconnectionmark1").change(function() {  
		 var connectionmark = $(this).val();

		 
		 
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#clconnectiontype1').empty();
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
			         $(ConnType).appendTo('#clconnectiontype1'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#clconnectiontype1'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#clconnectiontype1'); 
		       }
		     if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#clconnectiontype1'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
			         $(ConnType).appendTo('#clconnectiontype1'); 
		       } 
		         
		         
		   });
		 var mconntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0 && el.type.toLowerCase().indexOf("moment")>=0){
		        	
		        	return el.moncontype;
		        }
		    });
		 $.each(mconntype, function(key, value) {
				
		       var ConnectionMark="<option>"+value.moncontype+"</option>";
		         $(ConnectionMark).appendTo('#clconnectiontype1'); 
		       
		   });
		 $('#clconnectionmss1').empty();
		    $('#clconnectionmss3').empty();
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0) ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#clconnectionmss1'); 
		        
		   });
		
		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
	
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#clconnectionmss3'); 
		        
		   });
	});
  
  $("#clconnectionmark2").change(function() {  
		 var connectionmark = $(this).val();

		 
		 
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#clconnectiontype2').empty();
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
			         $(ConnType).appendTo('#clconnectiontype2'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#clconnectiontype2'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#clconnectiontype2'); 
		       }
		     if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#clconnectiontype2'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
			         $(ConnType).appendTo('#clconnectiontype2'); 
		       } 
		         
		         
		   });
		 var mconntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0 && el.type.toLowerCase().indexOf("moment")>=0){
		        	
		        	return el.moncontype;
		        }
		    });
		 $.each(mconntype, function(key, value) {
				
		       var ConnectionMark="<option>"+value.moncontype+"</option>";
		         $(ConnectionMark).appendTo('#clconnectiontype2'); 
		       
		   });
		 $('#clconnectionmss2').empty();
		    $('#clconnectionmss4').empty();
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#clconnectionmss2'); 
		        
		   });

		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0) ){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
		
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#clconnectionmss4'); 
		        
		   });
	});

 


 
/*code to avoid characters in textbox */
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
 
 


	$("#cantileverbeamprofile").change(function() {
		var profilename = $(this).val();
		getProfileGrades(profilename);
		$('#cantilevermaterialgrade').empty();

		$.each(profileGrades, function(index, data) {
			var grades = "<option>" + data.Grade + "</option>";
			$(grades).appendTo('#cantilevermaterialgrade');
		});
	});



	$("#cantilevermaterialgrade").click(function() {
		var profilename = $("#cantileverbeamprofile").val();
		if (profilename) {
			getProfileGrades(profilename);
			$('#cantilevermaterialgrade').empty();

			$.each(profileGrades, function(index, data) {
				var grades = "<option>" + data.Grade + "</option>";
				$(grades).appendTo('#cantilevermaterialgrade');
			});

		} else {

		}
	});

  // JQuery Code
	$(".referenceSelect").select2({
        placeholder: "Select"
    });
   $(".cbselect1").select2({
        placeholder: "Select"
    });
    $(".cbselect2").select2({
        placeholder: "Select"
    });

    /* // Start Finish check
     $('#chkprimer').change(function() {
        if($(this).prop("checked") == true){
            $('#canprimer1, #canprimer2').attr('disabled', false);
        } else {
            $('#canprimer1, #canprimer2').attr('disabled', true);
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
        $('#canpaint1, #canpaint2, #cangalvanization2, #canfireProofing2, #canfireProofing3, #canaess1').attr('disabled', true);
    });
    $('#chkpaint').change(function() {
        if($(this).prop("checked") == true){
            $('#canpaint1, #canpaint2').attr('disabled', false);
        } else {
            $('#canpaint1, #canpaint2').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#cangalvanization2').attr('disabled', true);
    });
    $('#chkgalvanize').change(function() {
        if($(this).prop("checked") == true){
            $('#cangalvanization2').attr('disabled', false);
        } else {
            $('#cangalvanization2').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        } 
        else {
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        }
        $('#canprimer1, #canprimer2, #canpaint1, #canpaint2, #canfireProofing2, #canfireProofing3, #canaess1').attr('disabled', true);
        // $("#chkprimer").attr('disabled', 'disabled');
    });
    $('#chkfireproofing').change(function() {
        if($(this).prop("checked") == true){
            $('#canfireProofing2, #canfireProofing3').attr('disabled', false);
        } else {
            $('#canfireProofing2, #canfireProofing3').attr('disabled', true);
        }  
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#canpaint1, #canpaint2, #cangalvanization2, #canaess1').attr('disabled', true);  
        // $('#chkprimer').removeAttr("disabled");
    });
    $('#chkaess').change(function() {
        if($(this).prop("checked") == true){
            $('#canaess1').attr('disabled', false);
        } else {
            $('#canaess1').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#canpaint1, #canpaint2, #cangalvanization2, #canfireProofing2, #canfireProofing3').attr('disabled', true); 
    });
    // End Finish check
	
*/	$('#stiffnerplate').change(function() {
		if($(this).prop("checked") == true){
			$('#caspshear1, #caspshear2, #caspshear3, #caspshear4, #caspshear5').attr('disabled', false);
		} 
		else {
			$('#caspshear1, #caspshear2, #caspshear3, #caspshear4, #caspshear5').attr('disabled', true);
			$("#caspshear1,#caspshear2,#caspshear3,#caspshear4,#caspshear5").removeClass("importantRed");
		}
	});
	
	$('#cshear').change(function() {
		if($(this).prop("checked") == true){
			$('#cshear1, #cshear2, #cshear3').attr('disabled', false);
		} 
		else {
			$('#cshear1, #cshear2, #cshear3').attr('disabled', true);
			$("#cshear1,#cshear2,#cshear3").removeClass("importantRed");
		}
	});
	
        $(document).ready(function() {
        	$('#beamRows').empty();
            if($('#spliceConnectiontype').val()=='column'){
            	var html=`
                	   <label class="labelBlack control-label">Cantilever Beam Position w.r.t the reference column</label>
                              <select class="form-control col-lg-4" id="beamparallelto">
                              </select>
               
                 `;
                 $('#beamRows').append(html);
                 $.each(wsDropDown.CantileverReferenceColumn, function(index,data) {   
                     var appendval = "<option>"+data.SlopingChords+"</option>";
                     $(appendval).appendTo('#beamparallelto'); 
                      
                   });
                 $(".swelded").show();
                 $(".splate").hide();
				
            }
            else if($('#spliceConnectiontype').val()=='beam'){
            	var html=`
                	   <label class="labelBlack control-label">Cantilever Beam Position w.r.t the reference beam</label>
                                 <select class="form-control col-lg-4" id="beamparallelto">
                                 </select>
               
                 `;
                 $('#beamRows').append(html);
                 $.each(wsDropDown.CantileverReferenceBeam, function(index,data) {   
	                 var appendval = "<option>"+data.SlopingChords+"</option>";
	                 $(appendval).appendTo('#beamparallelto'); 
	                  
	               });
                $(".swelded").show();
                $(".splate").show();
			}
            
        
    	});
      
       // $(function() {

            $(".hideAll").hide();
            $("#clbeamalignment").change(function() {

                if ($('#clbeamalignment').val() == 'Straight') {
                    $(".efieldsFW").show();
                    $(".efieldsFB").hide();
                    $(".einXsplice1").hide();
                    $(".einXsplice2").hide();
                    $(".skewed").hide();
                    $(".sloppedSkewed").hide();

                } else if ($('#clbeamalignment').val() == 'Sloped') {
                    $(".efieldsFW").hide();
                    $(".efieldsFB").show();
                    $(".einXsplice1").show();
                    $(".skewed").hide();
                    $(".sloppedSkewed").hide();


                } else if ($('#clbeamalignment').val() == 'Skewed') {
                    $(".skewed").show();
                    $(".efieldsFB").hide();
                    $(".efieldsFW").show();
                    $(".einXsplice1").hide();
                    $(".einXsplice2").hide();
                    $(".sloppedSkewed").hide();


                }
                else if ($('#clbeamalignment').val() == 'Sloped & Skewed') {
                $(".skewed").hide();
                $(".efieldsFB").hide();
                $(".efieldsFW").hide();
                $(".einXsplice1").hide();
                $(".einXsplice2").hide();
               $(".sloppedSkewed").show();
               $("#colTopNegative4,#colTopNegative5,#colTopNegative6,#colTopNegative7,#pbtosin9,#pbtosin10,#pbtosin11,#pbtosin12,#pbtosfr9,#pbtosfr10,#pbtosfr11,#pbtosfr12").prop('selectedIndex', 0);

            } 


            });
        //});

        //ref. Drwaing Number
        $(function() {
            $('.chosen-select').chosen();
            $('.chosen-select-deselect').chosen({
                allow_single_deselect: true
            });
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
$("#cantileverbeamdepthForGivenProfile").remove();
$('.appendtextbox').append('<input id="cantileverbeamdepthForGivenProfile" value="'+data.toFixed(3)+'" type="text" name="depth">');
$("#cantileverbeamdepthForGivenProfile").val();

/* $.ajax({

type: "GET",
url: "/bimspring/getDepthForGivenProfile", 
data: "profile=" + Profile,
async: false,
success: function(data)
{


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

        
        
        $("#cantileverbeamprofile").change(function(){
      		$("#cantileverprofile .select2-container--default .select2-selection--single").removeClass("importantRed");
      		});
      	$("#cantilevermaterialgrade").change(function(){
      		$("#cantilevergrade .select2-container--default .select2-selection--single").removeClass("importantRed");
      		});
      	

      	$("#lengthofbeamft").keyup(function(e){
      		$("#lengthofbeamft").removeClass("importantRed");
      		});
      	$("#clbtosft").keyup(function(e){
      		$("#clbtosft").removeClass("importantRed");
      		});
      	$("#cshear3").keyup(function(e){
      		$("#cshear3").removeClass("importantRed");
      		});
      	$("#cshear2").keyup(function(e){
      		$("#cshear2").removeClass("importantRed");
      		});
      		$("#cshear1").change(function(){
      		$("#cshear1").removeClass("importantRed");
      		});
      	$("#caspshear2").change(function(){
      		$("#caspshear2").removeClass("importantRed");
      		});
      	$("#caspshear4").change(function(){
      		$("#caspshear4").removeClass("importantRed");
      		});
      	$("#caspshear5").change(function(){
      		$("#caspshear5").removeClass("importantRed");
      		});
      	$("#caspshear1").keyup(function(e){
      		$("#caspshear1").removeClass("importantRed");
      		});
      	
      	$("#caBeamConnMethod").change(function(){
      			$("#caBeamConnMethod").removeClass("importantRed");
      			});
   
        
        
