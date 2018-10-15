 
  $(function() {
    $('.chosen-select').chosen();
    $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
  });
  $(".referenceSelect").select2({
      placeholder: "Select"
  });
  	$(".ibselect1").select2({
	    placeholder: "Select"
	});
	$(".ibselect2").select2({
	    placeholder: "Select"
	});
  /*  // Start Finish check
     $('#chkprimer').change(function() {
        if($(this).prop("checked") == true){
            $('#infilprimer1, #infilprimer2').attr('disabled', false);
        } else {
            $('#infilprimer1, #infilprimer2').attr('disabled', true);
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
        $('#infilpaint1, #infilpaint2, #infilgalvanization2, #infilfireProofing2, #infilfireProofing3, #infilaess1').attr('disabled', true);
    });
    $('#chkpaint').change(function() {
        if($(this).prop("checked") == true){
            $('#infilpaint1, #infilpaint2').attr('disabled', false);
        } else {
            $('#infilpaint1, #infilpaint2').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#infilgalvanization2').attr('disabled', true);
    });
    $('#chkgalvanize').change(function() {
        if($(this).prop("checked") == true){
            $('#infilgalvanization2').attr('disabled', false);
        } else {
            $('#infilgalvanization2').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        } 
        else {
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        }
        $('#infilprimer1, #infilprimer2, #infilpaint1, #infilpaint2, #infilfireProofing2, #infilfireProofing3, #infilaess1').attr('disabled', true);
        // $("#chkprimer").attr('disabled', 'disabled');
    });
    $('#chkfireproofing').change(function() {
        if($(this).prop("checked") == true){
            $('#infilfireProofing2, #infilfireProofing3').attr('disabled', false);
        } else {
            $('#infilfireProofing2, #infilfireProofing3').attr('disabled', true);
        }  
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#infilpaint1, #infilpaint2, #infilgalvanization2, #infilaess1').attr('disabled', true);  
        // $('#chkprimer').removeAttr("disabled");
    });
    $('#chkaess').change(function() {
        if($(this).prop("checked") == true){
            $('#infilaess1').attr('disabled', false);
        } else {
            $('#infilaess1').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#infilpaint1, #infilpaint2, #infilgalvanization2, #infilfireProofing2, #infilfireProofing3').attr('disabled', true); 
    });
    // End Finish check
*/    // infill position

	
	$('#ishear').change(function() {
		if($(this).prop("checked") == true){
			$('#ishear1, #ishear2, #ishear3, #ishear4').attr('disabled', false);
		} 
		else {
			$('#ishear1, #ishear2, #ishear3, #ishear4').attr('disabled', true);
			$("#ishear1,#ishear2,#ishear3,#ishear4,#ishear5").removeClass("importantRed");
		}
	});
	
	$('#icamber').change(function() {
		if($(this).prop("checked") == true){
			$('#icamber1, #icamber2').attr('disabled', false);
		} 
		else {
			$('#icamber1, #icamber2').attr('disabled', true);
			$("#icamber1").removeClass("importantRed");
			$("#icamber2").removeClass("importantRed");

		}
	});
	
	$('#istiffenerplate').change(function() {
		if($(this).prop("checked") == true){
			$('#ispshear1, #ispshear2, #ispshear3, #ispshear4, #ispshear5').attr('disabled', false);
		} 
		else {
			$('#ispshear1, #ispshear2, #ispshear3, #ispshear4, #ispshear5').attr('disabled', true);
			$("#ispshear1").removeClass("importantRed");
			$("#ispshear2").removeClass("importantRed");
			$("#ispshear3").removeClass("importantRed");
			$("#ispshear4").removeClass("importantRed");
			$("#ispshear5").removeClass("importantRed");
		}
	});

    $("#noofbeams1, #ESConnectiontype").change(function() {
            if ($('#noofbeams1').val() == '/option' || $('#ESConnectiontype').val() == 'ES') {
                $(".inXsplice1").hide();
                $(".inXsplice2").hide();
                $(".inXsplice3").hide();
                $(".inXsplice4").hide();
                $(".inXsplice5").hide();
                $(".inXsplice6").hide();
                $(".inXsplice7").hide();
                $(".inXsplice8").hide();
                $(".inXsplice9").hide();
                $(".inXsplice10").hide();

            } else if ($('#noofbeams1').val() == '1') {
                $(".inXsplice1").show();
                $(".inXsplice2").hide();
                $(".inXsplice3").hide();
                $(".inXsplice4").hide();
                $(".inXsplice5").hide();
                $(".inXsplice6").hide();
                $(".inXsplice7").hide();
                $(".inXsplice8").hide();
                $(".inXsplice9").hide();
                $(".inXsplice10").hide();
            } else if ($('#noofbeams1').val() == '2') {
                $(".inXsplice1").show();
                $(".inXsplice2").show();
                $(".inXsplice3").hide();
                $(".inXsplice4").hide();
                $(".inXsplice5").hide();
                $(".inXsplice6").hide();
                $(".inXsplice7").hide();
                $(".inXsplice8").hide();
                $(".inXsplice9").hide();
                $(".inXsplice10").hide();
            } else if ($('#noofbeams1').val() == '3') {
                $(".inXsplice1").show();
                $(".inXsplice2").show();
                $(".inXsplice3").show();
                $(".inXsplice4").hide();
                $(".inXsplice5").hide();
                $(".inXsplice6").hide();
                $(".inXsplice7").hide();
                $(".inXsplice8").hide();
                $(".inXsplice9").hide();
                $(".inXsplice10").hide();
            } else if ($('#noofbeams1').val() == '4') {
                $(".inXsplice1").show();
                $(".inXsplice2").show();
                $(".inXsplice3").show();
                $(".inXsplice4").show();
                $(".inXsplice5").hide();
                $(".inXsplice6").hide();
                $(".inXsplice7").hide();
                $(".inXsplice8").hide();
                $(".inXsplice9").hide();
                $(".inXsplice10").hide();
            } else if ($('#noofbeams1').val() == '5') {
                $(".inXsplice1").show();
                $(".inXsplice2").show();
                $(".inXsplice3").show();
                $(".inXsplice4").show();
                $(".inXsplice5").show();
                $(".inXsplice6").hide();
                $(".inXsplice7").hide();
                $(".inXsplice8").hide();
                $(".inXsplice9").hide();
                $(".inXsplice10").hide();
            } else if ($('#noofbeams1').val() == '6') {
                $(".inXsplice1").show();
                $(".inXsplice2").show();
                $(".inXsplice3").show();
                $(".inXsplice4").show();
                $(".inXsplice5").show();
                $(".inXsplice6").show();
                $(".inXsplice7").hide();
                $(".inXsplice8").hide();
                $(".inXsplice9").hide();
                $(".inXsplice10").hide();
            } else if ($('#noofbeams1').val() == '7') {
                $(".inXsplice1").show();
                $(".inXsplice2").show();
                $(".inXsplice3").show();
                $(".inXsplice4").show();
                $(".inXsplice5").show();
                $(".inXsplice6").show();
                $(".inXsplice7").show();
                $(".inXsplice8").hide();
                $(".inXsplice9").hide();
                $(".inXsplice10").hide();
            } else if ($('#noofbeams1').val() == '8') {
                $(".inXsplice1").show();
                $(".inXsplice2").show();
                $(".inXsplice3").show();
                $(".inXsplice4").show();
                $(".inXsplice5").show();
                $(".inXsplice6").show();
                $(".inXsplice7").show();
                $(".inXsplice8").show();
                $(".inXsplice9").hide();
                $(".inXsplice10").hide();
            } else if ($('#noofbeams1').val() == '9') {
                $(".inXsplice1").show();
                $(".inXsplice2").show();
                $(".inXsplice3").show();
                $(".inXsplice4").show();
                $(".inXsplice5").show();
                $(".inXsplice6").show();
                $(".inXsplice7").show();
                $(".inXsplice8").show();
                $(".inXsplice9").show();
                $(".inXsplice10").hide();
            } else if ($('#noofbeams1').val() == '10') {
                $(".inXsplice1").show();
                $(".inXsplice2").show();
                $(".inXsplice3").show();
                $(".inXsplice4").show();
                $(".inXsplice5").show();
                $(".inXsplice6").show();
                $(".inXsplice7").show();
                $(".inXsplice8").show();
                $(".inXsplice9").show();
                $(".inXsplice10").show();
            }

        });

 	// splice count infill
    $(".infillXsplice1").hide();
    $(".infillXsplice2").hide();
    $(function() {
        $("#infillcXsplicecount").change(function() {
            if ($('#infillcXsplicecount').val() == 'infillX0') {
                $(".sXsplice1").hide();
                $(".sXsplice2").hide();
            } else if ($('#infillcXsplicecount').val() == 'infillX1') {
                $(".infillXsplice1").show();
                $(".infillXsplice2").hide();
            } else if ($('#tracXsplicecount').val() == 'infillX2') {
                $(".infillXsplice1").show();
                $(".infillXsplice2").show();
            }
        });
    });

  function AllowNumbersOnly(e) {
      var code = (e.which) ? e.which : e.keyCode;
     
      if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
      }
    }
  
  $.each(wsDropDown.SurfacePreparation, function(index,data) {   
     var weldsize = "<option>"+data.SSPC_No+"</option>";
     $(weldsize).appendTo('#infilsurfacePreparation1'); 
      
   }); 
     
  $.each(wsDropDown.NoOfCoats, function(index,data) {   
         var NoOfCoats = "<option>"+data.Coats+"</option>";
         $(NoOfCoats).appendTo('#infilpaint2,#infilprimer2'); 
          
       });     
  
  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
       var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
       $(NoOfCoats).appendTo('#infilgalvanization2'); 
        
     });     

  $.each(wsDropDown.FireProofingType, function(index,data) {   
       var appendval = "<option>"+data.FireProofingType+"</option>";
       $(appendval).appendTo('#infilfireProofing2'); 
        
     }); 
  $.each(wsDropDown.FireRating, function(index,data) {   
     var appendval = "<option>"+data.FireRating_fra+"</option>";
     $(appendval).appendTo('#infilfireProofing3'); 
      
   }); 
       
  
  $.each(wsDropDown.AESSCategory, function(index,data) {   
         var appendval = "<option>"+data.AESS+"</option>";
         $(appendval).appendTo('#infilaess1'); 
          
       });
  if(wsFinish != null){
      var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
console.log(usedfinish);
var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
   
   if(paintValue != null){
   $('#infilprimer1').val(paintValue);
   document.getElementById("infilprimer1").setAttribute("disabled", false);
   }
   if(noOfCoatsprimer != null){
      var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
      $('select[name^="#infilprimer2"] option[value=noOfCts]').attr("selected","selected");

   }

  $('#chkprimer').change(function() {
     if($(this).prop("checked") == true){
         $('#infilprimer1, #infilprimer2').attr('disabled', false);
        if(primerperiSPreparation != null){
 		  $('#infilsurfacePreparation1').val(primerperiSPreparation);
 	  }
     } else {
         $('#infilprimer1, #infilprimer2').attr('disabled', true);

     }
 });
if(usedfinish == "Primer"){
$('#chkprimer').prop('checked', true);
$('#chknopaint').attr('checked', true);
$('#infilprimer1,#infilprimer2').attr('disabled', false);	
if(primerperiSPreparation != null){
	  $('#infilsurfacePreparation1').val(primerperiSPreparation);
}
 } 


var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
if(usedfinish != "Galvanizing" &&  SPreparation != null){
	 $('#chkprimer').prop('checked', true);
	  $('#chknopaint').attr('checked', true);
	 $('#infilprimer1,#infilprimer2').attr('disabled', false);	
	 if(primerperiSPreparation != null){
		  $('#infilsurfacePreparation1').val(primerperiSPreparation);
	  }
}
var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
if(paintValue != null){
$('#infilpaint1').val(paintValue);
document.getElementById("infilpaint1").setAttribute("disabled", false);
}

if(noOfCoatspaint != null){
  var noOfCts="<option value>"+noOfCoatspaint+"</option>";
  $('select[name^="#infilpaint2"] option[value=noOfCts]').attr("selected","selected");
}
$('#chkpaint').change(function() {
   if($(this).prop("checked") == true){
       $('#infilpaint1, #infilpaint2').attr('disabled', false);
       if(paintperiSPreparation != null){
	    		  $('#infilsurfacePreparation1').val(paintperiSPreparation);
	    	  }
   } else {
       $('#infilpaint1, #infilpaint2').attr('disabled', true);
   }
   if($('#chkprimer').prop("checked") == true){
       $('#chkprimer').removeAttr("disabled");
   } else {
       $('#chkprimer').removeAttr("disabled");
   }
   $('#infilgalvanization2').attr('disabled', true);
});
if(usedfinish == "Paint"){
    	  $('#chkpaint').attr('checked', true);
    	  $('#infilpaint1, #infilpaint2').attr('disabled', false);
    	  if(paintperiSPreparation != null){
    		  $('#infilsurfacePreparation1').val(paintperiSPreparation);
    	  }
      }

 var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
var	category = wsFinish.Finish.AESS.Category;
   
if(category != null){   
      var aess="<option value>"+category+"</option>";
	   $('select[name^="#infilaess1"] option[value=aess]').attr("selected","selected");
}
$('#chkaess').change(function() {
if($(this).prop("checked") == true){
    $('#infilaess1').attr('disabled', false);
    if(aessperiSPreparation != null){
		  $('#infilsurfacePreparation1').val(aessperiSPreparation);
	  }
} else {
    $('#infilaess1').attr('disabled', true);
}
if($('#chkprimer').prop("checked") == true){
    $('#chkprimer').removeAttr("disabled");
} else {
    $('#chkprimer').removeAttr("disabled");
}
$('#infilpaint1, #infilpaint2, #infilgalvanization2, #infilfireProofing2, #infilfireProofing3').attr('disabled', true); 
});
if(usedfinish == "AESS"){
  $('#chkaess').attr('checked', true);
  $('#infilaess1').attr('disabled', false);
  if(aessperiSPreparation != null){
	  $('#infilsurfacePreparation1').val(aessperiSPreparation);
  }
}
   var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
   var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
   var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
   
 	      
      if(fireRating != null){
      var fireRatingval="<option value>"+fireRating+"</option>";
      $('select[name^="#infilfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
      }
      if(fireProofingType != null){
         var fireProofing="<option value>"+fireProofingType+"</option>";
         $('select[name^="#infilfireProofing3"] option[value=fireProofing]').attr("selected","selected");
      }
     $('#chkfireproofing').change(function() {
        if($(this).prop("checked") == true){
            $('#infilfireProofing2, #infilfireProofing3').attr('disabled', false);
           if(fpperiSPreparation != null){
	       		$('#infilsurfacePreparation1').val(fpperiSPreparation);
	       	}
        } else {
            $('#infilfireProofing2, #infilfireProofing3').attr('disabled', true);
        }  
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#infilpaint1, #infilpaint2, #infilgalvanization2, #infilaess1').attr('disabled', true);  
        // $('#chkprimer').removeAttr("disabled");
    });
      if(usedfinish == "Fire proofing"){
       	  $('#chkfireproofing').attr('checked',true);
       	  $('#infilfireProofing2, #infilfireProofing3').attr('disabled', false);
       	
	    }
   var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
   var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
      if(zincCoatingThickness != null){
      var zincCoating="<option value>"+zincCoatingThickness+"</option>";
      $('select[name^="#infilgalvanization2"] option[value=zincCoating]').attr("selected","selected");
      }
     $('#chkgalvanize').change(function() {
        if($(this).prop("checked") == true){
            $('#infilgalvanization2').attr('disabled', false);
           if(galperiSPreparation != null){
	     	 	 $('#infilsurfacePreparation1').val(galperiSPreparation);
	     	 	   } 
        } else {
            $('#infilgalvanization2').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        } 
        else {
            $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
        }
        $('#infilprimer1, #infilprimer2, #infilpaint1, #infilpaint2, #infilfireProofing2, #infilfireProofing3, #infilaess1').attr('disabled', true);
        // $("#chkprimer").attr('disabled', 'disabled');
    });
     if(usedfinish == "Galvanizing"){
    	  $('#chkgalvanize').attr('checked', true);
    	  $('#infilgalvanization2').attr('disabled', false);
    	  $('#chkprimer').prop('checked', false);
            $('#chkprimer').attr('disabled', true);
            if(galperiSPreparation != null){
     	 	 $('#infilsurfacePreparation1').val(galperiSPreparation);
     	 	   }  
      }
   var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
  $('#chknopaint').change(function() {
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').attr('disabled', false);
           if(nopperiSPreparation != null){
	 			 $('#infilsurfacePreparation1').val(nopperiSPreparation);
	 		 	   }
        } else {
            $('#chkprimer').attr('disabled', false);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#infilpaint1, #infilpaint2, #infilgalvanization2, #infilfireProofing2, #infilfireProofing3, #infilaess1').attr('disabled', true);
    });
 	  if(usedfinish == "NoPaint"){
	  $('#chknopaint').attr('checked', true);
	
  }
}       
  $.each(wsDropDown.PlateGrade, function(index,data) {   
	  var plategrade="<option value=\""+data.MaterialGrade+"\">"+data.MaterialGrade+"</option>";
     $(plategrade).appendTo('#ispshear3'); 
	}); 
if(wsPlateGrade != null){
	var plateGrades = wsPlateGrade.MemberGrades.Plates;
	 if(plateGrades != null){
        var plgrade="<option value=\""+plateGrades+"\">"+plateGrades+"</option>";
        $('select[name^="#ispshear3"] option[value=plgrade]').attr("selected","selected");
   
     }
	
}
 
  
   
   $.each( wsDropDown.BeamProfile, function(key, value) {
       var profiles="<option>"+value.Profile+"</option>";
         $(profiles).appendTo('#infillbeamprofile'); 

     });
        
             $.each( wsDropDown.BeamOrientation, function(key, value) {
               var profiles="<option>"+value.Beam_Orientation+"</option>";
                     $(profiles).appendTo('#infillbeamorientation'); 
         
             });
             
          
           
              

              $.each(wsDropDown.BeamType, function(index,data) {   
              var datasource="<option>"+data.BeamType+"</option>";
                    $(datasource).appendTo('#infillbeamtype'); 
               
            });
              
        
          
           $.each(wsDropDown.DataSource, function(index,data) {   
            var datasource="<option>"+data.DataSource+"</option>";
                 $(datasource).appendTo('#infilldatasource'); 
             
          });
         $.each(wsDropDown.Camber, function(index,data) {   
          var datasource="<option>"+data.Camber_fra+"</option>";
                $(datasource).appendTo('#icamber1'); 
           
        });
         
        
           
        $.each(wsDropDown.StudDia, function(index,data) {   
        var datasource="<option>"+data.StudDia_fra+"</option>";
              $(datasource).appendTo('#ishear1'); 
         
      });
        $.each(wsDropDown.StudLength, function(index,data) {   
          var datasource="<option>"+data.StudLength_fra+"</option>";
                $(datasource).appendTo('#ishear2'); 
           
        });
      
        $.each(wsDropDown.NoOfBeams, function(index,data) {   
          var datasource="<option>"+data.No_Beams+"</option>";
                $(datasource).appendTo('#noofbeams1'); 
           
        });
        
      $.each(wsDropDown.PlateThickness, function(index,data) {   
        
        $('<option>').val(data.tp).text(data.tp_fra).appendTo('#ispshear2');
       
       
    });
     
      $.each(wsDropDown.WeldType, function(index,data) {   
          var weldtype = "<option>"+data.wtype+"</option>";
          $(weldtype).appendTo('#ispshear4'); 
           
        });
      $.each(wsDropDown.WeldSize, function(index,data) {   
          var weldsize = "<option>"+data.weld_fra+"</option>";
          $(weldsize).appendTo('#ispshear5'); 
           
        });
              
     
              
          $.each(wsDropDown.Fraction, function(index,data) {   
            
            $('<option>').val(data.fr).text(data.fr_fra).appendTo('#ispacing2fr,#itosfr,#ifflfr,#ispacing1fr');
           
           
        });
          
        $.each(wsDropDown.Inch, function(index,data) {   
             $('<option>').val(data.Inch).text(data.Inch).appendTo('#ispacing2in,#itosin,#ifflin,#ispacing1in');
        });
            
       
         if(RefDwgNumFiles){
         $.each(RefDwgNumFiles, function(index,data) { 
 			
 			var referencenum="<option>"+data+"</option>";
 			
 	         $(referencenum).appendTo('#infillreference'); 
 	         
			 });
			}

           
         $.each(wsDropDown.FrameConnectionMethod, function(index,data) {   
             var appendval = "<option>"+data.FrameConnMethod+"</option>";
             $(appendval).appendTo('#iframeconnection'); 
              
           });       
           
  
 // $( document ).ready(function() {
	 
	$("#infillbeamprofile").change(function(){
		 var profilename = $(this).val();
		   $('#infillbeamgrade').empty();
		   getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#infillbeamgrade'); 
		           
		           
				   
				});
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	var cmcgrade = wsPlateGrade.MemberGrades.Channels;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     		   $('#infillbeamgrade').val(profileshgrade);
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     	   $('#infillbeamgrade').val(hssgrade);
		         }
		     	} 
		     	else{
		     		 if(cmcgrade != ''){
		     			   $('#infillbeamgrade').val(cmcgrade);
			         } 
		     	}
		     }
		   
	    $('#iprofile').val(profilename);
	    $('#iconnectionmark1').empty();
	    $('#iconnectionmark2').empty();
	    var filtered = $.grep(connectionObjList, function (el) {
	    	 if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtobeam")>=0 )){
	        	return el.profile;
	        	
	        }
	    });
	   		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#iconnectionmark1'); 
		         $(ConnectionMark).appendTo('#iconnectionmark2'); 
		   });
		
		 var filtered = $.grep(connectionObjList, function (el) {
	    	 if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtocolumn")>=0 )){
	        	return el.profile;
	        }
	    });
	   
	    
	 	    
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#iconnectionmark1'); 
		         $(ConnectionMark).appendTo('#iconnectionmark2'); 
		   });
		 var filtered = $.grep(connectionObjList, function (el) {
	    	 if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("beamtoembed")>=0 )){
	        	return el.profile;
	        }
	    });

	    
	 	    
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#iconnectionmark1'); 
		         $(ConnectionMark).appendTo('#iconnectionmark2'); 
		   });
		 var filtered = $.grep(connectionObjList, function (el) {
	    	 if(profilename.indexOf(el.profile) >= 0 && (el.type.toLowerCase().indexOf("moment")>=0 )){
	        	return el.profile;
	        }
	    });
	
	    
	 	    
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#iconnectionmark1'); 
		         $(ConnectionMark).appendTo('#iconnectionmark2'); 
		   });
	//	$("#infillbeamconntab").click(function() {  
			 var connectionmark1 = $("#iconnectionmark1").val();
			
			  $('#iconnectiontype1').empty();
			  $('#iconnectiontype2').empty();
			  $('#icmss1').empty();
			  $('#icmss2').empty();
			  $('#icmss3').empty();
			  $('#icmss4').empty();
				 
			 if(connectionmark1 != null){
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0)){
			        	
			        	return el.connectionMark;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
			       var connectiontype = value.type;
			       $('#iconnectiontype1').empty();
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
			       
			     if( (connectiontype === conbeamval ) || (connectiontype === concolval ) || (connectiontype === conendval ))
			      {
			   		    var ConnType="<option>"+"ShearPlate"+"</option>";
				         $(ConnType).appendTo('#iconnectiontype1'); 
			       }
			       
			   
			       
			     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
			      {
			   		    var ConnType="<option>"+"ClipAngle"+"</option>";
				         $(ConnType).appendTo('#iconnectiontype1'); 
			       }
			     
			     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
			      {
			   		    var ConnType="<option>"+"EndPlate"+"</option>";
				         $(ConnType).appendTo('#iconnectiontype1'); 
			       }
			     if(connectiontype === conhbval)
			      {
			   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
				         $(ConnType).appendTo('#iconnectiontype1'); 
			       }  
			      if(connectiontype === convbval)
			      {
			   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
				         $(ConnType).appendTo('#iconnectiontype1'); 
			       }  
			         
			         
			   });
			 
			 $('#icmss1').empty();
			    $('#icmss3').empty();
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#icmss1'); 
			        
			   });
		
			 var supportedtype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportedside;
			        	
			        }
			    });
			
			 $.each(supportedtype, function(key, value) {
			       var supportedbeam="<option>"+value.supportedside+"</option>";
			         $(supportedbeam).appendTo('#icmss3'); 
			        
			   });
			 
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark1.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 }
			 var connectionmark2 = $("#iconnectionmark2").val();
		
			 
			 if(connectionmark2 != null){
			 var conntype = $.grep(connectionObjList, function (el) {
			        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0)){
			        	
			        	return el.connectionMark;
			        }
			    });
			
			 $.each(conntype, function(key, value) {
			     
			       var connectiontype = value.type;
			       $('#iconnectiontype2').empty();
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
				         $(ConnType).appendTo('#iconnectiontype2'); 
			       }
			       
			   
			       
			     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
			      {
			   		    var ConnType="<option>"+"ClipAngle"+"</option>";
				         $(ConnType).appendTo('#iconnectiontype2'); 
			       }
			     
			     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
			      {
			   		    var ConnType="<option>"+"EndPlate"+"</option>";
				         $(ConnType).appendTo('#iconnectiontype2'); 
			       }
			     if(connectiontype === conhbval)
			      {
			   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
				         $(ConnType).appendTo('#iconnectiontype2'); 
			       }  
			      if(connectiontype === convbval)
			      {
			   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
				         $(ConnType).appendTo('#iconnectiontype2'); 
			       } 
			         
			         
			   });
			 
			 $('#icmss2').empty();
			    $('#icmss4').empty();
			    
			 var supptype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportside;
			        	
			        }
			    });
			 
			
			 $.each(supptype, function(key, value) {
			       var supportbeam="<option>"+value.supportside+"</option>";
			         $(supportbeam).appendTo('#icmss2'); 
			        
			   });
		
			 var supportedtype = $.grep(connectionObjList, function (el) {
				 
			        if(el.connectionMark != null && (connectionmark2.indexOf(el.connectionMark) >= 0 )){
			        	
			        	return el.supportedside;
			        	
			        }
			    });
			
			 $.each(supportedtype, function(key, value) {
			       var supportedbeam="<option>"+value.supportedside+"</option>";
			         $(supportedbeam).appendTo('#icmss4'); 
			        
			   }); 
			 }
			 
			 //Get Depth
			 getDepth($("#infillbeamprofile").val()); 
			 
			 
		});
	
	//});
	$("#ispshear4").change(function() {  
	    if ( $("#ispshear4").val()=="CJP") {
	 	   $("#ispshear5").attr("disabled", true);
	 	   $("#ispshear5").prop('required',false);
	 	  $("#ispshear5").prop('selectedIndex',0);
	 	 $("#ispshear5").removeClass("importantRed");
	 	}else {
	 		  $("#ispshear5").attr("disabled", false);
	 		  $("#ispshear5").prop('required',true);
	 		 $("#ispshear5").addClass("importantRed");
	 	}

	 	});
	$('#iframeNo').keyup(function(e){
		
		  var widthft = $("#iframeNo").val()
		  if(widthft > 0){
			  $("#iframeconnection").prop("disabled", false);  
			 
			  }
		  else{
			  $("#iframeconnection").prop("disabled", true);
		  }
		});
 // });
  
