       $( document ).ready(function() {
       
    	   getBasePlateConnectionMark();
    	   getSpliceConnectionMark();
    	   getCapPlateConnectionMark();  
       });

	$(function(){
                $("#c4boxsplicecount").change( function(){
                	 getSpliceConnectionMark();
                    
                });
            });
    

      $(function() {
          $('.chosen-select').chosen();
          $('.chosen-select-deselect').chosen({
              allow_single_deselect: true
          });
      });
      function AllowNumbersOnly(e) {
          var code = (e.which) ? e.which : e.keyCode;
         
          if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
          }
        }
      function AllowDecimalNumbersOnly(e) {
          var code = (e.which) ? e.which : e.keyCode;
          if (code == 46)
              return true;
          if (code > 31 && (code < 48 || code > 57)) {
            e.preventDefault();
          }
        }
      $.each(wsDropDown.PlateGrade, function(index,data) {   
 		  var plategrade="<option  value=\""+data.MaterialGrade+"\">"+data.MaterialGrade+"</option>";
 		  
            $(plategrade).appendTo('#boxcolumngrade'); 
           	        		   
 		});
      if(wsPlateGrade != null){
      	var plateGrades = wsPlateGrade.MemberGrades.Plates;
      	 if(plateGrades != ''){
      		 $('#boxcolumngrade').val(plateGrades);
            }
      	 
      }
      
	    $.each(wsDropDown.SurfacePreparation, function(index,data) {   
   		  var surfacepreparation = "<option>"+data.SSPC_No+"</option>";
   		  $(surfacepreparation).appendTo('#bcsurfacePreparation1'); 
   		   
   		});
   	  $.each(wsDropDown.FireProofingType, function(index,data) {   
   		  var fireproofingtype = "<option>"+data.FireProofingType+"</option>";
   		  $(fireproofingtype).appendTo('#bcfireProofing2'); 
   		   
   		});
   	  $.each(wsDropDown.FireRating, function(index,data) {   
   		  var firerating = "<option>"+data.FireRating_fra+"</option>";
   		  $(firerating).appendTo('#bcfireProofing3'); 
   		   
   		});
   	  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
   		  var zinccoatingthickness = "<option>"+data.ZincCoatingThickness+"</option>";
   		  $(zinccoatingthickness).appendTo('#bcgalvanization2'); 
   		   
   		});
   	  $.each(wsDropDown.NoOfCoats, function(index,data) {   
   		  var noofcoats = "<option>"+data.Coats+"</option>";
   		  $(noofcoats).appendTo('#bcprimer2'); 
   		   
   		});
   	  $.each(wsDropDown.NoOfCoats, function(index,data) {   
   		  var noofcoats = "<option>"+data.Coats+"</option>";
   		  $(noofcoats).appendTo('#bcpaint2'); 
   		   
   		});
	  $.each(wsDropDown.AESSCategory, function(index,data) {   
 		  var AESScategory="<option>"+data.AESS+"</option>";
            $(AESScategory).appendTo('#bcaess1'); 
           	        		   
 		});
	  if(wsFinish != null){
	      var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	      var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
	 	   var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
	 	   var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
	 	      
	 	      if(paintValue != null){
	 	      $('#bcprimer1').val(paintValue);
	 	      document.getElementById("bcprimer1").setAttribute("disabled", false);
	 	      }
	 	      if(noOfCoatsprimer != null){
	 	         var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
	 	         $('select[name^="#bcprimer2"] option[value=noOfCts]').attr("selected","selected");

	 	      }
	 	   
	 	     $('#chkprimer').change(function() {
	 	        if($(this).prop("checked") == true){
	 	            $('#bcprimer1, #bcprimer2').attr('disabled', false);
	 	           if(primerperiSPreparation != null){
	 	      		  $('#bcsurfacePreparation1').val(primerperiSPreparation);
	 	      	  }
	 	        } else {
	 	            $('#bcprimer1, #bcprimer2').attr('disabled', true);
	 	        }
	 	    });
	  if(usedfinish == "Primer"){
	    	 $('#chkprimer').prop('checked', true);
	    	  $('#chknopaint').attr('checked', true);
	    	 $('#bcprimer1,#bcprimer2').attr('disabled', false);	
	    	 if(primerperiSPreparation != null){
	    		  $('#bcsurfacePreparation1').val(primerperiSPreparation);
	    	  }
		    } 
	  

	      var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
		    if(usedfinish != "Galvanizing" &&  SPreparation != null){
		    	 $('#chkprimer').prop('checked', true);
		    	  $('#chknopaint').attr('checked', true);
		    	 $('#bcprimer1,#bcprimer2').attr('disabled', false);	
		    	 if(primerperiSPreparation != null){
		    		  $('#bcsurfacePreparation1').val(primerperiSPreparation);
		    	  }
		    }
      var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
      var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
      var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
       if(paintValue != null){
       $('#bcpaint1').val(paintValue);
       document.getElementById("bcpaint1").setAttribute("disabled", false);
       }
       
       if(noOfCoatspaint != null){
          var noOfCts="<option value>"+noOfCoatspaint+"</option>";
          $('select[name^="#bcpaint2"] option[value=noOfCts]').attr("selected","selected");
       }
       $('#chkpaint').change(function() {
           if($(this).prop("checked") == true){
               $('#bcpaint1, #bcpaint2').attr('disabled', false);
               if(paintperiSPreparation != null){
		    		  $('#bcsurfacePreparation1').val(paintperiSPreparation);
		    	  }
           } else {
               $('#bcpaint1, #bcpaint2').attr('disabled', true);
           }
           if($('#chkprimer').prop("checked") == true){
               $('#chkprimer').removeAttr("disabled");
           } else {
               $('#chkprimer').removeAttr("disabled");
           }
           $('#bcgalvanization2').attr('disabled', true);
       });
       if(usedfinish == "Paint"){
	    	  $('#chkpaint').attr('checked', true);
	    	  $('#bcpaint1, #bcpaint2').attr('disabled', false);
	    	  if(paintperiSPreparation != null){
	    		  $('#bcsurfacePreparation1').val(paintperiSPreparation);
	    	  }
	      }
  
 	  var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
 var	category = wsFinish.Finish.AESS.Category;
 	   
 if(category != null){   
 	      var aess="<option value>"+category+"</option>";
 		   $('select[name^="#bcaess1"] option[value=aess]').attr("selected","selected");
 }
 $('#chkaess').change(function() {
     if($(this).prop("checked") == true){
         $('#bcaess1').attr('disabled', false);
         if(aessperiSPreparation != null){
   		  $('#bcsurfacePreparation1').val(aessperiSPreparation);
   	  }
     } else {
         $('#bcaess1').attr('disabled', true);
     }
     if($('#chkprimer').prop("checked") == true){
         $('#chkprimer').removeAttr("disabled");
     } else {
         $('#chkprimer').removeAttr("disabled");
     }
     $('#bcpaint1, #bcpaint2, #bcgalvanization2, #bcfireProofing2, #bcfireProofing3').attr('disabled', true); 
 });

  if(usedfinish == "AESS"){
	  $('#chkaess').attr('checked', true);
	  $('#bcaess1').attr('disabled', false);
	  if(aessperiSPreparation != null){
		  $('#bcsurfacePreparation1').val(aessperiSPreparation);
	  }
  }
  	   var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
  	   var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
  	   var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
 	   
	 	      
 	      if(fireRating != null){
 	      var fireRatingval="<option value>"+fireRating+"</option>";
 	      $('select[name^="#bcfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
 	      }
 	      if(fireProofingType != null){
 	         var fireProofing="<option value>"+fireProofingType+"</option>";
 	         $('select[name^="#bcfireProofing3"] option[value=fireProofing]').attr("selected","selected");
 	      }
 	     $('#chkfireproofing').change(function() {
 	        if($(this).prop("checked") == true){
 	            $('#bcfireProofing2, #bcfireProofing3').attr('disabled', false);
 	       	if(fpperiSPreparation != null){
	       		$('#bcsurfacePreparation1').val(fpperiSPreparation);
	       	}
 	        } else {
 	            $('#bcfireProofing2, #bcfireProofing3').attr('disabled', true);
 	        }  
 	        if($('#chkprimer').prop("checked") == true){
 	            $('#chkprimer').removeAttr("disabled");
 	        } else {
 	            $('#chkprimer').removeAttr("disabled");
 	        }
 	        $('#bcpaint1, #bcpaint2, #bcgalvanization2, #bcaess1').attr('disabled', true);  
 	        // $('#chkprimer').removeAttr("disabled");
 	    });
 	   
	      if(usedfinish == "Fire proofing"){
	       	  $('#chkfireproofing').attr('checked',true);
	       	  $('#bcfireProofing2, #bcfireProofing3').attr('disabled', false);
	       	if(fpperiSPreparation != null){
	       		$('#bcsurfacePreparation1').val(fpperiSPreparation);
	       	}
		    }
 	   var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
 	   var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
 	      if(zincCoatingThickness != null){
 	      var zincCoating="<option value>"+zincCoatingThickness+"</option>";
 	      $('select[name^="#bcgalvanization2"] option[value=zincCoating]').attr("selected","selected");
 	      }
 	     $('#chkgalvanize').change(function() {
 	        if($(this).prop("checked") == true){
 	            $('#bcgalvanization2').attr('disabled', false);
 	           if(galperiSPreparation != null){
 		     	 	 $('#bcsurfacePreparation1').val(galperiSPreparation);
 		     	 	   }  
 	        } else {
 	            $('#bcgalvanization2').attr('disabled', true);
 	        }
 	        if($('#chkprimer').prop("checked") == true){
 	            $('#chkprimer').prop('checked', false);
 	            $('#chkprimer').attr('disabled', true);
 	        } 
 	        else {
 	            $('#chkprimer').prop('checked', false);
 	            $('#chkprimer').attr('disabled', true);
 	        }
 	        $('#bcprimer1, #bcprimer2, #bcpaint1, #bcpaint2, #bcfireProofing2, #bcfireProofing3, #bcaess1').attr('disabled', true);
 	        // $("#chkprimer").attr('disabled', 'disabled');
 	    });
 	     if(usedfinish == "Galvanizing"){
	    	  $('#chkgalvanize').attr('checked', true);
	    	  $('#bcgalvanization2').attr('disabled', false);
	    	  $('#chkprimer').prop('checked', false);
	            $('#chkprimer').attr('disabled', true);
	            if(galperiSPreparation != null){
	     	 	 $('#bcsurfacePreparation1').val(galperiSPreparation);
	     	 	   }  
	      }
 	   var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
 	  $('#chknopaint').change(function() {
 	        if($('#chkprimer').prop("checked") == true){
 	            $('#chkprimer').attr('disabled', false);
 	           if(nopperiSPreparation != null){
 	  			 $('#bcsurfacePreparation1').val(nopperiSPreparation);
 	  		 	   }
 	        } else {
 	            $('#chkprimer').attr('disabled', false);
 	        }
 	        if($('#chkprimer').prop("checked") == true){
 	            $('#chkprimer').removeAttr("disabled");
 	        } else {
 	            $('#chkprimer').removeAttr("disabled");
 	        }
 	        $('#bcpaint1, #bcpaint2, #bcgalvanization2, #bcfireProofing2, #bcfireProofing3, #bcaess1').attr('disabled', true);
 	    });
 	   
	 	  if(usedfinish == "NoPaint"){
 		  $('#chknopaint').attr('checked', true);
 		 if(nopperiSPreparation != null){
 			 $('#bcsurfacePreparation1').val(nopperiSPreparation);
 		 	   }
 	  }
  }   
	  
      $.each(wsDropDown.DataSource, function(index,data) {   
 		  var datasource="<option>"+data.DataSource+"</option>";
            $(datasource).appendTo('#bc4datasource'); 
 		   
 		});
      $.each(wsDropDown.WeldType, function(index,data) {   
 		  var weldtype = "<option>"+data.wtype+"</option>";
 		  $(weldtype).appendTo('#boxcolumnweld'); 
 		   
 		});
      $.each(wsDropDown.WeldSize, function(index,data) {   
 		  var weldsize = "<option value=\""+data.weld_fra+"\">" +data.weld_fra+"</option>";
 		  $(weldsize).appendTo('#fillet'); 
 		   
 		});
      $.each(wsDropDown.Fraction, function(index,data) {   
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel2in');
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel1in');
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#colTop_fr');
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#colBottom_fr');
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#colBottom_in');
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#colTop_in');
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel1fr');
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel2fr');
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel2ft');
		  
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#platelength_fra');
		  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#platewidth_fra');

		   
		});
	  
	  $('#cspliceel2in').val("0");
	  $('#cspliceel1in').val("0");
	  $('#cspliceel2fr').val("0");
	  $('#cspliceel1fr').val("0");
	  $('#cspliceel1in').val("0");
	  $('#colTop_fr').val("0");
	  $('#colTop_in').val("0");
	  $('#colBottom_fr').val("0");
	    $('#colBottom_in').val("0");
	    $('#platelength_fra').val("0");
	    $('#platewidth_fra').val("0");
	    
	    
	  
	$.each(wsDropDown.Inch, function(index,data) {   
		
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4depthain');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4widthbin');

		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4thicknesscin');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4thicknessdin');
		  $('<option>').val(data.Incs).text(data.Inch).appendTo('#bc4bcbelevationin');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4bctelevationin');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4spliceel1in');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4spliceel2in');
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4bp1thicknessdin');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4bp1thicknesscin');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4bp2widthbin');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4bp2thicknesscin');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#bc4bp2thicknessdin');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#mchkboxcol1');
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice1In');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice1DepthAIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice1WidthBIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice1ThicknessCIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice1ThicknessDIn');
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice2In');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice2DepthAIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice2WidthBIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice2ThicknessCIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice2ThicknessDIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice2WidthIn');
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice3In');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice3DepthAIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice3WidthBIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice3ThicknessCIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice3ThicknessDIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice3WidthIn');
		  
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice4In');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice4DepthAIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice4WidthBIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice4ThicknessCIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice4ThicknessDIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice4WidthIn');
		  
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice5In');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice5DepthAIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice5WidthBIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice5ThicknessCIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice5ThicknessDIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice5WidthIn');
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice6In');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice6DepthAIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice6WidthIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice6ThicknessCIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice5WidthIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice6ThicknessDIn');
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice7In');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice7DepthAIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice7WidthIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice7ThicknessCIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice7ThicknessDIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice5WidthIn');
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice8In');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice8DepthAIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice8WidthIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice8ThicknessCIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice8ThicknessDIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice5WidthIn');
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice9In');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice9DepthAIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice9WidthIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice9ThicknessCIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice9ThicknessDIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice5WidthIn');
		  
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice10In');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice10DepthAIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice10WidthIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice10ThicknessCIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice10ThicknessDIn');
		  $('<option>').val(data.Inch).text(data.Inch).appendTo('#splice5WidthIn');
		  
		
		  
		  
		  
		});
	 $('#mchkboxcol1').val("0");
	 $('#bc4depthain').val("0");
	 $('#bc4widthbin').val("0");
	 $('#bc4thicknesscin').val("0");
	 $('#bc4thicknessdin').val("0");
	 $('#bc4thicknessdin').val("0");
		    
		    $('#bc4bctelevationin').val("0");
		    $('#bc4spliceel1in').val("0");
		    $('#bc4spliceel2in').val("0");
		    
		    $('#bc4bp1thicknessdin').val("0");
		    $('#bc4bp1thicknesscin').val("0");
		    $('#bc4bp2widthbin').val("0");
		    $('#bc4bp2thicknesscin').val("0");
		    $('#bc4bp2thicknessdin').val("0");
		    
		    $('#splice1In').val("0");
		    $('#splice1DepthAIn').val("0");
		    $('#splice1DepthBIn').val("0");
		    $('#splice1DepthCIn').val("0");
		    $('#splice1DepthDIn').val("0");
		    
		    $('#splice2In').val("0");
		    $('#splice2DepthAIn').val("0");
		    $('#splice2WidthIn').val("0");
		    $('#splice2DepthCIn').val("0");
		    $('#splice2ThicknessDIn').val("0");
		    
		    $('#splice3In').val("0");
		    $('#splice3DepthAIn').val("0");
		    $('#splice3WidthIn').val("0");
		    $('#splice3DepthCIn').val("0");
		    $('#splice3DepthDIn').val("0");
		    
		    $('#splice4In').val("0");
		    $('#splice4DepthAIn').val("0");
		    $('#splice4WidthIn').val("0");
		    $('#splice4DepthCIn').val("0");
		    $('#splice4DepthDIn').val("0");
		    
		    $('#splice5In').val("0");
		    $('#splice5DepthAIn').val("0");
		    $('#splice5WidthIn').val("0");
		    $('#splice5DepthCIn').val("0");
		    $('#splice5DepthDIn').val("0");
		    
		    $('#splice6In').val("0");
		    $('#splice6DepthAIn').val("0");
		    $('#splice6WidthIn').val("0");
		    $('#splice6DepthCIn').val("0");
		    $('#splice6DepthDIn').val("0");
		    
		    $('#splice7In').val("0");
		    $('#splice7DepthAIn').val("0");
		    $('#splice7WidthIn').val("0");
		    $('#splice7DepthCIn').val("0");
		    $('#splice7DepthDIn').val("0");
		    
		    $('#splice8In').val("0");
		    $('#splice8DepthAIn').val("0");
		    $('#splice8WidthIn').val("0");
		    $('#splice8DepthCIn').val("0");
		    $('#splice8DepthDIn').val("0");
		    
		    $('#splice9In').val("0");
		    $('#splice9DepthAIn').val("0");
		    $('#splice9WidthIn').val("0");
		    $('#splice9DepthCIn').val("0");
		    $('#splice9DepthDIn').val("0");
		    
		    $('#splice10In').val("0");
		    $('#splice10DepthAIn').val("0");
		    $('#splice10WidthIn').val("0");
		    $('#splice10DepthCIn').val("0");
		    $('#splice10DepthDIn').val("0");
		    
		    
		    $('#splice1WidthBIn').val("0");
		    $('#splice2WidthBIn').val("0");
		    $('#splice3WidthBIn').val("0");
		    $('#splice4WidthBIn').val("0");
		    $('#splice5WidthBIn').val("0");
		    
		    $('#splice6WidthBIn').val("0");
		    $('#splice7WidthBIn').val("0");
		    $('#splice8WidthBIn').val("0");
		    $('#splice9WidthBIn').val("0");
		    $('#splice10WidthBIn').val("0");
		    

		    
		    $.each(wsDropDown.Fraction, function(index,data) {   
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc4depthafr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc4widthbfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc4thicknesscfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc4thicknessdfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#mchkboxcol2');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc4bcbelevationfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc4spliceel1fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc4bp1thicknesscfr');
				  
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc4spliceel2fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc4bp2widthbfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc4bctelevationfr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#bc4bp2thicknesscfr');
				  
				  
				  
				  
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice1Fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice1WidthBFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice1ThicknessCFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice1ThicknessDFr');
				  
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice2Fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice2WidthBFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice2ThicknessCFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice2ThicknessDFr');
				  
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice3Fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice3WidthBFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice3ThicknessCFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice3ThicknessDFr');
				  
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice4Fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice4WidthBFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice4ThicknessCFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice4ThicknessDFr');
				  
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice5Fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice5WidthBFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice5ThicknessCFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice5ThicknessDFr');
				  
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice6Fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice6WidthBFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice6ThicknessCFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice6ThicknessDFr');
				  
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice7Fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice7WidthBFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice7ThicknessCFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice7ThicknessDFr');
				  
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice8Fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice8WidthBFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice8ThicknessCFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice8ThicknessDFr');
				  
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice9Fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice9WidthBFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice9ThicknessCFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice9ThicknessDFr');
				  
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice10Fr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice10WidthBFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice10ThicknessCFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice10ThicknessDFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice10WidthFr');
				  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#splice10DepthAFr');
				  
				  
					  
	 		});
			  
			  $('#bc4depthafr').val("0");
			  $('#bc4widthbfr').val("0");
			  $('#bc4thicknesscfr').val("0");
			  $('#bc4thicknessdfr').val("0");
			  $('#mchkboxcol2').val("0");
			  $('#bc4bcbelevationfr').val("0");
			  $('#bc4spliceel1fr').val("0");
			    $('#bc4bp1thicknesscfr').val("0");
			    $('#bc4bp2widthbfr').val("0");
			    $('#bc4spliceel2fr').val("0");
			    $('#bc4bp2thicknesscfr').val("0");
			    $('#bc4bp2thicknesscfr').val("0");
			    $('#bc4bctelevationfr').val("0");
			    
			    $('#splice1Fr').val("0");
			    $('#splice1WidthBFr').val("0");
			    $('#splice1ThicknessCFr').val("0");
			    $('#splice1ThicknessDFr').val("0");
			    $('#splice2Fr').val("0");
			    $('#splice2WidthBFr').val("0");
			    $('#splice2ThicknessCFr').val("0");
			    $('#splice2ThicknessDFr').val("0");
			    $('#splice3Fr').val("0");
			    $('#splice3WidthBFr').val("0");
			    $('#splice3ThicknessCFr').val("0");
			    $('#splice3ThicknessDFr').val("0");
			    $('#splice4Fr').val("0");
			    $('#splice4WidthBFr').val("0");
			    $('#splice4ThicknessCFr').val("0");
			    $('#splice4ThicknessDFr').val("0");
			    $('#splice5Fr').val("0");
			    $('#splice5WidthBFr').val("0");
			    $('#splice5ThicknessCFr').val("0");
			    $('#splice5ThicknessDFr').val("0");
			    $('#splice6Fr').val("0");
			    $('#splice6WidthBFr').val("0");
			    $('#splice6ThicknessCFr').val("0");
			    $('#splice6ThicknessDFr').val("0");
			    
			    $('#splice7Fr').val("0");
			    $('#splice7WidthBFr').val("0");
			    $('#splice7ThicknessCFr').val("0");
			    $('#splice7ThicknessDFr').val("0");
			    $('#splice8Fr').val("0");
			    $('#splice8WidthBFr').val("0");
			    $('#splice8ThicknessCFr').val("0");
			    $('#splice8ThicknessDFr').val("0");
			    $('#splice9Fr').val("0");
			    $('#splice9WidthBFr').val("0");
			    $('#splice9ThicknessCFr').val("0");
			    $('#splice9ThicknessDFr').val("0");
			    $('#splice10Fr').val("0");
			    $('#splice10WidthBFr').val("0");
			    $('#splice10ThicknessCFr').val("0");
			    $('#splice10ThicknessDFr').val("0");
			   
		     	 
		     	  
		     		  var builtup = "<option>"+"Built-Up Column"+"</option>"
		                $(builtup).appendTo('#bc4columntype').prop('selected', true); 
		              
		     		   
		     		
		     	  $.each(wsDropDown.DataSource, function(index,data) {   
		     		  var datasource="<option>"+data.DataSource+"</option>";
		                $(datasource).appendTo('#datasource'); 
		     		   
		     		});
		     	  $.each(wsDropDown.SpliceCount, function(index,data) {   
		     		  var splicecount="<option>"+data.Count+"</option>";
		                $(splicecount).appendTo('#splicecount'); 
		     		   
		     		});
		     	  $.each(wsDropDown.MaterialGrade, function(index,data) {   
		     		  var grades="<option>"+data.MaterialGrade+"</option>";
		                $(grades).appendTo('#pourstopgrade'); 
		               	        		   
		     		});
		     	
		     	  $.each(wsDropDown.PlateThickness, function(index,data) {   
		     		  var platethickness="<option>"+data.tp_fra+"</option>";
		                $(platethickness).appendTo('#platethickness1'); 
		               	        		   
		     		});
		     
		     	  if(RefDwgNumFiles){
		     	 $.each(RefDwgNumFiles, function(index,data) { 
						
						var referencenum="<option>"+data+"</option>";
						
				         $(referencenum).appendTo('#bc4referencenumber'); 
				         
						});
		     	  }
		     	 $("#boxcolumnweld").change(function() {  
		     	    if ( $("#boxcolumnweld").val()=="CJP" ||  $("#boxcolumnweld").val()=="select") {
		     	 	   $("#fillet").attr("disabled", true);
		     	 	  $("#surfaceprecb1").attr("disabled", true);
		     	 	 $("#mchkboxcol1").attr("disabled", true);
		     	 	 $("#mchkboxcol2").attr("disabled", true);
		     	 	 $("#fillet").val($("#fillet option:first").val());
		     	 	$("#surfaceprecb1").prop('checked',false);
		     	 	 $("#fillet").removeClass("importantRed");
		     	 	
		     	 	}else if($("#boxcolumnweld").val()=="Fillet" ||  $("#boxcolumnweld").val()=="PJP"){
		     	 		 $("#surfaceprecb1").attr("disabled", false);
		     	 		 $("#fillet").attr("disabled", false);
		     	 		 $("#fillet").val($("#fillet option:first").val());
		     	 		$("#fillet").addClass("importantRed");
		     	 	}

		     	 	});
		     	 
		    // 	$("#boxcolconndet").click(function(){
		     		
		     	function getBasePlateConnectionMark(){
		     		//Populate Base Plate Connection Mark
		     		 $('#bc4bpcm').empty();
		     		  var basecm = $.grep(connectionObjList, function (el) {
		   			   if((el.post == "Column" )&& (el.profile == "Built-Up Member") && (el.type.toLowerCase().indexOf("base")>=0 )&& (el.baseplate.toLowerCase().indexOf("base")>=0))
		   			  {
		   		        	return el.connectionMark;
		   		        	
		   		        }
		   		    });
		   		    $.each(basecm, function(key, value) {
		   			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		   			         $(ConnectionMark).appendTo('#bc4bpcm'); 
		   			        
		   			   }); 
		   		    }
		     	
		   			
		   		function getSpliceConnectionMark(){
		   	//Populate Splice Connection Mark
		   			$('#bc4spcm').empty();
						var spliceCount=parseInt($('#c4boxsplicecount').val() );
						
						if((spliceCount)>0){
						  var cmsplice = $.grep(connectionObjList, function (el2) {
							     
								  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingsplice")>=0){
									  	
						        	return el2.connectionMark;
						        }
								  });
							  
						    	
						    
						
						  $.each(cmsplice, function(key, value) {
						       var ConnectionMark="<option>"+value.connectionMark+"</option>";
						       $(ConnectionMark).appendTo('#bc4spcm'); 
						   }); 
						  var cmsplice = $.grep(connectionObjList, function (el2) {
							     
							  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingend")>=0){
								  	 
					        	return el2.connectionMark;
					        }
							  });
						  
					
					  $.each(cmsplice, function(key, value) {
					       var ConnectionMark="<option>"+value.connectionMark+"</option>";
					       $(ConnectionMark).appendTo('#bc4spcm'); 
					   }); 
					  var cmsplice = $.grep(connectionObjList, function (el2) {
						     
						  if(el2.LSprofile  == "Built-Up Member" && el2.type.toLowerCase().indexOf("splicecolumnusingdirectly")>=0){
							  		 
				        	return el2.connectionMark;
				        }
						  });
					  
				    $.each(cmsplice, function(key, value) {
				       var ConnectionMark="<option>"+value.connectionMark+"</option>";
				       $(ConnectionMark).appendTo('#bc4spcm'); 
				   }); 
						}
						
		   			}
		   			function getCapPlateConnectionMark(){
						 //Populate Cap Plate Connection Mark  
		   			
				     	// $('#chkcapplate').change(function() {
				     			     				
				   		// if( $('#chkboxCap1').is(':enabled')){
				   		 $('#chkboxCap1').empty();
				  
							   var capcm = $.grep(connectionObjList, function (el) {
								   if((el.post == "Column" )&&(el.profile == "Built-Up Member") && (el.type.toLowerCase().indexOf("base")>=0) && (el.baseplate.toLowerCase().indexOf("cap")>=0))
								  {
							        	return el.connectionMark;
							        	
							        }
							    });
							   
							    $.each(capcm, function(key, value) {
							    	 
								       var ConnectionMark="<option>"+value.connectionMark+"</option>";
								         $(ConnectionMark).appendTo('#chkboxCap1'); 
								        
								   });   
						 
		   			}								 
		   			$("#c4boxsplicecount").change(function() {
		   		        $('#spliceRows').empty();
		   		        var spliceCount=parseInt($('#c4boxsplicecount').val() );

		   		     for(var i=1;i<=spliceCount;i++) {

	   		             var html=` <div class="row">
	   		                                <div class="col-lg-8 col-lg-8 padding10 ">
	   		                                    <label class="labelBlack control-label">Splice EL`+i+`</label>
	   		                                    <div class="row">
	   		                                        <div class="col-lg-2 col-md-2 p-r-5">
	   		                                            <select class="form-control" id="splice`+i+`PosNeg">
	   		                                                <option value="" selected="select">+</option>
	   		                                                <option value="" >-</option>
	   		                                            </select>
	   		                                        </div>
	   		                                        <div class="col-lg-2 col-md-2 padding5">
	   		                                            <input type="text" class="form-control per70" id="splice`+i+`Ft" onkeypress = "return AllowNumbersOnly(event)">
	   		                                            <div class="txt-right">
	   		                                                ft
	   		                                            </div>
	   		                                        </div>
	   		                                        <div class="col-lg-2 col-md-2 padding5">
	   		                                            <select class="form-control per70 splicein" id="splice`+i+`In">
	   		                                               
	   		                                            </select>
	   		                                            <div class="txt-right">
	   		                                                in
	   		                                            </div>
	   		                                        </div>
	   		                                        <div class="col-lg-2 col-md-2 p-l-5">
	   		                                            <select class="form-control per70 splicefr" id="splice`+i+`Fr">
	   		                                               
	   		                                            </select>
	   		                                            <div class="txt-right">
	   		                                                fr
	   		                                            </div>
	   		                                        </div>
	   		                                    </div>
	   		                                </div>
	   		                            </div>
	   		                            <div class="row" id="boxProfile1">
	   		                                <div class="col-lg-3 col-md-3 padding10 ">
	   		                                     <label class="labelBlack control-label ">Depth A</label>
	   		                                     <div class="row ">
	   		                                        <div class="col-lg-4 col-md-4 p-r-5">
	   		                                            <input type="text" class="form-control per70 splicetextDepth" id="splice`+i+`DepthAFt" onkeypress = "return AllowNumbersOnly(event)">
	   		                                            <div class="txt-right">
	   		                                                ft
	   		                                            </div>
	   		                                        </div>
	   		                                        <div class="col-lg-3 col-md-3 p-0">
	   		                                             <select class="form-control p-r-0 per70 spliceinDepth" id="splice`+i+`DepthAIn">
	   		                                                
	   		                                            </select>
	   		                                            <div class="txt-right">
	   		                                                in
	   		                                            </div>
	   		                                        </div>
	   		                                        <div class="col-lg-5 col-md-5 padding5">
	   		                                             <select class="form-control p-r-0 per70 splicefrDepth" id="splice`+i+`DepthAFr">
	   		                                               
	   		                                             </select>
	   		                                            <div class="txt-right">
	   		                                                fr
	   		                                            </div>
	   		                                        </div>
	   		                                    </div>
	   		                                </div>
	   		                           
	   		                                <div class="col-lg-3 col-md-3 padding10 ">
	   		                                     <label class="labelBlack control-label">Width B</label>
	   		                                     <div class="row">
	   		                                        <div class="col-lg-4 col-md-4 p-r-5">
	   		                                            <input type="text" class="form-control per70 splicetextWidth" id="splice`+i+`WidthBFt" onkeypress = "return AllowNumbersOnly(event)">
	   		                                            <div class="txt-right">
	   		                                                ft
	   		                                            </div>
	   		                                        </div>
	   		                                        <div class="col-lg-3 col-md-3 p-0">
	   		                                             <select class="form-control p-r-0 per70 spliceinWidth" id="splice`+i+`WidthBIn">
	   		                                                
	   		                                            </select>
	   		                                            <div class="txt-right">
	   		                                                in
	   		                                            </div>
	   		                                        </div>
	   		                                        <div class="col-lg-5 col-md-5 padding5">
	   		                                             <select class="form-control p-r-0 per70 splicefrWidth" id="splice`+i+`WidthBFr">
	   		                                              </div>  
	   		                                            </select>
	   		                                            <div class="txt-right">
	   		                                                fr
	   		                                            </div>
	   		                                        </div>
	   		                                    </div>
	   		                                </div>
	   		                            
	   		                                <div class="col-lg-2 col-md-2 padding10 ">
	   		                                     <label class="labelBlack control-label ">Thickness C</label>
	   		                                     <div class="row ">
	   		                                    
	   		                                        <div class="col-lg-5 col-md-5 p-r-0">
	   		                                             <select class="form-control p-r-0 per70 spliceinThicknessC" id="splice`+i+`ThicknessCIn">
	   		                                             
	   		                                            </select>
	   		                                            <div class="txt-right">
	   		                                                in
	   		                                            </div>
	   		                                        </div>
	   		                                        <div class="col-lg-7 col-md-7 padding5">
	   		                                             <select class="form-control p-r-0 per70 splicefrThicknessC" id="splice`+i+`ThicknessCFr">
	   		                                              
	   		                                             </select>
	   		                                            <div class="txt-right">
	   		                                                fr
	   		                                            </div>
	   		                                        </div>
	   		                                    </div>
	   		                                </div>
	   		                            
	   		                                <div class="col-lg-3 col-md-3 padding10 ">
	   		                                     <label class="labelBlack control-label ">Thickness D</label>
	   		                                     <div class="row ">
	   		                                    
	   		                                        <div class="col-lg-4 col-md-4 p-r-0">
	   		                                             <select class="form-control p-r-0 per70 spliceinThicknessD" id="splice`+i+`ThicknessDIn">
	   		                                             
	   		                                            </select>
	   		                                            <div class="txt-right">
	   		                                                in
	   		                                            </div>
	   		                                        </div>
	   		                                        <div class="col-lg-5 col-md-5 padding5">
	   		                                             <select class="form-control p-r-0 per70 splicefrThicknessD" id="splice`+i+`ThicknessDFr">
	   		                                            
	   		                                             </select>
	   		                                            <div class="txt-right">
	   		                                                fr
	   		                                            </div>
	   		                                        </div>
	   		                                    </div>
	   		                                </div>
	   		                            </div>`;

	   		                              $('#spliceRows').append(html);
	   		                }
		   		        // Add drop Down values 
		   		        $.each(wsDropDown.Inch, function(index,data) {   
		   		         $('<option>').val(data.Inch).text(data.Inch).appendTo('.splicein,.spliceinDepth,.spliceinWidth,.spliceinThicknessC,.spliceinThicknessD');        
			   		         
		   		         });
                       
		   		        $.each(wsDropDown.Fraction, function(index,data) {   
		   					  $('<option>').val(data.fr).text(data.fr_fra).appendTo('.splicefr,.splicefrDepth,.splicefrWidth,.splicefrThicknessC,.splicefrThicknessD');
			   		             });
		   				  
		   		          var deptha = $("#bc4depthaft").val();
		   					$('#splice1DepthAFt,#splice2DepthAFt,#splice3DepthAFt,#splice4DepthAFt,#splice1DepthAFt,#splice5DepthAFt,#splice6DepthAFt,#splice7DepthAFt,#splice8DepthAFt,#splice9DepthAFt,#splice10DepthAFt').val(deptha);
		   				  
		   					  var depthin = $("#bc4depthain").val();
		   						$('#splice1DepthAIn,#splice2DepthAIn,#splice3DepthAIn,#splice4DepthAIn,#splice5DepthAIn,#splice6DepthAIn,#splice7DepthAIn,#splice8DepthAIn,#splice9DepthAIn,#splice10DepthAIn').val(depthin);
		   						
		   						 var depthfr = $("#bc4depthafr").val();
		   						 $('#splice1DepthAFr,#splice2DepthAFr,#splice3DepthAFr,#splice4DepthAFr,#splice5DepthAFr,#splice6DepthAFr,#splice7DepthAFr,#splice8DepthAFr,#splice9DepthAFr,#splice10DepthAFr').val(depthfr);
		   						
		   						 var widthft = $("#bc4widthbft").val(); 
		   						 $('#splice1WidthBFt,#splice2WidthBFt,#splice3WidthBFt,#splice4WidthBFt,#splice5WidthBFt,#splice6WidthBFt,#splice7WidthBFt,#splice8WidthBFt,#splice9WidthBFt,#splice10WidthBFt').val(widthft);
		   						 
		   						 var widthin = $("#bc4widthbin").val(); 
		   						 $('#splice1WidthBIn,#splice1WidthBIn,#splice1WidthBIn,#splice1WidthBIn,#splice1WidthBIn,#splice1WidthBIn,#splice1WidthBIn,#splice1WidthBIn,#splice1WidthBIn,#splice1WidthBIn').val(widthin);
		   						 
		   						 var widthfr = $("#bc4widthbfr").val();
		   						 $('#splice1WidthBFr,#splice2WidthBFr,#splice3WidthBFr,#splice4WidthBFr,#splice5WidthBFr,#splice6WidthBFr,#splice7WidthBFr,#splice8WidthBFr,#splice9WidthBFr,#splice10WidthBFr').val(widthfr);
		   						 
		   						var thicknessin = $("#bc4thicknesscin") .val();
		   						$('#splice1ThicknessCIn,#splice2ThicknessCIn,#splice3ThicknessCIn,#splice4ThicknessCIn,#splice5ThicknessCIn,#splice6ThicknessCIn,#splice7ThicknessCIn,#splice8ThicknessCIn,#splice9ThicknessCIn,#splice10ThicknessCIn').val(thicknessin);
		   						
		   						var thicknessfr = $("#bc4thicknesscfr") .val();
		   						$('#splice1ThicknessCFr,#splice2ThicknessCFr,#splice3ThicknessCFr,#splice4ThicknessCFr,#splice5ThicknessCFr,#splice6ThicknessCFr,#splice7ThicknessCFr,#splice8ThicknessCFr,#splice9ThicknessCFr,#splice10ThicknessCFr').val(thicknessfr);
		   						
		   						
		   						
		   						var thicknessdin = $("#bc4thicknessdin").val();
		   						$('#splice1ThicknessDIn,#splice2ThicknessDIn,#splice3ThicknessDIn,#splice4ThicknessDIn,#splice5ThicknessDIn,#splice6ThicknessDIn,#splice7ThicknessDIn,#splice8ThicknessDIn,#splice9ThicknessDIn,#splice10ThicknessDIn').val(thicknessdin);
		   						
		   						var thicknessdfr = $("#bc4thicknessdfr").val();
		   						$('#splice1ThicknessDFr,#splice2ThicknessDFr,#splice3ThicknessDFr,#splice4ThicknessDFr,#splice5ThicknessDFr,#splice6ThicknessDFr,#splice7ThicknessDFr,#splice8ThicknessDFr,#splice9ThicknessDFr,#splice10ThicknessDFr').val(thicknessdfr);
		   						
		   						
		   						 $("#bc4depthaft,#bc4depthain,#bc4depthafr,#bc4widthbft,#bc4widthbin,#bc4widthbfr,#bc4thicknesscin,#bc4thicknesscfr,#bc4thicknessdin,#bc4thicknessdfr").change(function(){
		   		                	/* $('#spliceRows').empty();
		   		             	    $('#c4boxsplicecount').prop('selectedIndex',0);*/
		   		                });
		   		                        });
   
		     	
		 $(".bc4select1").select2({
        placeholder: "Select"
    });
    $(function() {
       $('.chosen-select').chosen();
       $('.chosen-select-deselect').chosen({
           allow_single_deselect: true
       });
   });
    $(".referenceSelect").select2({
        placeholder: "Select"
    });

 		$('#chkcapplate').change(function() {
			if($(this).prop("checked") == true){
				$('#chkboxCap1, #chkboxCap2, #chkboxCap3, #chkboxCap4').attr('disabled', false);
			} 
			else {
				$('#chkboxCap1, #chkboxCap2, #chkboxCap3, #chkboxCap4').attr('disabled', true);
			}
		});
		
		$('#surfaceprecb1').change(function() {
			if($(this).prop("checked") == true){
				$('#mchkboxcol1, #mchkboxcol2').attr('disabled', false);
			} 
			else {
				$('#mchkboxcol1, #mchkboxcol2').attr('disabled', true);
			}
		});
		$("#error-msg").hide();	
		$('#bc4depthain,#bc4depthafr,#bc4widthbin,#bc4widthbfr,#bc4thicknesscin,#bc4thicknesscfr,#bc4thicknessdin,#bc4thicknessdfr').change(function() {
	       setValuesForSplice();
		   
	});
		
		
		
		 $('body').on('keyup', '#bc4depthaft,#bc4widthbft', function() {
			 setValuesForSplice()
				
		    });
		
		
		
		

		function setValuesForSplice() {
			
			$(".splicetextDepth").val($("#bc4depthaft").val());
			$(".spliceinDepth").val($("#bc4depthain").val());
		    $(".splicefrDepth").val($("#bc4depthafr").val());
		    
		    
			$(".splicetextWidth").val($("#bc4widthbft").val());
			$(".spliceinWidth").val($("#bc4widthbin").val());
		    $(".splicefrWidth").val($("#bc4widthbfr").val()); 
		    
		    $(".spliceinThicknessC").val($("#bc4thicknesscin").val());
		    $(".splicefrThicknessC").val($("#bc4thicknesscfr").val()); 
		    
		    
		    $(".spliceinThicknessD").val($("#bc4thicknessdin").val());
		    $(".splicefrThicknessD").val($("#bc4thicknessdfr").val()); 
		    if ($("#c4boxsplicecount").val()!=0) {
		    	
		    	  $("#error-msg").show();
		    	  
		    	  setTimeout(function() { // this will automatically close the console.log and remove this if the users doesnt close it in 5 secs        	  
		             	$("#error-msg").hide();

		         }, 3500);
			}
		}
		
		
		
		
