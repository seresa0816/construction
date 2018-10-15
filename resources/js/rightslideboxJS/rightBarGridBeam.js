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
$.each(wsDropDown.SurfacePreparation, function(index,data) {   
   var weldsize = "<option>"+data.SSPC_No+"</option>";
   $(weldsize).appendTo('#gsurfacePreparation1'); 
    
 }); 
         
  $.each(wsDropDown.NoOfCoats, function(index,data) {   
       var NoOfCoats = "<option>"+data.Coats+"</option>";
       $(NoOfCoats).appendTo('#gprimer2,#gpaint2'); 
        
     });         
  
  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
       var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
       $(NoOfCoats).appendTo('#ggalvanization2'); 
        
     });         

  $.each(wsDropDown.FireProofingType, function(index,data) {   
       var appendval = "<option>"+data.FireProofingType+"</option>";
       $(appendval).appendTo('#gfireProofing2'); 
        
     }); 
  $.each(wsDropDown.FireRating, function(index,data) {   
   var appendval = "<option>"+data.FireRating_fra+"</option>";
   $(appendval).appendTo('#gfireProofing3'); 
    
 }); 
   
  
  $.each(wsDropDown.AESSCategory, function(index,data) {   
       var appendval = "<option>"+data.AESS+"</option>";
       $(appendval).appendTo('#gaess1'); 
        
     });
  

  if(wsFinish != null){
	      var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
console.log(usedfinish);

var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
 
 if(paintValue != null){
 $('#gprimer1').val(paintValue);
 document.getElementById("gprimer1").setAttribute("disabled", false);
 }
 if(noOfCoatsprimer != null){
    var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
    $('select[name^="#gprimer2"] option[value=noOfCts]').attr("selected","selected");

 }

$('#chkprimer').change(function() {
   if($(this).prop("checked") == true){
       $('#gprimer1, #gprimer2').attr('disabled', false);
      if(primerperiSPreparation != null){
		  $('#gsurfacePreparation1').val(primerperiSPreparation);
	  }
   } else {
       $('#gprimer1, #gprimer2').attr('disabled', true);

   }
});
if(usedfinish == "Primer"){
$('#chkprimer').prop('checked', true);
$('#chknopaint').attr('checked', true);
$('#gprimer1,#gprimer2').attr('disabled', false);	
if(primerperiSPreparation != null){
 $('#gsurfacePreparation1').val(primerperiSPreparation);
}
} 


var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
if(usedfinish != "Galvanizing" &&  SPreparation != null){
	 $('#chkprimer').prop('checked', true);
	  $('#chknopaint').attr('checked', true);
	 $('#gprimer1,#gprimer2').attr('disabled', false);	
	 if(primerperiSPreparation != null){
		  $('#gsurfacePreparation1').val(primerperiSPreparation);
	  }
}

  var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
  var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
  var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
   if(paintValue != null){
   $('#gpaint1').val(paintValue);
   document.getElementById("gpaint1").setAttribute("disabled", false);
   }
   
   if(noOfCoatspaint != null){
      var noOfCts="<option value>"+noOfCoatspaint+"</option>";
      $('select[name^="#gpaint2"] option[value=noOfCts]').attr("selected","selected");
   }
   $('#chkpaint').change(function() {
       if($(this).prop("checked") == true){
           $('#gpaint1, #gpaint2').attr('disabled', false);
           if(paintperiSPreparation != null){
		    		  $('#gsurfacePreparation1').val(paintperiSPreparation);
		    	  }
       } else {
           $('#gpaint1, #gpaint2').attr('disabled', true);
       }
       if($('#chkprimer').prop("checked") == true){
           $('#chkprimer').removeAttr("disabled");
       } else {
           $('#chkprimer').removeAttr("disabled");
       }
       $('#ggalvanization2').attr('disabled', true);
   });
   if(usedfinish == "Paint"){
	    	  $('#chkpaint').attr('checked', true);
	    	  $('#gpaint1, #gpaint2').attr('disabled', false);
	    	  if(paintperiSPreparation != null){
	    		  $('#gsurfacePreparation1').val(paintperiSPreparation);
	    	  }
	      }

var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
var	category = wsFinish.Finish.AESS.Category;
	   
if(category != null){   
	      var aess="<option value>"+category+"</option>";
		   $('select[name^="#gaess1"] option[value=aess]').attr("selected","selected");
}
$('#chkaess').change(function() {
    if($(this).prop("checked") == true){
        $('#gaess1').attr('disabled', false);
        if(aessperiSPreparation != null){
  		  $('#gsurfacePreparation1').val(aessperiSPreparation);
  	  }
    } else {
        $('#gaess1').attr('disabled', true);
    }
    if($('#chkprimer').prop("checked") == true){
        $('#chkprimer').removeAttr("disabled");
    } else {
        $('#chkprimer').removeAttr("disabled");
    }
    $('#gpaint1, #gpaint2, #ggalvanization2, #gfireProofing2, #gfireProofing3').attr('disabled', true); 
});
if(usedfinish == "AESS"){
	  $('#chkaess').attr('checked', true);
	  $('#gaess1').attr('disabled', false);
	  if(aessperiSPreparation != null){
		  $('#gsurfacePreparation1').val(aessperiSPreparation);
	  }
}
	   var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
	   var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
	   var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	   
	 	      
	      if(fireRating != null){
	      var fireRatingval="<option value>"+fireRating+"</option>";
	      $('select[name^="#gfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	      }
	      if(fireProofingType != null){
	         var fireProofing="<option value>"+fireProofingType+"</option>";
	         $('select[name^="#gfireProofing3"] option[value=fireProofing]').attr("selected","selected");
	      }
	     $('#chkfireproofing').change(function() {
	        if($(this).prop("checked") == true){
	            $('#gfireProofing2, #gfireProofing3').attr('disabled', false);
	           if(fpperiSPreparation != null){
		       		$('#gsurfacePreparation1').val(fpperiSPreparation);
		       	}
	        } else {
	            $('#gfireProofing2, #gfireProofing3').attr('disabled', true);
	        }  
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').removeAttr("disabled");
	        } else {
	            $('#chkprimer').removeAttr("disabled");
	        }
	        $('#gpaint1, #gpaint2, #ggalvanization2, #gaess1').attr('disabled', true);  
	        // $('#chkprimer').removeAttr("disabled");
	    });
	      if(usedfinish == "Fire proofing"){
	       	  $('#chkfireproofing').attr('checked',true);
	       	  $('#gfireProofing2, #gfireProofing3').attr('disabled', false);
	       	
		    }
	   var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	   var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	      if(zincCoatingThickness != null){
	      var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	      $('select[name^="#ggalvanization2"] option[value=zincCoating]').attr("selected","selected");
	      }
	     $('#chkgalvanize').change(function() {
	        if($(this).prop("checked") == true){
	            $('#ggalvanization2').attr('disabled', false);
	           if(galperiSPreparation != null){
		     	 	 $('#gsurfacePreparation1').val(galperiSPreparation);
		     	 	   } 
	        } else {
	            $('#ggalvanization2').attr('disabled', true);
	        }
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').prop('checked', false);
	            $('#chkprimer').attr('disabled', true);
	        } 
	        else {
	            $('#chkprimer').prop('checked', false);
	            $('#chkprimer').attr('disabled', true);
	        }
	        $('#gprimer1, #gprimer2, #gpaint1, #gpaint2, #gfireProofing2, #gfireProofing3, #gaess1').attr('disabled', true);
	        // $("#chkprimer").attr('disabled', 'disabled');
	    });
	     if(usedfinish == "Galvanizing"){
	    	  $('#chkgalvanize').attr('checked', true);
	    	  $('#ggalvanization2').attr('disabled', false);
	    	  $('#chkprimer').prop('checked', false);
	            $('#chkprimer').attr('disabled', true);
	            if(galperiSPreparation != null){
	     	 	 $('#gsurfacePreparation1').val(galperiSPreparation);
	     	 	   }  
	      }
	   var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
	  $('#chknopaint').change(function() {
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').attr('disabled', false);
	           if(nopperiSPreparation != null){
		 			 $('#gsurfacePreparation1').val(nopperiSPreparation);
		 		 	   }
	        } else {
	            $('#chkprimer').attr('disabled', false);
	        }
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').removeAttr("disabled");
	        } else {
	            $('#chkprimer').removeAttr("disabled");
	        }
	        $('#gpaint1, #gpaint2, #ggalvanization2, #gfireProofing2, #gfireProofing3, #gaess1').attr('disabled', true);
	    });
	 	  if(usedfinish == "NoPaint"){
		  $('#chknopaint').attr('checked', true);
		
	  }
}     
  $.each(wsDropDown.PlateGrade, function(index,data) {   
	  var plategrade="<option value=\""+data.MaterialGrade+"\">"+data.MaterialGrade+"</option>";
     $(plategrade).appendTo('#gspshear1'); 
	}); 
