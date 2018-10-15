     function AllowNumbersOnly(e) {
         var code = (e.which) ? e.which : e.keyCode;
        
         if (code > 31 && (code < 48 || code > 57)) {
           e.preventDefault();
         }
       }
   
     $.each(wsDropDown.SurfacePreparation, function(index,data) {   
         var weldsize = "<option>"+data.SSPC_No+"</option>";
         $(weldsize).appendTo('#losurfacePreparation1'); 
          
       }); 
               
        $.each(wsDropDown.NoOfCoats, function(index,data) {   
             var NoOfCoats = "<option>"+data.Coats+"</option>";
             $(NoOfCoats).appendTo('#loprimer2,#lopaint2'); 
              
           });         
        
        $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
             var NoOfCoats = "<option>"+data.ZincCoatingThickness+"</option>";
             $(NoOfCoats).appendTo('#logalvanization1'); 
              
           });         
    
        $.each(wsDropDown.FireProofingType, function(index,data) {   
             var appendval = "<option>"+data.FireProofingType+"</option>";
             $(appendval).appendTo('#lofireProofing2'); 
              
           }); 
        $.each(wsDropDown.FireRating, function(index,data) {   
         var appendval = "<option>"+data.FireRating_fra+"</option>";
         $(appendval).appendTo('#lofireProofing3'); 
          
       }); 
         
        
        $.each(wsDropDown.AESSCategory, function(index,data) {   
             var appendval = "<option>"+data.AESS+"</option>";
             $(appendval).appendTo('#loaess1'); 
              
           });
        if(wsFinish != null){
		      var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	    console.log(usedfinish);
		  
	     var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
	   var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
	   var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
	      
	      if(paintValue != null){
	      $('#loprimer1').val(paintValue);
	      document.getElementById("loprimer1").setAttribute("disabled", false);
	      }
	      if(noOfCoatsprimer != null){
	         var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
	         $('select[name^="#loprimer2"] option[value=noOfCts]').attr("selected","selected");

	      }
	   
	     $('#chkprimer').change(function() {
	        if($(this).prop("checked") == true){
	            $('#loprimer1, #loprimer2').attr('disabled', false);
	           if(primerperiSPreparation != null){
	    		  $('#losurfacePreparation1').val(primerperiSPreparation);
	    	  }
	        } else {
	            $('#loprimer1, #loprimer2').attr('disabled', true);

	        }
	    });
 if(usedfinish == "Primer"){
   	 $('#chkprimer').prop('checked', true);
   	  $('#chknopaint').attr('checked', true);
   	 $('#loprimer1,#loprimer2').attr('disabled', false);	
   	 if(primerperiSPreparation != null){
   		  $('#losurfacePreparation1').val(primerperiSPreparation);
   	  }
	    } 
	    var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
	    if(usedfinish != "Galvanizing" &&  SPreparation != null){
	    	 $('#chkprimer').prop('checked', true);
	    	  $('#chknopaint').attr('checked', true);
	    	 $('#loprimer1,#loprimer2').attr('disabled', false);	
	    	 if(primerperiSPreparation != null){
	    		  $('#losurfacePreparation1').val(primerperiSPreparation);
	    	  }
	    }
	    
	      var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
	      var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
	      var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
	       if(paintValue != null){
	       $('#lopaint1').val(paintValue);
	       document.getElementById("lopaint1").setAttribute("disabled", false);
	       }
	       
	       if(noOfCoatspaint != null){
	          var noOfCts="<option value>"+noOfCoatspaint+"</option>";
	          $('select[name^="#lopaint2"] option[value=noOfCts]').attr("selected","selected");
	       }
	       $('#chkpaint').change(function() {
	           if($(this).prop("checked") == true){
	               $('#lopaint1, #lopaint2').attr('disabled', false);
	               if(paintperiSPreparation != null){
			    		  $('#losurfacePreparation1').val(paintperiSPreparation);
			    	  }
	           } else {
	               $('#lopaint1, #lopaint2').attr('disabled', true);
	           }
	           if($('#chkprimer').prop("checked") == true){
	               $('#chkprimer').removeAttr("disabled");
	           } else {
	               $('#chkprimer').removeAttr("disabled");
	           }
	           $('#logalvanization1').attr('disabled', true);
	       });
	       if(usedfinish == "Paint"){
		    	  $('#chkpaint').attr('checked', true);
		    	  $('#lopaint1, #lopaint2').attr('disabled', false);
		    	  if(paintperiSPreparation != null){
		    		  $('#losurfacePreparation1').val(paintperiSPreparation);
		    	  }
		      }

	  
	 var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
	 var	category = wsFinish.Finish.AESS.Category;
	 	   
	 if(category != null){   
	 	      var aess="<option value>"+category+"</option>";
	 		   $('select[name^="#loaess1"] option[value=aess]').attr("selected","selected");
	 }
	 $('#chkaess').change(function() {
	        if($(this).prop("checked") == true){
	            $('#loaess1').attr('disabled', false);
	            if(aessperiSPreparation != null){
	      		  $('#losurfacePreparation1').val(aessperiSPreparation);
	      	  }
	        } else {
	            $('#loaess1').attr('disabled', true);
	        }
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').removeAttr("disabled");
	        } else {
	            $('#chkprimer').removeAttr("disabled");
	        }
	        $('#lopaint1, #lopaint2, #logalvanization1, #lofireProofing2, #lofireProofing3').attr('disabled', true); 
	    });
	  if(usedfinish == "AESS"){
  	  $('#chkaess').attr('checked', true);
  	  $('#loaess1').attr('disabled', false);
  	  if(aessperiSPreparation != null){
  		  $('#losurfacePreparation1').val(aessperiSPreparation);
  	  }
    }
	  	   var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
	  	   var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
	  	   var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	 	   
		 	      
	 	      if(fireRating != null){
	 	      var fireRatingval="<option value>"+fireRating+"</option>";
	 	      $('select[name^="#lofireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	 	      }
	 	      if(fireProofingType != null){
	 	         var fireProofing="<option value>"+fireProofingType+"</option>";
	 	         $('select[name^="#lofireProofing3"] option[value=fireProofing]').attr("selected","selected");
	 	      }
	 	     $('#chkfireproofing').change(function() {
	 	        if($(this).prop("checked") == true){
	 	            $('#lofireProofing2, #lofireProofing3').attr('disabled', false);
	 	           if(fpperiSPreparation != null){
			       		$('#losurfacePreparation1').val(fpperiSPreparation);
			       	}
	 	        } else {
	 	            $('#lofireProofing2, #lofireProofing3').attr('disabled', true);
	 	        }  
	 	        if($('#chkprimer').prop("checked") == true){
	 	            $('#chkprimer').removeAttr("disabled");
	 	        } else {
	 	            $('#chkprimer').removeAttr("disabled");
	 	        }
	 	        $('#lopaint1, #lopaint2, #logalvanization1, #loaess1').attr('disabled', true);  
	 	        // $('#chkprimer').removeAttr("disabled");
	 	    });
		      if(usedfinish == "Fire proofing"){
		       	  $('#chkfireproofing').attr('checked',true);
		       	  $('#lofireProofing2, #lofireProofing3').attr('disabled', false);
		       	
			    }
	 	   var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	 	   var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	 	      if(zincCoatingThickness != null){
	 	      var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	 	      $('select[name^="#logalvanization1"] option[value=zincCoating]').attr("selected","selected");
	 	      }
	 	     $('#chkgalvanize').change(function() {
	 	        if($(this).prop("checked") == true){
	 	            $('#logalvanization1').attr('disabled', false);
	 	           if(galperiSPreparation != null){
			     	 	 $('#losurfacePreparation1').val(galperiSPreparation);
			     	 	   } 
	 	        } else {
	 	            $('#logalvanization1').attr('disabled', true);
	 	        }
	 	        if($('#chkprimer').prop("checked") == true){
	 	            $('#chkprimer').prop('checked', false);
	 	            $('#chkprimer').attr('disabled', true);
	 	        } 
	 	        else {
	 	            $('#chkprimer').prop('checked', false);
	 	            $('#chkprimer').attr('disabled', true);
	 	        }
	 	        $('#loprimer1, #loprimer2, #lopaint1, #lopaint2, #lofireProofing2, #lofireProofing3, #loaess1').attr('disabled', true);
	 	        // $("#chkprimer").attr('disabled', 'disabled');
	 	    });
	 	     if(usedfinish == "Galvanizing"){
		    	  $('#chkgalvanize').attr('checked', true);
		    	  $('#logalvanization1').attr('disabled', false);
		    	  $('#chkprimer').prop('checked', false);
		            $('#chkprimer').attr('disabled', true);
		            if(galperiSPreparation != null){
		     	 	 $('#losurfacePreparation1').val(galperiSPreparation);
		     	 	   }  
		      }
	 	   var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
	 	  $('#chknopaint').change(function() {
	 	        if($('#chkprimer').prop("checked") == true){
	 	            $('#chkprimer').attr('disabled', false);
	 	           if(nopperiSPreparation != null){
	 		 			 $('#losurfacePreparation1').val(nopperiSPreparation);
	 		 		 	   }
	 	        } else {
	 	            $('#chkprimer').attr('disabled', false);
	 	        }
	 	        if($('#chkprimer').prop("checked") == true){
	 	            $('#chkprimer').removeAttr("disabled");
	 	        } else {
	 	            $('#chkprimer').removeAttr("disabled");
	 	        }
	 	        $('#lopaint1, #lopaint2, #logalvanization1, #lofireProofing2, #lofireProofing3, #loaess1').attr('disabled', true);
	 	    });
		 	  if(usedfinish == "NoPaint"){
	 		  $('#chknopaint').attr('checked', true);
	 		
	 	  }
	  }     
   $.each( wsDropDown.PostProfile, function(key, value) {
             var profiles="<option>"+value.Profile+"</option>";
         $(profiles).appendTo('#postProfile'); 

         });
        
                 $.each( wsDropDown.BeamOrientation, function(key, value) {
                     var profiles="<option>"+value.Beam_Orientation+"</option>";
                       $(profiles).appendTo('#postOrientation'); 
           
                 });
                 
                 $.each(wsDropDown.DataSource, function(index,data) {   
            		  var datasource="<option>"+data.DataSource+"</option>";
                       $(datasource).appendTo('#pdatasource'); 
            		   
            		});
             /*  $.each(wsDropDown.MaterialGrade, function(index,data) {   
                  var datasource="<option>"+data.MaterialGrade+"</option>";
                    $(datasource).appendTo('#postGrade'); 
                   
                }); */
              

             
              
              $.each(wsDropDown.Fraction, function(index,data) {   
                  
                  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#postTopElevationFr,#xDirectionFr,#yDirectionFr,#postBottomElevationFr');
                 
               
            });
              
            $.each(wsDropDown.Inch, function(index,data) {   
                   $('<option>').val(data.Inch).text(data.Inch).appendTo('#postBottomElevationIn,#postTopElevationIn,#xDirectionIn,#yDirectionIn');
            });
                    
           
          
          
  $( document ).ready(function() {
	  
	$("#postProfile").change(function(){
		  // var profilename=$("#postProfile").find('option:selected').text();
		   
		   var profilename = $(this).val();
		   $('#postGrade').empty();
			 getProfileGrades(profilename);
			 $.each(profileGrades, function(index,data) {   
				  var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
				 
		           $(grades).appendTo('#postGrade'); 
		           
		           
				   
				});  
		   
		   var res = profilename.charAt(0);
		   if(wsPlateGrade != ''){
		     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
		     	var anglegrade = wsPlateGrade.MemberGrades.Angles;
		     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
		     	if(res=="W"){
		     		if(profileshgrade != null){
		     			 $('#postGrade').val(profileshgrade);
			             
			           }
				   }
		    	else if(res=="H"){
		     	if(hssgrade != ''){
		     		 $('#postGrade').val(hssgrade);
		          
		         }
		     	} 
		     	else{
		     		if(anglegrade != ''){
		     			$('#postGrade').val(anglegrade);
			          
			         }
		     	}
		     }
		   
		   $("#postgrades .select2-container--default .select2-selection--single").removeClass("importantRed");
		   
		   
	    $('#postbpcm').empty();
	    $('#chkpCap1').empty();
	    
	    var filtered = $.grep(connectionObjList, function (el) {
			   if(profilename.indexOf(el.bprofile) >= 0 && el.type.toLowerCase().indexOf("base")>=0  && el.baseplate.toLowerCase().indexOf("base")>=0 && el.post.toLowerCase().indexOf("post")>=0 ){
	        	return el.bprofile;
	        }
	    });
	
		$.each(filtered, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ConnectionMark).appendTo('#postbpcm'); 
		   });
		 var filtered = $.grep(connectionObjList, function (el) {
			   if(profilename.indexOf(el.bprofile) >= 0 && el.type.toLowerCase().indexOf("base")>=0  && el.baseplate.toLowerCase().indexOf("cap")>=0 && el.post.toLowerCase().indexOf("post")>=0 ){
	        	return el.bprofile;
	        }
	    });
	 
		$.each(filtered, function(key, value) {
		       var ccaponnectionMark="<option>"+value.connectionMark+"</option>";
		         $(ccaponnectionMark).appendTo('#chkp3Cap1'); 
		   });
		
	});
  });
  
  $(".referenceSelect").select2({
      placeholder: "Select"
  });
  $(".postselect1").select2({
        placeholder: "Select"
    });
    $(".postselect2").select2({
            placeholder: "Select"
        });    
	
	$('#chkcapplate').change(function() {
		if($(this).prop("checked") == true){
			$('#chkp3Cap1, #chkp3Cap2, #chkp3Cap3, #chkp3Cap4').attr('disabled', false);
		} 
		else {
			$('#chkp3Cap1, #chkp3Cap2, #chkp3Cap3, #chkp3Cap4').attr('disabled', true);
		}
	});
    
    $('#chkfireproofing').change(function() {
        if($(this).prop("checked") == true){
            $('#lofireProofing2, #lofireProofing3').attr('disabled', false);
        } else {
            $('#lofireProofing2, #lofireProofing3').attr('disabled', true);
        }  
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#lopaint1, #lopaint2, #logalvanization1, #loaess1').attr('disabled', true);  
        // $('#chkprimer').removeAttr("disabled");
    });
    $('#chkaess').change(function() {
        if($(this).prop("checked") == true){
            $('#loaess1').attr('disabled', false);
        } else {
            $('#loaess1').attr('disabled', true);
        }
        if($('#chkprimer').prop("checked") == true){
            $('#chkprimer').removeAttr("disabled");
        } else {
            $('#chkprimer').removeAttr("disabled");
        }
        $('#lopaint1, #lopaint2, #logalvanization1, #lofireProofing2, #lofireProofing3').attr('disabled', true); 
    });
    // End Finish check
      $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
      });
      $("#postProfile").change(function(){
  		$("#postprofiles .select2-container--default .select2-selection--single").removeClass("importantRed");
  		});
      $("#postGrade").change(function(){
  		$("#postgrades .select2-container--default .select2-selection--single").removeClass("importantRed");
  		});
      
      
  	$('#postTopElevationFt').on('click', function() {
  		   if( $('#postTopElevationFt').val() == "0") {
  		   $('#postTopElevationFt').val("");
  		   }
  	   });
  	$('#postBottomElevationFt').on('click', function() {
  		   if( $('#postBottomElevationFt').val() == "0") {
  		   $('#postBottomElevationFt').val("");
  		   }
  	   });
  	$('#xDirectionFt').on('click', function() {
  		   if( $('#xDirectionFt').val() == "0") {
  		   $('#xDirectionFt').val("");
  		   }
  	   });
  	$('#yDirectionFt').on('click', function() {
  		   if( $('#yDirectionFt').val() == "0") {
  		   $('#yDirectionFt').val("");
  		   }
  	   });
      
  	
  