//Bind Connection Type
  
  $("#iconnectionmark1").change(function() {  
		 var connectionmark = $(this).val();
		
		 if(connectionmark != null){
		 
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#iconnectiontype1').empty();
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
			         $(ConnType).appendTo('#iconnectiontype1'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#iconnectiontype1'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#iconnectiontype1'); 
		       }
		     if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#iconnectiontype1'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
			         $(ConnType).appendTo('#iconnectiontype1'); 
		       }  
		         
		         
		   });
		 var mconntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0 && el.type.toLowerCase().indexOf("moment")>=0){
		        	
		        	return el.moncontype;
		        }
		    });
		 $.each(mconntype, function(key, value) {
				
		       var ConnectionMark="<option>"+value.moncontype+"</option>";
		         $(ConnectionMark).appendTo('#iconnectiontype1'); 
		       
		   });
		 $('#icmss1').empty();
		    $('#icmss3').empty();
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark)) >= 0 ){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#icmss1'); 
		        
		   });
		
		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark)) >= 0 ){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
	
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#icmss3'); 
		        
		   });
		 
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 }
	});
	
	
	$("#iconnectionmark2").change(function() {  
		 var connectionmark = $(this).val();
	
		 
		 if(connectionmark != null){
		 var conntype = $.grep(connectionObjList, function (el) {
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0)){
		        	
		        	return el.connectionMark;
		        }
		    });
		
		 $.each(conntype, function(key, value) {
		     
		       var connectiontype = value.type;
		       $('#iconnectiontype2').empty();
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
			         $(ConnType).appendTo('#iconnectiontype2'); 
		       }
		       
		   
		       
		     if( (connectiontype === conbeamcval ) || (connectiontype === concolcval ) || (connectiontype === conendcval ))
		      {
		   		    var ConnType="<option>"+"ClipAngle"+"</option>";
			         $(ConnType).appendTo('#iconnectiontype2'); 
		       }
		     
		     if( (connectiontype === conbeameval ) || (connectiontype === concoleval ) || (connectiontype === conendeval ))
		      {
		   		    var ConnType="<option>"+"EndPlate"+"</option>";
			         $(ConnType).appendTo('#iconnectiontype2'); 
		       }
		     if(connectiontype === conhbval)
		      {
		   		    var ConnType="<option>"+"HorizontalBrace"+"</option>";
			         $(ConnType).appendTo('#iconnectiontype2'); 
		       }  
		      if(connectiontype === convbval)
		      {
		   		    var ConnType="<option>"+"VerticalBrace"+"</option>";
			         $(ConnType).appendTo('#iconnectiontype2'); 
		       } 
		         
		         
		   });
		 var mconntype = $.grep(connectionObjList, function (el) {
		        if(connectionmark.indexOf(el.connectionMark) >= 0 && el.type.toLowerCase().indexOf("moment")>=0){
		        	
		        	return el.moncontype;
		        }
		    });
		 $.each(mconntype, function(key, value) {
				
		       var ConnectionMark="<option>"+value.moncontype+"</option>";
		         $(ConnectionMark).appendTo('#iconnectiontype2'); 
		       
		   });
		 $('#icmss2').empty();
		    $('#icmss4').empty();
		 var supptype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportside;
		        	
		        }
		    });
		 
		
		 $.each(supptype, function(key, value) {
		       var supportbeam="<option>"+value.supportside+"</option>";
		         $(supportbeam).appendTo('#icmss2'); 
		        
		   });

		 var supportedtype = $.grep(connectionObjList, function (el) {
			 
		        if(el.connectionMark != null && (connectionmark.indexOf(el.connectionMark) >= 0 )){
		        	
		        	return el.supportedside;
		        	
		        }
		    });
		
		 $.each(supportedtype, function(key, value) {
		       var supportedbeam="<option>"+value.supportedside+"</option>";
		         $(supportedbeam).appendTo('#icmss4'); 
		        
		   });
		 
		 }
	});

  

