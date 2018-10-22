/**
 * 
 */
      $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
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
		  var plategrade="<option value=\""+data.MaterialGrade+"\">"+data.MaterialGrade+"</option>";
          $(plategrade).appendTo('#plategirder1'); 
		}); 
    if(wsPlateGrade != null){
    	var plateGrades = wsPlateGrade.MemberGrades.Plates;
    	 if(plateGrades != null){
             var plgrade="<option value=\""+plateGrades+"\">"+plateGrades+"</option>";
             $('select[name^="#plategirder1"] option[value=plgrade]').attr("selected","selected");
        
          }
    	
    }
  
    $.each(wsDropDown.SurfacePreparation, function(index,data) {   
		  var surfacepreparation = "<option>"+data.SSPC_No+"</option>";
		  $(surfacepreparation).appendTo('#csurfacePreparation1'); 
		   
		});
	  $.each(wsDropDown.FireProofingType, function(index,data) {   
		  var fireproofingtype = "<option>"+data.FireProofingType+"</option>";
		  $(fireproofingtype).appendTo('#cfireProofing2'); 
		   
		});
	  $.each(wsDropDown.FireRating, function(index,data) {   
		  var firerating = "<option>"+data.FireRating_fra+"</option>";
		  $(firerating).appendTo('#cfireProofing3'); 
		   
		});
	  $.each(wsDropDown.ZincCoatingThickness, function(index,data) {   
		  var zinccoatingthickness = "<option>"+data.ZincCoatingThickness+"</option>";
		  $(zinccoatingthickness).appendTo('#cgalvanization2'); 
		   
		});
	  $.each(wsDropDown.NoOfCoats, function(index,data) {   
		  var noofcoats = "<option>"+data.Coats+"</option>";
		  $(noofcoats).appendTo('#cprimer2'); 
		   
		});
	  $.each(wsDropDown.NoOfCoats, function(index,data) {   
		  var noofcoats = "<option>"+data.Coats+"</option>";
		  $(noofcoats).appendTo('#cpaint2'); 
		   
		});
	  $.each(wsDropDown.AESSCategory, function(index,data) {   
 		  var AESScategory="<option>"+data.AESS+"</option>";
            $(AESScategory).appendTo('#caess1'); 
           	        		   
 		});
	  
	  
	
		      var usedfinish=wsFinish.Finish.Commonlyusedfinishproperty;
	    console.log(usedfinish);
	    var	primerperiSPreparation = wsFinish.Finish.Primer.SSPC_No;
	 	   var  paintValue =  wsFinish.Finish.Primer.PrimerValue;
	 	   var noOfCoatsprimer = wsFinish.Finish.Primer.NoOfCoatsPrimer;
	 	      
	 	      if(paintValue != null){
	 	      $('#cprimer1').val(paintValue);
	 	      document.getElementById("cprimer1").setAttribute("disabled", false);
	 	      }
	 	      if(noOfCoatsprimer != null){
	 	         var noOfCts="<option value>"+noOfCoatsprimer+"</option>";
	 	         $('select[name^="#cprimer2"] option[value=noOfCts]').attr("selected","selected");

	 	      }
	 	   
	 	     $('#chkprimer').change(function() {
	 	        if($(this).prop("checked") == true){
	 	            $('#cprimer1, #cprimer2').attr('disabled', false);
	 	           if(primerperiSPreparation != null){
	 	    		  $('#csurfacePreparation1').val(primerperiSPreparation);
	 	    	  }
	 	        } else {
	 	            $('#cprimer1, #cprimer2').attr('disabled', true);

	 	        }
	 	    });
	  if(usedfinish == "Primer"){
	    	 $('#chkprimer').prop('checked', true);
	    	  $('#chknopaint').attr('checked', true);
	    	 $('#cprimer1,#cprimer2').attr('disabled', false);	
	    	 if(primerperiSPreparation != null){
	    		  $('#csurfacePreparation1').val(primerperiSPreparation);
	    	  }
		    } 
	    var	SPreparation = wsFinish.Finish.Primer.SSPC_No;
	    if(usedfinish != "Galvanizing" &&  SPreparation != null){
	    	 $('#chkprimer').prop('checked', true);
	    	  $('#chknopaint').attr('checked', true);
	    	 $('#cprimer1,#cprimer2').attr('disabled', false);	
	    	 if(primerperiSPreparation != null){
	    		  $('#csurfacePreparation1').val(primerperiSPreparation);
	    	  }
	    }
	    
	    
	      var	paintperiSPreparation = wsFinish.Finish.Paint.SSPC_No;
	      var  paintValue =  wsFinish.Finish.Paint.PaintValue[1].Painttype;
	      var noOfCoatspaint = wsFinish.Finish.Paint.PaintValue[1].NoOfCoatsPaint;
	       if(paintValue != null){
	       $('#cpaint1').val(paintValue);
	       document.getElementById("cpaint1").setAttribute("disabled", false);
	       }
	       
	       if(noOfCoatspaint != null){
	          var noOfCts="<option value>"+noOfCoatspaint+"</option>";
	          $('select[name^="#cpaint2"] option[value=noOfCts]').attr("selected","selected");
	       }
	       $('#chkpaint').change(function() {
	           if($(this).prop("checked") == true){
	               $('#cpaint1, #cpaint2').attr('disabled', false);
	               if(paintperiSPreparation != null){
			    		  $('#csurfacePreparation1').val(paintperiSPreparation);
			    	  }
	           } else {
	               $('#cpaint1, #cpaint2').attr('disabled', true);
	           }
	           if($('#chkprimer').prop("checked") == true){
	               $('#chkprimer').removeAttr("disabled");
	           } else {
	               $('#chkprimer').removeAttr("disabled");
	           }
	           $('#cgalvanization2').attr('disabled', true);
	       });
	       if(usedfinish == "Paint"){
		    	  $('#chkpaint').attr('checked', true);
		    	  $('#cpaint1, #cpaint2').attr('disabled', false);
		    	  if(paintperiSPreparation != null){
		    		  $('#csurfacePreparation1').val(paintperiSPreparation);
		    	  }
		      }
	  
	 	   
	  
	 var	aessperiSPreparation = wsFinish.Finish.AESS.SSPC_No;
	 var	category = wsFinish.Finish.AESS.Category;
	 	   
	 if(category != null){   
	 	      var aess="<option value>"+category+"</option>";
	 		   $('select[name^="#caess1"] option[value=aess]').attr("selected","selected");
	 }
	 $('#chkaess').change(function() {
	        if($(this).prop("checked") == true){
	            $('#caess1').attr('disabled', false);
	            if(aessperiSPreparation != null){
	      		  $('#csurfacePreparation1').val(aessperiSPreparation);
	      	  }
	        } else {
	            $('#caess1').attr('disabled', true);
	        }
	        if($('#chkprimer').prop("checked") == true){
	            $('#chkprimer').removeAttr("disabled");
	        } else {
	            $('#chkprimer').removeAttr("disabled");
	        }
	        $('#cpaint1, #cpaint2, #cgalvanization2, #cfireProofing2, #cfireProofing3').attr('disabled', true); 
	    });
	  if(usedfinish == "AESS"){
    	  $('#chkaess').attr('checked', true);
    	  $('#caess1').attr('disabled', false);
    	  if(aessperiSPreparation != null){
    		  $('#csurfacePreparation1').val(aessperiSPreparation);
    	  }
      }
	  	   var	fpperiSPreparation = wsFinish.Finish.FireProofing.SSPC_No;
	  	   var  fireRating =  wsFinish.Finish.FireProofing.FireRating;
	  	   var fireProofingType = wsFinish.Finish.FireProofing.FireProofingType;
	 	   
		 	      
	 	      if(fireRating != null){
	 	      var fireRatingval="<option value>"+fireRating+"</option>";
	 	      $('select[name^="#cfireProofing2"] option[value=fireRatingval]').attr("selected","selected");
	 	      }
	 	      if(fireProofingType != null){
	 	         var fireProofing="<option value>"+fireProofingType+"</option>";
	 	         $('select[name^="#cfireProofing3"] option[value=fireProofing]').attr("selected","selected");
	 	      }
	 	     $('#chkfireproofing').change(function() {
	 	        if($(this).prop("checked") == true){
	 	            $('#cfireProofing2, #cfireProofing3').attr('disabled', false);
	 	           if(fpperiSPreparation != null){
			       		$('#csurfacePreparation1').val(fpperiSPreparation);
			       	}
	 	        } else {
	 	            $('#cfireProofing2, #cfireProofing3').attr('disabled', true);
	 	        }  
	 	        if($('#chkprimer').prop("checked") == true){
	 	            $('#chkprimer').removeAttr("disabled");
	 	        } else {
	 	            $('#chkprimer').removeAttr("disabled");
	 	        }
	 	        $('#cpaint1, #cpaint2, #cgalvanization2, #caess1').attr('disabled', true);  
	 	        // $('#chkprimer').removeAttr("disabled");
	 	    });
		      if(usedfinish == "Fire proofing"){
		       	  $('#chkfireproofing').attr('checked',true);
		       	  $('#cfireProofing2, #cfireProofing3').attr('disabled', false);
		       	
			    }
	 	   var	galperiSPreparation = wsFinish.Finish.Galvanization.SSPC_No;
	 	   var  zincCoatingThickness =  wsFinish.Finish.Galvanization.ZincCoatingThickness;
	 	      if(zincCoatingThickness != null){
	 	      var zincCoating="<option value>"+zincCoatingThickness+"</option>";
	 	      $('select[name^="#cgalvanization2"] option[value=zincCoating]').attr("selected","selected");
	 	      }
	 	     $('#chkgalvanize').change(function() {
	 	        if($(this).prop("checked") == true){
	 	            $('#cgalvanization2').attr('disabled', false);
	 	           if(galperiSPreparation != null){
			     	 	 $('#csurfacePreparation1').val(galperiSPreparation);
			     	 	   } 
	 	        } else {
	 	            $('#cgalvanization2').attr('disabled', true);
	 	        }
	 	        if($('#chkprimer').prop("checked") == true){
	 	            $('#chkprimer').prop('checked', false);
	 	            $('#chkprimer').attr('disabled', true);
	 	        } 
	 	        else {
	 	            $('#chkprimer').prop('checked', false);
	 	            $('#chkprimer').attr('disabled', true);
	 	        }
	 	        $('#cprimer1, #cprimer2, #cpaint1, #cpaint2, #cfireProofing2, #cfireProofing3, #caess1').attr('disabled', true);
	 	        // $("#chkprimer").attr('disabled', 'disabled');
	 	    });
	 	     if(usedfinish == "Galvanizing"){
		    	  $('#chkgalvanize').attr('checked', true);
		    	  $('#cgalvanization2').attr('disabled', false);
		    	  $('#chkprimer').prop('checked', false);
		            $('#chkprimer').attr('disabled', true);
		            if(galperiSPreparation != null){
		     	 	 $('#csurfacePreparation1').val(galperiSPreparation);
		     	 	   }  
		      }
	 	   var	nopperiSPreparation = wsFinish.Finish.NoPaint.SSPC_No;
	 	  $('#chknopaint').change(function() {
	 	        if($('#chkprimer').prop("checked") == true){
	 	            $('#chkprimer').attr('disabled', false);
	 	           if(nopperiSPreparation != null){
	 		 			 $('#csurfacePreparation1').val(nopperiSPreparation);
	 		 		 	   }
	 	        } else {
	 	            $('#chkprimer').attr('disabled', false);
	 	        }
	 	        if($('#chkprimer').prop("checked") == true){
	 	            $('#chkprimer').removeAttr("disabled");
	 	        } else {
	 	            $('#chkprimer').removeAttr("disabled");
	 	        }
	 	        $('#cpaint1, #cpaint2, #cgalvanization2, #cfireProofing2, #cfireProofing3, #caess1').attr('disabled', true);
	 	    });
		 	  if(usedfinish == "NoPaint"){
	 		  $('#chknopaint').attr('checked', true);
	 		
	 	  }
	    
    $.each( wsDropDown.ColumnProfile, function(key, value) {
        

      var profiles="<option>"+value.Profile+"</option>";

            $(profiles).appendTo('#columnprofile'); 
                  
    });


	  
		  $.each(wsDropDown.Fraction, function(index,data) {   
			 
			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#colTop_fr');
			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#colBottom_fr');
			
			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel1fr');
			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#cspliceel2fr');
			 
			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#platelength_fra');
			  $('<option>').val(data.fr).text(data.fr_fra).appendTo('#platewidth_fra');
		
 		   
 		});
		  
		 
		
		  $('#cspliceel2fr').val("0");
		  $('#cspliceel1fr').val("0");
		
		  $('#colTop_fr').val("0");
		
		  $('#colBottom_fr').val("0");
		 
		    $('#platelength_fra').val("0");
		    $('#platewidth_fra').val("0");
		    
		    
		  
		$.each(wsDropDown.Inch, function(index,data) {   
			
			  $('<option>').val(data.Inch).text(data.Inch).appendTo('#colBottom_in');
			  $('<option>').val(data.Inch).text(data.Inch).appendTo('#colTop_in');

			  $('<option>').val(data.Inch).text(data.Inch).appendTo('#platelength_in');
			  $('<option>').val(data.Inch).text(data.Inch).appendTo('#platewidth_in');
			 // $('<option>').val(data.Incs).text(data.Inch).appendTo('#plateweldthickness_in');
			  $('<option>').val(data.Inch).text(data.Inch).appendTo('#cspliceel2in');
			  $('<option>').val(data.Inch).text(data.Inch).appendTo('#cspliceel1in');
  			  
 		});

		 $('#cspliceel2in').val("0");
		 $('#cspliceel1in').val("0");
		 $('#colBottom_in').val("0");
		 $('#colTop_in').val("0");
			    $('#colTop_in').val("0");
			    $('#platelength_in').val("0");
			    $('#platewidth_in').val("0");
			   // $('#plateweldthickness_in').val("0");
			    $('#splice1In').val("0");
			    $('#splice2In').val("0");
			    $('#splice3In').val("0");
			    $('#splice4In').val("0");
			    $('#splice5In').val("0");
			    $('#splice6In').val("0");
			    $('#splice7In').val("0");
			    $('#splice8In').val("0");
			    $('#splice9In').val("0");
			    $('#splice10In').val("0");
     	  $.each(wsDropDown.WeldType, function(index,data) {   
     		  var weldtype = "<option>"+data.wtype+"</option>";
     		  $(weldtype).appendTo('#weldtype1'); 
     		   
     		});
     	  $.each(wsDropDown.WeldSize, function(index,data) {   
     		  var weldsize = "<option>"+data.weld_fra+"</option>";
     		  $(weldsize).appendTo('#weldthickness1,#plateweldthickness_in'); 
     		   
     		});
     	 $.each(wsDropDown.WeldSize, function(index,data) {   
             var weldsize = "<option>"+data.weld_fra+"</option>";
             $(weldsize).appendTo('#caspshear5'); 
              
           });
     	 
     	
     	  $.each(wsDropDown.ColumnType, function(index,data) {  
     		  
     		  var gravity="<option>"+data.ColumnType+"</option>";
                $(gravity).appendTo('#columntype'); 
     		   
     		});
     	  $.each(wsDropDown.DataSource, function(index,data) {   
     		  var datasource="<option>"+data.DataSource+"</option>";
                $(datasource).appendTo('#datasource'); 
     		   
     		});
            
     	  $.each(wsDropDown.SpliceCount, function(index,data) {   
     		  var splicecount="<option>"+data.Count+"</option>";
                $(splicecount).appendTo('#splicecount'); 
     		   
     		});
     	
     	 
     	  $.each(wsDropDown.PlateThickness, function(index,data) {   
     		  var platethickness="<option>"+data.tp_fra+"</option>";
                $(platethickness).appendTo('#platethickness1'); 
               	        		   
     		});
     	
     	 
     	  if(RefDwgNumFiles){
     	 $.each(RefDwgNumFiles, function(index,data) { 
     		
 			var referencenum="<option>"+data+"</option>";
 			
 	         $(referencenum).appendTo('#colRefNum'); 
 	         
 			});
     	  }
  
   
  $( document ).ready(function() {
	  var select=document.getElementById('columntype');

		for (i=0;i<select.length;  i++) {
		   if (select.options[i].value=='Unclassified') {
		     select.remove(i);
		   }if (select.options[i].value=='Built-Up') {
		     select.remove(i);
		   }
		}
		getBasePlateConnectionMark();
		getSpliceConnectionMark();
		getCapPlateConnectionMark();
	
		
		
		$("#columngrade").change(function(){
		$("#colgrade .select2-container--default .select2-selection--single").removeClass("importantRed");
		});
		
			$("#platethickness1").change(function(){
				$("#platethickness1").removeClass("importantRed");
				});
			$("#weldtype1").change(function(){
				$("#weldtype1").removeClass("importantRed");
				});
			$("#plateweldthickness_in").change(function(){
				$("#plateweldthickness_in").removeClass("importantRed");
				});
		
		
		
		$("#columnprofile").change(function(){
			$("#colprofile .select2-container--default .select2-selection--single").removeClass("importantRed");
			 var profilename = $(this).val();
			  // $('#columngrade').empty();
			   getProfileGrades(profilename);
				 $.each(profileGrades, function(index,data) {   
					   var grades="<option value=\""+data.Grade+"\">"+data.Grade+"</option>";
			           $(grades).appendTo('#columngrade'); 
			           
			           
					   
					});
			   var res = profilename.charAt(0);
			   if(wsPlateGrade != ''){
			     	var profileshgrade = wsPlateGrade.MemberGrades.WfShapes;
			     	var hssgrade = wsPlateGrade.MemberGrades.HssRound;
			     	if(res=="W"){
			     		if(profileshgrade != null){
				             $('#columngrade').val(profileshgrade).prop('selected', true);
				           }
					   }
			    	else {
			     	if(hssgrade != ''){
			           $('#columngrade').val(hssgrade).prop('selected', true);
			         }
			     	} 
			   }	
			   $("#colgrade .select2-container--default .select2-selection--single").removeClass("importantRed");
			  
				 
			  $('#spliceRows').empty();	
			  $("#splicecount").val($("#splicecount option:first").val());
			
			 $('#cbpcmark').empty();
		    $('#cspcmark').empty();
		    getBasePlateConnectionMark();
			getSpliceConnectionMark();
			getCapPlateConnectionMark();
		    
		    
		});   
		
		$("#splicecount").change(function(){
			getSpliceConnectionMark();
		});	
				
  });
  
  
  $("#splice1Profile").change(function(){
	  alert("splice profile change");
		getSpliceConnectionMark();
});	
  
 

	// Populate Base Plate connection Mark
		
		    function getBasePlateConnectionMark(){ 
		    	$('#cbpcmark').empty();
		    	 var profilename = $("#columnprofile").val();	
		    	 var filtered = $.grep(connectionObjList, function (el) {
				   if(profilename.indexOf(el.profile) >= 0 && el.type.toLowerCase().indexOf("base")>=0 && el.baseplate.toLowerCase().indexOf("base")>=0 && el.post.toLowerCase().indexOf("column")>=0)
			  {
		        	return el.profile;
		        	
		        }
		    });
		 
		    $.each(filtered, function(key, value) {
			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
			         $(ConnectionMark).appendTo('#cbpcmark'); 
			        
			   }); 
		    }
		    
		    $('#chkcapplate').change(function() {
		    	
		    	getCapPlateConnectionMark();
		 	});
		    
		 // Populate Cap Plate connection Mark
		    function getCapPlateConnectionMark(){
		    	$('#chkCap1').empty();
		    	var profilename = $("#columnprofile").val();		  
			  // if( $('#chkCap1').is(':disabled')){
				   var filtered1 = $.grep(connectionObjList, function (el) {
					  
					   if(profilename.indexOf(el.profile) >= 0 && el.type.toLowerCase().indexOf("base")>=0 && el.baseplate.toLowerCase().indexOf("cap")>=0 && el.post.toLowerCase().indexOf("column")>=0)
					  {
				        	return el.profile;
				        	
				        }
				    });
				
				    $.each(filtered1, function(key, value) {
					       var ConnectionMark="<option>"+value.connectionMark+"</option>";
					       $(ConnectionMark).appendTo('#chkCap1'); 
					        
					   });   
			   }/*else{
				   $('#chkCap1').empty();
				   $('#chkCap2').val("");
				   $('#chkCap3').val("");
				   $('#chkCap4').val("");
			   }*/
			 
		   // }
		   
				   
		 // Populate Splice connection Mark
		   function getSpliceConnectionMark(){
			 $('#cspcmark').empty();
		
			 var profilename = $("#columnprofile").val();	
				
				var spliceCount=parseInt($('#splicecount').val() );
				
				if((spliceCount)>0){
					var spliceprofile = $("#splice1Profile").val();
					
					var cmsplice = null;
					 cmsplice = $.grep(connectionObjList, function (el2) {
					     
						  if(el2.type.toLowerCase().indexOf("splicecolumnusingsplice")>=0){
						  
						  if(profilename.indexOf(el2.LSprofile ) >= 0 && spliceprofile.indexOf(el2.USprofile ) >= 0 ){
				        	return el2.connectionMark;
				        }
						  }
					  
				    	
				    });
				  $.each(cmsplice, function(key, value) {
				       var ConnectionMark="<option>"+value.connectionMark+"</option>";
				       $(ConnectionMark).appendTo('#cspcmark'); 
				   }); 
				  cmsplice = $.grep(connectionObjList, function (el2) {
					     
					  if(el2.type.toLowerCase().indexOf("splicecolumnusingend")>=0){
					  
					  if(profilename.indexOf(el2.LSprofile ) >= 0 && spliceprofile.indexOf(el2.USprofile ) >= 0 ){
			        	return el2.connectionMark;
			        }
					  }
				  
			    	
			    });
			  $.each(cmsplice, function(key, value) {
			       var ConnectionMark="<option>"+value.connectionMark+"</option>";
			       $(ConnectionMark).appendTo('#cspcmark'); 
			   }); 
				
			  cmsplice = $.grep(connectionObjList, function (el2) {
				     
				  if(el2.type.toLowerCase().indexOf("splicecolumnusingdirectly")>=0){
				  
				  if(profilename.indexOf(el2.LSprofile ) >= 0 && spliceprofile.indexOf(el2.USprofile ) >= 0 ){
		        	return el2.connectionMark;
		        }
				  }
			  
		    	
		    });
		  $.each(cmsplice, function(key, value) {
		       var ConnectionMark="<option>"+value.connectionMark+"</option>";
		       $(ConnectionMark).appendTo('#cspcmark'); 
		   }); 
					
		   }
		   }
				// });
				  
		
		
			   	
	$("#weldtype1").change(function() {  
	    if (( $("#weldtype1").val()=="CJP") ||  $("#weldtype1").val()=="select"){
	 	   $("#plateweldthickness_in").attr("disabled", true);
	 	  // $("#plateweldthickness_in").prop('required',false);
	 	  $("#plateweldthickness_in").val($("#plateweldthickness_in option:first").val());
	 	 $("#plateweldthickness_in").removeClass("importantRed");
	
	 	   
	 	}else {
	 		  $("#plateweldthickness_in").attr("disabled", false);
	 		  $("#plateweldthickness_in").prop('required',true);
	 		 $("#plateweldthickness_in").addClass("importantRed");
	 	}

	 	});
	
	$("#colBottom_fr").change(function() {  
	   var bottomin = $("#colBottom_in").val();

	 	});
	$('#colBottomEleTxt').keyup(function(e){
		
		  var widthft = $("#colBottomEleTxt").val()
		  var thicknesswin = $("#colBottom_in").find('option:selected').text();
		  var thicknesswfr = $("#colBottom_fr").find('option:selected').text();
		});
  
  
  $("#splicecount").change(function() {
      $('#spliceRows').empty();
      var spliceCount=parseInt($('#splicecount').val() );
      $('.spliceprofile').empty();
    
      for(var i=1;i<=spliceCount;i++) {

           var html=`<div class="row">
                                  <div class="col-lg-8 col-lg-8 padding10">
                                      <label class="labelBlack control-label">Splice EL`+i+`</label>
                                      <div class="row">
                                          <div class="col-lg-2 col-md-2 p-r-5">
                                              <select class="form-control" id="splice`+i+`PosNeg">
                                                  <option value="" selected="select">+</option>
                                                  <option value="">-</option>
                                              </select>
                                          </div>
                                          <div class="col-lg-3 col-md-3 padding5">
                                              <input type="text" class="form-control per70 spliceft" onkeypress = "return AllowNumbersOnly(event)" id="splice`+i+`Ft" placeholder="0" onfocus="this.placeholder = ''" onblur="this.placeholder = '0'">
                                              <div class="txt-right">
                                                  ft
                                              </div>
                                          </div>
                                          <div class="col-lg-3 col-md-3 padding5">
                                              <select class="form-control per70 splicein" id="splice`+i+`In">
                                            
                                              </select>
                                              <div class="txt-right">
                                                  in
                                              </div>
                                          </div>
                                          <div class="col-lg-3 col-md-3 p-l-5">
                                              <select class="form-control per70 splicefr" id="splice`+i+`Fr">
                                                 
                                              </select>
                                              <div class="txt-right">
                                                  fr
                                              </div>
                                          </div>
                                      </div>
                              </div>
                              <div class="col-lg-3 col-md-3 padding10">
                                  <label class="labelBlack control-label">Profile</label>
                                  <select class="form-control spliceprofile" id="splice`+i+`Profile">
                      
                                   
                                  </select>
                              </div>
                          </div>`;
            $('#spliceRows').append(html);    
            $(".spliceprofile").select2({
                placeholder: "Select"
            });
      }
      
      // Add drop Down values 
      $.each(wsDropDown.Inch, function(index,data) {   
      
      $('<option>').val(data.Inch).text(data.Inch).appendTo('.splicein');        
      
       });

       
    
        $.each(wsDropDown.Fraction, function(index,data) {   
            $('<option>').val(data.fr).text(data.fr_fra).appendTo('.splicefr');
              });
      
            $.each(wsDropDown.ColumnProfile, function(index,data) {   
              
            $('<option>').val(data.Profile).text(data.Profile).appendTo('.spliceprofile');
            
              
              });
            var profilename=$("#columnprofile").find('option:selected').text();
              var profiles="<option>"+profilename+"</option>";
              $(profiles).appendTo('.spliceprofile').prop('selected', true); 
              
  });



  
  
  
  
  
  
  
 $("#bc1apply").change(function(event){
        event.preventDefault();
    });

     // For select 2
 $(".referenceSelect").select2({
     placeholder: "Select"
 });
     	
        $(".cmselect1").select2({
            placeholder: "Select"
        });
        $(".cmselect2").select2({
            placeholder: "Select"
        });
    $(function() {
       $('.chosen-select').chosen();
       $('.chosen-select-deselect').chosen({
           allow_single_deselect: true
       });
    });


    jQuery(document).ready(function() {
            $(".cmselect1").select2({
                placeholder: "Select"
            });
            $(".cmselect2").select2({
                placeholder: "Select"
            });
        });

	$('#chkcapplate').change(function() {
		if($(this).prop("checked") == true){
			$('#chkCap1, #chkCap2, #chkCap3, #chkCap4').attr('disabled', false);
		} 
		else {
			$('#chkCap1, #chkCap2, #chkCap3, #chkCap4').attr('disabled', true);
		}
	});

    $(document).ready(function() {
        var ckbox= $('#stiffnerplate1');
        if (ckbox.is(':checked')) {
            $('#plategirder1').attr("disabled", false);
            $('#platethickness1').attr("disabled", false);
            $('#columncount').attr("disabled", false);
            $('#columnspacing1').attr("disabled", false);
            $('#platelength_fra').attr("disabled", false);
            $('#platelength_in').attr("disabled", false);
            $('#platewidth_in').attr("disabled", false);
            $('#platewidth_fra').attr("disabled", false);
            $('#weldtype1').attr("disabled", false);
            $('#plateweldthickness_in').attr("disabled", false);
            $('#cplatewidth1').attr("disabled", false);
        }
        else{
            $('#plategirder1').attr("disabled", true);
            $('#platethickness1').attr("disabled", true);
            $('#columncount').attr("disabled", true);
            $('#columnspacing1').attr("disabled", true);
            $('#platelength_fra').attr("disabled", true);
            $('#platelength_in').attr("disabled", true);
            $('#platewidth_in').attr("disabled", true);
            $('#platewidth_fra').attr("disabled", true);
            $('#weldtype1').attr("disabled", true);
            $('#plateweldthickness_in').attr("disabled", true);
            $('#cplatewidth1').attr("disabled", true);
        }
    });
	// if($(#stiffnerplate1).prop("checked") == true){
   $('#stiffnerplate1').change(function() {
   		if($(this).prop("checked") == true){
	        $('#plategirder1, #platethickness1, #columncount, #columnspacing1, #platelength_fra, #platelength_in, #cplatewidth1, #platewidth_in, #platewidth_fra, #weldtype1, #plateweldthickness_in').attr('disabled', false);
	    } 
	    else {
	    	$('#plategirder1, #platethickness1, #columncount, #columnspacing1, #platelength_fra, #platelength_in, #cplatewidth1, #platewidth_in, #platewidth_fra, #weldtype1, #plateweldthickness_in').attr('disabled', true);
				$("#platethickness1").removeClass("importantRed");
				$("#weldtype1").removeClass("importantRed");
				$("#plateweldthickness_in").removeClass("importantRed");
				$("#columncount").removeClass("importantRed");
				$("#columnspacing1").removeClass("importantRed");
				$("#cplatewidth1").removeClass("importantRed");
	    }
    });
 
   $('#colBottomEleTxt').on('click', function() {
	   if( $('#colBottomEleTxt').val() == "0") {
	   $('#colBottomEleTxt').val("");
	   }
   });
   $('#colTopEleTxt').on('click', function() {
	   if( $('#colTopEleTxt').val() == "0") {
	   $('#colTopEleTxt').val("");
	   }
   });
   $('#columncount').on('click', function() {
	   if( $('#columncount').val() == "0") {
	   $('#columncount').val("");
	   }
   });
   $('#columnspacing1').on('click', function() {
	   if( $('#columnspacing1').val() == "0") {
	   $('#columnspacing1').val("");
	   }
   });
   $('#cplatewidth1').on('click', function() {
	   if( $('#cplatewidth1').val() == "0") {
	   $('#cplatewidth1').val("");
	   }
   });
   