if(wsPlateGrade != null){
	var plateGrades = wsPlateGrade.MemberGrades.Plates;
	 if(plateGrades != null){
        var plgrade="<option value=\""+plateGrades+"\">"+plateGrades+"</option>";
        $('select[name^="#gspshear1"] option[value=plgrade]').attr("selected","selected");
   
     }
	
}
$.each( wsDropDown.BeamProfile, function(key, value) {
	 var profiles="<option>"+value.Profile+"</option>";
$(profiles).appendTo('#gBeamProfile'); 

});

        $.each( wsDropDown.BeamOrientation, function(key, value) {
            var profiles="<option>"+value.Beam_Orientation+"</option>";
              $(profiles).appendTo('#gBeamOrientation'); 
  
        });
        
 


     $.each(wsDropDown.BeamType, function(index,data) {   
         var datasource="<option>"+data.BeamType+"</option>";
           $(datasource).appendTo('#gBeamType'); 
          
       });
     

 
  $.each(wsDropDown.DataSource, function(index,data) {   
     var datasource="<option>"+data.DataSource+"</option>";
        $(datasource).appendTo('#gBeamDataSource'); 
      
   });
$.each(wsDropDown.Camber, function(index,data) {   
     var datasource="<option>"+data.Camber_fra+"</option>";
       $(datasource).appendTo('#gcamber1'); 
      
   });


  