$.each(wsPlateGrade, function(key, value) {   
		
		if (value["Camber"]) {
			 
			  $("#icamber1").val(value["Camber"]).trigger("change");
		}
		if (value["ShearStudDia"]||value["ShearStudGrade"]||value["ShearStudLength"]) {
			 
			  $("#ishear1").val(value["ShearStudDia"]).trigger("change");
			  $("#ishear2").val(value["ShearStudLength"]).trigger("change");
			//  $("#ishear3").val(value["ShearStudGrade"]).trigger("change");
			  
		}	
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
$("#infillbeamdepthForGivenProfile").remove();
$('.appendtextbox').append('<input id="infillbeamdepthForGivenProfile" value="'+data.toFixed(3)+'" type="hidden" name="depth">');
$("#infillbeamdepthForGivenProfile").val();

/* $.ajax({

type: "GET",
url: "/bimspring/getDepthForGivenProfile", 
data: "profile=" + Profile,
async: false,
success: function(data)
{
data=data*25.4;
$("#infillbeamdepthForGivenProfile").remove();
$('.appendtextbox').append('<input id="infillbeamdepthForGivenProfile" value="'+data.toFixed(3)+'" type="hidden" name="depth">');
$("#infillbeamdepthForGivenProfile").val();

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
$("#infillbeamprofile").change(function(){
	$("#infillprofile .select2-container--default .select2-selection--single").removeClass("importantRed");
	});
$("#infillbeamgrade").change(function(){
	$("#infillgrade .select2-container--default .select2-selection--single").removeClass("importantRed");
	});
$("#noofbeams1").change(function(){
	$("#noofbeams1").removeClass("importantRed");
	});

$("#itosft").keyup(function(e){
	$("#itosft").removeClass("importantRed");
	});
$("#ispshear1").keyup(function(e){
	$("#ispshear1").removeClass("importantRed");
	});
$("#ishear3").keyup(function(e){
	$("#ishear3").removeClass("importantRed");
	});
	$("#icamber1").change(function(){
	$("#icamber1").removeClass("importantRed");
	});
$("#ishear1").change(function(){
	$("#ishear1").removeClass("importantRed");
	});
$("#ishear2").change(function(){
	$("#ishear2").removeClass("importantRed");
	});
$("#ispshear2").change(function(){
	$("#ispshear2").removeClass("importantRed");
	});
$("#ispshear4").change(function(){
	$("#ispshear4").removeClass("importantRed");
	});
$("#ispshear5").change(function(){
	$("#ispshear5").removeClass("importantRed");
	});

$("#iframeconnection").change(function(){
		$("#iframeconnection").removeClass("importantRed");
		});