$.each(wsDropDown.StudDia, function(index,data) {   
 var datasource="<option>"+data.StudDia_fra+"</option>";
     $(datasource).appendTo('#gshear1'); 
  
});
$.each(wsDropDown.OverlapLength, function(index,data) {   
     var datasource="<option>"+data.OverlapLength_fra+"</option>";
       $(datasource).appendTo('#gshear2'); 
      
   });

 $.each(wsDropDown.PlateThickness, function(index,data) {   
     
     $('<option>').val(data.tp).text(data.tp_fra).appendTo('#gspshear2');
    
  
});

 $.each(wsDropDown.WeldType, function(index,data) {   
     var weldtype = "<option>"+data.wtype+"</option>";
     $(weldtype).appendTo('#gspshear4'); 
      
   });
 $.each(wsDropDown.WeldSize, function(index,data) {   
     var weldsize = "<option>"+data.weld_fra+"</option>";
     $(weldsize).appendTo('#gspshear5'); 
      
   });
     

     
     $.each(wsDropDown.Fraction, function(index,data) {   
         
         $('<option>').val(data.fr).text(data.fr_fra).appendTo('#peribeamffl_fra5,#gBeamTOS_fr,#gBeamTOSFFL_f,#peribeamffl_fr,#pbtosfr1,#peribeamffl_fra1,#pbtosfr2,#peribeamffl_fra2,#pbtosfr3,#pbtosfr4,#pbtosfr5,#pbtosfr6,#pbtosfr7,#peribeamffl_fra3,#pbtosfr8,#peribeamffl_fra4,#pbtosfr9,#pbtosfr10,#pbtosfr11,#pbtosfr12,#splicePosition1LeftEndFr,#splicePosition2LeftEndFr,#splicePosition2LeftEndFr,#splicePosition2LeftEndFr');
        
      
   });
     
   $.each(wsDropDown.Inch, function(index,data) {   
          $('<option>').val(data.Inch).text(data.Inch).appendTo('#peribeamffl_in5,#gBeamTOS_in,#gBeamTOSFFL_in,#pbtosin1,#pbtosin1,#peribeamffl_in1,#pbtosin2,#peribeamffl_in2,#pbtosin3,#pbtosin4,#pbtosin5,#pbtosin6,#pbtosin7,#peribeamffl_in3,#pbtosin8,#peribeamffl_in4,#pbtosin9,#pbtosin10,#pbtosin11,#pbtosin12,#splicePosition1LeftEndIn,#splicePosition2LeftEndIn,#splicePosition2LeftEndIn,#splicePosition2LeftEndIn,#splicePosition2LeftEndIn');
   });
           
  
    $.each(RefDwgNumFiles, function(index,data) { 
		
		var referencenum="<option>"+data+"</option>";
		
         $(referencenum).appendTo('#gBeamRefNum'); 
         
		});
    $.each(wsDropDown.FrameConnectionMethod, function(index,data) {   
        var appendval = "<option>"+data.FrameConnMethod+"</option>";
        $(appendval).appendTo('#gbfconnectionmethod'); 
         
      });  
	  
    	$("#gBeamProfile").change(function(){
    		getGradeOnProfileChange();
    		getProfileConnectionMark(); 
    		//Get Depth
			 getDepth($("#gBeamProfile").val());
    	
    	});
    	 $("#gspshear4").change(function() { 
			    if ( $("#gspshear4").val()=="CJP") {
			 	   $("#gspshear5").attr("disabled", true);
			 	   $("#gspshear5").prop('required',false);
			 	  $("#gspshear5").prop('selectedIndex',0);
			 	 $("#gspshear5").removeClass("importantRed");
			 	}else {
			 		  $("#gspshear5").attr("disabled", false);
			 		  $("#gspshear5").prop('required',true);
			 		 $("#gspshear5").addClass("importantRed");
			 	}

			 	});
		 $('#gBeamFrame').keyup(function(e){
				
			  var widthft = $("#gBeamFrame").val()
			  if(widthft > 0){
				  $("#gbfconnectionmethod").prop("disabled", false);  
				 
				  }
			  else{
				  $("#gbfconnectionmethod").prop("disabled", true);
			  }
			});
     
    function getGradeOnProfileChange(){
 	   var profilename = $("#gBeamProfile").val();
		   $('#gBeamMaterialGrade').empty();
		   getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#gBeamMaterialGrade'); 
		           
		           
				   
				});
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	var cmcgrade = wsPlateGrade.MemberGrades.Channels;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			  $('#gBeamMaterialGrade').val(profileshgrade);
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     		  $('#gBeamMaterialGrade').val(hssgrade);
		         }
		     	} 
		     	else{
		     		 if(cmcgrade != ''){
		     			  $('#gBeamMaterialGrade').val(cmcgrade);
			         } 
		     	}
		     }
		  
    }  
    function getProfileConnectionMark(){
    	var profilename=$("#gBeamProfile").find('option:selected').text();
	    $('#gBeamConnectProfile').val(profilename);
	    $('#gBeamLeftConnMark').empty();
	    $('#gBeamRightConnMark').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
	    	 if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtocolumn")>=0 )){
	        	return el.profile;
	        }
	    });
	   
	    
	    
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#gBeamLeftConnMark'); 
		         $(ConnectionMark).appendTo('#gBeamRightConnMark'); 
		   });
		
		var filtered = $.grep(connectionObjList, function (el) {
	    	 if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtobeam")>=0 )){
	        	return el.profile;
	        }
	    });
	
	    
	    
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#gBeamLeftConnMark'); 
		         $(ConnectionMark).appendTo('#gBeamRightConnMark'); 
		   });
		
		var filtered = $.grep(connectionObjList, function (el) {
	    	 if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtoembed")>=0 )){
	        	return el.profile;
	        }
	    });
	 
	    
	    
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#gBeamLeftConnMark'); 
		         $(ConnectionMark).appendTo('#gBeamRightConnMark'); 
		   });
		
		var filtered = $.grep(connectionObjList, function (el) {
	    	 if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("moment")>=0 )){
	        	return el.profile;
	        }
	    });
	  
	    
	    
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#gBeamLeftConnMark'); 
		         $(ConnectionMark).appendTo('#gBeamRightConnMark'); 
		   });
		
		
		 $('#spliceconnectionmark').empty();
		
	 	  if($("#usplicecount").val()>0){
	 		 	    var filtered = $.grep(connectionObjList, function (el) {
	 	    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("splicebeamusingsplice")>=0){
	 	        	return el.profile;
	 	        }
	 	    });
	 	    
	 	   $.each(filtered, function(key, value) {
	 		 
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		       $(ConnectionMark).appendTo('#spliceconnectionmark'); 
		   });
	 	  }
		    var filtered = $.grep(connectionObjList, function (el) {
		    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("splicebeamusingend")>=0){
		        	return el.profile;
		        }
		    });
		    
		   $.each(filtered, function(key, value) {
			  
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		       $(ConnectionMark).appendTo('#spliceconnectionmark'); 
		   });
		

		$("#rightgridbeamconntab").click(function(){
			 var connectionmark1 = $("#gBeamLeftConnMark").val();
			
			 
			 
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(connectionmark1.indexOf(el.connectionMark) >= 0){
			        	
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
			       var conhbval = "HorizontalBrace";
			       var convbval = "VerticalBrace";
			       
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
			      if(connectiontype === conhbval)
			      {
			   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
				         $(ConnType).appendTo('#gBeamLeftConnType'); 
			       }  
			      if(connectiontype === convbval)
			      {
			   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
				         $(ConnType).appendTo('#gBeamLeftConnType'); 
			       }  
			         
			   });
			         
			 var connectionmark2 = $("#gBeamRightConnMark").val();
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(connectionmark2.indexOf(el.connectionMark) >= 0){
			        	
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
			 
			 
			
			 $('#gBeamLeftConnMethod').empty();
			    $('#gBeamLeftConnMethod1').empty();
			 
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#gBeamLeftConnMethod'); 
			        
			   });
			 var supportedtype = $.grep(connectionObjList, function (el) {
				 
			        if(connectionmark1.indexOf(el.connectionMark) >= 0 ){
			        	
			        	return el.supportedside;
			        	
			        }
			    });
			 
			 $.each(supportedtype, function(key, value) {
			       var supportedbeam="<option>"+value.supportedside+"</option>";
			         $(supportedbeam).appendTo('#gBeamLeftConnMethod1'); 
			        
			   });
			 
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(connectionmark2.indexOf(el.connectionMark) >= 0 ){
			        	
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
				 
			        if(connectionmark2.indexOf(el.connectionMark) >= 0 ){
			        	
			        	return el.supportedside;
			        	
			        }
			    });
			 
			 $.each(supportedtype, function(key, value) {
			       var supportedbeam="<option>"+value.supportedside+"</option>";
			         $(supportedbeam).appendTo('#gBeamRightConnMethod1'); 
			        
			   });
		});
    }
    $("#gBeamLeftConnMark").change(function() {  
		 var connectionmark = $(this).val();
		
		 
		 
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0){
		        	
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
		       var conhbval = "HorizontalBrace";
		       var convbval = "VerticalBrace";
		       
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
		      if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#gBeamLeftConnType'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
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
		 $('#gBeamLeftConnMethod').empty();
		    $('#gBeamLeftConnMethod1').empty();
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#gBeamLeftConnMethod'); 
		        
		   });
		
		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#gBeamLeftConnMethod1'); 
		        
		   });
		 
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark2.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
	});
	
	$("#gBeamRightConnMark").change(function() {  
		 var connectionmark = $(this).val();

		 
		 
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0){
		        	
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
		       var conhbval = "HorizontalBrace";
		       var convbval = "VerticalBrace";
		       
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
		     if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#gBeamRightConnType'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
			         $(ConnType).appendTo('#gBeamRightConnType'); 
		       } 
		         
		         
		   });
		 var mconntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0 && el.type.toLowerCase().indexOf("moment")>=0){
		        	
		        	return el.moncontype;
		        }
		    });
		 $.each(mconntype, function(key, value) {
				
		       var ConnectionMark="<option>"+value.moncontype+"</option>";
		         $(ConnectionMark).appendTo('#gBeamRightConnType'); 
		       
		   });
		 $('#gBeamRightConnMethod').empty();
		 $('#gBeamRightConnMethod1').empty();
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#gBeamRightConnMethod'); 
		        
		   });

		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(connectionmark.indexOf(el.connectionMark) >= 0 ){
		        	
		        	return el.supportedside;
		        	
		        }
		    });

		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#gBeamRightConnMethod1'); 
		        
		   });
		
	});
	  $("#usplicecount").change(function() {
		  $('#spliceconnectionmark').empty();
	    	 $('#spliceRows').empty();
	        var spliceCount=parseInt($('#usplicecount').val());
	       
	      
	       
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
                          <select class="form-control per70 splicein " id="splicePositionLeftEndIn`+i+`">
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
              <div class="col-lg-3">
                  <label class="labelBlack control-label">Right Side Profile</label>
                  <select class="form-control spliceprofile" id="parallelmodalprofile`+i+`">
                      <option value="">select</option>
                  </select>
              </div>
          </div>`;

	                              $('#spliceRows').append(html);
	                }
	        // Add drop Down values 
	        $.each(wsDropDown.Inch, function(index,data) {   
			
	        $('<option>').val(data.Inch).text(data.Inch).appendTo('.splicein');        
	        
	         });

	         
		  
			  $.each(wsDropDown.Fraction, function(index,data) {   
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('.splicefr');
	                });
			  
			  
			  $.each(wsDropDown.BeamProfile, function(index,data) {   
                $('<option>').val(data.Profile).text(data.Profile).appendTo('.spliceprofile');
                
                
                  });
			  if(spliceCount > 0){
			 var profilename=$("#gBeamProfile").find('option:selected').text();
        	 var profiles = "<option value=\""+profilename+"\">"+profilename+"</option>";
		       $(profiles).appendTo('.spliceprofile').prop('selected', true); 
			  
		     
		       var profilename=$("#gBeamProfile").val();
		       var filtered = $.grep(connectionObjList, function (el) {
		 	    	if(profilename.indexOf(el.profile) >= 0  && el.type.toLowerCase().indexOf("splicebeamusingsplice")>=0){
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
$(".gbselect1").select2({
        placeholder: "Select"
    });
    $(".gbselect2").select2({
        placeholder: "Select"
    });
    
	$('#pcamber').change(function() {
		if($(this).prop("checked") == true){
			$('#gcamber1').attr('disabled', false);
		} 
		else {
			$('#gcamber1').attr('disabled', true);
		}
	})
	
	$('#pshear').change(function() {
		if($(this).prop("checked") == true){
			$('#gspshear1, #gspshear2, #gspshear3, #gspshear4, #gspshear5').attr('disabled', false);
		} 
		else {
			$('#gspshear1, #gspshear2, #gspshear3, #gspshear4, #gspshear5').attr('disabled', true);
		}
	});
	
	$('#gshear').change(function() {
		if($(this).prop("checked") == true){
			$('#gshear1, #gshear2, #gshear3').attr('disabled', false);
		} 
		else {
			$('#gshear1, #gshear2, #gshear3').attr('disabled', true);
		}
	});

   // $(function() {
        $(".hideAll").hide();
        $("#gbeamalignment").change(function() {
            if ($('#gbeamalignment').val() == 'Straight') {
                $(".efieldsFW").show();
                $(".efieldsFB").hide();
                $(".einXsplice1").hide();
                $(".einXsplice2").hide();
                $(".skewed").hide();
                $(".sloppedSkewed").hide();

            } else if ($('#gbeamalignment').val() == 'Sloped') {
                $(".efieldsFW").hide();
                $(".efieldsFB").show();
                $(".einXsplice1").show();
                $(".skewed").hide();
                $(".sloppedSkewed").hide();

            } else if ($('#gbeamalignment').val() == 'Skewed') {

                $(".skewed").show();
                $(".efieldsFB").hide();
                $(".efieldsFW").show();
                $(".einXsplice1").hide();
                $(".einXsplice2").hide();
                $(".sloppedSkewed").hide();

            }
            else if ($('#gbeamalignment').val() == 'Sloped & Skewed') {
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
    


    //ref. Drwaing Number
    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({
            allow_single_deselect: true
        });
    });
	
	
	   $("#gBeamProfile").change(function(){
			 var profilename = $(this).val();
			  $('#spliceRows').empty();
				
			  $("#usplicecount").val($("#usplicecount option:first").val());
			
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
$("#gBeamdepthForGivenProfile").remove();
$('.appendtextbox').append('<input id="gBeamdepthForGivenProfile" value="'+data.toFixed(3)+'" type="hidden" name="depth">');
$("#gBeamdepthForGivenProfile").val();


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
	